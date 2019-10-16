const helper = require("../../index.js");

const constants = require("./constants");

describe("Protractor helper", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const inputFile = element(by.className("inputfile"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  const nonExistingElement = element(by.id("foo"));

  beforeEach(() => browser.get(""));

  describe("waits", () => {
    it("waitForElementNotToBePresent", () => {
      helper.waitForElementNotToBePresent(nonExistingElement);
    });

    it("waitForElementNotToBeVisible", () => {
      helper.waitForElementNotToBeVisible(nonExistingElement);
    });

    it("waitForTextNotToBePresentInElement", () => {
      helper.waitForTextNotToBePresentInElement(titleElement, constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS);
    });

    it("waitForUrlToBeEqualToExpectedUrl", () => {
      helper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL);
    });

    it("waitForUrlNotToBeEqualToExpectedUrl", () => {
      helper.waitForUrlNotToBeEqualToExpectedUrl(constants.SAMPLE_URL);
    });

    it("waitForUrlToContainString", () => {
      helper.waitForUrlToContainString(constants.INDEX_DOT_HTML_STRING);
    });

    it("waitForUrlNotToContainString", () => {
      helper.waitForUrlNotToContainString(constants.SAMPLE_URL);
    });

    it("waitForElementVisibility", () => {
      helper.waitForElementVisibility(inputField);
    });

    it("waitForElementPresence", () => {
      helper.waitForElementPresence(inputField);
    });

    it("waitForTextToBePresentInElement", () => {
      helper.waitForTextToBePresentInElement(titleElement, constants.TITLE_TEXT);
    });
  });

  describe("inputs and buttons", () => {
    it("fillFieldWithText", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
    });

    it("click", () => {
      helper.click(shortenButton);
    });

    it("uploadFileIntoInputField", () => {
      helper.uploadFileIntoInputField(inputFile, constants.ABSOLUTE_PATH_OF_INDEX_FILE);
    });

    it("clear", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clear(inputField);
    });

    it("clearFieldAndFillItWithText", () => {
      helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      helper.clearFieldAndFillItWithText(inputField, constants.SAMPLE_URL);
    });

    it("tap", () => {
      helper.tap(expandButton);
    });

    it("fillFieldWithTextAndPressEnter", () => {
      helper.fillFieldWithTextAndPressEnter(inputField, constants.SAMPLE_URL);
    });

    it("hoverAndClick", () => {
      helper.hoverAndClick(expandButton);
    });
  });

  describe("Misc", () => {
    it("isCurrentUrlDifferentFromBaseUrl", () => {
      expect(false).toEqual(helper.isCurrentUrlDifferentFromBaseUrl());
    });

    it("scrollToElement", () => {
      helper.scrollToElement(shortenButton);
    });

    it("setTimeout", () => {
      helper.setTimeout(constants.TIMEOUT_IN_MS);
      helper.setTimeout();
    });
  });
});
