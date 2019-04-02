const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const getBodyElementFromCurrentBrowserOrBrowserInstance = function(browserInstance) {
  const cssSelector = "body";

  if (browserInstance) {
    return browserInstance.element(by.css(cssSelector));
  } else {
    return browser.element(by.css(cssSelector));
  }
};

const openNewBrowserInTheSamePage = function(browser = requiredParam(openNewBrowserInTheSamePage, "browser")) {
  return browser.forkNewDriverInstance(true);
};

const isCurrentUrlDifferentFromBaseUrl = function() {
  return browser.getCurrentUrl().then(url => {
    return url !== browser.baseUrl;
  });
};

const scrollToElementWhenVisible = function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  waiters.waitForElementVisibility(htmlElement, timeoutInMilliseconds, errorMessage);
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const scrollToElement = function(
  htmlElement = utils.requiredParam(scrollToElement),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  waiters.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(timeoutInMilliseconds = constants.DEFAULT_TIMEOUT_IN_MS) {
  config.timeoutInMilliseconds = timeoutInMilliseconds;
};

module.exports = {
  getBodyElementFromCurrentBrowserOrBrowserInstance,
  openNewBrowserInTheSamePage,
  isCurrentUrlDifferentFromBaseUrl,
  scrollToElementWhenVisible,
  scrollToElement,
  setTimeout
};
