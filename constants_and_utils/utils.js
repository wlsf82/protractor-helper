const EC = protractor.ExpectedConditions;

function requiredParam(functionWithoutParam, requiredParameter = "htmlElement") {
  const requiredParamError = new Error(
    `Parameter '${requiredParameter}' is missing at function '${
      functionWithoutParam.name
    }()'. \nFill the required parameter.`
  );
  Error.captureStackTrace(requiredParamError, functionWithoutParam);
  throw requiredParamError;
}

function waitForElementToBeClickable(
  htmlElement,
  timeoutInMilliseconds = config.timeoutInMilliseconds,
  errorMessage = getDefaultIsNotClickableMessage(htmlElement)
) {
  browser.wait(EC.elementToBeClickable(htmlElement), timeoutInMilliseconds, errorMessage);
}

module.exports = {
  requiredParam,
  waitForElementToBeClickable
};
