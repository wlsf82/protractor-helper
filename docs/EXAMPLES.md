# Examples

> Notes:
>
> 1. All the examples are using ES6 syntax;
>
> 2. All the arguments in the tables are in the order that they must be passed in the method;
>
> 3. The `timeoutInMilliseconds` default is 5000 milliseconds;
>
> 4. If you pass the `timeoutInMilliseconds` argument, the timeout is changed only in the respective method. Except on the method `setTimeout`, that changes the timeout of all methods;
>
> 5. `timeoutInMilliseconds` turns mandatory if you need to change the `errorMessage`, due to arguments order;
>
> 6. If the `errorMessage` argument is not provided a default message implemented for this specific method will be displayed instead. We recommend that you use the default message because it shows a clear message. Some new methods not even accept a message as argument, but implement a default one.

## setTimeout

|           1 optional argument           |
| :-------------------------------------: |
| `timeoutInMilliseconds` (default: 5000) |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    // ...
    // Here all the protractor-helper methods use the default timeout.

    protractorHelper.setTimeout(1000);

    // ...
    // Here all the protractor-helper methods use 1000 ms as timeout.
    // ...

    protractorHelper.setTimeout();

    // Here all the protractor-helper methods use the default timeout.
    // ...
  });
});
```

## getBodyElementFromCurrentBrowserOrBrowserInstance

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    protractorHelper.getBodyElementFromCurrentBrowserOrBrowserInstance().click();

    // ...
  });
});
```

## openNewBrowserInTheSamePage

| 1 mandatory argument |
| :------------------: |
|      `browser`       |

```js
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

## isCurrentUrlDifferentFromBaseUrl

```js
// Imagine that in the `protractor.conf.js` file a baseUrl is defined.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get(""); // Since you are passing an empty string you will go to the baseUrl.

    const someButton = element(by.css("button"));

    someButton.click();

    browser.wait(
      protractorHelper.isCurrentUrlDifferentFromBaseUrl,
      3000,
      "Current URL is not different from base URL after 3 seconds"
    );

    // ...
  });
});
```

## waitForElementPresence

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementPresence(myElement, 3000, "my element is not present");

    // ...
  });
});
```

## waitForElementNotToBePresent

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementNotToBePresent(myElement, 3000, "my element is still present");

    // ...
  });
});
```

## waitForElementVisibility

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementVisibility(myElement, 3000, "my element not visible");

    // ...
  });
});
```

## waitForElementNotToBeVisible

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementNotToBeVisible(myElement, 3000, "my element is still visible");

    // ...
  });
});
```

## clickWhenClickable

> Note: this function will be deprecated in favor of the function `click`.

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myLink = element(by.css("a.my-link"));

    protractorHelper.clickWhenClickable(myLink, 3000, "my link is not clickable");

    // ...
  });
});
```

## click

| 1 mandatory argument |   1 optional argument    |
| :------------------: | :----------------------: |
|    `htmlElement`     | `timeoutInMilliseconds`` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myLink = element(by.css("a.my-link"));

    protractorHelper.click(myLink, 3000);

    // ...
  });
});
```

## fillFieldWithTextWhenVisible

> Note: this function will be deprecated in favor of the function `fillFieldWithText`.

|  2 mandatory arguments   |            2 optional arguments            |
| :----------------------: | :----------------------------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.fillFieldWithTextWhenVisible(textField, "some text", 3000, "textField is not visible");

    // ...
  });
});
```

## fillFieldWithText

|  2 mandatory arguments   |   1 optional argument   |
| :----------------------: | :---------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.fillFieldWithText(textField, "some text", 3000);

    // ...
  });
});
```

## fillInputFieldWithFileWhenPresent

> Note: this function will be deprecated in favor of the function `uploadFileIntoInputField`.

|      2 mandatory arguments       |            2 optional arguments            |
| :------------------------------: | :----------------------------------------: |
| `htmlElement` and `absolutePath` | `timeoutInMilliseconds` and `errorMessage` |

```js
const path = require("path");
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    const relativePathOfFileToUpload = "../assets/someFile.png";
    const absolutePathOfFileToUpload = path.resolve(__dirname, relativePathOfFileToUpload);

    browser.get("https://example.com");

    const fileInputField = element(by.css("input.file-input"));

    protractorHelper.fillInputFieldWithFileWhenPresent(
      fileInputField,
      absolutePathOfFileToUpload,
      3000,
      "fileInputField is not present"
    );

    // ...
  });
});
```

## uploadFileIntoInputField

|      2 mandatory arguments       |   1 optional argument   |
| :------------------------------: | :---------------------: |
| `htmlElement` and `absolutePath` | `timeoutInMilliseconds` |

