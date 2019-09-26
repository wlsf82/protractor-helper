const constants = require("./constants");

function functionWillBeDeprecated(functionName) {
  return `Function '${functionName}' will be deprecated in version 4.0.0!`;
}

function getDefaultCurrentUrlContainsTheString(string) {
  return `current URL contains the string '${string}'.`;
}

function getDefaultCurrentUrlDoesNotContainStringMessage(string) {
  return `current URL does not contains the string '${string}'.`;
}

function getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(expectedUrl) {
  return `current URL is different than expected URL: '${expectedUrl}'.`;
}

function getDefaultCurrentUrlIsEqualToExpectedUrlMessage(expectedUrl) {
  return `current URL is equal to expected URL: '${expectedUrl}'.`;
}

function getDefaultIsNotClickableMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_NOT_CLICKABLE_MESSAGE
  }. ${constants.POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}, ${constants.OR_IT_MAY_BE_DISABLED_MESSAGE}.`;
}

function getDefaultIsNotPresentMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_NOT_PRESENT_MESSAGE
  }.`;
}

function getDefaultIsNotVisibleMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_NOT_VISIBLE_MESSAGE
  }.`;
}

function getDefaultIsStillPresentMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_STILL_PRESENT_MESSAGE
  }.`;
}

function getDefaultIsNotTappableMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_NOT_TAPPABLE_MESSAGE
  }. ${constants.POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}, ${constants.OR_IT_MAY_BE_DISABLED_MESSAGE}.`;
}

function getDefaultIsStillVisibleMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_}' ${
    constants.IS_STILL_VISIBLE_MESSAGE
  }.`;
}

function getDeafultTextTextIsStillPresentOnElementMessage(htmlElement, text) {
  return `text '${text}' is still present on ${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }'.`;
}

function getDefaultTextTextNotPresentOnElementMessage(htmlElement, text) {
  return `text '${text}' not present on ${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }'.`;
}

function getReadMoreMessage() {
  return "[Read more on www.npmjs.com/package/protractor-helper#preparation-to-next-major-version]";
}

function pleaseUseNewFunction(functionName) {
  return ` Please use the new '${functionName}' function instead!`;
}

function removeErrorMessageArgFromFunction(functionName) {
  return `Remove the 'errorMessage' argument from the function '${functionName}'!`;
}

module.exports = {
  functionWillBeDeprecated,
  getDefaultCurrentUrlContainsTheString,
  getDefaultCurrentUrlDoesNotContainStringMessage,
  getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage,
  getDefaultCurrentUrlIsEqualToExpectedUrlMessage,
  getDefaultIsNotClickableMessage,
  getDefaultIsNotPresentMessage,
  getDefaultIsNotVisibleMessage,
  getDefaultIsStillPresentMessage,
  getDefaultIsNotTappableMessage,
  getDefaultIsStillVisibleMessage,
  getDeafultTextTextIsStillPresentOnElementMessage,
  getDefaultTextTextNotPresentOnElementMessage,
  getReadMoreMessage,
  pleaseUseNewFunction,
  removeErrorMessageArgFromFunction
};
