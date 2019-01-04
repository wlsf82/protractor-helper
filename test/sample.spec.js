const protractorHelper = require("../index.js");

const constants = require("./constants");

describe("Protractor helper", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  const nonExistingElement = element(by.id("foo"));

  beforeEach(async () => await browser.get(""));

  it("waitForElementNotToBePresent", async () => {
    await protractorHelper.waitForElementNotToBePresent(nonExistingElement);
  });

  it("waitForElementNotToBeVisible", async () => {
    await protractorHelper.waitForElementNotToBeVisible(nonExistingElement);
  });

  it("waitForTextNotToBePresentInElement", async () => {
    await protractorHelper.waitForTextNotToBePresentInElement(
      titleElement,
      constants.TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS
    );
  });

  it("waitForUrlToBeEqualToExpectedUrl", async () => {
    await protractorHelper.waitForUrlToBeEqualToExpectedUrl(constants.BASE_URL);
  });

  it("waitForUrlNotToBeEqualToExpectedUrl", async () => {
    await protractorHelper.waitForUrlNotToBeEqualToExpectedUrl(
      constants.SAMPLE_URL
    );
  });

  it("waitForUrlToContainString", async () => {
    await protractorHelper.waitForUrlToContainString(
      constants.INDEX_DOT_HTML_STRING
    );
  });

  it("waitForUrlNotToContainString", async () => {
    await protractorHelper.waitForUrlNotToContainString(constants.SAMPLE_URL);
  });

  it("fillFieldWithTextWhenVisible", async () => {
    await protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
  });

  it("clickWhenClickable", async () => {
    await protractorHelper.clickWhenClickable(shortenButton);
  });

  it("waitForElementVisibility", async () => {
    await protractorHelper.waitForElementVisibility(inputField);
  });

  it("waitForElementPresence", async () => {
    await protractorHelper.waitForElementPresence(inputField);
  });

  it("fillInputFieldWithFileWhenPresent", async () => {
    await protractorHelper.fillInputFieldWithFileWhenPresent(
      inputField,
      constants.ABSOLUTE_PATH_OF_INDEX_FILE
    );
  });

  it("clearFieldWhenVisible", async () => {
    await protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
    await protractorHelper.clearFieldWhenVisible(inputField);
  });

  it("clearFieldWhenVisibleAndFillItWithText", async () => {
    await protractorHelper.fillFieldWithTextWhenVisible(
      inputField,
      constants.SHORTEN_URL
    );
    await protractorHelper.clearFieldWhenVisibleAndFillItWithText(
      inputField,
      constants.SAMPLE_URL
    );
  });

  it("tapWhenTappable", async () => {
    await protractorHelper.tapWhenTappable(expandButton);
  });

  it("waitForTextToBePresentInElement", async () => {
    await protractorHelper.waitForTextToBePresentInElement(
      titleElement,
      constants.TITLE_TEXT
    );
  });

  it("getBodyElementFromCurrentBrowserOrBrowserInstance", () => {
    protractorHelper.getBodyElementFromCurrentBrowserOrBrowserInstance();
  });

  xit("openNewBrowserInTheSamePage", () => {
    const newBrowser = protractorHelper.openNewBrowserInTheSamePage(browser);
    newBrowser.waitForAngularEnabled(false);
    newBrowser.quit();
  }).pend("this needs protractor version 5.0.0, not higher");

  it("isCurrentUrlDifferentFromBaseUrl", async () => {
    expect(false).toEqual(
      await protractorHelper.isCurrentUrlDifferentFromBaseUrl()
    );
  });

  it("fillFieldWithTextWhenVisibleAndPressEnter", async () => {
    await protractorHelper.fillFieldWithTextWhenVisibleAndPressEnter(
      inputField,
      constants.SAMPLE_URL
    );
  });

  it("scrollToElementWhenVisible", async () => {
    await protractorHelper.scrollToElementWhenVisible(shortenButton);
  });

  it("setTimeout", () => {
    protractorHelper.setTimeout(constants.TIMEOUT_IN_MS);
    protractorHelper.setTimeout();
  });
});
