# 4.1.9

- Update readme and github page title

# 4.1.8

- Minor fixes on ci flow

# 4.1.7

- Change peer dependencies and update dev dependency

# 4.1.6

- Improve test readability

# 4.1.5

- Update docs with missing item on summary

# 4.1.4

- Update link to external resources

# 4.1.3

- Update docs with external resources section

# 4.1.2

- Extract message to message builder, uses it on utils, and test it out

# 4.1.1

- Include missing file on files property on package.json

# 4.1.0

- Add type definition for all public methods to improve user's experience

# 4.0.14

- Tag v4.0.13 had been already created by mistake

# 4.0.13

- Fix `acorn` dependency security vulnerability

# 4.0.12

- Change CI from semaphore to github actions

# 4.0.11

- Move test constant to its own module

# 4.0.10

- Rearrange test sample app functions

# 4.0.9

- Remove duplication from sample test app

# 4.0.8

- Fix PR template

# 4.0.7

- Implement eslint basic config and fix some issues with `eslint --fix`

# 4.0.6

- Update package-lock to fix vulnerability issues

# 4.0.5

- Remove unnecessary keyword this from functions

# 4.0.4

- Increase code coverage

# 4.0.3

- Update contributing docs and fix changelog typo

# 4.0.2

- Delete not valid doc info

# 4.0.1

- Delete missing deprecation stuff

# 4.0.0

- Deprecate lots of functions and message arguments

# 3.8.0

- Implement `hoverAndClick` function and document it

# 3.7.12

- Update package-lock due to new version of selenium and related libraries, such as chromedriver
- Modularize deprecation related functions
- Improve modules' responsibilities and add new unit tests

# 3.7.11

- Add unit tests for `utils` functions.

# 3.7.9

- Add unit tests for `messageBuilder` functions.
- Move end-to-end tests to their own directory.

# 3.7.8

## GitHub Page