```js
const path = require("path");
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    const relativePathOfFileToUpload = "../assets/someFile.png";
    const absolutePathOfFileToUpload = path.resolve(__dirname, relativePathOfFileToUpload);

    browser.get("https://example.com");

    const fileInputField = element(by.css("input.file-input"));

    protractorHelper.uploadFileIntoInputField(fileInputField, absolutePathOfFileToUpload, 3000);

    // ...
  });
});
```

## clearFieldWhenVisible

> Note: this function will be deprecated in favor of the function `clear`.

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    textField.sendKeys("foobar");
    protractorHelper.clearFieldWhenVisible(textField, 3000, "textField is not visible");

    // ...
  });
});
```

## clear

| 1 mandatory argument |   1 optional argument   |
| :------------------: | :---------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    textField.sendKeys("foobar");
    protractorHelper.clear(textField, 3000);

    // ...
  });
});
```

## clearFieldWhenVisibleAndFillItWithText

> Note: this function will be deprecated in favor of the function `clearFieldAndFillItWithText`.

|  2 mandatory arguments   |            2 optional arguments            |
| :----------------------: | :----------------------------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.clearFieldWhenVisibleAndFillItWithText(textField, "some text", 3000, "textField is not visible");

    // ...
  });
});
```

## clearFieldAndFillItWithText

|  2 mandatory arguments   |   1 optional argument   |
| :----------------------: | :---------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.clearFieldAndFillItWithText(textField, "some text", 3000);

    // ...
  });
});
```

## tapWhenTappable

> Note: this function will be deprecated in favor of the function `tap`.

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
// Imagine that in the `protractor.conf.js` file a mobile emulator is being defined.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.tapWhenTappable(myButton, 3000, "myButton is not tappable");

    // ...
  });
});
```

## tap

| 1 mandatory argument |   1 optional argument   |
| :------------------: | :---------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` |

```js
// Imagine that in the `protractor.conf.js` file a mobile emulator is being defined.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.tap(myButton, 3000);

    // ...
  });
});
```

## waitForTextToBePresentInElement

|  2 mandatory arguments   |            2 optional arguments            |
| :----------------------: | :----------------------------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.waitForTextToBePresentInElement(
      myButton,
      "ENTER",
      3000,
      "ENTER text is not present on myButton element"
    );

    // ...
  });
});
```

## waitForTextNotToBePresentInElement

|  2 mandatory arguments   |            2 optional arguments            |
| :----------------------: | :----------------------------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.waitForTextNotToBePresentInElement(
      myButton,
      "ENTER",
      3000,
      "ENTER text is still present on myButton element"
    );

    // ...
  });
});
```

## waitForUrlToBeEqualToExpectedUrl

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `expectedUrl`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlToBeEqualToExpectedUrl(
      "https://example.com/contact",
      3000,
      "URL is different from expected"
    );

    // ...
  });
});
```

## waitForUrlNotToBeEqualToExpectedUrl

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `expectedUrl`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    const homePageUrl = "https://example.com";

    browser.get(homePageUrl);

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlNotToBeEqualToExpectedUrl(homePageUrl, 3000, "URL is equal to " + homePageUrl);

    // ...
  });
});
```

## waitForUrlToContainString

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|       `string`       | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlToContainString("contact", 3000, "URL does not contains the string 'contact'");

    // ...
  });
});
```

## waitForUrlNotToContainString

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|       `string`       | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    protractorHelper.waitForUrlNotToContainString("foobarbaz", 3000, "URL contains the string 'foobarbaz'");

    // ...
  });
});
```

## fillFieldWithTextWhenVisibleAndPressEnter

> Note: this function will be deprecated in favor of the function `fillFieldWithTextAndPressEnter`.

|  2 mandatory arguments   |            2 optional arguments            |
| :----------------------: | :----------------------------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.fillFieldWithTextWhenVisibleAndPressEnter(
      textField,
      "some text",
      3000,
      "textField is not visible"
    );

    // ...
  });
});
```

## fillFieldWithTextAndPressEnter

|  2 mandatory arguments   |   1 optional argument   |
| :----------------------: | :---------------------: |
| `htmlElement` and `text` | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const textField = element(by.css("input.some-text-field"));

    protractorHelper.fillFieldWithTextAndPressEnter(textField, "some text", 3000);

    // ...
  });
});
```

## scrollToElementWhenVisible

> Note: this function will be deprecated in favor of the function `scrollToElement`.

| 1 mandatory argument |            2 optional arguments            |
| :------------------: | :----------------------------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` and `errorMessage` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myLink = element(by.css("a.my-link"));

    protractorHelper.scrollToElementWhenVisible(myLink, 3000, "my link is not visible");

    // ...
  });
});
```

## scrollToElement

| 1 mandatory argument |   1 optional argument   |
| :------------------: | :---------------------: |
|    `htmlElement`     | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myLink = element(by.css("a.my-link"));

    protractorHelper.scrollToElement(myLink, 3000);

    // ...
  });
});
```

[Back to section 'How to use' on README.md](../README.md#how-to-use-and-examples)
