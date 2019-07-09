const defaultTimeoutInMs = require("./constants_and_utils/constants").DEFAULT_TIMEOUT_IN_MS;
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const getBodyElementFromCurrentBrowserOrBrowserInstance = function(browserInstance) {
  const cssSelector = "body";

  utils.obsoleteFunction("getBodyElementFromCurrentBrowserOrBrowserInstance");
  if (browserInstance) {
    return browserInstance.element(by.css(cssSelector));
  }
  return browser.element(by.css(cssSelector));
};

const openNewBrowserInTheSamePage = function(browser = requiredParam(openNewBrowserInTheSamePage, "browser")) {
  utils.obsoleteFunction("openNewBrowserInTheSamePage");
  return browser.forkNewDriverInstance(true);
};

const isCurrentUrlDifferentFromBaseUrl = function() {
  return browser.getCurrentUrl().then(url => {
    return url !== browser.baseUrl;
  });
};

const scrollToElementWhenVisible = function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  utils.replaceObsoleteFunction("scrollToElementWhenVisible", "scrollToElement");
  this.scrollToElement(htmlElement, timeoutInMilliseconds);
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
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(timeoutInMilliseconds = defaultTimeoutInMs) {
  utils.timeout.timeoutInMilliseconds = timeoutInMilliseconds;
};

module.exports = {
  getBodyElementFromCurrentBrowserOrBrowserInstance,
  openNewBrowserInTheSamePage,
  isCurrentUrlDifferentFromBaseUrl,
  scrollToElementWhenVisible,
  scrollToElement,
  setTimeout
};
