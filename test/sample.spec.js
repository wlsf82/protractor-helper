const protractorHelper = require("../index.js");

const constants = require("./constants");

describe("Protractor helper", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  const nonExistingElement = element(by.id("foo"));

  beforeEach(() => browser.get(""));

  it("waitForElementNotToBePresent", () => {
    protractorHelper.waitForElementNotToBePresent(nonExistingElement);
  });

  it("waitForElementNotToBeVisible", () => {
    protractorHelper.waitForElementNotToBeVisible(nonExistingElement);
  });

  it("waitForTextNotToBePresentInElement", () => {
    protractorHelper.waitForTextNotToBePresentInElement(
      titleElement,
      constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS
    );
  });

  it("waitForUrlToBeEqualToExpectedUrl", () => {
    protractorHelper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL);
  });

  it("waitForUrlNotToBeEqualToExpectedUrl", () => {
    protractorHelper.waitForUrlNotToBeEqualToExpectedUrl(constants.SAMPLE_URL);
  });

  it("waitForUrlToContainString", () => {
    protractorHelper.waitForUrlToContainString(constants.INDEX_DOT_HTML_STRING);
  });

  it("waitForUrlNotToContainString", () => {
    protractorHelper.waitForUrlNotToContainString(constants.SAMPLE_URL);
  });

  it("fillFieldWithTextWhenVisible", () => {
    protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
  });

  it("clickWhenClickable", () => {
    protractorHelper.clickWhenClickable(shortenButton);
  });

  it("waitForElementVisibility", () => {
    protractorHelper.waitForElementVisibility(inputField);
  });

  it("waitForElementPresence", () => {
    protractorHelper.waitForElementPresence(inputField);
  });

  it("fillInputFieldWithFileWhenPresent", () => {
    protractorHelper.fillInputFieldWithFileWhenPresent(
      inputField,
      constants.ABSOLUTE_PATH_OF_INDEX_FILE
    );
  });

  it("clearFieldWhenVisible", () => {
    protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
    protractorHelper.clearFieldWhenVisible(inputField);
  });

  it("clearFieldWhenVisibleAndFillItWithText", () => {
    protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
    protractorHelper.clearFieldWhenVisibleAndFillItWithText(
      inputField,
      constants.SAMPLE_URL
    );
  });

  it("tapWhenTappable", () => {
    protractorHelper.tapWhenTappable(expandButton);
  });

  it("waitForTextToBePresentInElement", () => {
    protractorHelper.waitForTextToBePresentInElement(
      titleElement,
      constants.TITLE_TEXT
    );
  });

  it("getBodyElementFromCurrentBrowserOrBrowserInstance", () => {
    protractorHelper.getBodyElementFromCurrentBrowserOrBrowserInstance();
  });

  xit("openNewBrowserInTheSamePage", () => {
    const newBrowser = protractorHelper.openNewBrowserInTheSamePage(browser);
    newBrowser.ignoreSynchronization = true;
    newBrowser.quit();
  }).pend("this needs protractor version 5.0.0, not higher");

  it("isCurrentUrlDifferentFromBaseUrl", () => {
    expect(false).toEqual(protractorHelper.isCurrentUrlDifferentFromBaseUrl());
  });

  it("fillFieldWithTextWhenVisibleAndPressEnter", () => {
    protractorHelper.fillFieldWithTextWhenVisibleAndPressEnter(
      inputField,
      constants.SAMPLE_URL
    );
  });

  it("scrollToElementWhenVisible", () => {
    protractorHelper.scrollToElementWhenVisible(shortenButton);
  });

  it("setTimeout", () => {
    protractorHelper.setTimeout(constants.TIMEOUT_IN_MS);
    protractorHelper.setTimeout();
  });
});
