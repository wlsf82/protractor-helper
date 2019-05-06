const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const clickWhenClickable = function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.click();
};

const click = function(htmlElement = utils.requiredParam(click), timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  htmlElement.click();
};

const tapWhenTappable = function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

const tap = function(htmlElement = utils.requiredParam(tap), timeoutInMilliseconds = utils.timeout.timeoutInMilliseconds) {
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
  tapWhenTappable,
  tap
};
