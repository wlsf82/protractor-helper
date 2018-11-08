const EC = protractor.ExpectedConditions;

const DEFAULT_TIMEOUT_IN_MS = 5000;
const config = { timeoutInMilliseconds: DEFAULT_TIMEOUT_IN_MS };

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
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotClickableMessage(htmlElement)
) {
  browser.wait(
    EC.elementToBeClickable(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
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
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotPresentMessage(htmlElement)
) {
  browser.wait(EC.presenceOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBePresent = function(
  htmlElement = requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_STILL_PRESENT_MESSAGE}`
) {
  browser.wait(
    EC.stalenessOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementVisibility = function(
  htmlElement = requiredParam(waitForElementVisibility),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
) {
  browser.wait(
    EC.visibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementNotToBeVisible = function(
  htmlElement = requiredParam(waitForElementNotToBeVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_STILL_VISIBLE_MESSAGE}`
) {
  browser.wait(
    EC.invisibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const clickWhenClickable = function(
  htmlElement = requiredParam(clickWhenClickable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotClickableMessage(htmlElement)
) {
  waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.click();
};

const fillFieldWithTextWhenVisible = function(
  htmlElement = requiredParam(fillFieldWithTextWhenVisible),
  text = requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.sendKeys(text);
};

const fillInputFieldWithFileWhenPresent = function(
  htmlElement = requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = requiredParam(
    fillInputFieldWithFileWhenPresent,
    "absolutePath"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotPresentMessage(htmlElement)
) {
  this.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = function(
  htmlElement = requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = function(
  htmlElement = requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.clearFieldWhenVisible(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  htmlElement.sendKeys(text);
};

const tapWhenTappable = function(
  htmlElement = requiredParam(tapWhenTappable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }' ${IS_NOT_TAPPABLE_MESSAGE}. ${POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}`
) {
  waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

const waitForTextToBePresentInElement = function(
  htmlElement = requiredParam(waitForTextToBePresentInElement),
  text = requiredParam(waitForTextToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' not present on ${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }'`
) {
  browser.wait(
    EC.textToBePresentInElement(htmlElement, text),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForTextNotToBePresentInElement = function(
  htmlElement = requiredParam(waitForTextNotToBePresentInElement),
  text = requiredParam(waitForTextNotToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' is still present on ${ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_.value
  }'`
) {
  browser.wait(
    EC.not(EC.textToBePresentInElement(htmlElement, text)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForUrlToBeEqualToExpectedUrl = function(
  expectedUrl = requiredParam(waitForUrlToBeEqualToExpectedUrl, "expectedUrl"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL is different than expected URL: '${expectedUrl}'`
) {
  browser.wait(EC.urlIs(expectedUrl), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = requiredParam(
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
  string = requiredParam(waitForUrlToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL does not contains the string '${string}'`
) {
  browser.wait(EC.urlContains(string), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToContainString = function(
  string = requiredParam(waitForUrlNotToContainString, "string"),
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
  htmlElement = requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
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
  htmlElement = requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotVisibleMessage(htmlElement)
) {
  this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
};

const setTimeout = function(timeoutInMilliseconds = DEFAULT_TIMEOUT_IN_MS) {
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
