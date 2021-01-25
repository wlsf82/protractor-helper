# Examples

🌏 [Portuguese](./PT-BR/EXAMPLES.md)

> Notes:
>
> 1. All the examples are using ES6 syntax;
>
> 2. All the arguments in the tables are in the order that they must be passed in the method;
>
> 3. The `timeoutInMilliseconds` default is 5000 milliseconds;
>
> 4. If you pass the `timeoutInMilliseconds` argument, the timeout is changed only in the respective method. Except on the method `setTimeout`, that changes the timeout of all methods;

## setTimeout

| 1 optional argument                     |
|-----------------------------------------|
| `timeoutInMilliseconds` (default: 5000) |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    // ...
    // Here all the protractor-helper methods use the default timeout (5000 ms).

    protractorHelper.setTimeout(1000);

    // ...
    // Here all the protractor-helper methods use 1000 ms as timeout.
    // ...

    protractorHelper.setTimeout();

    // Here all the protractor-helper methods use the default timeout (5000 ms).
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

## waitForAlertToBePresent

| 1 optional argument                     |
|-----------------------------------------|
| `timeoutInMilliseconds` (default: 5000) |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const alertElement = element(by.className("el-alert"));

    protractorHelper.waitForAlertToBePresent(3000);

    // ...
  });
});
```

## waitForElementPresence

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementPresence(myElement, 3000);

    // ...
  });
});
```

## waitForElementNotToBePresent

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementNotToBePresent(myElement, 3000);

    // ...
  });
});
```

## waitForElementVisibility

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementVisibility(myElement, 3000);

    // ...
  });
});
```

## waitForElementNotToBeVisible

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myElement = element(by.className("foo"));

    protractorHelper.waitForElementNotToBeVisible(myElement, 3000);

    // ...
  });
});
```

## click

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

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

## hoverAndClick

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.css("button.my-btn"));

    protractorHelper.hoverAndClick(myButton, 3000);

    // ...
  });
});
```

## fillFieldWithText

| 2 mandatory arguments    | 1 optional argument     |
|--------------------------|-------------------------|
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

## fillFieldWithTextAndPressEnter

| 2 mandatory arguments    | 1 optional argument     |
|--------------------------|-------------------------|
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

## uploadFileIntoInputField

| 2 mandatory arguments            | 1 optional argument     |
|----------------------------------|-------------------------|
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

## clear

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

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

## clearFieldAndFillItWithText

| 2 mandatory arguments    | 1 optional argument     |
|--------------------------|-------------------------|
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

## tap

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

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

| 2 mandatory arguments    | 1 optional argument     |
|--------------------------|-------------------------|
| `htmlElement` and `text` | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.waitForTextToBePresentInElement(myButton, "ENTER", 3000);

    // ...
  });
});
```

## waitForTextNotToBePresentInElement

| 2 mandatory arguments    | 1 optional argument     |
|--------------------------|-------------------------|
| `htmlElement` and `text` | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const myButton = element(by.id("my-button"));

    protractorHelper.waitForTextNotToBePresentInElement(myButton, "ENTER", 3000);

    // ...
  });
});
```

## waitForUrlToBeEqualToExpectedUrl

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `expectedUrl`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlToBeEqualToExpectedUrl("https://example.com/contact", 3000);

    // ...
  });
});
```

## waitForUrlNotToBeEqualToExpectedUrl

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `expectedUrl`        | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    const homePageUrl = "https://example.com";

    browser.get(homePageUrl);

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlNotToBeEqualToExpectedUrl(homePageUrl, 3000);

    // ...
  });
});
```

## waitForUrlToContainString

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `string`             | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    const goToContactPageButton = element(by.className("contact-button"));

    goToContactPageButton.click();

    protractorHelper.waitForUrlToContainString("contact", 3000);

    // ...
  });
});
```

## waitForUrlNotToContainString

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `string`             | `timeoutInMilliseconds` |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get("https://example.com");

    protractorHelper.waitForUrlNotToContainString("foobarbaz", 3000);

    // ...
  });
});
```

## scrollToElement

| 1 mandatory argument | 1 optional argument     |
|----------------------|-------------------------|
| `htmlElement`        | `timeoutInMilliseconds` |

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
