---
title: URL shortener con Node.js, Express e MongoDB
description: Visto la grande quantità di link che vengono diffusi in rete si sente spesso l'esigenza di generare dei link molto più brevi ed è qui che entrano in gioco gli URL shortener.
img: /articles/images/node-custom-url-shortener.webp
tags: javascript, Node.js, Express, MongoDB
published: true
---

Il funzionamento dello shortner è abbastanza semplice:

- per ogni URL passato alle API verrà generato un ID univoco che verrà salvato insieme all'URL nel database e sarà fornito all'utente l'URL ridotto contente l'ID
- quando l'utente invierà una richiesta `GET` con l'URL ridotto si estrarrà l'ID da esso e si ricercherà all'interno del database il corrisponente URL esteso. L'utente verrà infine rediretto sull'URL originale

Tralasciando le varie inizializzazioni, il cuore dello shortner è composto dal modello dati di Mongo, che andrà a contenere i vari dati, e due rotte Express, uno per richiedere la creazione e uno per fare il redirect.

## Modello dati

Il modello dati sarà composto dal `originalUrl` che conterrà l'URL da "accorciare" e l'`urlId` che conterrà l'ID univoco relativo.

```javascript
const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
  origUrl: {
    type: String,
    required: true,
  },
  urlId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Url', URLSchema);
```

## Rotte

La rotta per la creazione dell'URL ridotto sarà composto da una rotta di tipo `POST` che riceverà l'URL originale, creerà un ID univoco, inserirà i dati nel database e restituirà l'URL accorciato.

```javascript
const express = require('express');
const validUrl = require('valid-url');
const { nanoid } = require('nanoid');

const router = express.Router();

const Url = require('../models/Url');

router.post('/shorten', async (req, res) => {
  const { origUrl } = req.body;
  const base = process.env.BASE;

  // check original url validity using the validUrl.isUri method
  if (validUrl.isUri(origUrl)) {
    try {
      // check if already exists
      let url = await Url.findOne({ origUrl });

      if (!url) {
        // create the url id
        const urlId = await nanoId();

        // saving to the DB
        url = new Url({ origUrl, urlId });
        await url.save();
      }

      const shortUrl = `${base}/${url.urlId}`;
      res.json(shortUrl);
    } catch (err) {
      console.log(err);
      res.status(500).json('Server Error');
    }
  } else {
    res.status(401).json('Invalid original Url');
  }
});

module.exports = router;
```

Per la validazione dell'url si può fare uso di una specifica libreria come la [valid-url](https://www.npmjs.com/package/valid-url) mentre per la generazione dell'ID di una libreria come [nanoid](https://github.com/ai/nanoid).

La rotta con il redirect sarà composto da una `GET` che riceverà l'URL ridotto e provvederà a fare il redirect all'URL originale.

```javascript
const express = require('express');

const router = express.Router();

const Url = require('../models/Url');

router.get('/:urlId', async (req, res) => {
  try {
    // find a document matching the urlId
    const url = await Url.findOne({ urlId: req.params.urlId });
    if (url) {
      // if valid we perform a redirect
      return res.redirect(url.origUrl);
    } else {
      // else return a not found 404 status
      return res.status(404).json('No URL Found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server Error');
  }
});

module.exports = router;
```
