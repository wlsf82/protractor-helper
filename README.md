# Protractor helper's library

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://semaphoreci.com/api/v1/wlsf82/protractor-helper/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/protractor-helper) [![BCH compliance](https://bettercodehub.com/edge/badge/wlsf82/protractor-helper?branch=master)](https://bettercodehub.com/)

This library contains helper functions that can be used together with Protractor for creating robust end-to-end tests.

Many of the helper functions on this library uses `protractor.ExpectedConditions` to ensure that the elements we want to interact with are in the correct state before interacting with them or running expectations on them. This helps on avoiding trying to interact with elements when they are still not ready for it, which helps on avoiding test flakiness.

## Summary

- [Basic example](#basic-example)
  - [Example without using the protractor-helper module](#example-without-using-the-protractor-helper-module)
  - [Example using the protractor-helper module](#example-using-the-protractor-helper-module)
- [Installation](#installation)
- [How to use and examples](#how-to-use-and-examples)
- [Available helpers](#available-helpers)

  <details><p><summary>Open to see all available helpers</summary>

  - [`setTimeout`](#settimeout)
  - [`getBodyElementFromCurrentBrowserOrBrowserInstance`](#getbodyelementfromcurrentbrowserorbrowserinstance) **- Will be deprecated in version 4.0.0**
  - [`openNewBrowserInTheSamePage`](#opennewbrowserinthesamepage) **- Will be deprecated in version 4.0.0**
  - [`isCurrentUrlDifferentFromBaseUrl`](#iscurrenturldifferentfrombaseurl)
  - [`waitForElementPresence`](#waitforelementpresence)
  - [`waitForElementNotToBePresent`](#waitforelementnottobepresent)
  - [`waitForElementVisibility`](#waitforelementvisibility)
  - [`waitForElementNotToBeVisible`](#waitforelementnottobevisible)
  - [`clickWhenClickable`](#clickwhenclickable) **- Will be deprecated in version 4.0.0**
  - [`click`](#click)
  - [`fillFieldWithTextWhenVisible`](#fillfieldwithtextwhenvisible) **- Will be deprecated in version 4.0.0**
  - [`fillFieldWithText`](#fillfieldwithtext)
  - [`fillInputFieldWithFileWhenPresent`](#fillinputfieldwithfilewhenpresent) **- Will be deprecated in version 4.0.0**
  - [`uploadFileIntoInputField`](#uploadfileintoinputfield)
  - [`clearFieldWhenVisible`](#clearfieldwhenvisible) **- Will be deprecated in version 4.0.0**
  - [`clear`](#clear)
  - [`clearFieldWhenVisibleAndFillItWithText`](#clearfieldwhenvisibleandfillitwithtext) **- Will be deprecated in version 4.0.0**
  - [`clearFieldAndFillItWithText`](#clearfieldandfillitwithtext)
  - [`tapWhenTappable`](#tapwhentappable) **- Will be deprecated in version 4.0.0**
  - [`tap`](#tap)
  - [`waitForTextToBePresentInElement`](#waitfortexttobepresentinelement)
  - [`waitForTextNotToBePresentInElement`](#waitfortextnottobepresentinelement)
  - [`waitForUrlToBeEqualToExpectedUrl`](#waitforurltobeequaltoexpectedurl)
  - [`waitForUrlNotToBeEqualToExpectedUrl`](#waitforurlnottobeequaltoexpectedurl)
  - [`waitForUrlToContainString`](#waitforurltocontainstring)
  - [`waitForUrlNotToContainString`](#waitforurlnottocontainstring)
  - [`fillFieldWithTextWhenVisibleAndPressEnter`](#fillfieldwithtextwhenvisibleandpressenter) **- Will be deprecated in version 4.0.0**
  - [`fillFieldWithTextAndPressEnter`](#fillfieldwithtextandpressenter)
  - [`scrollToElementWhenVisible`](#scrolltoelementwhenvisible) **- Will be deprecated in version 4.0.0**
  - [`scrollToElement`](#scrolltoelement)

</p> </details>

- [Using methods that start with 'wait' as test expectations (or test assertions)](#using-methods-that-start-with-wait-as-test-expectations-or-test-assertions)

  - [Example of a test failure when using such methods as expectations](#example-of-a-test-failure-when-using-such-methods-as-expectations)

- [Deprecations on version 4.0.0](#preparation-to-next-major-version)
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

    protractorHelper.fillFieldWithText(emailField, "valid@email.com");
    protractorHelper.fillFieldWithText(passwordField, "validpassword");
    protractorHelper.click(signupButton);

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

> **Will be removed in version 4.0.0, read more [here](#preparation-to-next-major-version).**

This method returns the body element of the current browser if nothing is passed as argument or the body element of a specific browser instance in case the browser instance is passed as an argument. This second option is useful when working with two browsers interacting with each other, for example.
[Example](docs/EXAMPLES.md#getbodyelementfromcurrentbrowserorbrowserinstance)

### `openNewBrowserInTheSamePage`

> **Will be removed in version 4.0.0, read more [here](#preparation-to-next-major-version).**

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

> **Will be deprecated in version 4.0.0, please use the new ['click'](#click) function instead! Read more [here](#preparation-to-next-major-version).**

This method is used to click in an element as soon as it is in a clickable state. This means that the element is visible and enabled for clicking.
[Example](docs/EXAMPLES.md#clickwhenclickable)

### `click`

This method is used to click in an element as soon as it is in a clickable state. This means that the element is visible and enabled for clicking.
[Example](docs/EXAMPLES.md#click)

### `fillFieldWithTextWhenVisible`

> **Will be deprecated in version 4.0.0, please use the new ['fillFieldWithText'](#fillFieldWithText) function instead! Read more [here](#preparation-to-next-major-version).**

This method fills an input field with a text as soon as such field is visible.
[Example](docs/EXAMPLES.md#fillfieldwithtextwhenvisible)

### `fillFieldWithText`

This method fills an input field with a text as soon as such field is visible.
[Example](docs/EXAMPLES.md#fillFieldWithText)

### `fillInputFieldWithFileWhenPresent`

> **Will be deprecated in version 4.0.0, please use the new ['uploadFileIntoInputField'](#uploadFileIntoInputField) function instead! Read more [here](#preparation-to-next-major-version).**

This method fills a file input field with a specified file as soon as the file input field is present in the DOM.
[Example](docs/EXAMPLES.md#fillinputfieldwithfilewhenpresent)

### `uploadFileIntoInputField`

This method uploads a file in a file input field as soon as the file input field is present in the DOM.
[Example](docs/EXAMPLES.md#uploadFileIntoInputField)

### `clearFieldWhenVisible`

> **Will be deprecated in version 4.0.0, please use the new ['clear'](#clear) function instead! Read more [here](#preparation-to-next-major-version).**

This method clears a text input field as soon as such field is visible.
[Example](docs/EXAMPLES.md#clearFieldWhenVisible)

### `clear`

This method clears a text input field as soon as such field is visible.
[Example](docs/EXAMPLES.md#clear)

### `clearFieldWhenVisibleAndFillItWithText`

> **Will be deprecated in version 4.0.0, please use the new ['clearFieldAndFillItWithText'](#clearFieldAndFillItWithText) function instead! Read more [here](#preparation-to-next-major-version).**

This method clears a text input field as soon as such field is visible, and then it fills it with a text.
[Example](docs/EXAMPLES.md#clearfieldwhenvisibleandfillitwithtext)

### `clearFieldAndFillItWithText`

This method clears a text input field as soon as such field is visible, and then it fills it with a text.
[Example](docs/EXAMPLES.md#clearFieldAndFillItWithText)

### `tapWhenTappable`

> **Will be deprecated in version 4.0.0, please use the new ['tap'](#tap) function instead! Read more [here](#preparation-to-next-major-version).**

This method performs a tap action on a clickable/tappable HTML element as soon as it is in a clickable/tappable state. This method is used when performing web mobile testing in mobile emulators, for example.
[Example](docs/EXAMPLES.md#tapwhentappable)

### `tap`

This method performs a tap action on a clickable/tappable HTML element as soon as it is in a clickable/tappable state. This method is used when performing web mobile testing in mobile emulators, for example.
[Example](docs/EXAMPLES.md#tap)

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

> **Will be deprecated in version 4.0.0, please use the new ['fillFieldWithTextAndPressEnter'](#fillFieldWithTextAndPressEnter) function instead! Read more [here](#preparation-to-next-major-version).**

This method fills an input field with a text as soon as such field is visible and then it simulates pressing the ENTER key from the keyboard. This method is useful in cases such as when doing a search and pressing the ENTER key, instead of having to fill the input field and clicking the search button, for example.
[Example](docs/EXAMPLES.md#fillfieldwithtextwhenvisibleandpressenter)

### `fillFieldWithTextAndPressEnter`

This method fills an input field with a text as soon as such field is visible and then it simulates pressing the ENTER key from the keyboard. This method is useful in cases such as when doing a search and pressing the ENTER key, instead of having to fill the input field and clicking the search button, for example.
[Example](docs/EXAMPLES.md#fillFieldWithTextAndPressEnter)

### `scrollToElementWhenVisible`

> **Will be deprecated in version 4.0.0, please use the new ['scrollToElement'](#scrollToElement) function instead! Read more [here](#preparation-to-next-major-version).**

This method is used to scroll up to an element on the page as soon as the element is visible in the DOM.
[Example](docs/EXAMPLES.md#scrolltoelementwhenvisible)

### `scrollToElement`

This method is used to scroll up to an element on the page as soon as the element is visible in the DOM.
[Example](docs/EXAMPLES.md#scrollToElement)

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
Failed: element with locator 'By(css selector, *[id="foo"])' is not present.
```

- Failure when using `waitForElementVisibility` as expectation:

```sh
Failed: element with locator 'By(css selector, *[id="foo"])' is not visible.
```

- Failure when using `waitForTextToBePresentInElement` as expectation:

```sh
Failed: text 'foo' not present on element with locator 'By(css selector, h1)'.
```

> As you can see, the messages are clear and tell you exactly why the test has failed, such as in the previous example, where a specific text ('foo') is not present in a heading element (an element with css selector 'h1').

## Preparation to next major version

We will alert users on the console about which changes need to be done.

The below changes intend to make it easier for software engineers to create robust end-to-end tests.

### Functions that will be removed

1. [getBodyElementFromCurrentBrowserOrBrowserInstance](#getBodyElementFromCurrentBrowserOrBrowserInstance)
2. [openNewBrowserInTheSamePage](#openNewBrowserInTheSamePage)

#### What to do?

- Remove the two functions above and use native Protractor code to not break your code.

#### How do I know that my code still works?

You will know that you have solved all issues when no warnings are shown in the console, like the one below:

```
Protractor-helper warning: Function 'getBodyElementFromCurrentBrowserOrBrowserInstance' will be deprecated in version 4.0.0! [Read more on www.npmjs.com/package/protractor-helper#preparation-to-next-major-version]
```

### Functions that will be replaced

The 8 below functions will be replaced to reduce complexity and code duplication. Also, they you have shorter names and less arguments.

| Old                                                                                     | New                                                               |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [clickWhenClickable](#clickWhenClickable)                                               | [click](#click)                                                   |
| [fillFieldWithTextWhenVisible](#fillFieldWithTextWhenVisible)                           | [fillFieldWithText](#fillFieldWithText)                           |
| [fillInputFieldWithFileWhenPresent](#fillInputFieldWithFileWhenPresent)                 | [uploadFileIntoInputField](#uploadFileIntoInputField)             |
| [clearFieldWhenVisible](#clearFieldWhenVisible)                                         | [clear](#clear)                                                   |
| [clearFieldWhenVisibleAndFillItWithText](#clearFieldWhenVisibleAndFillItWithText)       | [clearFieldAndFillItWithText](#clearFieldAndFillItWithText)       |
| [tapWhenTappable](#tapWhenTappable)                                                     | [tap](#tap)                                                       |
| [fillFieldWithTextWhenVisibleAndPressEnter](#fillFieldWithTextWhenVisibleAndPressEnter) | [fillFieldWithTextAndPressEnter](#fillFieldWithTextAndPressEnter) |
| [scrollToElementWhenVisible](#scrollToElementWhenVisible)                               | [scrollToElement](#scrollToElement)                               |

#### What to do?

- Only change the function on **Old** column to the matching function of **New** column, removing the `errorMessage` argument.
  - All new methods, unlike the old ones, don't use the `errorMessage` argument.

#### How do I know that my code still works?

You will know that you have solved all issues when no warnings are shown in the console, like the one below:

```
Protractor-helper warning: Function 'fillFieldWithTextWhenVisible' will be deprecated in version 4.0.0! Please use the new 'fillFieldWithText' function instead! [Read more on www.npmjs.com/package/protractor-helper#preparation-to-next-major-version]
```

### Argument `errorMessage` will be removed

We will remove all the `errorMessage` arguments in favor of the messages provided by the library, which are clear and tell exactly why the test has failed.

Affected functions:

1. [waitForElementPresence](#waitForElementPresence)
2. [waitForElementNotToBePresent](#waitForElementNotToBePresent)
3. [waitForElementVisibility](#waitForElementVisibility)
4. [waitForElementNotToBeVisible](#waitForElementNotToBeVisible)
5. [waitForTextToBePresentInElement](#waitForTextToBePresentInElement)
6. [waitForTextNotToBePresentInElement](#waitForTextNotToBePresentInElement)
7. [waitForUrlToBeEqualToExpectedUrl](#waitForUrlToBeEqualToExpectedUrl)
8. [waitForUrlNotToBeEqualToExpectedUrl](#waitForUrlNotToBeEqualToExpectedUrl)
9. [waitForUrlToContainString](#waitForUrlToContainString)
10. [waitForUrlNotToContainString](#waitForUrlNotToContainString)

#### What to do?

- Remove all `errorMessage` arguments to avoid breakages in the next major version (v4.x.x).
  - The `errorMessage` is the argument after the `timeoutInMilliseconds`.

#### How do I know that my code still works?

You will know that you have solved all issues when no warnings are shown in the console, like the one below:

```
Protractor-helper warning: Remove the 'errorMessage' argument from the function 'waitForElementPresence'! [Read more on www.npmjs.com/package/protractor-helper#preparation-to-next-major-version]
```

## Contributing

See [contribution guidelines](docs/CONTRIBUTING.md).

## Credits

The **protractor-helper** library was created and is maintained by [Walmyr Filho](https://br.linkedin.com/in/walmyr-lima-e-silva-filho-147a9110a).

Follow Walmyr on Twitter ([@wlsf82](https://twitter.com/walmyrlimaesilv)).

Thanks to [Paulo Gonçalves](https://www.linkedin.com/in/paulo-goncalves/) and [Michiel Cuijpers](https://github.com/MichielCuijpers) for contributing to the project.

---

[MIT License](/LICENSE)
