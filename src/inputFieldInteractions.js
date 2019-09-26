const deprecation = require("./constants_and_utils/deprecation");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const fillFieldWithTextWhenVisible = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("fillFieldWithTextWhenVisible", "fillFieldWithText");
  this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

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
  htmlElement.sendKeys(text);
};

const fillInputFieldWithFileWhenPresent = function(
  htmlElement = utils.requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = utils.requiredParam(fillInputFieldWithFileWhenPresent, "absolutePath"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("fillInputFieldWithFileWhenPresent", "uploadFileIntoInputField");
  this.uploadFileIntoInputField(htmlElement, absolutePath, timeoutInMilliseconds);
};

const uploadFileIntoInputField = function(
  htmlElement = utils.requiredParam(uploadFileIntoInputField),
  absolutePath = utils.requiredParam(uploadFileIntoInputField, "absolutePath"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement);

  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("clearFieldWhenVisible", "clear");
  this.clear(htmlElement, timeoutInMilliseconds);
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
  htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("clearFieldWhenVisibleAndFillItWithText", "clearFieldAndFillItWithText");
  this.clearFieldAndFillItWithText(htmlElement, text, timeoutInMilliseconds);
};

const clearFieldAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  this.clear(htmlElement, timeoutInMilliseconds);
  this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextWhenVisibleAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("fillFieldWithTextWhenVisibleAndPressEnter", "fillFieldWithTextAndPressEnter");
  this.fillFieldWithTextAndPressEnter(htmlElement, text, timeoutInMilliseconds);
};

const fillFieldWithTextAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
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
