const colors = require("colors");

const timeoutInMilliseconds = require("./constants").DEFAULT_TIMEOUT_IN_MS;

const EC = protractor.ExpectedConditions;
const timeout = { timeoutInMilliseconds };

function requiredParam(functionWithoutParam, requiredParameter = "htmlElement") {
  const requiredParamError = new Error(
    `Parameter '${requiredParameter}' is missing at function '${
      functionWithoutParam.name
    }()'. \nFill the required parameter.`
  );
  Error.captureStackTrace(requiredParamError, functionWithoutParam);
  throw requiredParamError;
}

function waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage) {
  browser.wait(EC.elementToBeClickable(htmlElement), timeoutInMilliseconds, errorMessage);
}

function obsoleteFunction(functionName, text = "") {
  console.warn(
    colors.yellow("Protractor-helper warning:") +
      " Function '" +
      functionName +
      "' will be deprecated in version 4.0.0! " +
      text +
      colors.cyan("[Read more on www.npmjs.com/package/protractor-helper#deprecations-on-version-400]")
  );
}

function replaceObsoleteFunction(oldFunctionName, newFunctionName) {
  obsoleteFunction(oldFunctionName, "Please use the new '" + newFunctionName + "' function instead! ");
}

module.exports = {
  obsoleteFunction,
  replaceObsoleteFunction,
  requiredParam,
  timeout,
  waitForElementToBeClickable
};
