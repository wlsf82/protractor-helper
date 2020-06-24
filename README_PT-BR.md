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
- [Helpers disponíveis](#helpers-disponíveis)

  <details>
    <p><summary>Abrir para visualizar os helpers disponíveis</summary>

  - [`setTimeout`](#settimeout)
  - [`isCurrentUrlDifferentFromBaseUrl`](#iscurrenturldifferentfrombaseurl)
  - [`waitForElementPresence`](#waitforelementpresence)
  - [`waitForElementNotToBePresent`](#waitforelementnottobepresent)
  - [`waitForElementVisibility`](#waitforelementvisibility)
  - [`waitForElementNotToBeVisible`](#waitforelementnottobevisible)
  - [`click`](#click)
  - [`hoverAndClick`](#hoverAndClick)
  - [`fillFieldWithText`](#fillfieldwithtext)
  - [`uploadFileIntoInputField`](#uploadfileintoinputfield)
  - [`clear`](#clear)
  - [`clearFieldAndFillItWithText`](#clearfieldandfillitwithtext)
  - [`tap`](#tap)
  - [`waitForTextToBePresentInElement`](#waitfortexttobepresentinelement)
  - [`waitForTextNotToBePresentInElement`](#waitfortextnottobepresentinelement)
  - [`waitForUrlToBeEqualToExpectedUrl`](#waitforurltobeequaltoexpectedurl)
  - [`waitForUrlNotToBeEqualToExpectedUrl`](#waitforurlnottobeequaltoexpectedurl)
  - [`waitForUrlToContainString`](#waitforurltocontainstring)
  - [`waitForUrlNotToContainString`](#waitforurlnottocontainstring)
  - [`scrollToElement`](#scrolltoelement)

</p> </details>

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

## Helpers disponíveis

Abaixo segue a lista de todos os helpers disponíveis no protractor-helper com seus respectivos exemplos:

### `setTimeout`

Este método permite alterar o tempo de timeout de todos os métodos chamados após `setTimeout`.

O `timeoutInMilliseconds` padrão é 5000 millisegundos

Caso seja invocado sem que um parametro seja passado, o timeout será definido como o padrão.

> Um exemplo de uso desse método é a necessidade de assegurar que a tela seja carregada dentro de XX segundos, devido uma necessidade expressa pelo gerente de produtos. Isso ocorre frequentemente em sistemas de e-commerce emdatas especiais como a Blackfriday.

[Exemplo](docs/EXAMPLES.md#settimeout)

### `isCurrentUrlDifferentFromBaseUrl`

Este método retorna um valor booleano dependendo se a url atual é diferente da url base. Não necessita de parâmetros.

[Exemplo](docs/EXAMPLES.md#iscurrenturldifferentfrombaseurl)

### `waitForElementPresence`

Este método espera até que um elemento esteja presente no DOM.

> Nota: Um elemento pode estar presente mas não visível. Se você deseja esperar até que o elemento esteja visível, use o método `waitForElementVisibility`

[Exemplo](docs/EXAMPLES.md#waitforelementpresence)

### `waitForElementNotToBePresent`

This method is the opposite of the previous one, so, it waits for an element not to be present in the DOM.
[Exemplo](docs/EXAMPLES.md#waitforelementnottobepresent)

### `waitForElementVisibility`

This method waits for an element to be visible in the page. Being displayed means not only that the element is present in the DOM, but also that is has a height and width that is greater than 0.
[Exemplo](docs/EXAMPLES.md#waitforelementvisibility)

### `waitForElementNotToBeVisible`

Este método é o oposto do anterior, de tal forma que espera que um elemento não esteja visível na página. Por não visível, entenda-se que o elemento pode estar no DOM mas não estar visível.

[Exemplo](docs/EXAMPLES.md#waitforelementnottobevisible)

### `click`

Este método é utilizado para efetuar um clique em um elemento assim que estiver em um estado viável e habilitado para o clique.

[Exemplo](docs/EXAMPLES.md#click)

### `hoverAndClick`

Este método é utilizado para mover o mouse sobre o elemento assim que estiver presente no DOM e então efetuar um clique.

[Exemplo](docs/EXAMPLES.md#hoverAndClick)

### `fillFieldWithText`

Este médoto preenche um campo de input com um texto assim que estiver visível.

[Exemplo](docs/EXAMPLES.md#fillFieldWithText)

### `uploadFileIntoInputField`

Este método efetua o upload de um arquivo em um input de arquivos assim que estiver presente no DOM.

[Exemplo](docs/EXAMPLES.md#uploadFileIntoInputField)

### `clear`

Este método limpa o conteúdo de um campo de input assim que estiver visível.

[Exemplo](docs/EXAMPLES.md#clear)

### `clearFieldAndFillItWithText`

Este método limpa o conteúdo de um campo de input assim que estiver visível, então preenche o mesmo com um texto.

[Exemplo](docs/EXAMPLES.md#clearFieldAndFillItWithText)

### `tap`

Este método executa  a ação de toque em um elemento HTML capaz de eventos de toque/clique assim que estiver em um estado viável de toque/clique. É utilizado quando se está fazendo testes web mobile em emuladores, por exemplo.

[Exemplo](docs/EXAMPLES.md#tap)

### `waitForTextToBePresentInElement`

Este método espera por um texto específico em um determinado elemento HTML.

[Exemplo](docs/EXAMPLES.md#waitfortexttobepresentinelement)

### `waitForTextNotToBePresentInElement`

This method is the opposite of the previous one, so, it waits for a specific text not to be present in a specific HTML element.
[Exemplo](docs/EXAMPLES.md#waitfortextnottobepresentinelement)

### `waitForUrlToBeEqualToExpectedUrl`

This method waits for the URL to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when in the correct URL.
[Exemplo](docs/EXAMPLES.md#waitforurltobeequaltoexpectedurl)

### `waitForUrlNotToBeEqualToExpectedUrl`

This method waits for the URL not to be equal to an expected URL. Such method is useful when you want to continue performing actions on elements only when not in a specific URL.
[Exemplo](docs/EXAMPLES.md#waitforurlnottobeequaltoexpectedurl)

### `waitForUrlToContainString`

This method waits for the URL to contain an expected string. Such method is useful when you want to perform verifications based on the current URL.
[Exemplo](docs/EXAMPLES.md#waitforurltocontainstring)

### `waitForUrlNotToContainString`

This method waits for the URL not to contain an expected string. Such method is useful when you want to perform verifications based on the current URL.
[Exemplo](docs/EXAMPLES.md#waitforurlnottocontainstring)

### `fillFieldWithTextAndPressEnter`

This method fills an input field with a text as soon as such field is visible and then it simulates pressing the ENTER key from the keyboard. This method is useful in cases such as when doing a search and pressing the ENTER key, instead of having to fill the input field and clicking the search button, for example.
[Exemplo](docs/EXAMPLES.md#fillFieldWithTextAndPressEnter)

### `scrollToElement`

This method is used to scroll up to an element on the page as soon as the element is visible in the DOM.
[Exemplo](docs/EXAMPLES.md#scrollToElement)

---

[Licença MIT](/LICENSE)
