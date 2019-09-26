const colors = require("colors");

const messageBuilder = require("./messageBuilder");

function replaceObsoleteFunction(oldFunctionName, newFunctionName) {
  obsoleteFunction(oldFunctionName, messageBuilder.pleaseUseNewFunction(newFunctionName));
}

function obsoleteFunction(functionName, text = "") {
  warning(`${messageBuilder.functionWillBeDeprecated(functionName)}${text}`);
}

function warnRemoveErrorMessage(functionName, errorMessage, defaultMessage) {
  if (errorMessage != defaultMessage)
    warning(messageBuilder.removeErrorMessageArgFromFunction(functionName));
}

function warning(text) {
  console.warn(
    `${colors.yellow("protractor-helper warning:")} ${text} ${colors.cyan(
      messageBuilder.getReadMoreMessage()
    )}`
  );
}

module.exports = {
  obsoleteFunction,
  replaceObsoleteFunction,
  warnRemoveErrorMessage
};
