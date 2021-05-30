---
date: 2021-01-05T09:00:00.000Z
title: JWT
description: Tips for a good git job
img: https://images.unsplash.com/photo-1508345228704-935cc84bf5e2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2VjdXJpdHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60
tags: jwt, security
published: false
source: https://dev.to/kmistele/demystifying-jwt-how-to-secure-your-next-web-app-9h0
---

JSON Web Token (or JWT for short) is a open standard to create and transfer data between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted.

### Token structure

A signed JSON Web Token has 3 main parts:

- an **header**, that contains the encryption algorithm used to generate the cryptographic signature and other information (such as token type, and x.509 certificate chain information if you’re using it)
- a **payload**, a JSON object which contains data, known as _the claims_, that can store information about the user's identity, expiration information, the issuer, and more
- a **signature**, which is calculated by encoding the header and payload with base64, concatenating them together with a `.`, and then encrypting this string using the server's private key.

Each part is base64 encoded and concatenated together with dots. To verify a token, the server calculate the signature from header and payload and then compare the result to the token's signature block. If the token has been tampered with, the two will not match.
