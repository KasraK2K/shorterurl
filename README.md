# shorterurl Introduction

Frist you need to run `npm i shorterurl` to install shorterurl package in your project.

you can short an URL by [`getShortUrl`](#get-short-url-) and also you can pass your short URL and get an Original one by [`getOriginalUrl`](#get-original-url-).

`shorterurl` is a *`Promise`* base, so you only need to use it as an *`await`*.

`shorterurl` store a result in a *database* at *`./shorterurl-database/database.sqlite`*

##### if you want to validate [`getShortUrl`](#get-short-url-) token, we have used [`shortId`](https://www.npmjs.com/package/shortid) in our package, so you can use *shortId* for your token validation.

## Example:

##### get Short URL :

```javascript
const shorter = require("shorterurl");

const LONG_URL = "https://www.npmjs.com/package/shorterurl"

// make url Shorter
(async () => {
  const short = await shorter.getShortUrl(LONG_URL);
  console.log("short url: ", short);
})();   // it's gave you a token like "1rfN5BOw3"
```



##### get Original URL :
``` javascript
const shorter = require("shorterurl");

const LONG_URL = "https://www.npmjs.com/package/shorterurl"

// pass shorter url and get the original url

(async () => {
  const original_url = await shorter.getOriginalUrl("1rfN5BOw3");
  console.log("Original url: ", original_url);
})();  // it's gave you somting like https://www.npmjs.com/package/shorterurl
```