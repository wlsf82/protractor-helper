const constants = require("./constants_and_utils/constants");
const messageBuilder = require("./constants_and_utils/messageBuilder");
const utils = require("./constants_and_utils/utils");

const config = { timeoutInMilliseconds: constants.DEFAULT_TIMEOUT_IN_MS };

const click = function(htmlElement = utils.requiredParam(click), timeoutInMilliseconds = config.timeoutInMilliseconds) {
  utils.waitForElementToBeClickable(
    htmlElement,
    timeoutInMilliseconds,
    messageBuilder.getDefaultIsNotClickableMessage(htmlElement)
  );
  htmlElement.click();
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
  click,
  tap
};
