const constants = require("./constants");

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

function getParameterIsMissingForFunctionMessage(param, fn) {
  return `Parameter '${param}' is missing at function '${
    fn.name
  }()'. \nFill the required parameter.`;
}

module.exports = {
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
  getParameterIsMissingForFunctionMessage
};
