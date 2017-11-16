Protractor helper's library
===============================

This library contains a file (`index.js`) with different helper methods that can be used together with Protractor for creating robust end-to-end tests.

Many of the helper methods on this library uses `protractor.ExpectedConditions` to ensure that the elements we want to interact with are in the correct state before interacting with them or running expectations on them. This helps on avoiding trying to interact with elements when they are still not ready for it, which helps avoiding test flakiness.

## Basic example

Let's say you want to create a test for the sign up happy path of an example application.

### Example without using the protractor-helper module

Without this library the test could be written as something like this:

```
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

```
const protractorHelper = require("protractor-helper");

describe("Sign up page", () => {
    it("successful sign up", () => {
        browser.get("https://example.com/sign-up");

        const emailField = element(by.id("email"));
        const passwordField = element(by.id("password"));
        const signupButton = element(by.id("signup"));

        protractorHelper.fillFieldWithTextWhenVisible(emailField, "valid@email.com");
        protractorHelper.fillFieldWithTextWhenVisible(passwordField, "validpassword");
        protractorHelper.clickWhenClickable(signupButton);

        const avatar = element(by.id("avatar"));

        protractorHelper.waitForElementVisibility(avatar);

        expect(avatar.isDisplayed()).toBe(true);
    });
});
```

As you can see, by using the protractor-helper library the code is shorter and it is also easier to read.

Note: There are complete examples of each helper methods in the "How to use (examples)" section.

## Installation

Below it is described the process of Installation of such module.

Run `npm install protractor-helper --save-dev` to install the library as a dev dependencies of your project.

## Available helpers

Below is the list of all available helpers in this library:

- `getBodyElementFromCurrentBrowserOrBrowserInstance`

The above method returns the body element of the current browser if nothing is passed as argument or the body element of a specific browser instance in case the browser instance is passed as an argument. This second option is useful when working with two browsers interacting with each other, for example.

- `openNewBrowserInTheSamePage`

The above method just opens a new browser instance in the same page of the main browser. You need to pass `browser` as an argument.

- `isCurrentUrlDifferentFromBaseUrl`

The above method returns a boolean depending if the current url is different from the base url. No argument needed.

- `waitForElementPresence`

The above method waits for an element to be present in the DOM. This method can receives three arguments: 1st - the HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

Note: An element may be present but not displayed. If you want to wait for the element to be displayed use the methods `waitForElementVisibility`.

- `waitForElementNotToBePresent`

The above method is the opposite of the previous one, so, it waits for an element not to be present in the DOM. This method can receives three arguments: 1st - the HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForElementVisibility`

The above method waits for an element to be visible in the page. Being displayed means not only that the element is present in the DOM, but also that is has a height and width that is greater than 0. This method can receives three arguments: 1st - the HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForElementNotToBeVisible`

The above method is the opposite of the previous one, so, it waits for an element not to be visible in the page. By saying not being displayed means that the element may be in the DOM, but not visible. This method can receives three arguments: 1st - the HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `clickWhenClickable`

The above method is used to click in an element only as soon as it is in a clickable state. This means that the element is visible and enabled for clicking. This method can receives three arguments: 1st - a clickable HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `fillFieldWithTextWhenVisible`

The above method fills an input field with a text as soon as such field is visible. This method can receives four arguments: 1st - the text input HTML element (this is mandatory); 2nd - a string (the text you want to fill the input field with - this is mandatory); 3rd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 4th - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `fillInputFieldWithFileWhenPresent`

The above method fills a file input field with a specified file as soon as the file input field is present in the DOM. This method can receives four arguments: 1st - the HTML file input element (this is mandatory); 2nd - the absolute path of the file you want to fill in the file input field (this is mandatory); 3rd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 4th - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `clearFieldWhenVisible`

The above method clear a text input field as soon as such field is visible. This method can receives three arguments: 1st - the text input HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `tapWhenTappable`

The above method performs a tap action on a clickable/tappable HTML element as soon is it is clickable/tappable. This method is used when performing web mobile testing in mobile emulators, for example. This method can receives three arguments: 1st - a clickable/tappable HTML element (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForTextToBePresentInElement`

The above method waits for a specific text to be present in a specific HTML element. This method can receives four arguments: 1st - the HTML element (this is mandatory); 2nd - a string (the text you want to wait for being present in the element - this is mandatory); 3rd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 4th - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForTextNotToBePresentInElement`

The above method is the opposite of the previous one, so, it waits for a specific text not to be present in a specific HTML element. This method can receives four arguments: 1st - the HTML element (this is mandatory); 2nd - a string (the text you want to wait for not being present in the element - this is mandatory); 3rd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 4th - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForUrlToBeEqualToExpectedUrl`

The above method waits for the URL to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when in the correct URL. This method can receives three arguments: 1st - the expected URL (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForUrlNotToBeEqualToExpectedUrl`

The above method waits for the URL not to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when not in a specific URL. This method can receives three arguments: 1st - the not expected URL (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForUrlToContainString`

The above method waits for the URL to contain an expected string. Such method is useful when you want to perform verifications based on the current URL. This method can receives three arguments: 1st - the expected string (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

- `waitForUrlNotToContainString`

The above method waits for the URL not to contain an expected string. Such method is useful when you want to perform verifications based on the current URL. This method can receives three arguments: 1st - the expected string (this is mandatory); 2nd - an error message (this is optional and if not provided a default message implemented for this specific method will be displayed instead); 3rd - a timeout (optional and default is 5000 milliseconds. Message turns mandatory if you need to change the default timeout, due to arguments order).

## How to use (examples)

After installing the library you will need to require it in your test file (see below).

```
// foobar.spec.js

const protractorHelper = require("protractor-helper");
```

As soon as you have the library required in your test file you can start using its helper methods. Below you'll find examples of usage of each of the available helper methods.

### Example of usage of `getBodyElementFromCurrentBrowserOrBrowserInstance`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        protractorHelper.getBodyElementFromCurrentBrowserOrBrowserInstance().click();

        // ...
    });
});
```

### Example of usage of `openNewBrowserInTheSamePage`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const anotherBrowser = protractorHelper.openNewBrowserInTheSamePage(browser);

        const textFieldFromAnotherBrowser = anotherBrowser.element(by.id("text-field-id"));

        textFieldFromAnotherBrowser.sendKeys("foobarbaz");

        // ...
    });
});
```

