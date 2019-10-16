module.exports = {
  click: require("./src/clickersAndTappers").click,
  hoverAndClick: require("./src/clickersAndTappers").hoverAndClick,
  tap: require("./src/clickersAndTappers").tap,
  fillFieldWithText: require("./src/inputFieldInteractions").fillFieldWithText,
  uploadFileIntoInputField: require("./src/inputFieldInteractions").uploadFileIntoInputField,
  clear: require("./src/inputFieldInteractions").clear,
  clearFieldAndFillItWithText: require("./src/inputFieldInteractions").clearFieldAndFillItWithText,
  fillFieldWithTextAndPressEnter: require("./src/inputFieldInteractions").fillFieldWithTextAndPressEnter,
  isCurrentUrlDifferentFromBaseUrl: require("./src/misc").isCurrentUrlDifferentFromBaseUrl,
  scrollToElement: require("./src/misc").scrollToElement,
  setTimeout: require("./src/misc").setTimeout,
  waitForElementPresence: require("./src/waiters").waitForElementPresence,
  waitForElementNotToBePresent: require("./src/waiters").waitForElementNotToBePresent,
  waitForElementVisibility: require("./src/waiters").waitForElementVisibility,
  waitForElementNotToBeVisible: require("./src/waiters").waitForElementNotToBeVisible,
  waitForTextToBePresentInElement: require("./src/waiters").waitForTextToBePresentInElement,
  waitForTextNotToBePresentInElement: require("./src/waiters").waitForTextNotToBePresentInElement,
  waitForUrlToBeEqualToExpectedUrl: require("./src/waiters").waitForUrlToBeEqualToExpectedUrl,
  waitForUrlNotToBeEqualToExpectedUrl: require("./src/waiters").waitForUrlNotToBeEqualToExpectedUrl,
  waitForUrlToContainString: require("./src/waiters").waitForUrlToContainString,
  waitForUrlNotToContainString: require("./src/waiters").waitForUrlNotToContainString
};
