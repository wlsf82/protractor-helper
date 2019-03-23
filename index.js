const EC = protractor.ExpectedConditions;

const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
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
  errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
) {
  browser.wait(EC.presenceOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBePresent = function(
  htmlElement = utils.requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsStillPresentMessage(htmlElement)
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
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
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
  errorMessage = messageBuilder.getDefaultIsStillVisibleMessage(htmlElement)
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
  errorMessage = messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.click();
};

const click = function(
  htmlElement = utils.requiredParam(click),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  htmlElement.click();
};

const fillFieldWithTextWhenVisible = function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.sendKeys(text);
};

const fillFieldWithText = function(
  htmlElement = utils.requiredParam(fillFieldWithText),
  text = utils.requiredParam(fillFieldWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
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
  errorMessage = messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
) {
  this.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const uploadFileIntoInputField = function(
  htmlElement = utils.requiredParam(uploadFileIntoInputField),
  absolutePath = utils.requiredParam(uploadFileIntoInputField, "absolutePath"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotPresentMessage(
    htmlElement
  );

  this.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.clear();
};

const clear = function(
  htmlElement = utils.requiredParam(clear),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.waitForElementVisibility(
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
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    text,
    timeoutInMilliseconds,
    errorMessage
  );
};

const clearFieldAndFillItWithText = function(
  htmlElement = utils.requiredParam(clearFieldAndFillItWithText),
  text = utils.requiredParam(clearFieldAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.clear(htmlElement, timeoutInMilliseconds);
  this.fillFieldWithText(htmlElement, text, timeoutInMilliseconds);
};

const tapWhenTappable = function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement)
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

const tap = function(
  htmlElement = utils.requiredParam(tap),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotTappableMessage(
    htmlElement
  );

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
  errorMessage = messageBuilder.getDefaultTextTextNotPresentOnElementMessage(
    htmlElement,
    text
  )
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
  errorMessage = messageBuilder.getDeafultTextTextIsStillPresentOnElementMessage(
    htmlElement,
    text
  )
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
  errorMessage = messageBuilder.getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(
    expectedUrl
  )
) {
  browser.wait(EC.urlIs(expectedUrl), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(
    waitForUrlNotToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlIsEqualToExpectedUrlMessage(
    expectedUrl
  )
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
  errorMessage = messageBuilder.getDefaultCurrentUrlDoesNotContainStringMessage(
    string
  )
) {
  browser.wait(EC.urlContains(string), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToContainString = function(
  string = utils.requiredParam(waitForUrlNotToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultCurrentUrlContainsTheString(string)
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
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    text + protractor.Key.ENTER,
    timeoutInMilliseconds,
    errorMessage
  );
};

const fillFieldWithTextAndPressEnter = function(
  htmlElement = utils.requiredParam(fillFieldWithTextAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.fillFieldWithText(
    htmlElement,
    text + protractor.Key.ENTER,
    timeoutInMilliseconds
  );
};

const scrollToElementWhenVisible = function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const scrollToElement = function(
  htmlElement = utils.requiredParam(scrollToElement),
  timeoutInMilliseconds = config.timeoutInMilliseconds
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
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
  click,
  fillFieldWithTextWhenVisible,
  fillFieldWithText,
  fillInputFieldWithFileWhenPresent,
  uploadFileIntoInputField,
  clearFieldWhenVisible,
  clear,
  clearFieldWhenVisibleAndFillItWithText,
  clearFieldAndFillItWithText,
  tapWhenTappable,
  tap,
  waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString,
  waitForUrlNotToContainString,
  fillFieldWithTextWhenVisibleAndPressEnter,
  fillFieldWithTextAndPressEnter,
  scrollToElementWhenVisible,
  scrollToElement,
  setTimeout
};