### Example of usage of `isCurrentUrlDifferentFromBaseUrl`

```
// Imagine that in the `protractor.conf.js` file a baseUrl is defined.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get(""); // Since you are passing an empty string you will go to the baseUrl.

        const someButton = element(by.css("button"));

        someButton.click();

        browser.wait(protractorHelper.isCurrentUrlDifferentFromBaseUrl, 3000, "Current URL is not different from base URL after 3 seconds");

        // ...
    });
});
```

### Example of usage of `waitForElementPresence`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myElement = element(by.className("foo"));

        protractorHelper.waitForElementPresence(someElement, "my element is not present", 3000);

        // ...
    });
});
```

### Example of usage of `waitForElementNotToBePresent`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myElement = element(by.className("foo"));

        protractorHelper.waitForElementNotToBePresent(someElement, "my element is still present", 3000);

        // ...
    });
});
```

### Example of usage of `waitForElementVisibility`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myElement = element(by.className("foo"));

        protractorHelper.waitForElementVisibility(someElement, "my element not visible", 3000);

        // ...
    });
});
```

### Example of usage of `waitForElementNotToBeVisible`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myElement = element(by.className("foo"));

        protractorHelper.waitForElementNotToBeVisible(someElement, "my element is still visible", 3000);

        // ...
    });
});
```

### Example of usage of `clickWhenClickable`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myLink = element(by.css("a .my-link"));

        protractorHelper.clickWhenClickable(myLink, "my link is not clickable", 3000);

        // ...
    });
});
```

### Example of usage of `fillFieldWithTextWhenVisible`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const textField = element(by.css("input .some-text-field"));

        protractorHelper.fillFieldWithTextWhenVisible(textField, "some text", "textField is not visible", 3000);

        // ...
    });
});
```

### Example of usage of `fillInputFieldWithFileWhenPresent`

```
const path = require("path");
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        const fileToUpload = "../assets/someFile.png";
        const absolutePathOfFileToUpload = path.resolve(__dirname, fileToUpload);

        browser.get("https://example.com");

        const fileInputField = element(by.css("input .file-input"));

        protractorHelper.fillInputFieldWithFileWhenPresent(fileInputField, absolutePathOfFileToUpload, "fileInputField is not present", 3000);

        // ...
    });
});
```

### Example of usage of `clearFieldWhenVisible`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const textField = element(by.css("input ..some-text-field"));

        textField.sendKeys("foobar");
        protractorHelper.clearFieldWhenVisible(textField, "textField is not visible", 3000);

        // ...
    });
});
```

### Example of usage of `tapWhenTappable`

```
// Imagine that in the `protractor.conf.js` file a mobile emulator is being defined.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myButton = element(by.id("my-button"));

        protractorHelper.tapWhenTappable(myButton, "myButton is not tappable", 3000);

        // ...
    });
});
```

### Example of usage of `waitForTextToBePresentInElement`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myButton = element(by.id("my-button"));

        protractorHelper.waitForTextToBePresentInElement(myButton, "ENTER", "ENTER text is not present on myButton element", 3000);

        // ...
    });
});
```

### Example of usage of `waitForTextNotToBePresentInElement`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const myButton = element(by.id("my-button"));

        protractorHelper.waitForTextNotToBePresentInElement(myButton, "ENTER", "ENTER text is still present on myButton element", 3000);

        // ...
    });
});
```

### Example of usage of `waitForUrlToBeEqualToExpectedUrl`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const goToContactPageButton = element(by.className("contact-button"));

        goToContactPageButton.click();

        protractorHelper.waitForUrlToBeEqualToExpectedUrl("https://example.com/contact", "URL is different from expected", 3000);

        // ...
    });
});
```

### Example of usage of `waitForUrlNotToBeEqualToExpectedUrl`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        const homePageUrl = "https://example.com";

        browser.get(homePageUrl);

        const goToContactPageButton = element(by.className("contact-button"));

        goToContactPageButton.click();

        protractorHelper.waitForUrlNotToBeEqualToExpectedUrl(homePageUrl, "URL is equal to " + homePageUrl, 3000);

        // ...
    });
});
```

### Example of usage of `waitForUrlToContainString`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        const goToContactPageButton = element(by.className("contact-button"));

        goToContactPageButton.click();

        protractorHelper.waitForUrlToContainString("contact", "URL does not contains the string 'contact'", 3000);

        // ...
    });
});
```

### Example of usage of `waitForUrlNotToContainString`

```
const protractorHelper = require("protractor-helper");

describe("foo", () => {
    it("bar", () => {
        browser.get("https://example.com");

        protractorHelper.waitForUrlNotToContainString("foobarbaz", "URL contains the string 'foobarbaz'", 3000);

        // ...
    });
});
```

Note: All the examples are using ES6 syntax.
