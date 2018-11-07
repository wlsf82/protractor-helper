Contributing
============

You can contribute in the following ways:

- Finding and reporting bugs
- Fixing bugs or implementing features
- Improving the documentation

## Steps to contribute

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your computer;
2. Install the dev dependencies using NPM: `npm install`;
3. Make the necessary changes and ensure that the tests are passing using `npm test` (implement new tests if needed);
4. Send a [pull request](https://help.github.com/articles/about-pull-requests/) and I'll be happy to review it 🙌;
5. Wait for feedback or approval (this should not take too long).

**Pull requests that do not pass automated tests will not be reviewed**

## Build status

After changes to master branch all tests are executed and the build status can be seen below.

[![Build Status](https://semaphoreci.com/api/v1/wlsf82/protractor-helper/branches/master/badge.svg)](https://semaphoreci.com/wlsf82/protractor-helper)

## Library tests

A sample application using HTML and CSS is included in this repo in order to allow testing each of the lib's methods.

Protractor is added as a dev dependency to allow running the tests.

If all tests have passed you should see a result like this:

```sh
Started
..................


21 specs, 0 failures
Finished in 2.968 seconds

[23:28:40] I/local - Shutting down selenium standalone server.
[23:28:40] I/launcher - 0 instance(s) of WebDriver still running
[23:28:40] I/launcher - chrome #01 passed
```

[Back to section 'Contributing' on README.md](./README.md#contributing)