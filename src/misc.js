const defaultTimeoutInMs = require("./constants_and_utils/constants").DEFAULT_TIMEOUT_IN_MS;
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const isCurrentUrlDifferentFromBaseUrl = function() {
  return browser.getCurrentUrl().then(url => url !== browser.baseUrl);
};

const scrollToElement = function(
  htmlElement = utils.requiredParam(scrollToElement),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  return browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(timeoutInMilliseconds = defaultTimeoutInMs) {
  utils.timeout.timeoutInMilliseconds = timeoutInMilliseconds;
};

module.exports = {
  isCurrentUrlDifferentFromBaseUrl,
  scrollToElement,
  setTimeout
};
