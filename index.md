# protractor-helper

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) 

This library contains helper functions that can be used together with Protractor for creating robust end-to-end tests.

Many of the helper functions on this library use `protractor.ExpectedConditions` to ensure that the elements we want to interact with are in the correct state before interacting with them or running expectations on them. This helps in avoiding trying to interact with elements when they are not ready for it, which helps in preventing test flakiness.

## Installation

Below is described the library's installation process.

Run `npm install protractor-helper --save-dev` to install the library as a dev dependency of your project.

## How to use and examples

After installing the library you will need to require it in your test file (see below).

```js
const protractorHelper = require("protractor-helper");
```

As soon as you have the library required in your test file you can start using its helper functions.

[Here you'll find examples of usage of each of the available helper functions.](https://www.npmjs.com/package/protractor-helper#available-helpers)
## Credits

The **protractor-helper** library was created by [Walmyr Filho](https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a) and is kept together with [Paulo Gonçalves](https://www.linkedin.com/in/paulo-goncalves/).

---

[MIT License](/LICENSE)
