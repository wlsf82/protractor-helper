const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const clickWhenClickable = function(
  htmlElement = utils.requiredParam(clickWhenClickable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  htmlElement.click();
};

const click = function(htmlElement = utils.requiredParam(click), timeoutInMilliseconds = config.timeoutInMilliseconds) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  htmlElement.click();
};

const tapWhenTappable = function(
  htmlElement = utils.requiredParam(tapWhenTappable),
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = messageBuilder.getDefaultIsNotTappableMessage(htmlElement)
) {
  utils.waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage);
  browser
    .touchActions()
    .tap(htmlElement)
    .perform();
};

const tap = function(htmlElement = utils.requiredParam(tap), timeoutInMilliseconds = config.timeoutInMilliseconds) {
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
