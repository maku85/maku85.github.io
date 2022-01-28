---
title: Node.js Stream
description: Gli stream sono flussi di dati raccolti da una fonte e rese disponibili in un'altra posizione in sequenza.
img: /articles/images/node-stream.webp
tags: nodejs
published: true
---

Uno dei motivi per cui sono una delle funzionalità più apprezzate di Node è la possibiltà che danno di lavorare con grosse mole di dati in ambienti con risorse limitate.

Gli Stream sono contenuti nel modulo [stream](https://nodejs.org/api/stream.html) che fa parte del core del framework e si dividono in quattro categorie:

- _readable_, per leggere dati
- _writable_, per scrivere dati
- _duplex_, per leggere e scrivere dati
- _transform_, per leggere dati, trasformarli e poi scriverli

## Gli eventi degli stream

Tutti gli stream ereditano da _EventEmitter_ ed emettono diversi tipi di eventi. Tra questi ci sono:

- `data` - emesso quando vengono "letti" nuovi dati dallo stream.
- `end` - emesso quando non ci sono più dati disponibili nello stream e tutti quelli disponibili sono già stati "letti"
- `finish` - emesso quando uno stream di scrittura è finito e tutte le scritture sono state completate.
- `close` - emesso quando uno stream è completamente chiuso. A differenza di `end` e `finish` non è garantito che questo evento venga emesso.
- `error` - emesso quando uno stream riscontra qualche errore. Solitamente (ma non sempre) è seguito dall'evento `close` .
- `pause` - emesso quando uno stream di lettura viene messo in pausa.
- `resume` - emesso quando uno stream di lettura viene tolto dalla pausa.

## Collegare gli stream

Per collegare vari stream tra di loro, e avere quindi una gestione più complessa del flusso di dati, possiamo utilizzare il metodo `pipe()`. Il metodo non farà altro che mettersi in ascolto dell'evento `data` dello stream di partenza (lo stream su cui il metodo viene richiamato) che scriverà i dati nello stream di destinazione (quello passato come parametro al metodo).

```javascript
source.pipe(destination);
```

Ovviamente un'operazione del genere potrebbe essere fatta tranquillamente manualmente senza l'utilizzo del metodo ma usare pipe è molto più sicuro perchè viene gestito in modo automatico la cosiddetta `backpressure`, tecnica utilizzata nei casi in cui il processo di lettura dei dati è molto più veloce rispetto a quello di scrittura.

Normalmente lo stream di scrittura viene automaticamente chiuso quando non ci sono più dati da "leggere", nel caso invece abbiamo bisogno di mantenerlo ancora aperto basterà aggiungere un parametro

```javascript
source.pipe(destination, { end: false });
```

Uno dei punti deboli del metodo è l'assenza di gestione degeli errori. Infatti nel caso uno degli stream conivolto fallisca la "pipeline" verrebbe interrotta e toccherà a noi cercare di capire dov'è il problema e distruggere i restanti stream per evitare una perdita di memoria.

Una soluzione alternativa è data dal modulo esterno (pump)[https://www.npmjs.com/package/pump]. Il metodo fornito dal modulo internamente gestirà gli errori degli stream, mettendosi in ascolto degli eventi `close` e `error`, e si occuperà di distruggere i rimananenti stream.

```javascript
const pump = require('pump');

pump(stream1, stream2, stream3, ...);
```

## Readable stream

Questa tipologia di stream ci viene in aiuto quando vogliamo creare uno stream di dati che altri utenti possono "leggere" (ad esempio uno stream che legge i dati da un file salvato su disco).

### Flow vs pull

Esistono due modalità per estrarre dati dallo stream: "pulling mode" e "pushing mode".

Nella modalità "pull" è sufficiente mettersi in ascolto dell'evento `data` che verrà richiamato ogni volta che viene letta una nuova porzione di dati.

```javascript
myStream.on('data', handlerFunction);
```

Per interrompere il flusso di dati in arrivo è possibile metterlo in pausa, utilizzando il metodo `pause()`, e poi riprenderlo richiamando il metodo `resume()`.

```javascript
myStream.pause();
myStream.resume();
```

Questa modalità comporta delle problematiche in quanto se lo stream è eccessivamente "carico" di dati in arrivo rischia di non rispettare lo stato di pausa.

Nella modalità "push" per estrarre i dati basterà attendere che lo stream sia in uno stato `readable` e poi chiamare continuamente il metodo `read` finchè si riceve `null` (che rappresenta la fine dello stream). In questa modalità per interrompere il flusso di dati sarà sufficiente smettere di richiedere dati allo stream.

```javascript
const fs = require('fs);
const rs = fs.creareReadStream(__filename);

rs.on('readable', () => {
  const data = rs.read();
  while(data !== null) {
    console.log('Read chunk:', data);
    data = rs.read();
  }
});

rs.on('end', () => {
  console.log('No more data');
});
```

## Writable stream

Questa tipologia di stream ci viene in aiuto quando vogliamo creare uno stream che possa permettere ad altri utenti di "scrivere" dei dati (ad esempio uno stream per scrivere dati su un file salvato su disco).

## Duplex stream

Questa terza tipologia di stream è una versione mista che raccoglie le due funzionalità dei due stream precedenti, leggere e scrivere (ad esempio uno stream gzip che comprime i dati che gli vengono passati in input).

_PassThrough_ è un tipo di stream Duplex che funge da tunnel per convogliare lo stream letto ad uno stream scrivibile. Attraverso il tunnel è possibile controllare i dati processati.

```javascript
const { PassThrough } = require('stream');
const { createReadStream, createWriteStream } = require('fs');

const tunnel = new PassThrough();
const readStream = createReadStream('./source.txt');
const writeStream = createWriteStream('./copy.txt');

tunnel.on('data', (chunk) => {
  console.log('bytes:', chunk);
});

readStream.pipe(tunnel).pipe(writeStream);
```

## Transform stream

Quest'ultima tipologia di stream permette di "trasformare" i dati "scritti" sullo stream e renderli disponibili alla "lettura" in uscita allo stream.

Ad esempio creiamo uno stream che legge il testo inserito, lo rende maiuscolo e lo ristampa a schermo

```javascript
const { Transform } = require('readable-stream');

class MyTransform extends Transform {
  _transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
}

const upper = new MyTransform();
process.stdin.pipe(upper).pipe(process.stdout);
```

Se il nostro stream non restituisce dati serializzabili (un Buffer o una stringa) occorre usare la _object mode_. In questà modalità semplicemente i valori restituiti sono degli oggetti generici e l'unica differenza è la quantita di dati bufferizzata. Quando non si usa tale modalità di default lo stream userà un buffer di 16kb di dati prima di mettersi in pausa, con la modalità attiva invece lo stream si interromperà quando avrà bufferizzato 16 oggetti.
