# shorterurl Introduction

install package:

```
npm i --save shorterurl
```

this package is useful when you need to make your string safer and shorter.

- you can make your string shorter by method [`getShorter`](#get-short-stringurl-) and this method give you a short `token`.

- for transfer your token to original string you should use method [`getOriginal`](#get-original-stringurl-) and pass your token.

- for remove your un necessary data you can use method [`purge`](#purge-data-) and you should pass a timestamp and then purge method delete all data before that time.

`shorterurl` is a _`Promise`_ base, so you only need to use it as an _`await`_.

`shorterurl` store a result in a _SQLite Database_ at _`<your root project>/shorterurl-database/database.sqlite`_

## Example:

##### get Short string/url :

```javascript
const shorter = require("shorterurl");****
const LONG_URL = "https://www.npmjs.com/package/shorterurl"

// make string/url Shorter
(async () => {
  const short = await shorter.getShorter(LONG_URL);
  console.log("short url: ", short);
})();   // it's gave you a token like "1rfN5BOw3"
```

> if you want to validate [`getShorter`](#get-shorter) token, we have used [`shortId`](https://www.npmjs.com/package/shortid) in our package, so you can use _shortId_ for your token validation.

##### get Original string/url :

```javascript
const shorter = require("shorterurl");
const TOKEN = "1rfN5BOw3";
// pass shorter url and get the original url

(async () => {
  const original_url = await shorter.getOriginal(TOKEN);
  console.log("Original url: ", original_url);
})(); // it's gave you somting like https://www.npmjs.com/package/shorterurl
```

##### purge data :

```javascript
const shorter = require("shorterurl");

(async () => {
  await shorter.purge(Date.now());
  console.log("all data is deleted");
})();
```
