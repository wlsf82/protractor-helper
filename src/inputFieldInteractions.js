const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const fillFieldWithText = function(
  htmlElement = utils.requiredParam(fillFieldWithText),
  text = utils.requiredParam(fillFieldWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  htmlElement.sendKeys(text);
};

const uploadFileIntoInputField = function(
  htmlElement = utils.requiredParam(uploadFileIntoInputField),
  absolutePath = utils.requiredParam(uploadFileIntoInputField, "absolutePath"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement);

  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const clear = function(htmlElement = utils.requiredParam(clear), timeoutInMilliseconds = config.timeoutInMilliseconds) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  htmlElement.clear();
};

const clearFieldAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.clear(htmlElement, timeoutInMilliseconds);
  this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.fillFieldWithText(htmlElement, text + protractor.Key.ENTER, timeoutInMilliseconds);
};

module.exports = {
  fillFieldWithText,
  uploadFileIntoInputField,
  clear,
  clearFieldAndFillItWithText,
  fillFieldWithTextAndPressEnter
};
