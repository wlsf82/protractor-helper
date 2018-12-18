const EC = protractor.ExpectedConditions;

const constants = require("./constants");

function getDefaultIsNotClickableMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_NOT_CLICKABLE_MESSAGE}. ${
    constants.POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE
  } ${constants.OR_IT_MAY_BE_DISABLED_MESSAGE}`;
}

function getDefaultIsNotPresentMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_NOT_PRESENT_MESSAGE}`;
}

function getDefaultIsNotVisibleMessage(htmlElement) {
  return `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_NOT_VISIBLE_MESSAGE}`;
}

function requiredParam(
  functionWithoutParam,
  requiredParameter = "htmlElement"
) {
  const requiredParamError = new Error(
    `Parameter '${requiredParameter}' is missing at function '${
      functionWithoutParam.name
    }()'. \nFill the required parameter.`
  );
  Error.captureStackTrace(requiredParamError, functionWithoutParam);
  throw requiredParamError;
}

function waitForElementToBeClickable(
  htmlElement,
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotClickableMessage(htmlElement)
) {
  browser.wait(
    EC.elementToBeClickable(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
}

module.exports = {
  getDefaultIsNotClickableMessage,
  getDefaultIsNotPresentMessage,
  getDefaultIsNotVisibleMessage,
  requiredParam,
  waitForElementToBeClickable
};
