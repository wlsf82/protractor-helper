const helper = require("../index.js");

const constants = require("./constants");

describe("Protractor helper", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const inputFile = element(by.className("inputfile"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  const nonExistingElement = element(by.id("foo"));

  beforeEach(async () => await browser.get(""));

  describe("waits", () => {
    it("waitForElementNotToBePresent", async () => {
      await helper.waitForElementNotToBePresent(nonExistingElement);
    });

    it("waitForElementNotToBeVisible", async () => {
      await helper.waitForElementNotToBeVisible(nonExistingElement);
    });

    it("waitForTextNotToBePresentInElement", async () => {
      await helper.waitForTextNotToBePresentInElement(
        titleElement,
        constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS
      );
    });

    it("waitForUrlToBeEqualToExpectedUrl", async () => {
      await helper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL);
    });

    it("waitForUrlNotToBeEqualToExpectedUrl", async () => {
      await helper.waitForUrlNotToBeEqualToExpectedUrl(constants.SAMPLE_URL);
    });

    it("waitForUrlToContainString", async () => {
      await helper.waitForUrlToContainString(constants.INDEX_DOT_HTML_STRING);
    });

    it("waitForUrlNotToContainString", async () => {
      await helper.waitForUrlNotToContainString(constants.SAMPLE_URL);
    });

    it("waitForElementVisibility", async () => {
      await helper.waitForElementVisibility(inputField);
    });

    it("waitForElementPresence", async () => {
      await helper.waitForElementPresence(inputField);
    });

    it("waitForTextToBePresentInElement", async () => {
      await helper.waitForTextToBePresentInElement(
        titleElement,
        constants.TITLE_TEXT
      );
    });
  });

  describe("inputs and buttons", () => {
    it("fillFieldWithTextWhenVisible", async () => {
      await helper.fillFieldWithTextWhenVisible(inputField, constants.SHORTEN_URL);
    });

    it("fillFieldWithText", async () => {
      await helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
    });

    it("clickWhenClickable", async () => {
      await helper.clickWhenClickable(shortenButton);
    });

    it("click", async () => {
      await helper.click(shortenButton);
    });

    it("fillInputFieldWithFileWhenPresent", async () => {
      await helper.fillInputFieldWithFileWhenPresent(
        inputFile,
        constants.ABSOLUTE_PATH_OF_INDEX_FILE
      );
    });

    it("uploadFileIntoInputField", async () => {
      await helper.uploadFileIntoInputField(
        inputFile,
        constants.ABSOLUTE_PATH_OF_INDEX_FILE
      );
    });

    it("clearFieldWhenVisible", () => {
      await helper.fillFieldWithTextWhenVisible(inputField, constants.SHORTEN_URL);
      await helper.clearFieldWhenVisible(inputField);
    });

    it("clear", () => {
      await helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      await helper.clear(inputField);
    });

    it("clearFieldWhenVisibleAndFillItWithText", () => {
      await helper.fillFieldWithTextWhenVisible(inputField, constants.SHORTEN_URL);
      await helper.clearFieldWhenVisibleAndFillItWithText(
        inputField,
        constants.SAMPLE_URL
      );
    });

    it("clearFieldAndFillItWithText", () => {
      await helper.fillFieldWithText(inputField, constants.SHORTEN_URL);
      await helper.clearFieldAndFillItWithText(inputField, constants.SAMPLE_URL);
    });

    it("tapWhenTappable", () => {
      await helper.tapWhenTappable(expandButton);
    });

    it("tap", () => {
      await helper.tap(expandButton);
    });

    it("fillFieldWithTextWhenVisibleAndPressEnter", () => {
      await helper.fillFieldWithTextWhenVisibleAndPressEnter(
        inputField,
        constants.SAMPLE_URL
      );
    });

    it("fillFieldWithTextAndPressEnter", () => {
      await helper.fillFieldWithTextAndPressEnter(inputField, constants.SAMPLE_URL);
    });
  });

  describe("Misc", () => {
    it("getBodyElementFromCurrentBrowserOrBrowserInstance", () => {
      helper.getBodyElementFromCurrentBrowserOrBrowserInstance();
    });

    xit("openNewBrowserInTheSamePage", () => {
      const newBrowser = helper.openNewBrowserInTheSamePage(browser);
      newBrowser.ignoreSynchronization = true;
      newBrowser.quit();
    }).pend("this needs protractor version 5.0.0, not higher");

    it("isCurrentUrlDifferentFromBaseUrl", async () => {
      expect(false).toEqual(await helper.isCurrentUrlDifferentFromBaseUrl());
    });

    it("scrollToElementWhenVisible", async () => {
      await helper.scrollToElementWhenVisible(shortenButton);
    });

    it("scrollToElement", async () => {
      await helper.scrollToElement(shortenButton);
    });

    it("setTimeout", () => {
      helper.setTimeout(constants.TIMEOUT_IN_MS);
      helper.setTimeout();
    });
  });
});
