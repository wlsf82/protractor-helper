const helper = require("../../index.js");

const constants = require("./constants");

describe("Protractor helper", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const inputFile = element(by.className("inputfile"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  const nonExistingElement = element(by.id("foo"));

  const ONE_SEC_IN_MS = 1000;

  beforeEach(() => browser.get(""));

  describe("waits", () => {
    it("waitForElementNotToBePresent", () => {
      helper.waitForElementNotToBePresent(nonExistingElement);
    });

    it("waitForElementNotToBePresent with different timeout", () => {
      helper.waitForElementNotToBePresent(nonExistingElement, ONE_SEC_IN_MS);
    });

    it("waitForElementNotToBeVisible", () => {
      helper.waitForElementNotToBeVisible(nonExistingElement);
    });

    it("waitForElementNotToBeVisible with different timeout", () => {
      helper.waitForElementNotToBeVisible(nonExistingElement, ONE_SEC_IN_MS);
    });

    it("waitForTextNotToBePresentInElement", () => {
      helper.waitForTextNotToBePresentInElement(titleElement, constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS);
    });

    it("waitForTextNotToBePresentInElement with different timeout", () => {
      helper.waitForTextNotToBePresentInElement(titleElement, constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS, ONE_SEC_IN_MS);
    });

    it("waitForUrlToBeEqualToExpectedUrl", () => {
      helper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL);
    });

    it("waitForUrlToBeEqualToExpectedUrl with different timeout", () => {
      helper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL, ONE_SEC_IN_MS);
    });

    it("waitForUrlNotToBeEqualToExpectedUrl", () => {
      helper.waitForUrlNotToBeEqualToExpectedUrl(constants.SAMPLE_URL);
    });

    it("waitForUrlNotToBeEqualToExpectedUrl with different timeout", () => {
      helper.waitForUrlNotToBeEqualToExpectedUrl(constants.SAMPLE_URL, ONE_SEC_IN_MS);
    });

    it("waitForUrlToContainString", () => {
      helper.waitForUrlToContainString(constants.INDEX_DOT_HTML_STRING);
    });

    it("waitForUrlToContainString with different timeout", () => {
      helper.waitForUrlToContainString(constants.INDEX_DOT_HTML_STRING, ONE_SEC_IN_MS);
    });

    it("waitForUrlNotToContainString", () => {
      helper.waitForUrlNotToContainString(constants.SAMPLE_URL);
    });

    it("waitForUrlNotToContainString with different timeout", () => {
      helper.waitForUrlNotToContainString(constants.SAMPLE_URL, ONE_SEC_IN_MS);
    });

    it("waitForElementVisibility", () => {
      helper.waitForElementVisibility(inputField);
    });

    it("waitForElementVisibility with different timeout", () => {
      helper.waitForElementVisibility(inputField, ONE_SEC_IN_MS);
    });

    it("waitForElementPresence", () => {
      helper.waitForElementPresence(inputField);
    });

    it("waitForElementPresence with different timeout", () => {
      helper.waitForElementPresence(inputField, ONE_SEC_IN_MS);
    });

    it("waitForTextToBePresentInElement", () => {
      helper.waitForTextToBePresentInElement(titleElement, constants.TITLE_TEXT);
    });

    it("waitForTextToBePresentInElement with different timeout", () => {
      helper.waitForTextToBePresentInElement(titleElement, constants.TITLE_TEXT, ONE_SEC_IN_MS);
    });
  });

  describe("inputs and buttons", () => {
    it("fillFieldWithText", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
    });

    it("fillFieldWithText with different timeout", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL, ONE_SEC_IN_MS);
    });

    it("click", () => {
      helper.click(shortenButton);
    });

    it("click with different timeout", () => {
      helper.click(shortenButton, ONE_SEC_IN_MS);
    });

    it("uploadFileIntoInputField", () => {
      helper.uploadFileIntoInputField(inputFile, constants.ABSOLUTE_PATH_OF_INDEX_FILE);
    });

    it("uploadFileIntoInputField with different timeout", () => {
      helper.uploadFileIntoInputField(inputFile, constants.ABSOLUTE_PATH_OF_INDEX_FILE, ONE_SEC_IN_MS);
    });

    it("clear", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clear(inputField);
    });

    it("clear with different timeout", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clear(inputField, ONE_SEC_IN_MS);
    });

    it("clearFieldAndFillItWithText", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clearFieldAndFillItWithText(inputField, constants.SAMPLE_URL);
    });

    it("clearFieldAndFillItWithText with different timeout", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clearFieldAndFillItWithText(inputField, constants.SAMPLE_URL, ONE_SEC_IN_MS);
    });

    it("tap", () => {
      helper.tap(expandButton);
    });

    it("tap with different timeout", () => {
      helper.tap(expandButton, ONE_SEC_IN_MS);
    });

    it("fillFieldWithTextAndPressEnter", () => {
      helper.fillFieldWithTextAndPressEnter(inputField, constants.SAMPLE_URL);
    });

    it("fillFieldWithTextAndPressEnter with different timeout", () => {
      helper.fillFieldWithTextAndPressEnter(inputField, constants.SAMPLE_URL, ONE_SEC_IN_MS);
    });

    it("hoverAndClick", () => {
      helper.hoverAndClick(expandButton);
    });

    it("hoverAndClick with different timeout", () => {
      helper.hoverAndClick(expandButton, ONE_SEC_IN_MS);
    });
  });

  describe("Misc", () => {
    it("isCurrentUrlDifferentFromBaseUrl", () => {
      expect(false).toEqual(helper.isCurrentUrlDifferentFromBaseUrl());
    });

    it("scrollToElement", () => {
      helper.scrollToElement(shortenButton);
    });

    it("scrollToElement with different timeout", () => {
      helper.scrollToElement(shortenButton, ONE_SEC_IN_MS);
    });

    it("setTimeout", () => {
      helper.setTimeout(constants.TIMEOUT_IN_MS);
      helper.setTimeout();
    });
  });
});
