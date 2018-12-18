const EC = protractor.ExpectedConditions;

const constants = require("./constants_and_utils/constants");
const utils = require("./constants_and_utils/utils");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const getBodyElementFromCurrentBrowserOrBrowserInstance = function(
  browserInstance
) {
  const cssSelector = "body";

  if (browserInstance) {
    return browserInstance.element(by.css(cssSelector));
  } else {
    return browser.element(by.css(cssSelector));
  }
};

const openNewBrowserInTheSamePage = function(
  browser = requiredParam(openNewBrowserInTheSamePage, "browser")
) {
  return browser.forkNewDriverInstance(true);
};

const isCurrentUrlDifferentFromBaseUrl = function() {
  return browser.getCurrentUrl().then(url => {
    return url !== browser.baseUrl;
  });
};

const waitForElementPresence = function(
  htmlElement = utils.requiredParam(waitForElementPresence),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotPresentMessage(htmlElement)
) {
  browser.wait(EC.presenceOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBePresent = function(
  htmlElement = utils.requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_STILL_PRESENT_MESSAGE}`
) {
  browser.wait(
    EC.stalenessOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementVisibility = function(
  htmlElement = utils.requiredParam(waitForElementVisibility),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  browser.wait(
    EC.visibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementNotToBeVisible = function(
  htmlElement = utils.requiredParam(waitForElementNotToBeVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_STILL_VISIBLE_MESSAGE}`
) {
  browser.wait(
    EC.invisibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const clickWhenClickable = function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotClickableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.click();
};

const fillFieldWithTextWhenVisible = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.sendKeys(text);
};

const fillInputFieldWithFileWhenPresent = function(
  htmlElement = utils.requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = utils.requiredParam(
    fillInputFieldWithFileWhenPresent,
    "absolutePath"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotPresentMessage(htmlElement)
) {
  this.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.clearFieldWhenVisible(htmlElement, timeoutInMilliseconds, errorMessage);
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    text,
    timeoutInMilliseconds,
    errorMessage
  );
};

const tapWhenTappable = function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_NOT_TAPPABLE_MESSAGE}. ${
    constants.POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE
  } ${constants.OR_IT_MAY_BE_DISABLED_MESSAGE}`
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

const waitForTextToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextToBePresentInElement),
  text = utils.requiredParam(waitForTextToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' not present on ${
    constants.ELEMENT_WITH_LOCATOR_MESSAGE
  } '${htmlElement.parentElementArrayFinder.locator_}'`
) {
  browser.wait(
    EC.textToBePresentInElement(htmlElement, text),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForTextNotToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextNotToBePresentInElement),
  text = utils.requiredParam(waitForTextNotToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' is still present on ${
    constants.ELEMENT_WITH_LOCATOR_MESSAGE
  } '${htmlElement.parentElementArrayFinder.locator_}'`
) {
  browser.wait(
    EC.not(EC.textToBePresentInElement(htmlElement, text)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForUrlToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(
    waitForUrlToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL is different than expected URL: '${expectedUrl}'`
) {
  browser.wait(EC.urlIs(expectedUrl), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(
    waitForUrlNotToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL is equal to expected URL: '${expectedUrl}'`
) {
  browser.wait(
    EC.not(EC.urlIs(expectedUrl)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForUrlToContainString = function(
  string = utils.requiredParam(waitForUrlToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL does not contains the string '${string}'`
) {
  browser.wait(EC.urlContains(string), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToContainString = function(
  string = utils.requiredParam(waitForUrlNotToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL contains the string '${string}'`
) {
  browser.wait(
    EC.not(EC.urlContains(string)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const fillFieldWithTextWhenVisibleAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    text,
    timeoutInMilliseconds,
    errorMessage
  );
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    protractor.Key.ENTER,
    timeoutInMilliseconds,
    errorMessage
  );
};

const scrollToElementWhenVisible = function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(
  timeoutInMilliseconds = constants.DEFAULT_TIMEOUT_IN_MS
) {
  config.timeoutInMilliseconds = timeoutInMilliseconds;
};

module.exports = {
  getBodyElementFromCurrentBrowserOrBrowserInstance,
  openNewBrowserInTheSamePage,
  isCurrentUrlDifferentFromBaseUrl,
  waitForElementPresence,
  waitForElementNotToBePresent,
  waitForElementVisibility,
  waitForElementNotToBeVisible,
  clickWhenClickable,
  fillFieldWithTextWhenVisible,
  fillInputFieldWithFileWhenPresent,
  clearFieldWhenVisible,
  clearFieldWhenVisibleAndFillItWithText,
  tapWhenTappable,
  waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString,
  waitForUrlNotToContainString,
  fillFieldWithTextWhenVisibleAndPressEnter,
  scrollToElementWhenVisible,
  setTimeout
};
