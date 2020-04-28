const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const fillFieldWithText = function(
  htmlElement = utils.requiredParam(fillFieldWithText),
  text = utils.requiredParam(fillFieldWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  return htmlElement.sendKeys(text);
};

const uploadFileIntoInputField = function(
  htmlElement = utils.requiredParam(uploadFileIntoInputField),
  absolutePath = utils.requiredParam(uploadFileIntoInputField, "absolutePath"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement);

  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  return htmlElement.sendKeys(absolutePath);
};

const clear = function(
  htmlElement = utils.requiredParam(clear),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  return htmlElement.clear();
};

const clearFieldAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  clear(htmlElement, timeoutInMilliseconds);
  return fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return fillFieldWithText(htmlElement, text + protractor.Key.ENTER, timeoutInMilliseconds);
};

module.exports = {
  fillFieldWithText,
  uploadFileIntoInputField,
  clear,
  clearFieldAndFillItWithText,
  fillFieldWithTextAndPressEnter
};
