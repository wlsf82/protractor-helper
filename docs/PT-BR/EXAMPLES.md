# Exemplos

> Observações:
>
> 1. Todos os exemplos utilizam sintaxe de ES6;
>
> 2. Todos os argumentos nas tabelas estão dispostos na ordem em que devem ser utilizados por seus métodos;
>
> 3. O `timeoutInMilliseconds` padrão é de 5000 milissegundos;
>
> 4. Ao passar o argumento `timeoutInMilliseconds`, o intervalo de espera é alterado apenas no respectivo método. A não ser no método `setTimeout`, o qual altera o intervalo de espera para todos os métodos;

## setTimeout

|           1 argumento opcional          |
| :-------------------------------------: |
| `timeoutInMilliseconds` (padrão: 5000) |

```js
const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    // ...
    // Aqui todos os métodos do protractor-helper utilizam o intervalo de espera padrão (5000 ms).

    protractorHelper.setTimeout(1000);

    // ...
    // Aqui todos os métodos do protractor-helper utilizam 1000 ms como intervalo de espera
    // ...

    protractorHelper.setTimeout();

    // Aqui todos os métodos do protractor-helper utilizam o intervalo de espera padrão (5000 ms).
    // ...
  });
});
```

## isCurrentUrlDifferentFromBaseUrl

```js
// Imagine que no arquivo `protractor.conf.js` a propriedade `baseUrl` está definida.

const protractorHelper = require("protractor-helper");

describe("foo", () => {
  it("bar", () => {
    browser.get(""); // Já que você está passando uma string vazia, você irá para a `baseUrl`.

    const someButton = element(by.css("button"));

    someButton.click();

    browser.wait(
      protractorHelper.isCurrentUrlDifferentFromBaseUrl,
      3000,
      "A URL atual não é diferente da URL base após 3 segundos"
    );

    // ...
  });
});
```

## waitForElementPresence

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

|  2 argumentos obrigatórios   |   1 argumento opcional   |
| :--------------------------: | :----------------------: |
| `htmlElement` and `text`     | `timeoutInMilliseconds`  |

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

## uploadFileIntoInputField

|      2 argumentos obrigatórios       |   1 argumento opcional   |
| :----------------------------------: | :----------------------: |
| `htmlElement` and `absolutePath`     | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

|  2 argumentos obrigatórios   |   1 argumento opcional   |
| :--------------------------: | :----------------------: |
| `htmlElement` and `text`     | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  s|

```js
// Imagine que no arquivo `protractor.conf.js` um emulador de dispositivo móvel está sendo definido.

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

|  2 argumentos obrigatórios   |   1 argumento opcional   |
| :--------------------------: | :----------------------: |
| `htmlElement` and `text`     | `timeoutInMilliseconds`  |

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

|  2 argumentos obrigatórios   |   1 argumento opcional   |
| :--------------------------: | :----------------------: |
| `htmlElement` and `text`     | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `expectedUrl`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `expectedUrl`        | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|       `string`          | `timeoutInMilliseconds`  |

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

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|       `string`          | `timeoutInMilliseconds` s |

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

## fillFieldWithTextAndPressEnter

|  2 argumentos obrigatórios   |   1 argumento opcional   |
| :--------------------------: | :----------------------: |
| `htmlElement` and `text`     | `timeoutInMilliseconds`  |

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

## scrollToElement

| 1 argumento obrigatório |   1 argumento opcional   |
| :---------------------: | :----------------------: |
|    `htmlElement`        | `timeoutInMilliseconds`  |

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

[Voltar para a seção 'Como usar e examplos' do REAME.md](./README.md#como-usar-e-exemplos)
