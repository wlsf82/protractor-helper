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

const isCurrentUrlDifferentFromBaseUrl = async function() {
  return await browser.getCurrentUrl().then(url => {
    return url !== browser.baseUrl;
  });
};

const waitForElementPresence = async function(
  htmlElement = utils.requiredParam(waitForElementPresence),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotPresentMessage(htmlElement)
) {
  return await browser.wait(EC.presenceOf(htmlElement), timeoutInMilliseconds, errorMessage);
};

const waitForElementNotToBePresent = async function(
  htmlElement = utils.requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_STILL_PRESENT_MESSAGE}.`
) {
  return await browser.wait(
    EC.stalenessOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementVisibility = async function(
  htmlElement = utils.requiredParam(waitForElementVisibility),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  return await browser.wait(
    EC.visibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForElementNotToBeVisible = async function(
  htmlElement = utils.requiredParam(waitForElementNotToBeVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_STILL_VISIBLE_MESSAGE}.`
) {
  return await browser.wait(
    EC.invisibilityOf(htmlElement),
    timeoutInMilliseconds,
    errorMessage
  );
};

const clickWhenClickable = async function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotClickableMessage(htmlElement)
) {
  await utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  return await htmlElement.click();
};

const fillFieldWithTextWhenVisible = async function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisible),
  text = utils.requiredParam(fillFieldWithTextWhenVisible, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  await this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  return await htmlElement.sendKeys(text);
};

const fillInputFieldWithFileWhenPresent = async function(
  htmlElement = utils.requiredParam(fillInputFieldWithFileWhenPresent),
  absolutePath = utils.requiredParam(
    fillInputFieldWithFileWhenPresent,
    "absolutePath"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotPresentMessage(htmlElement)
) {
  await this.waitForElementPresence(htmlElement, timeoutInMilliseconds, errorMessage);
  return await htmlElement.sendKeys(absolutePath);
};

const clearFieldWhenVisible = async function(
  htmlElement = utils.requiredParam(clearFieldWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  await this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  return await htmlElement.clear();
};

const clearFieldWhenVisibleAndFillItWithText = async function(
  htmlElement = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText),
  text = utils.requiredParam(clearFieldWhenVisibleAndFillItWithText, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  await this.clearFieldWhenVisible(htmlElement, timeoutInMilliseconds, errorMessage);
  return await this.fillFieldWithTextWhenVisible(
    htmlElement,
    text,
    timeoutInMilliseconds,
    errorMessage
  );
};

const tapWhenTappable = async function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `${constants.ELEMENT_WITH_LOCATOR_MESSAGE} '${
    htmlElement.parentElementArrayFinder.locator_
  }' ${constants.IS_NOT_TAPPABLE_MESSAGE}. ${
    constants.POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE
  }, ${constants.OR_IT_MAY_BE_DISABLED_MESSAGE}.`
) {
  await utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  // @TODO: research needed here since this sttoped working on Protractor v6.0.0-beta.
  // browser
  //   .touchActions()
  //   .tap(htmlElement)
  //   .perform();

  // The below code is just a work around.
  return await htmlElement.click();
};

const waitForTextToBePresentInElement = async function(
  htmlElement = utils.requiredParam(waitForTextToBePresentInElement),
  text = utils.requiredParam(waitForTextToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' not present on ${
    constants.ELEMENT_WITH_LOCATOR_MESSAGE
  } '${htmlElement.parentElementArrayFinder.locator_}'.`
) {
  return await browser.wait(
    EC.textToBePresentInElement(htmlElement, text),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForTextNotToBePresentInElement = async function(
  htmlElement = utils.requiredParam(waitForTextNotToBePresentInElement),
  text = utils.requiredParam(waitForTextNotToBePresentInElement, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `text '${text}' is still present on ${
    constants.ELEMENT_WITH_LOCATOR_MESSAGE
  } '${htmlElement.parentElementArrayFinder.locator_}'.`
) {
  return await browser.wait(
    EC.not(EC.textToBePresentInElement(htmlElement, text)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForUrlToBeEqualToExpectedUrl = async function(
  expectedUrl = utils.requiredParam(
    waitForUrlToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL is different than expected URL: '${expectedUrl}'.`
) {
  return await browser.wait(EC.urlIs(expectedUrl), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToBeEqualToExpectedUrl = async function(
  expectedUrl = utils.requiredParam(
    waitForUrlNotToBeEqualToExpectedUrl,
    "expectedUrl"
  ),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL is equal to expected URL: '${expectedUrl}'.`
) {
  return await browser.wait(
    EC.not(EC.urlIs(expectedUrl)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const waitForUrlToContainString = async function(
  string = utils.requiredParam(waitForUrlToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL does not contains the string '${string}'.`
) {
  return await browser.wait(EC.urlContains(string), timeoutInMilliseconds, errorMessage);
};

const waitForUrlNotToContainString = async function(
  string = utils.requiredParam(waitForUrlNotToContainString, "string"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = `current URL contains the string '${string}'.`
) {
  return await browser.wait(
    EC.not(EC.urlContains(string)),
    timeoutInMilliseconds,
    errorMessage
  );
};

const fillFieldWithTextWhenVisibleAndPressEnter = async function(
  htmlElement = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter),
  text = utils.requiredParam(fillFieldWithTextWhenVisibleAndPressEnter, "text"),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  return await this.fillFieldWithTextWhenVisible(
    htmlElement,
    text + protractor.Key.ENTER,
    timeoutInMilliseconds,
    errorMessage
  );
};

const scrollToElementWhenVisible = async function(
  htmlElement = utils.requiredParam(scrollToElementWhenVisible),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = utils.getDefaultIsNotVisibleMessage(htmlElement)
) {
  await this.waitForElementVisibility(
    htmlElement,
    timeoutInMilliseconds,
    errorMessage
  );
  return await browser.executeScript("arguments[0].scrollIntoView(true);", htmlElement);
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
