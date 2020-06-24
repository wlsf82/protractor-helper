# protractor-helper

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://github.com/wlsf82/protractor-helper/workflows/Continuous%20Integration/badge.svg)](https://github.com/wlsf82/protractor-helper/actions) [![BCH compliance](https://bettercodehub.com/edge/badge/wlsf82/protractor-helper?branch=master)](https://bettercodehub.com/)

Este módulo contém funções auxiliares que podem ser usadas com o framework Protractor para a criação de testes _end-to-end_ robustos.

Muitas das funções auxiliares neste módulo usam a classe `protractor.ExpectedConditions` para garantir que os elementos com os quais queremos interagir estejam no estado correto antes da interação ou antes de realizar verificações nos elementos. Isto ajuda evitar tentar interagir com elementos quando eles ainda não estão prontos para isso, o que ajuda a evitar testes _flaky_. 

## Sumário

- [Exemplo básico](#exemplo-básico)
  - [Exemplo sem utilizar o protractor-helper](#exemplo-sem-utilizar-o-protractor-helper)
  - [Exemplo utilizando o protractor-helper](#exemplo-utilizando-o-protractor-helper)
- [Instalação](#instalação)
- [Como usar e exemplos](#como-usar-e-exemplos)

## Exemplo básico

Digamos que você deseja criar um teste para o fluxo básico de um cadastro em uma aplicação exemplo.

### Exemplo sem utilizar o protractor-helper

Sem o protractor-helper o teste poderia ser escrito da seguinte forma:

```js
const EC = protractor.ExpectedConditions;
const TIMEOUT_PADRAO_EM_MS = 5000;

describe("Página de cadastro de usuário", () => {
  it("cadastro realizado com sucesso", () => {
    browser.get("https://exemplo.com/cadastro");

    const campoEmail = element(by.id("email"));
    const campoSenha = element(by.id("senha"));
    const botaoCadastrar = element(by.id("cadastrar"));

    browser.wait(EC.visibilityOf(campoEmail), TIMEOUT_PADRAO_EM_MS);
    browser.wait(EC.visibilityOf(campoSenha), TIMEOUT_PADRAO_EM_MS);
    browser.wait(EC.elementToBeClickable(botaoCadastrar), TIMEOUT_PADRAO_EM_MS);
    campoEmail.sendKeys("valid@email.com");
    campoSenha.sendKeys("validpassword");
    botaoCadastrar.click();

    const avatar = element(by.id("avatar"));

    browser.wait(EC.visibilityOf(avatar), TIMEOUT_PADRAO_EM_MS);

    expect(avatar.isDisplayed()).toBe(true);
  });
});
```

### Exemplo utilizando o protractor-helper

O mesmo teste poderia ser escrito conforme abaixo, utilizando o módulo protractor-helper.

```js
const protractorHelper = require("protractor-helper");

describe("Página de cadastro de usuário", () => {
  it("cadastro realizado com sucesso", () => {
    browser.get("https://exemplo.com/cadastro");

    const campoEmail = element(by.id("email"));
    const campoSenha = element(by.id("senha"));
    const botaoCadastrar = element(by.id("cadastrar"));

    protractorHelper.fillFieldWithText(campoEmail, "email@valido.com");
    protractorHelper.fillFieldWithText(campoSenha, "senhavalida");
    protractorHelper.click(botaoCadastrar);

    const avatar = element(by.id("avatar"));

    protractorHelper.waitForElementVisibility(avatar);
  });
});
```

Como você pode notar, utizando o módulo protractor-helper o código é mais legível e menos complexo.

## Instalação

Abaixo é descrito o processo de instalação do protractor-helper.

Execute o comando `npm install protractor-helper --save-dev` para instalar o módulo como uma dependência de desenvolvimento do seu projeto.

## Como usar e exemplos

Após a instalação do protractor-helper você precisará requisitá-lo no seu arquivo de teste (veja abaixo).

```javascript
// foobar.spec.js

const protractorHelper = require("protractor-helper");
```

Assim que for importado no seu arquivo de testes, você poderá utilizar os métodos do protractor-helper.

[Aqui você encontrará exemplos de uso de cada um dos métodos disponíveis.](docs/EXAMPLES.md#examples) (Importante: leia as notas no topo)

---

[Licença MIT](/LICENSE)
