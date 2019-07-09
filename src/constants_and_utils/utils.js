const colors = require("colors");
const protractor = require("protractor");

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

function replaceObsoleteFunction(oldFunctionName, newFunctionName) {
  obsoleteFunction(oldFunctionName, ` Please use the new '${newFunctionName}' function instead!`);
}

function obsoleteFunction(functionName, text = "") {
  warning(`Function '${functionName}' will be deprecated in version 4.0.0!${text}`);
}

function waitForElementToBeClickable(htmlElement, timeoutInMilliseconds, errorMessage) {
  browser.wait(EC.elementToBeClickable(htmlElement), timeoutInMilliseconds, errorMessage);
}

function warnRemoveErrorMessage(functionName, errorMessage, defaultMessage) {
  if (errorMessage != defaultMessage)
    warning(`Remove the 'errorMessage' argument from the function '${functionName}'!`);
}

function warning(text) {
  console.warn(
    `${colors.yellow("protractor-helper warning:")} ${text} ${colors.cyan(
      "[Read more on www.npmjs.com/package/protractor-helper#preparation-to-next-major-version]"
    )}`
  );
}

module.exports = {
  obsoleteFunction,
  replaceObsoleteFunction,
  requiredParam,
  timeout,
  waitForElementToBeClickable,
  warnRemoveErrorMessage
};
