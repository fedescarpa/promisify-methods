Promisify Methods
=================
##### Promisify all methods of an object

```
npm install --save promisify-methods
```

## It's very simple to use

```js
var promisifyMethods = require(promisify-methods);

var into = {
  f1: function () {
    return 1;
  },
  f2: function () {
    throw new Error('');
  }
};

var output = {}

promisifyMethods(input, output);

output.f1()
  .then(function (value) {
    // value is 1...
  });

output.f2()
  .catch(function (err) {
    // err is new Error('')...
  });

```

if you don't pass second argument, the first argument become the output

```js
var promisifyMethods = require(promisify-methods);

var into = {
  f1: function () {
    return 1;
  },
  f2: function () {
    throw new Error('');
  }
};

promisifyMethods(input);

input.f1()
  .then(function (value) {
    // value is 1...
  });

input.f2()
  .catch(function (err) {
    // err is new Error('')...
  });

```


### License
Copyright (c) 2015, Federico Scarpa <fedescarpa@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
