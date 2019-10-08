const deprecation = require("./constants_and_utils/deprecation");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");
const waiters = require("./waiters");

const clickWhenClickable = function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("clickWhenClickable", "click");
  this.click(htmlElement, timeoutInMilliseconds);
};

const click = function(
  htmlElement = utils.requiredParam(click),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  htmlElement.click();
};

const hoverAndClick = function(
  htmlElement = utils.requiredParam(hoverAndClick),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  waiters.waitForElementPresence(htmlElement, timeoutInMilliseconds);
  browser
    .actions()
    .mouseMove(htmlElement)
    .click()
    .perform();
};

const tapWhenTappable = function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  deprecation.replaceObsoleteFunction("tapWhenTappable", "tap");
  this.tap(htmlElement, timeoutInMilliseconds);
};

const tap = function(
  htmlElement = utils.requiredParam(tap),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds
) {
  const errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement);
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

module.exports = {
  clickWhenClickable,
  click,
  hoverAndClick,
  tapWhenTappable,
  tap
};
