# Protractor helper's library

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://semaphoreci.com/api/v1/wlsf82/protractor-helper/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/protractor-helper)

This library contains a file (`index.js`) with different helper methods that can be used together with Protractor for creating robust end-to-end tests.

Many of the helper methods on this library uses `protractor.ExpectedConditions` to ensure that the elements we want to interact with are in the correct state before interacting with them or running expectations on them. This helps on avoiding trying to interact with elements when they are still not ready for it, which helps avoiding test flakiness.

## Summary

- [Basic example](#basic-example)
  - [Example without using the protractor-helper module](#example-without-using-the-protractor-helper-module)
  - [Example using the protractor-helper module](#example-using-the-protractor-helper-module)
- [Installation](#installation)
- [How to use and examples](#how-to-use-and-examples)
- [Available helpers](#available-helpers)

  <details><p><summary>Open to see all available helpers</summary>

  - [`setTimeout`](#settimeout)
  - [`getBodyElementFromCurrentBrowserOrBrowserInstance`](#getbodyelementfromcurrentbrowserorbrowserinstance)
  - [`openNewBrowserInTheSamePage`](#opennewbrowserinthesamepage)
  - [`isCurrentUrlDifferentFromBaseUrl`](#iscurrenturldifferentfrombaseurl)
  - [`waitForElementPresence`](#waitforelementpresence)
  - [`waitForElementNotToBePresent`](#waitforelementnottobepresent)
  - [`waitForElementVisibility`](#waitforelementvisibility)
  - [`waitForElementNotToBeVisible`](#waitforelementnottobevisible)
  - [`clickWhenClickable`](#clickwhenclickable)
  - [`fillFieldWithTextWhenVisible`](#fillfieldwithtextwhenvisible)
  - [`fillInputFieldWithFileWhenPresent`](#fillinputfieldwithfilewhenpresent)
  - [`clearFieldWhenVisible`](#clearfieldwhenvisible)
  - [`clearFieldWhenVisibleAndFillItWithText`](#clearfieldwhenvisibleandfillitwithtext)
  - [`tapWhenTappable`](#tapwhentappable)
  - [`waitForTextToBePresentInElement`](#waitfortexttobepresentinelement)
  - [`waitForTextNotToBePresentInElement`](#waitfortextnottobepresentinelement)
  - [`waitForUrlToBeEqualToExpectedUrl`](#waitforurltobeequaltoexpectedurl)
  - [`waitForUrlNotToBeEqualToExpectedUrl`](#waitforurlnottobeequaltoexpectedurl)
  - [`waitForUrlToContainString`](#waitforurltocontainstring)
  - [`waitForUrlNotToContainString`](#waitforurlnottocontainstring)
  - [`fillFieldWithTextWhenVisibleAndPressEnter`](#fillfieldwithtextwhenvisibleandpressenter)
  - [`scrollToElementWhenVisible`](#scrolltoelementwhenvisible)

</p> </details>

- [Using methods that start with 'wait' as test expectations (or test assertions)](#using-methods-that-start-with-wait-as-test-expectations-or-test-assertions)

  - [Example of a test failure when using such methods as expectations](#example-of-a-test-failure-when-using-such-methods-as-expectations)

- [Contributing](#contributing)
- [Credits](#credits)
- [License](/LICENSE)

## Basic example

Let's say you want to create a test for the sign up happy path of an example application.

### Example without using the protractor-helper module

Without this library the test could be written as something like this:

```js
const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

describe("Sign up page", () => {
  it("successful sign up", () => {
    browser.get("https://example.com/sign-up");

    const emailField = element(by.id("email"));
    const passwordField = element(by.id("password"));
    const signupButton = element(by.id("signup"));

    browser.wait(EC.visibilityOf(emailField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.visibilityOf(passwordField), DEFAULT_TIMEOUT_IN_MS);
    browser.wait(EC.elementToBeClickable(signupButton), DEFAULT_TIMEOUT_IN_MS);
    emailField.sendKeys("valid@email.com");
    passwordField.sendKeys("validpassword");
    signupButton.click();

    const avatar = element(by.id("avatar"));

    browser.wait(EC.visibilityOf(avatar), DEFAULT_TIMEOUT_IN_MS);

    expect(avatar.isDisplayed()).toBe(true);
  });
});
```

### Example using the protractor-helper module

The same test could be written as below, using the protractor-helper library.

```js
const protractorHelper = require("protractor-helper");

describe("Sign up page", () => {
  it("successful sign up", () => {
    browser.get("https://example.com/sign-up");

    const emailField = element(by.id("email"));
    const passwordField = element(by.id("password"));
    const signupButton = element(by.id("signup"));

    protractorHelper.fillFieldWithTextWhenVisible(
      emailField,
      "valid@email.com"
    );
    protractorHelper.fillFieldWithTextWhenVisible(
      passwordField,
      "validpassword"
    );
    protractorHelper.clickWhenClickable(signupButton);

    const avatar = element(by.id("avatar"));

    protractorHelper.waitForElementVisibility(avatar);
  });
});
```

As you can see, by using the protractor-helper library the code is easier to read. Also, there is no need of unnecessary complexity.

## Installation

Below it is described the process of Installation of such module.

Run `npm install protractor-helper --save-dev` to install the library as a dev dependency of your project.

## How to use and examples

After installing the library you will need to require it in your test file (see below).

```js
// foobar.spec.js

const protractorHelper = require("protractor-helper");
```

As soon as you have the library required in your test file you can start using its helper methods.

[Here you'll find examples of usage of each of the available helper methods.](docs/EXAMPLES.md#examples)
(Important: read the notes on the top)

## Available helpers

Below is the list of all available helpers in this library with your respective example:

### `setTimeout`

This method allows to change the timeout duration of all `protractor-helper` methods called below `setTimeout`.

The `timeoutInMilliseconds` default is 5000 milliseconds

If called without passing an argument the timeout will be set to the default one.

> An example of using this method is the need to ensure the screen loads within up to XX seconds, due to the request of the product management. This commonly occurs in ecommerce systems on special dates, such as Black Friday.

[Example](docs/EXAMPLES.md#settimeout)

### `getBodyElementFromCurrentBrowserOrBrowserInstance`

This method returns the body element of the current browser if nothing is passed as argument or the body element of a specific browser instance in case the browser instance is passed as an argument. This second option is useful when working with two browsers interacting with each other, for example.
[Example](docs/EXAMPLES.md#getbodyelementfromcurrentbrowserorbrowserinstance)

### `openNewBrowserInTheSamePage`

This method opens a new browser instance in the same page of the main browser.

> Note: Only works with Protractor version 5.0.0, not higher.

[Example](docs/EXAMPLES.md#opennewbrowserinthesamepage)

### `isCurrentUrlDifferentFromBaseUrl`

This method returns a boolean depending if the current url is different from the base url. No argument needed.
[Example](docs/EXAMPLES.md#iscurrenturldifferentfrombaseurl)

### `waitForElementPresence`

This method waits for an element to be present in the DOM.

> Note: An element may be present but not displayed. If you want to wait for the element to be displayed use the method `waitForElementVisibility`.

[Example](docs/EXAMPLES.md#waitforelementpresence)

### `waitForElementNotToBePresent`

This method is the opposite of the previous one, so, it waits for an element not to be present in the DOM.
[Example](docs/EXAMPLES.md#waitforelementnottobepresent)

### `waitForElementVisibility`

This method waits for an element to be visible in the page. Being displayed means not only that the element is present in the DOM, but also that is has a height and width that is greater than 0.
[Example](docs/EXAMPLES.md#waitforelementvisibility)

### `waitForElementNotToBeVisible`

This method is the opposite of the previous one, so, it waits for an element not to be visible in the page. By saying not being displayed means that the element may be in the DOM, but not visible.
[Example](docs/EXAMPLES.md#waitforelementnottobevisible)

### `clickWhenClickable`

This method is used to click in an element only as soon as it is in a clickable state. This means that the element is visible and enabled for clicking.
[Example](docs/EXAMPLES.md#clickwhenclickable)

### `fillFieldWithTextWhenVisible`

This method fills an input field with a text as soon as such field is visible.
[Example](docs/EXAMPLES.md#fillfieldwithtextwhenvisible)

### `fillInputFieldWithFileWhenPresent`

This method fills a file input field with a specified file as soon as the file input field is present in the DOM.
[Example](docs/EXAMPLES.md#fillinputfieldwithfilewhenpresent)

### `clearFieldWhenVisible`

This method clears a text input field as soon as such field is visible.
[Example](docs/EXAMPLES.md#clearFieldWhenVisible)

### `clearFieldWhenVisibleAndFillItWithText`

This method clears a text input field as soon as such field is visible, and then it fills it with a text.
[Example](docs/EXAMPLES.md#clearfieldwhenvisibleandfillitwithtext)

### `tapWhenTappable`

This method performs a tap action on a clickable/tappable HTML element as soon is it is clickable/tappable. This method is used when performing web mobile testing in mobile emulators, for example.
[Example](docs/EXAMPLES.md#tapwhentappable)

### `waitForTextToBePresentInElement`

This method waits for a specific text to be present in a specific HTML element.
[Example](docs/EXAMPLES.md#waitfortexttobepresentinelement)

### `waitForTextNotToBePresentInElement`

This method is the opposite of the previous one, so, it waits for a specific text not to be present in a specific HTML element.
[Example](docs/EXAMPLES.md#waitfortextnottobepresentinelement)

### `waitForUrlToBeEqualToExpectedUrl`

This method waits for the URL to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when in the correct URL.
[Example](docs/EXAMPLES.md#waitforurltobeequaltoexpectedurl)

### `waitForUrlNotToBeEqualToExpectedUrl`

This method waits for the URL not to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when not in a specific URL.
[Example](docs/EXAMPLES.md#waitforurlnottobeequaltoexpectedurl)

### `waitForUrlToContainString`

This method waits for the URL to contain an expected string. Such method is useful when you want to perform verifications based on the current URL.
[Example](docs/EXAMPLES.md#waitforurltocontainstring)

### `waitForUrlNotToContainString`

This method waits for the URL not to contain an expected string. Such method is useful when you want to perform verifications based on the current URL.
[Example](docs/EXAMPLES.md#waitforurlnottocontainstring)

### `fillFieldWithTextWhenVisibleAndPressEnter`

This method fills an input field with a text as soon as such field is visible and then it simulates pressing the ENTER key from the keyboard. This method is useful in cases such as when doing a search and pressing the ENTER key, instead of having to fill the input field and clicking the search button, for example.
[Example](docs/EXAMPLES.md#fillfieldwithtextwhenvisibleandpressenter)

### `scrollToElementWhenVisible`

That method is used to scroll up to an element on the page as soon as the element is visible in the DOM.
[Example](docs/EXAMPLES.md#scrolltoelementwhenvisible)

## Using methods that start with 'wait' as test expectations (or test assertions)

Some of the available methods in this library can be used as test expectations, meaning that when using them you don't necessarily need to add an explicit expectation, such as something like this: `expect(avatar.isDisplayed()).toBe(true);`.

By using the `protractor-helper` library this could be implicit, like this: `protractorHelper.waitForElementVisibility(avatar);`. Here, implicit means that if the function `waitForElementVisibility(avatar)` has passed, it means that the element is visible, in other words, the element is displayed.

Below you can find the list of methods that can be used as expectations:

- `waitForElementPresence(element)`
- `waitForElementNotToBePresent(element)`
- `waitForElementVisibility(element)`
- `waitForElementNotToBeVisible(element)`
- `waitForTextToBePresentInElement(element, text)`
- `waitForTextNotToBePresentInElement(element, text)`
- `waitForUrlToBeEqualToExpectedUrl(expectedUrl)`
- `waitForUrlNotToBeEqualToExpectedUrl(expectedUrl)`
- `waitForUrlToContainString(string)`
- `waitForUrlNotToContainString(string)`

> Note: if you use such methods as expectations they will not count as expectations, in a test report, for example, but if they fail a clear message will be shown to ease understanding why the test has failed. In the end, test reports are usually useful in cases where tests have failed and we need to understand why. If all tests are green there is nothing to worry about, at least not if they were well implemented.

### Example of a test failure when using such methods as expectations

Let's look how a failure would looks like when using some of this methods as expectations.

- Failure when using `waitForElementPresence` as expectation:

```sh
Failed: element with locator '*[id="foo"]' is not present
```

- Failure when using `waitForElementVisibility` as expectation:

```sh
Failed: element with locator '*[id="foo"]' is not visible
```

- Failure when using `waitForTextToBePresentInElement` as expectation:

```sh
Failed: text 'foo' not present on element with locator 'h1'
```

> As you can see, the messages are clear and tell you exactly why the test has failed, such as in the previous example, where a specific text ('foo') is not present in a heading element (an element with css selector 'h1').

## Contributing

See [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

The **protractor-helper** library was created and is maintained by [Walmyr Filho](https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a).

Follow Walmyr on Twitter ([@wlsf82](https://twitter.com/walmyrlimaesilv)).

Thanks to [Paulo Gonçalves](https://www.linkedin.com/in/paulo-goncalves/) for contributing to the project.

---

[MIT License](/LICENSE)
