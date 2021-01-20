# Contribuindo

🌏 [Inglês](../CONTRIBUTING.md)

Você pode contribuir das seguintes formas:

- Encontrando e reportando bugs
- Corrigindo bugs ou implementando novas funcionalidades
- Melhorando a documentação
- Melhorando a estruturas do código

## Passos para contribuir

1. Faça um [*fork*](https://docs.github.com/pt/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) deste repositório na sua conta do Github para sua conta e então [clone](https://docs.github.com/pt/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) para seu computador;
2. Instale as dependências de desenvolvimento usando NPM: `npm install`;
3. Faça as alterações necessárias e certifique-se de que os testes estão passando usando o script `npm test` (implemente novos testes se necessário);
4. Envie um [*pull request*](https://docs.github.com/pt/free-pro-team@latest/github/collaborating-with-issues-and-pull-requests/about-pull-requests) e eu ficarei feliz em revisar 🙌;
5. Aguarde *feedback* ou aprovação (não deve demorar muito).

> *Pull requests* que não passarem na análise estática de código e testes automatizados nas [*Github Actions*](https://github.com/wlsf82/protractor-helper/actions) e verificação de qualidade de código no [*Better Code Hub*](https://bettercodehub.com/) não serão revisados.

## Status do Build

Após mudanças no *branch master*, todos os testes são executados e o *status* do *build* pode ser visto, conforme abaixo.

[![Build Status](https://github.com/wlsf82/protractor-helper/workflows/Continuous%20Integration/badge.svg)](https://github.com/wlsf82/protractor-helper/actions)

## Estilo de código

Usamos a configuração básica do ESLint como nosso guia de estilo de código junto com o Prettier.

Execute `npm run lint` para verificar o código fonte e arquivos de teste.

Execute `npm run lint:fix` para corrigir automaticamente os problemas listados no código e arquivos de teste.

## Testes

Estão disponíveis testes unitários e *end-to-end* para exercitar o código desta biblioteca.

Para testes unitários, usamos o Jasmine.

Para os testes *end-to-end*, usamos o Protractor, a própria biblioteca protractor-helper e uma aplicação exemplo, usando HTML, CSS e Javascript, para que rodemos os testes nela. Esta aplicação está inclusa no repositório.

Execute `npm t` para rodar os testes.

Se todos os testes passarem, você deve ver um resutado como esse:

```sh
$ npm t

> protractor-helper@4.0.4 pretest /Users/walmyr/www/protractor-helper
> webdriver-manager update --gecko false

[02:28:41] I/update - chromedriver: file exists /Users/walmyr/www/protractor-helper/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_77.0.3865.40.zip
[02:28:41] I/update - chromedriver: unzipping chromedriver_77.0.3865.40.zip
[02:28:41] I/update - chromedriver: setting permissions to 0755 for /Users/walmyr/www/protractor-helper/node_modules/protractor/node_modules/webdriver-manager/selenium/chromedriver_77.0.3865.40
[02:28:41] I/update - chromedriver: chromedriver_77.0.3865.40 up to date
[02:28:41] I/update - selenium standalone: file exists /Users/walmyr/www/protractor-helper/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar
[02:28:41] I/update - selenium standalone: selenium-server-standalone-3.141.59.jar up to date

> protractor-helper@4.0.4 test /Users/walmyr/www/protractor-helper
> jasmine test/spec/*.spec.js && protractor test/e2e/protractor.conf.js

Randomized with seed 67067
Started
..............


14 specs, 0 failures
Finished in 0.017 seconds
Randomized with seed 67067 (jasmine --random=true --seed=67067)
[02:28:41] I/launcher - Running 1 instances of WebDriver
[02:28:41] I/direct - Using ChromeDriver directly...
Randomized with seed 09749
Started
........................................


40 specs, 0 failures
Finished in 3.681 seconds

Randomized with seed 09749
[02:28:45] I/launcher - 0 instance(s) of WebDriver still running
[02:28:45] I/launcher - chrome #01 passed
```

[Voltar para a seção 'Contribuindo' no README.md](README.md#contribuindo)