Yay, now [protractor-helper has a GitHub Page](https://wlsf82.github.io/protractor-helper/)! Thanks to [Paulo Gonçalves](https://www.npmjs.com/~paulogoncalves)!

## Deprecation

- Deprecate all the below functions with warnings in the console:

  - getBodyElementFromCurrentBrowserOrBrowserInstance
  - openNewBrowserInTheSamePage
  - clickWhenClickable
  - fillFieldWithTextWhenVisible
  - fillInputFieldWithFileWhenPresent
  - clearFieldWhenVisible
  - clearFieldWhenVisibleAndFillItWithText
  - tapWhenTappable
  - fillFieldWithTextWhenVisibleAndPressEnter
  - scrollToElementWhenVisible

- Include warnings in the console to remove the `errorMessage` argument from all wait functions.

- Include warnings in the console about two functions that will be removed on version 4.x.x.

- Add documentation about deprecation warnings in preparation for version 4.x.x.

## JavaScript files

- Remove code duplication.

## Package

- Reduce package size.

# 3.7.7

## package.json

- Update lib's patch version

## package-lock.json

- Update lib's version on package-lock file

## Documentation

- Update changelog with info about the latest patch version

## JavaScript files

- Minor changes with prettier
- Fix setTimeout method
- Remove undefined parameters from utils

# 3.7.4

## package.json

- Update prettier config to allow longer lines of code
- Update lib's patch version
- Update peerDependencies to be less than protractor 6

## package-lock.json

- Update lib's version on package-lock file
- Update dependencies on package-lock file

## Documentation

- Update changelog with info about the latest patch version

## JavaScript files

- Move sample app to test directory since it is only used by tests
- Move directory only used by src files to src directory
- Prettify files based on new prettier config
- Update main file to use files from src
- Separate other functions into misc file
- Separate clickers and tapper functions into their on file
- Separate input field interaction functions into their on file
- Separate waiter functions into their on file

# 3.7.3

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update changelog with info about the latest patch version

## JavaScript files

- Update main file to use message builder
- Remove from utils functions moved to message builder
- Create message builder to address issue #19

# 3.7.2

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- move available helper function to its right place on readme
- update changelog with info about the latest patch version

# 3.7.1

## package.json

- update package keywords with "testing"
- update package description to a better one
- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Tests

- update protractor config to help on debugging
- update tests that upload of file to use file input field

## Sample app

- update sample app to improve testability

## Documentation

- Update list of available helper functions with the "new" ones
- minor update on examples notes
- update basic example to use the "new" functions
- update number of tests executed on contributing.md file
- update change log with info about the latest patch version
- update previous version on changelog with missing info
- update readme and examples with info about "new" functions

# 3.7.0

## "New" functions

- update lib with "new" functions

Note: none of the existing functions were removed, but some functions were duplicated with shorter names to improve readability. The old ones will be deprecated in the future.

See below the list of "new" functions and their equivalents:

- `click` (equivalent to `clickWhenClickable`)
- `fillFieldWithText` (equivalent to `fillFieldWithTextWhenVisible`)
- `uploadFileIntoInputField` (equivalent to `fillInputFieldWithFileWhenPresent`)
- `clear` (equivalent to `clearFieldWhenVisible`)
- `clearFieldAndFillItWithText` (equivalent to `clearFieldWhenVisibleAndFillItWithText`)
- `tap` (equivalent to `tapWhenTappable`)
- `fillFieldWithTextAndPressEnter` (equivalent to `fillFieldWithTextWhenVisibleAndPressEnter`)
- `scrollToElement` (equivalent to `scrollToElementWhenVisible`)

> Note: the only difference between the "new" functions and their equivalents is that the "new" ones have no optional `errorMessage` argument. The default message provided by the lib is what is shown in case of a test failure.

## Tests

- restructure tests and add new test cases

## Documentation

- update change log with info about the latest minor version
- TODO: update documentation for all "new" functions

## package.json

- update lib's minor version

## package-lock.json

- update lib's version on package-lock file

# 3.6.21

## Breaking changes coming soon

- soon protractor-helper will work using async/await

> **how to** migrate tests to use async/await with the protractor-helper library will be available in the documentation when the changes are published.

## Deprecations coming soon

- Two functions will be deprecated soon (see below)
  - `getBodyElementFromCurrentBrowserOrBrowserInstance`
  - `openNewBrowserInTheSamePage`

> This change will happen for the library to focus only on providing an easy way for software engineers to create robust end-to-end tests.

## package.json

- update lib's patch version
- update protractor version from 5.4.1 to 5.4.2

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- prettify README to keep the standard

## Test files

- remove unnecessary flag to use protractor in headless mode
- replaced `ignoreSynchronization` with `waitForAngularEnabled`

# 3.6.20

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update credits section on reame file with new contributor

# 3.6.19

## package.json

- update lib's patch version
- update pretest script to not update geckodriver before tests

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js

- simplify method `fillFieldWithTextWhenVisibleAndPressEnter`

# 3.6.18

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- minor updates on readme due to improvements on error messages

## index.js, constants.js and utils.js

- minor improvements on error messages (punctuation related)

# 3.6.17

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js, constants.js and utils.js

- improve error message when using click or tap functions

# 3.6.16

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update main lib's description

# 3.6.15

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update README.md file due to changes in the index.js file

# index.js and constants_and_utils/utils.js

- improve messages when tests fail

# 3.6.14

## package.json

- update lib's patch version
- update npm scripts
- add prettier and pre-commit dependencies

## package-lock.json

- update lib's version on package-lock file
- update dependencies

## Documentation

- update change log with info about the latest patch version
- add new badges on README.md file

# General

- prettify files

# 3.6.13

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- minor addition to CONTRIBUTING.md file

# 3.6.12

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## Related to contributions

- minor fix on ISSUE_TEMPLATE.md file

# 3.6.11

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## Related to contributions

- add templates for 'pull requests' and 'issues'

# 3.6.10

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- fix typo on README file

# 3.6.9

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- minor adjustment on README to improve readability

## Tests

- change test conf to execute tests in random order
- add test to setTimeout method.

# 3.6.8

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js

- fix setTimout function affected by refactoring

# 3.6.7

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update steps to contribute section on contributing file

# 3.6.6

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js, constants.js and utils.js

- refactor: split files into main (index), constants and utils

# 3.6.5

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js

- reuse existing function to avoid code duplication

# 3.6.4

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

## index.js

- remove unnecessary code duplication

# 3.6.3

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- fixes on changelog

# 3.6.2

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- prettify markdown files to improve readability

# 3.6.1

## package.json

- fix lib's version

## package-lock.json

- fix lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

# 3.6.0

## package.json

- update lib's minor version
- add the keyword 'e2e' on package.json

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest minor version
- documentation refactoring (thanks to Paulo Gonçalves)

## index.js

- prettify main file to keep the standard
- add new method 'setTimeout' and other minor changes

# 3.5.7

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file
- update package-lock file

## Documentation

- update change log with info about the latest patch version

# 3.5.6

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file
- update package-lock

## Documentation

- update change log with info about the latest patch version

## index.js

- minor improvements on messages of two functions

# 3.5.5

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update readme file with missing punctuation
- update change log with info about the latest patch version

# 3.5.4

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update readme file with credits section
- update change log with info about the latest patch version

# 3.5.3

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- minor adjustment on documentation of specific function
- update change log with info about the latest patch version

## index.js

- replace the word 'value' by 'text' in some of the main functions
- prettify main file to keep the standard
- update main file with new private function (requiredParam)

# 3.5.2

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update readme with important info about openNewBrowserInTheSamePage

# 3.5.1

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version
- update change log with missing info from last version

## sample.spec.js file

- update pend description of skipped test and its implementation

# 3.5.0

## package.json

- update lib's minor version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest minor version

## js files

- prettier js files
- included the method `scrollToElementWhenVisible`

# 3.4.5

## package.json

- update lib's patch version

## package-lock.json

- update lib's version on package-lock file

## Documentation

- update change log with info about the latest patch version

# 3.4.4

## package.json

- update lib's patch version
- update protractor dev dependency version

## package-lock.json

- track package-lock.json

## Documentation

- update change log with info about the latest patch version

## General

- prettify code

# 3.4.3

## package.json

- update lib's patch version

## Documentation

- update change log with info about the latest patch version
- update tests' results on readme file due to new added test

# 3.4.2

## package.json

- update lib's patch version

## Documentation

- update change log with info about the latest patch version

# 3.4.1

## Documentation

- update change log with info about the latest patch version

# 3.4.0

## package.json

- update lib's minor version

## index.js

- update main file with new method (clearFieldWhenVisibleAndFillItWithText)

## test/sample.spec.js

- add test for new method

## Documentation

- update readme file with information about new method
- minor gramar fix on readme file
- update change log with info about the latest minor version

# 3.3.5

## package.json

- update lib's patch version

## Documentation

- update read me file with build status on lib tests section
- update change log with info about the latest patch version

# 3.3.4

## package.json

- update lib's patch version

## test/sample.spec.js

- fix bad smells on test code found by sonar cloud

## sampleApp/index.html

- fix bug on sample app html file (missing alt on image tag)

## Documentation

- update change log with info about the latest patch version

# 3.3.3

## package.json

- update lib's patch version due to failure on previous one

## Documentation

- minor fix on readme file
- update change log with info about the latest patch version

# 3.3.2

## package.json

- update lib's patch version due to failure on previous one

## Documentation

- update change log with info about the latest patch version

# 3.3.1

## package.json

- update lib's patch version
- update package.json file with author's website

## Documentation

- add missing license file
- update change log with info about the latest patch version

# 3.3.0

## package.json

- update lib's minor version

## index.js

- update main file with new method

## test/sample.spec.js

- add new test for new method

## Documentation

- update readme file with new method
- minor updates on locators on how to use section
- update change log with info about the latest minor version
- update change log to put information in the right place
- minor updates on change log file

# 3.2.10

## package.json

- update lib's patch version

## index.js

- update default message of some helper functions

## Documentation

- update readme file on example of test failures section
- minor update on contribution section of readme file
- update change log with info about the latest patch version

# 3.2.9

## package.json

- update lib's patch version

## Documentation

- add contribution section on README file
- update change log with info about the latest patch version

# 3.2.8

## package.json

- update lib's patch version

## Documentation

- remove unnecessary word from text
- update change log with info about the latest patch version

# 3.2.7

From version 3.2.7 this change log will be maintained as a way of making users aware of changes in all future versions of this library.

## package.json

- update protractor version on dev dependencies
- update lib patch version

## Documentation

- update basic example of the lib with implicit expectation
- update docs with info on implicit expectations and failures
