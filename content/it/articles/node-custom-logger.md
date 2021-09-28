---
title: Creare un logger con Node.js
description: Esistono varie libreria che forniscono servizi di logging per le nostre applicazioni ma può essere un buon esercizio creare la prioria libreria personale ed avere magari la possibilità di aggiungere features aggiuntive.
img: https://images.unsplash.com/photo-1608742213509-815b97c30b36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80
tags: javascript, Node.js
published: false
source: https://blog.logrocket.com/creating-a-logger-in-node-js/
---

Il logger avrà una semplice struttura del tipo

```javascript
const createLogger = (config) => {
  const log = (level) => {
    ...
  }

  return {
    log,
    error: log('error'),
    warning: log('warning'),
    info: log('info'),
    debug: log('debug'),
  };
};
```

è sarò poi istanziato nel seguente modo

```javascript
const { createLogger } = require('./logger');

const logger = createLogger({
  ...
})

logger.info('Hello world!');
```

Andiamo però ad analizzare più a fondo i vari componenti.

## Configurazione

L'oggetto `config` fornito al momento dell'inizializzazione del logger sarà composto da due attributi:

- `transports` - un array di oggetti che rappresentano i vari modi in cui vengono visualizzati i messaggi di log (es. su console, su file, etc)
- `level` - una stringa numerica rappresentante il livello di log; sotto tale valore il messaggio non verrà loggato

## Transport

```javascript
const defaultConfig = { level: 'info' };

class Transport {
  constructor(config) {
    this.config = { ...defaultConfig, ...config };
  }

  isAllowed(level) {
    return isAllowed(this.config.level, level);
  }

  log({ message, level }) {
    return message;
  }

  format(value) {
    return JSON.stringify(value);
  }

  getMessage(message) {
    return message;
  }
}
```

Ad esempio un transport per stampare su console potrà essere creato con

```javascript
const defaultConfig = { level: 'info' };

class ConsoleTransport extends Transport {
  constructor(unsafeConfig) {
    const config = { ...defaultConfig, ...unsafeConfig };
    super(config);
  }

  format(value) {
    if (_.isObject(value)) {
      return `\n${inspect(value, false, 2, true)}\n`;
    }

    return String(value);
  }

  getConsoleMethod(level) {
    const method = console[level];

    if (method) return method.bind(console);

    return console.log.bind(console);
  }

  log({ message, level }) {
    let msg = message;

    const logToConsole = this.getConsoleMethod(level);

    if (this.config.colorize) {
      msg = colors[level](message);
    }

    logToConsole(`${msg}\n`);

    return msg;
  }
}
```

mentre un transport per stampare su file potrà essere creato con

```javascript
const defaultConfig = { level: 'info' };

class FileTransport extends Transport {
  public constructor(unsafeConfig) {
    const config = { ...defaultConfig, ...unsafeConfig };
    super(config);

    this.fileStream = fs.createWriteStream(config.path);
  }

  format(value) {
    if (_.isObject(value)) return `\n${inspect(value, false, null, false)}\n`;

    return String(value);
  }

  log({ message, level }) {
    this.fileStream.write(`${message}\n`);

    return message;
  }
}
```

Il risultato finale sarà il seguente:

```javascript
const defaultConfig = {
  transports: [new transports.console({ level: 'info' })],
  level: 'info',
};

const createLogger = (unsafeConfig) => {
  const config = { ...defaultConfig, ...unsafeConfig };

  const log = (level) => {
    if (!isAllowed(config.level, level)) {
      return (strings, ...expressions): void => {};
    }

    return (strings, ...expressions): void => {
      return config.transports.forEach((transport) => {
        if (!transport.isAllowed(level)) return null;

        const content = strings.reduce((prev, curr, index) => {
          const formatted = transport.format(expressions[index] || '');

          return `${prev}${curr}${formatted}`;
        }, '');

        const message = transport.getMessage({
          level,
          message: content,
          date: new Date(),
          location: getLocation(4),
        });

        return transport.log({ level, message });
      });
    };
  };

  return {
    log,
    error: log('error'),
    warning: log('warning'),
    info: log('info'),
    debug: log('debug'),
  };
};
```
