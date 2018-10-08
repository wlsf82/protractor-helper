const EC = protractor.ExpectedConditions;

const DEFAULT_TIMEOUT_IN_MS = 5000;

const ELEMENT_WITH_LOCATOR_MESSAGE = "element with locator";
const IS_NOT_CLICKABLE_MESSAGE = "is not clickable";
const IS_NOT_PRESENT_MESSAGE = "is not present";
const IS_NOT_TAPPABLE_MESSAGE = "is not tappable";
const IS_NOT_VISIBLE_MESSAGE = "is not visible";
const IS_STILL_PRESENT_MESSAGE = "is still present";
const IS_STILL_VISIBLE_MESSAGE = "is still visible";
const POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE =
  "Possibly it's not present or visible.";

function getDefaultIsNotPresentMessage(htmlElement) {
  return `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_NOT_PRESENT_MESSAGE}`;
}

function getDefaultIsNotVisibleMessage(htmlElement) {
  return `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_NOT_VISIBLE_MESSAGE}`;
}

function getDefaultIsNotClickableMessage(htmlElement) {
  return `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_NOT_CLICKABLE_MESSAGE}. ${POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}`;
}

function waitForElementToBeClickable(
  htmlElement,
  message = getDefaultIsNotClickableMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
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
  htmlElement = requiredParam(waitForElementPresence),
  message = getDefaultIsNotPresentMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.presenceOf(htmlElement), timeout, message);
};

const waitForElementNotToBePresent = function(
  htmlElement = requiredParam(waitForElementNotToBePresent),
  message = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_STILL_PRESENT_MESSAGE}`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.stalenessOf(htmlElement), timeout, message);
};

const waitForElementVisibility = function(
  htmlElement = requiredParam(waitForElementVisibility),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.visibilityOf(htmlElement), timeout, message);
};

const waitForElementNotToBeVisible = function(
  htmlElement = requiredParam(waitForElementNotToBeVisible),
  message = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_STILL_VISIBLE_MESSAGE}`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.invisibilityOf(htmlElement), timeout, message);
};

const clickWhenClickable = function(
  htmlElement = requiredParam(clickWhenClickable),
  message = getDefaultIsNotClickableMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  waitForElementToBeClickable(htmlElement, message, timeout);
  htmlElement.click();
};

const fillFieldWithTextWhenVisible = function(
  htmlElement = requiredParam(fillFieldWithTextWhenVisible),
  value = requiredParam(fillFieldWithTextWhenVisible, "value"),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.waitForElementVisibility(htmlElement, message, timeout);
  htmlElement.sendKeys(value);
};

const fillInputFieldWithFileWhenPresent = function(
  htmlElement = requiredParam(fillInputFieldWithFileWhenPresent),
  value = requiredParam(fillInputFieldWithFileWhenPresent, "value"),
  message = getDefaultIsNotPresentMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.waitForElementPresence(htmlElement, message, timeout);
  htmlElement.sendKeys(value);
};

const clearFieldWhenVisible = function(
  htmlElement = requiredParam(clearFieldWhenVisible),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.waitForElementVisibility(htmlElement, message, timeout);
  htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = function(
  htmlElement = requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.waitForElementVisibility(htmlElement, message, timeout);
  htmlElement.clear();
  htmlElement.sendKeys(text);
};

const tapWhenTappable = function(
  htmlElement = requiredParam(tapWhenTappable),
  message = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_NOT_TAPPABLE_MESSAGE}. ${POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  waitForElementToBeClickable(htmlElement, message, timeout);
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

const waitForTextToBePresentInElement = function(
  htmlElement = requiredParam(waitForTextToBePresentInElement),
  text = requiredParam(waitForTextToBePresentInElement, "text"),
  message = `text '${text}' not present on ${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(
    EC.textToBePresentInElement(htmlElement, text),
    timeout,
    message
  );
};

const waitForTextNotToBePresentInElement = function(
  htmlElement = requiredParam(waitForTextNotToBePresentInElement),
  text = requiredParam(waitForTextNotToBePresentInElement, "text"),
  message = `text '${text}' is still present on ${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(
    EC.not(EC.textToBePresentInElement(htmlElement, text)),
    timeout,
    message
  );
};

const waitForUrlToBeEqualToExpectedUrl = function(
  expectedUrl = requiredParam(waitForUrlToBeEqualToExpectedUrl, "expectedUrl"),
  message = `current URL is different of '${expectedUrl}'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.urlIs(expectedUrl), timeout, message);
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = requiredParam(
    waitForUrlNotToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  message = `current URL is equal to '${expectedUrl}'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.not(EC.urlIs(expectedUrl)), timeout, message);
};

const waitForUrlToContainString = function(
  string = requiredParam(waitForUrlToContainString, "string"),
  message = `current URL does not contains the string '${string}'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.urlContains(string), timeout, message);
};

const waitForUrlNotToContainString = function(
  string = requiredParam(waitForUrlNotToContainString, "string"),
  message = `current URL contains the string '${string}'`,
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  browser.wait(EC.not(EC.urlContains(string)), timeout, message);
};

const fillFieldWithTextWhenVisibleAndPressEnter = function(
  htmlElement = requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  value = requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "value"),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.fillFieldWithTextWhenVisible(htmlElement, value, message, timeout);
  this.fillFieldWithTextWhenVisible(
    htmlElement,
    protractor.Key.ENTER,
    message,
    timeout
  );
};

const scrollToElementWhenVisible = function(
  htmlElement = requiredParam(scrollToElementWhenVisible),
  message = getDefaultIsNotVisibleMessage(htmlElement),
  timeout = DEFAULT_TIMEOUT_IN_MS
) {
  this.waitForElementVisibility(htmlElement, message, timeout);
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
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
  scrollToElementWhenVisible
};
