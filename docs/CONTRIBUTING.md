# Contributing

You can contribute in the following ways:

- Finding and reporting bugs
- Fixing bugs or implementing new features
- Improving the documentation
- Improving the code structure

## Steps to contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your computer;
2. Install the dev dependencies using NPM: `npm install`;
3. Make the necessary changes and ensure that the tests are passing using `npm test` (implement new tests if needed);
4. Send a [pull request](https://help.github.com/articles/about-pull-requests/) and I'll be happy to review it 🙌;
5. Wait for feedback or approval (this should not take too long).

> Pull requests that do not pass the automated tests on [SemaphoreCI](http://semaphoreci.com) and the code quality verification on [Better Code Hub](https://bettercodehub.com/) will not be reviewed

## Build status

After changes to master branch all tests are executed and the build status can be seen below.

[![Build Status](https://semaphoreci.com/api/v1/wlsf82/protractor-helper/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/protractor-helper)

## Library tests

There are unit and end-to-end tests available to exercise the librariy's code.

For the unit tests, we use Jasmine.

For the end-to-end tests, we use Protractor and the protractor-helper lib itself, and a sample application using HTML, CSS, and JS is included in the repo in order for such tests to run against.

Run `npm t` to run the tests.

If all tests have passed you should see a result like this:

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

[Back to section 'Contributing' on README.md](../README.md#contributing)
