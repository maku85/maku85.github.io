---
title: Design Pattern Comportamentali - Command
description: Design pattern comportamentale che permette di trasformare una richiesta sottoforma di oggetto contenente tutte le informazioni necessarie ad eseguire la richiesta in futuro.
img: /articles/images/design-pattern-command.webp
tags: javascript, design-pattern, structural-patterns
published: true
---

L'implementazione di questo pattern solitamente ruota attorno a 4 componenti principali:

- _command_, oggetto che incapsula le informazioni
- _client_, crea il _command_ e lo passa all'_invoker_
- _invoker_, riceve il _command_ e lo invoca sul _target_
- _target_ (o _receiver_), riceve il _command_ e cerca il metodo da richiamare in base alle informazioni contenute nel _command_ stesso

Ad esempio poniamo il caso in cui sia necessario creare un'applicazione che interagisca con un modulo OS per eseguire alcune funzioni sui file, come rinominare, copiare e unire 2 file. L'opzione più semplice potrebbe essere quella di scrivere il codice e richiamare direttamente i vari metodi, ma se in futuro il modulo OS che utilizziamo dovesse cambiare impatterebbe sulla nostra logica. Una alternativa potrebbe essere quella di implementare le logiche separatemente ma con un'interfaccia comune:

```javascript
class CopyFiles {
  execute() {
    const files = ['file1.txt', 'file2.txt'];
    const destination = '/my/files';
    files.forEach((fname) => OS.copyFile(fname, destination));
  }
}

class RenameFiles {
  execute() {
    const source_files = ['file1.txt', 'file2.txt'];
    const new_files = ['file_1.txt', 'file_2.txt'];
    source_files.forEach((fname, idx) => OS.renameFile(fname, new_files[idx]));
  }
}

class JoinFiles {
  execute() {
    OS.joinFiles('file_1.txt', 'file_2.txt', '/my/joined/files');
  }
}
```

e poi utilizzare una funzione che esegue le varie funzionalità

```javascript
function executor(cmd) {
  cmd.execute();
}

executor(new RenameFiles());
executor(new JoinFiles());
executor(new CopyFiles());
```
