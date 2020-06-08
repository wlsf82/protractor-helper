# protractor-helper

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://github.com/wlsf82/protractor-helper/workflows/Lint%20and%20tests/badge.svg)](https://github.com/wlsf82/protractor-helper/actions) [![BCH compliance](https://bettercodehub.com/edge/badge/wlsf82/protractor-helper?branch=master)](https://bettercodehub.com/)

Este módulo contém funções auxiliares que podem ser usadas com o framework Protractor para a criação de testes _end-to-end_ robustos.

Muitas das funções auxiliares neste módulo usam a classe `protractor.ExpectedConditions` para garantir que os elementos com os quais queremos interagir estejam no estado correto antes da interação ou antes de realizar verificações nos elementos. Isto ajuda evitar tentar interagir com elementos quando eles ainda não estão prontos para isso, o que ajuda a evitar testes _flaky_. 

## Sumário

- [Exemplo básico](#exemplo-básico)
  - [Exemplo sem utilizar o protractor-helper](#exemplo-sem-utilizar-o-protractor-helper)
  - [Exemplo utilizando o protractor-helper](#exemplo-utilizando-o-protractor-helper)

## Exemplo básico

Digamos que você deseja criar um teste para o fluxo básico de um cadastro em uma aplicação de exemplo.

### Exemplo sem utilizar o protractor-helper

Sem o módulo o teste poderia ser escrito da seguinte forma:

```js
const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

describe("Página de cadastro de usuário", () => {
  it("cadastro realizado com sucesso", () => {
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

### Exemplo utilizando o protractor-helper

O mesmo teste poderia ser escrito como abaixo, utilizando o módulo protractor-helper.

```js
const protractorHelper = require("protractor-helper");

describe("Página de cadastro de usuário", () => {
  it("cadastro realizado com sucesso", () => {
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

Como você pode notar, utizando o módulo protractor-helper o código é de mais fácil leitura. Também não há necessidade de complexidade desnecessária.

---

[Licença MIT](/LICENSE)
