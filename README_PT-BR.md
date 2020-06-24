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
    <p><summary>Abrir para visualizar todas as funções disponíveis</summary>

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

## Funções disponíveis

Abaixo segue a lista de todas as funções disponíveis no protractor-helper com seus respectivos exemplos:

### `setTimeout`

Este método permite alterar o _timeout_ de todos os métodos chamados após o `setTimeout`.

O `timeoutInMilliseconds` padrão é 5000 milisegundos

Caso seja invocado sem que um parametro seja passado, o _timeout_ será definido com o valor padrão.

> Um exemplo de uso desse método é a necessidade de assegurar que a tela seja carregada dentro de XX segundos, devido uma necessidade expressa pelo gerente de produtos. Isso ocorre frequentemente em sistemas de _e-commerce_ em datas especiais como a Black Friday.

[Exemplo](docs/EXAMPLES.md#settimeout)

### `isCurrentUrlDifferentFromBaseUrl`

Este método retorna um valor booleano dependendo se a url atual é diferente da url base. Não necessita de parâmetros.

[Exemplo](docs/EXAMPLES.md#iscurrenturldifferentfrombaseurl)

### `waitForElementPresence`

Este método espera até que um elemento esteja presente no DOM.

> Nota: Um elemento pode estar presente mas não visível. Se você deseja esperar até que o elemento esteja visível, use o método `waitForElementVisibility`

[Exemplo](docs/EXAMPLES.md#waitforelementpresence)

### `waitForElementNotToBePresent`

Este método é o oposto do anterior, de tal forma que espera até que um elemento não esteja presente no DOM.

[Exemplo](docs/EXAMPLES.md#waitforelementnottobepresent)

### `waitForElementVisibility`

Este método aguarda até que um elemento esteja visível na página. Estar visível significa não apenas estar presente no DOM, mas também ter altura e largura maior que 0.

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

Este método executa  a ação de toque em um elemento HTML capaz de eventos de toque/clique assim que estiver em um estado possível de toque/clique. Tal método é utilizado quando se está fazendo testes web _mobile_ em emuladores, por exemplo.

[Exemplo](docs/EXAMPLES.md#tap)

### `waitForTextToBePresentInElement`

Este método espera por um texto específico em um determinado elemento HTML.

[Exemplo](docs/EXAMPLES.md#waitfortexttobepresentinelement)

### `waitForTextNotToBePresentInElement`

Este método é o oposto do anterior, de tal forma que espera que um texto não esteja presente em um determinado elemento do HTML.

[Exemplo](docs/EXAMPLES.md#waitfortextnottobepresentinelement)

### `waitForUrlToBeEqualToExpectedUrl`

Este método aguarda até que a URL seja igual a outra esperada. Este método é útil quando se quer executar ações em elementos apenas se estiver na URL correta.

[Exemplo](docs/EXAMPLES.md#waitforurltobeequaltoexpectedurl)

### `waitForUrlNotToBeEqualToExpectedUrl`

Este método aguarda até que a URL não seja igual a uma a uma outra determinada URL. Este método é útil quando se quer continuar a executar ações em elementos apenas quando não estiver em uma URL específica.

[Exemplo](docs/EXAMPLES.md#waitforurlnottobeequaltoexpectedurl)

### `waitForUrlToContainString`

Este método aguarda até que a URL contenha um determinado texto. É utilizado quando se deseja fazer verificações baseadas na URL atual.

[Exemplo](docs/EXAMPLES.md#waitforurltocontainstring)

### `waitForUrlNotToContainString`

Este método aguarda até que a URL não contenha um determinado texto. É utilizado quando se deseja fazer verificações baseadas na URL atual.

[Exemplo](docs/EXAMPLES.md#waitforurlnottocontainstring)

### `fillFieldWithTextAndPressEnter`

Este método preenche um campo de input com um texto assim que estiver visível e então simula a ação de pressionar a tecla ENTER do teclado. É utilizado em casos como fazer uma busca e pressionar ENTER, em vez de preencher o campo e clicar no botão de busca, por exemplo.

[Exemplo](docs/EXAMPLES.md#fillFieldWithTextAndPressEnter)

### `scrollToElement`

Este método é usado para rolar a página até um elemento até que tal elemento esteja visível no DOM.

[Exemplo](docs/EXAMPLES.md#scrollToElement)

---

[Licença MIT](/LICENSE)
