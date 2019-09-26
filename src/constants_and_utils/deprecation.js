const colors = require("colors");

function replaceObsoleteFunction(oldFunctionName, newFunctionName) {
  obsoleteFunction(oldFunctionName, ` Please use the new '${newFunctionName}' function instead!`);
}

function obsoleteFunction(functionName, text = "") {
  warning(`Function '${functionName}' will be deprecated in version 4.0.0!${text}`);
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
  warnRemoveErrorMessage
};
