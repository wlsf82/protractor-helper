const EC = protractor.ExpectedConditions;

const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const waitForElementPresence = function(
  htmlElement = utils.requiredParam(waitForElementPresence),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.presenceOf(htmlElement),
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotPresentMessage(htmlElement)
  );
};

const waitForElementNotToBePresent = function(
  htmlElement = utils.requiredParam(waitForElementNotToBePresent),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.stalenessOf(htmlElement),
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsStillPresentMessage(htmlElement)
  );
};

const waitForElementVisibility = function(
  htmlElement = utils.requiredParam(waitForElementVisibility),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.visibilityOf(htmlElement),
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotVisibleMessage(htmlElement)
  );
};

const waitForElementNotToBeVisible = function(
  htmlElement = utils.requiredParam(waitForElementNotToBeVisible),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.invisibilityOf(htmlElement),
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsStillVisibleMessage(htmlElement)
  );
};

const waitForTextToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextToBePresentInElement),
  text = utils.requiredParam(waitForTextToBePresentInElement, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.textToBePresentInElement(htmlElement, text),
    timeoutInMilliseconds,
    messageBuilder.getDefaultTextTextNotPresentOnElementMessage(htmlElement, text)
  );
};

const waitForTextNotToBePresentInElement = function(
  htmlElement = utils.requiredParam(waitForTextNotToBePresentInElement),
  text = utils.requiredParam(waitForTextNotToBePresentInElement, "text"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.not(EC.textToBePresentInElement(htmlElement, text)),
    timeoutInMilliseconds,
    messageBuilder.getDeafultTextTextIsStillPresentOnElementMessage(htmlElement, text)
  );
};

const waitForUrlToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(waitForUrlToBeEqualToExpectedUrl, "expectedUrl"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.urlIs(expectedUrl),
    timeoutInMilliseconds,
    messageBuilder.getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(expectedUrl)
  );
};

const waitForUrlNotToBeEqualToExpectedUrl = function(
  expectedUrl = utils.requiredParam(waitForUrlNotToBeEqualToExpectedUrl, "expectedUrl"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.not(EC.urlIs(expectedUrl)),
    timeoutInMilliseconds,
    messageBuilder.getDefaultCurrentUrlIsEqualToExpectedUrlMessage(expectedUrl)
  );
};

const waitForUrlToContainString = function(
  string = utils.requiredParam(waitForUrlToContainString, "string"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.urlContains(string),
    timeoutInMilliseconds,
    messageBuilder.getDefaultCurrentUrlDoesNotContainStringMessage(string)
  );
};

const waitForUrlNotToContainString = function(
  string = utils.requiredParam(waitForUrlNotToContainString, "string"),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  return browser.wait(
    EC.not(EC.urlContains(string)),
    timeoutInMilliseconds,
    messageBuilder.getDefaultCurrentUrlContainsTheString(string)
  );
};

module.exports = {
  waitForElementPresence,
  waitForElementNotToBePresent,
  waitForElementVisibility,
  waitForElementNotToBeVisible,
  waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString,
  waitForUrlNotToContainString
};
