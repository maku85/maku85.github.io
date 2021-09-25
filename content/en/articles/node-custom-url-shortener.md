---
date: 2021-02-01T09:00:00.000Z
title: URL shotener with Node.js, Express and MongoDB
description: Given the large amount of links that are disseminated on the net, there is often the need to generate much shorter links and this is where URL shorteners come into play.
img: /articles/images/node-custom-url-shortener.jpeg
tags: javascript, Node.js, Express, MongoDB
published: true
---

The operation of the shortner is quite simple:

- for each URL passed to the API a unique ID will be generated which will be saved together with the URL in the database and the reduced URL containing the ID will be provided to the user
- when the user sends a `GET` request with the reduced URL, the ID will be extracted from it and the corresponding extended URL will be searched in the database. The user will eventually be redirected to the original URL

Leaving aside the various initializations, the heart of the shortner is composed of the Mongo data model, which will contain the various data, and two Express routes, one to request the creation and one to do the redirect.

## Data model

The data model will consist of the `originalUrl` which will contain the URL to" shorten "and the` urlId` which will contain the relative unique ID.

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

## Routes

The route for creating the shortened URL will consist of a `POST` type route which will receive the original URL, create a unique ID, insert the data into the database and return the shortened URL.

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

For the validation of the url you can use a specific library such as [valid-url](https://www.npmjs.com/package/valid-url) while for the generation of the ID of a library such as [nanoid](https://github.com/ai/nanoid).

The route with the redirect will consist of a `GET` which will receive the reduced URL and will redirect to the original URL.

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
