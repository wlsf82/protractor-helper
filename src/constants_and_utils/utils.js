const protractor = require("protractor");

const messageBuilder = require("./messageBuilder");

const timeoutInMilliseconds = require("./constants").DEFAULT_TIMEOUT_IN_MS;

const EC = protractor.ExpectedConditions;
const timeout = { timeoutInMilliseconds };

function requiredParam(functionWithoutParam, requiredParameter = "htmlElement") {
  const requiredParamError = new Error(
    messageBuilder.getParameterIsMissingForFunctionMessage(requiredParameter, functionWithoutParam)
  );
  Error.captureStackTrace(requiredParamError, functionWithoutParam);
  throw requiredParamError;
}

function waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage) {
  browser.wait(EC.elementToBeClickable(htmlElement), timeoutInMilliseconds, errorMessage);
}

module.exports = {
  requiredParam,
  timeout,
  waitForElementToBeClickable
};
