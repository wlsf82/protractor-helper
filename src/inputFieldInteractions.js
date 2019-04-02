const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const fillFieldWithTextWhenVisible = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  waiters.waitForElementVisibility(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(text);
};

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

const fillInputFieldWithFileWhenPresent = function(
  htmlElement = utils.requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = utils.requiredParam(fillInputFieldWithFileWhenPresent, "absolutePath"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
) {
  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
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

const clearFieldWhenVisible = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  waiters.waitForElementVisibility(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.clear();
};

const clear = function(htmlElement = utils.requiredParam(clear), timeoutInMilliseconds = config.timeoutInMilliseconds) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.clearFieldWhenVisible(htmlElement, timeoutInMilliseconds, errorMessage);
  this.fillFieldWithTextWhenVisible(htmlElement, text, timeoutInMilliseconds, errorMessage);
};

const clearFieldAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.clear(htmlElement, timeoutInMilliseconds);
  this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextWhenVisibleAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.fillFieldWithTextWhenVisible(htmlElement, text + protractor.Key.ENTER, timeoutInMilliseconds, errorMessage);
};

const fillFieldWithTextAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.fillFieldWithText(htmlElement, text + protractor.Key.ENTER, timeoutInMilliseconds);
};

module.exports = {
  fillFieldWithTextWhenVisible,
  fillFieldWithText,
  fillInputFieldWithFileWhenPresent,
  uploadFileIntoInputField,
  clearFieldWhenVisible,
  clear,
  clearFieldWhenVisibleAndFillItWithText,
  clearFieldAndFillItWithText,
  fillFieldWithTextWhenVisibleAndPressEnter,
  fillFieldWithTextAndPressEnter
};
