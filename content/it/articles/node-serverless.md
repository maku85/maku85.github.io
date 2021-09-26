---
date: 2021-02-08T09:00:00.000Z
title: Node.js serverless
description: Il serverless computing è un modello di sviluppo molto apprezzato soprattutto perchè consente di creare applicazioni più velocemente eliminando la necessità di gestire l'infrastruttura, è infatti il provider di servizi cloud che fornisce, ridimensiona e gestisce automaticamente l'infrastruttura necessaria per eseguire il codice.
img: /articles/images/node-serverless.jpeg
tags: javascript, Node.js, serverless
published: true
---

In questo esempio verrà utilizzato il framework [Serverless](https://www.serverless.com), un framework multiprovider che semplifica il processo di costruzione e deploy, e in particolare utilizzeremo il servizio [Lambda](https://aws.amazon.com/lambda) di AWS.

Partiamo ovviamente installando la CLI

```bash
npm install serverless -g
```

e successivamente in una cartella di nostro gradimento avviamo il boilerplate dell'applicazione usando il comando

```bash
serverless create -t aws-nodejs
```

che inizializzerà la cartella con:

- `.npmignore`
- `serverless.yml` contenente la configurazione che il framework usa per creare il servizio. Il file ha tre sezioni:
  - `provider`: dichiara configurazioni specifiche del provider
  - `functions`: in cui si specificano tutte le funzioni di cui è composto il servizio
  - `resources`: dove vengono elencate tutte le risorse utilizzate dalle funzioni
- `handler.js` contente la funzione che verrà deployata

In generale l'handler è composto da una funzione stateless del tipo

```javascript
const handlerFunction = (event, context, callback) => {
  ...
  callback(error, result);
};
module.exports = handlerFunction;
```

dove

- `event` rappresenta il tipo di evento che ha scatenato la funzione
- `context` contiente informazioni sull'ambiente su cui verrà eseguita la funzione
- `callback` è la funzione che si occupa di restituire una risposta o un errore in base alla richiesta ricevuta

Dopo aver implementato tutta la logica della nostra applicazione servirà registrare tutto all'interno del file `serverless.yml`

```yaml
service: my-application

provider:
  name: aws
  runtime: nodejs14.17.4
  stage: dev
  region: us-east-1

functions:
  app:
    handler: index.handler
    events:
      - http: ...
```

A questo punto è possibile rilasciare il tutto usando il comando

```bash
sls deploy -v
```

o implementando un comando npm

```json
  ...
 "scripts": {
    "deploy": "sls deploy -v"
  },
  ...
```

## Suggerimenti

1. Pr velocizzare il rilascio nel caso venga modificata solo una funzione è possibile utilizzare il comando

```bash
sls deploy function -f myFuncName
```

che è molto più veloce rispetto al semplice comando `deploy`.

2. Per debuggare da remoto il codice è possibile attingere ai log dell'applicazione usando il comando

```bash
serverless logs -f myFuncName -t
```

3. Per testare il codice in locale è possibile utilizzare un plugin ([serverless-offline](https://github.com/dherault/serverless-offline)) che permette di emulare i servizi Lambda e API Gateway offline. Sarà sufficiente aggiungere la dipendenza al progetto (tra le dipendenze di sviluppo) e aggiungerlo alla sezione `plugins` all'interno del file `serverless.yml`.

Per avviare il tutto sarà sufficiente il comando

```bash
sls offline
```
