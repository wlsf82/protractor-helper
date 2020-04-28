const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const click = function(
  htmlElement = utils.requiredParam(click),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  return htmlElement.click();
};

const hoverAndClick = function(
  htmlElement = utils.requiredParam(hoverAndClick),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds);
  return browser
    .actions()
    .mouseMove(htmlElement)
    .click()
    .perform();
};

const tap = function(
  htmlElement = utils.requiredParam(tap),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement);
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  return browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

module.exports = {
  click,
  hoverAndClick,
  tap
};
