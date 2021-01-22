# protractor-helper

[![npm version](https://badge.fury.io/js/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![npm weekly downloads](https://img.shields.io/npm/dw/protractor-helper.svg)](https://www.npmjs.com/package/protractor-helper) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Build Status](https://github.com/wlsf82/protractor-helper/workflows/Continuous%20Integration/badge.svg)](https://github.com/wlsf82/protractor-helper/actions) [![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](../../LICENSE) [![BCH compliance](https://bettercodehub.com/edge/badge/wlsf82/protractor-helper?branch=master)](https://bettercodehub.com/) [![Known Vulnerabilities](https://snyk.io/test/npm/protractor-helper/4.1.12/badge.svg)](https://snyk.io/test/npm/protractor-helper/4.1.12)

</div>

🌏 [Inglês](../../README.md)

---

Este módulo contém funções auxiliares que podem ser usadas com o framework Protractor para a criação de testes _end-to-end_ robustos.

Muitas das funções auxiliares neste módulo usam a classe `protractor.ExpectedConditions` para garantir que os elementos com os quais queremos interagir estejam no estado correto antes da interação ou antes de realizar verificações nos elementos. Isto ajuda evitar tentar interagir com elementos quando eles ainda não estão prontos para isso, o que ajuda a evitar testes _flaky_. 

## Sumário

- [Exemplo básico](#exemplo-básico)
  - [Exemplo sem utilizar o protractor-helper](#exemplo-sem-utilizar-o-protractor-helper)
  - [Exemplo utilizando o protractor-helper](#exemplo-utilizando-o-protractor-helper)
- [Instalação](#instalação)
- [Como usar e exemplos](#como-usar-e-exemplos)
- [Funções disponíveis](#funções-disponíveis)

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
  - [`fillFieldWithTextAndPressEnter`](#fillfieldwithtextandpressenter)
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
</p></details>

- [Utilizando métodos que iniciam com 'wait' como verificações de teste](#utilizando-métodos-que-iniciam-com-wait-como-verificações-de-teste)
- [Recursos externos](#recursos-externos)
- [Contribuindo](#contribuindo)
- [Código de conduta](#código-de-conduta)
- [Créditos](#créditos)
- [Licença](../../LICENSE)

## Exemplo básico

Digamos que você deseja criar um teste para o fluxo básico de login em uma aplicação exemplo.

### Exemplo sem utilizar o protractor-helper

Sem o protractor-helper o teste poderia ser escrito da seguinte forma:

```js
const EC = protractor.ExpectedConditions;
const TIMEOUT_PADRAO_EM_MS = 5000;

describe("Página de login", () => {
  it("login realizado com sucesso", () => {
    browser.get("https://exemplo.com/login");

    const campoEmail = element(by.id("email"));
    const campoSenha = element(by.id("senha"));
    const botaoDeLogin = element(by.id("login"));

    browser.wait(EC.visibilityOf(campoEmail), TIMEOUT_PADRAO_EM_MS);
    browser.wait(EC.visibilityOf(campoSenha), TIMEOUT_PADRAO_EM_MS);
    browser.wait(EC.elementToBeClickable(botaoDeLogin), TIMEOUT_PADRAO_EM_MS);
    campoEmail.sendKeys("email@valido.com");
    campoSenha.sendKeys("senhavalida");
    botaoDeLogin.click();

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

describe("Página de login", () => {
  it("cadastro realizado com sucesso", () => {
    browser.get("https://exemplo.com/login");

    const campoEmail = element(by.id("email"));
    const campoSenha = element(by.id("senha"));
    const botaoDeLogin = element(by.id("login"));

    protractorHelper.fillFieldWithText(campoEmail, "email@valido.com");
    protractorHelper.fillFieldWithText(campoSenha, "senhavalida");
    protractorHelper.click(botaoDeLogin);

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

[Aqui você encontrará exemplos de uso de cada um dos métodos disponíveis.](./EXAMPLES.md#examples) (Importante: leia as notas no topo)

## Funções disponíveis

Abaixo segue a lista de todas as funções disponíveis no protractor-helper com seus respectivos exemplos:

### `setTimeout`

Este método permite alterar o _timeout_ de todos os métodos chamados após o `setTimeout`.

O `timeoutInMilliseconds` padrão é 5000 milisegundos

Caso seja invocado sem que um parametro seja passado, o _timeout_ será definido com o valor padrão.

> Um exemplo de uso desse método é a necessidade de assegurar que a tela seja carregada dentro de XX segundos, devido uma necessidade expressa pelo gerente de produtos. Isso ocorre frequentemente em sistemas de _e-commerce_ em datas especiais como a Black Friday.

[Exemplo](./EXAMPLES.md#settimeout)

### `isCurrentUrlDifferentFromBaseUrl`

Este método retorna um valor booleano dependendo se a URL atual é diferente da URL base e não necessita de parâmetros.

[Exemplo](./EXAMPLES.md#iscurrenturldifferentfrombaseurl)

### `waitForElementPresence`

Este método espera até que um elemento esteja presente no DOM.

> Nota: Um elemento pode estar presente mas não visível. Se você deseja esperar até que o elemento esteja visível, use o método `waitForElementVisibility`

[Exemplo](./EXAMPLES.md#waitforelementpresence)

### `waitForElementNotToBePresent`

Este método é o oposto do anterior, de tal forma que espera até que um elemento não esteja presente no DOM.

[Exemplo](./EXAMPLES.md#waitforelementnottobepresent)

### `waitForElementVisibility`

Este método aguarda até que um elemento esteja visível na página. Estar visível significa não apenas estar presente no DOM, mas também ter altura e largura maior que 0.

[Exemplo](./EXAMPLES.md#waitforelementvisibility)

### `waitForElementNotToBeVisible`

Este método é o oposto do anterior, de tal forma que espera que um elemento não esteja visível na página. Por não visível, entenda-se que o elemento pode estar no DOM mas não estar visível.

[Exemplo](./EXAMPLES.md#waitforelementnottobevisible)

### `click`

Este método é utilizado para efetuar um clique em um elemento assim que estiver em um estado visível e habilitado para o clique.

[Exemplo](./EXAMPLES.md#click)

### `hoverAndClick`

Este método é utilizado para mover o mouse sobre o elemento assim que estiver presente no DOM e então efetuar um clique.

[Exemplo](./EXAMPLES.md#hoverAndClick)

### `fillFieldWithText`

Este método preenche um campo de input com um texto assim que estiver visível.

[Exemplo](./EXAMPLES.md#fillFieldWithText)

### `fillFieldWithTextAndPressEnter`

Este método preenche um campo de input com um texto assim que estiver visível e então simula a ação de pressionar a tecla ENTER do teclado. É utilizado em casos como fazer uma busca e pressionar ENTER, em vez de preencher o campo e clicar no botão de busca, por exemplo.

[Exemplo](./EXAMPLES.md#fillFieldWithTextAndPressEnter)

### `uploadFileIntoInputField`

Este método efetua o upload de um arquivo em um input de arquivos assim que estiver presente no DOM.

[Exemplo](./EXAMPLES.md#uploadFileIntoInputField)

### `clear`

Este método limpa o conteúdo de um campo de input assim que estiver visível.

[Exemplo](./EXAMPLES.md#clear)

### `clearFieldAndFillItWithText`

Este método limpa o conteúdo de um campo de input assim que estiver visível, então preenche o mesmo com um texto.

[Exemplo](./EXAMPLES.md#clearFieldAndFillItWithText)

### `tap`

Este método executa  a ação de toque em um elemento HTML capaz de eventos de toque/clique assim que estiver em um estado possível de toque/clique. Tal método é utilizado quando se está fazendo testes web _mobile_ em emuladores, por exemplo.

[Exemplo](./EXAMPLES.md#tap)

### `waitForTextToBePresentInElement`

Este método espera por um texto específico em um determinado elemento HTML.

[Exemplo](./EXAMPLES.md#waitfortexttobepresentinelement)

### `waitForTextNotToBePresentInElement`

Este método é o oposto do anterior, de tal forma que espera que um texto não esteja presente em um determinado elemento HTML.

[Exemplo](./EXAMPLES.md#waitfortextnottobepresentinelement)

### `waitForUrlToBeEqualToExpectedUrl`

Este método aguarda até que a URL seja igual a outra esperada. Este método é útil quando se quer executar ações em elementos apenas se estiver na URL correta.

[Exemplo](./EXAMPLES.md#waitforurltobeequaltoexpectedurl)

### `waitForUrlNotToBeEqualToExpectedUrl`

Este método aguarda até que a URL não seja igual a uma outra determinada URL. Este método é útil quando se quer continuar a executar ações em elementos apenas quando não estiver em uma URL específica.

[Exemplo](./EXAMPLES.md#waitforurlnottobeequaltoexpectedurl)

### `waitForUrlToContainString`

Este método aguarda até que a URL contenha um determinado texto. É utilizado quando se deseja fazer verificações baseadas na URL atual.

[Exemplo](./EXAMPLES.md#waitforurltocontainstring)

### `waitForUrlNotToContainString`

Este método aguarda até que a URL não contenha um determinado texto. É utilizado quando se deseja fazer verificações baseadas na URL atual.

[Exemplo](./EXAMPLES.md#waitforurlnottocontainstring)

### `scrollToElement`

Este método é usado para rolar a página até um elemento até que tal elemento esteja visível no DOM.

[Exemplo](./EXAMPLES.md#scrollToElement)

## Utilizando métodos que iniciam com 'wait' como verificações de teste

Alguns dos métodos disponíveis nesta biblioteca podem ser utilizados como verificações de teste. Isto significa que quando usando eles, você não necessariamente precisa adicionar uma verificação explícita, tal como `expect(avatar.isDisplayed()).toBe(true);`.

Ao utilizar a biblioteca `protractor-helper`, isso pode acontecer de forma implícita (ex.: `protractorHelper.waitForElementVisibility(avatar);`). Aqui, implícita significa que a se a função `waitForElementVisibility(avatar)` passar, quer dizer que o elemento está visível, ou seja, está sendo exibido.

Abaixo você vai encontrar a lista de métodos que podem ser utilizados como verificações de teste:

* `waitForElementPresence(element)`
* `waitForElementNotToBePresent(element)`
* `waitForElementVisibility(element)`
* `waitForElementNotToBeVisible(element)`
* `waitForTextToBePresentInElement(element, text)`
* `waitForTextNotToBePresentInElement(element, text)`
* `waitForUrlToBeEqualToExpectedUrl(expectedUrl)`
* `waitForUrlNotToBeEqualToExpectedUrl(expectedUrl)`
* `waitForUrlToContainString(string)`
* `waitForUrlNotToContainString(string)`

> Obs.: se você utilizar tais métodos como verificações de teste eles não contarão como verificações no relatório de execução dos testes. Porém, em caso de falha, uma mensagem clara será exibida para facilitar o entendimento do porquê o teste falhou. No fim das contas, relatórios de testes são normalmente úteis quando os testes estão falhando e precisamos entender o porquê. Se todos os testes estiverem verdes, não há motivo para se preocupar, ao menos não se eles tiverem sido implementados da maneira correta.

### Exemplos de falhas quando utilizando tais métodos como verificações

Vejamos como uma falha é exibida quando usando alguns desses métodos como verificações de teste.

* Falha ao usar o método `waitForElementPresence`:

```sh
Failed: element with locator 'By(css selector, *[id="foo"])' is not present.
```

* Falha ao usar o método `waitForElementVisibility`:

```sh
Failed: element with locator 'By(css selector, *[id="foo"])' is not visible.
```

* Falha ao usar o método `waitForTextToBePresentInElement`:

```sh
Failed: text 'foo' not present on element with locator 'By(css selector, h1)'.
```

> Como você pode verificar, as mensagens são claras e demonstram exatamente por que o teste falhou, tal como no exemplo anterior, onde um texto específico ('foo') não está presente em um elemento com o seletor CSS 'h1'.

## Recursos externos

Listamos aqui alguns recursos externos como postagens de blog as quais citam o `protractor-helper`.

- [Lançamento do protractor-helper v4 - _Breaking changes_](https://talkingabouttesting.com/2019/10/17/lancamento-do-protractor-helper-versao-4/)
- [Lançamento da versão 4.1.1 do protractor-helper - Definições de tipos nas assinaturas das funções](https://talkingabouttesting.com/2020/04/29/lancamento-do-protractor-helper-versao-4-1-1/)
- [Por que não se deve utilizar sleeps em testes automatizados](https://talkingabouttesting.com/2017/11/20/por-que-nao-se-deve-utilizar-sleeps-em-testes-automatizados/)

## Contribuindo

Veja as [orientações de contribuição](CONTRIBUTING.md).

## Código de conduta

Veja o [código de conduta](./CODE_OF_CONDUCT.md)

## Créditos

O **protractor-helper** foi criado por [Walmyr Filho](https://walmyr.dev) e é mantido em conjunto com o [Paulo Gonçalves](https://www.linkedin.com/in/paulo-goncalves/).

Siga eles no Twitter ([@walmyrlimaesilv](https://twitter.com/walmyrlimaesilv) e [@paulorgoncalves](https://twitter.com/paulorgoncalves)).

Agradecimentos ao [Lucas Amaral](https://www.linkedin.com/in/lopesdoamaral/), [Michiel Cuijpers](https://github.com/MichielCuijpers), [Ghazi Khan](https://codewithghazi.com/), [Pedro Hyvo](https://www.linkedin.com/in/pedrohyvo/), [Urvi Koladiya](https://github.com/cp-urvi-k) e [Zidrex Andag](https://www.linkedin.com/in/john-zidrex-andag-3285b31a7/) por contribuírem com o projeto.

---

[Licença MIT](/LICENSE)
