const protractorHelper = require("../index.js");

const constants = require("./constants");
const utils = require("../constants_and_utils/utils");

const nonExistingElementLocatedById = element(by.id("foo"));

describe("index.js file -", () => {
  const titleElement = element(by.css("h1"));
  const inputField = element(by.id("input"));
  const shortenButton = element(by.id("shorten"));
  const expandButton = element(by.id("expand"));

  beforeEach(() => browser.get(""));

  it("waitForElementNotToBePresent", () => {
    protractorHelper.waitForElementNotToBePresent(
      nonExistingElementLocatedById
    );
  });

  it("waitForElementNotToBeVisible", () => {
    protractorHelper.waitForElementNotToBeVisible(
      nonExistingElementLocatedById
    );
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

describe("utils.js file -", () => {
  const nonExistingElementLocatedByCssContainingText = element(
    by.cssContainingText("foo", "bar")
  );
  const nonExistingElementLocatedByButtonText = element(by.buttonText("foo"));
  const nonExistingElementLocatedByPartialButtonText = element(
    by.partialButtonText("foo")
  );

  it("by.cssContainingText - function getDefaultIsNotClickableMessage", () => {
    expect(
      utils.getDefaultIsNotClickableMessage(
        nonExistingElementLocatedByCssContainingText
      )
    ).toEqual(
      'element with locator \'by.cssContainingText("foo", "bar")\' is not clickable. Possibly it\'s not present or visible.'
    );
  });

  it("by.cssContainingText - function getDefaultIsNotPresentMessage", () => {
    expect(
      utils.getDefaultIsNotPresentMessage(
        nonExistingElementLocatedByCssContainingText
      )
    ).toEqual(
      'element with locator \'by.cssContainingText("foo", "bar")\' is not present'
    );
  });

  it("by.cssContainingText - function getDefaultIsNotVisibleMessage", () => {
    expect(
      utils.getDefaultIsNotVisibleMessage(
        nonExistingElementLocatedByCssContainingText
      )
    ).toEqual(
      'element with locator \'by.cssContainingText("foo", "bar")\' is not visible'
    );
  });

  it("by.buttonText - function getDefaultIsNotClickableMessage", () => {
    expect(
      utils.getDefaultIsNotClickableMessage(
        nonExistingElementLocatedByButtonText
      )
    ).toEqual(
      "element with locator 'by.buttonText(\"foo\")' is not clickable. Possibly it's not present or visible."
    );
  });

  it("by.buttonText - function getDefaultIsNotPresentMessage", () => {
    expect(
      utils.getDefaultIsNotPresentMessage(nonExistingElementLocatedByButtonText)
    ).toEqual("element with locator 'by.buttonText(\"foo\")' is not present");
  });

  it("by.buttonText - function getDefaultIsNotVisibleMessage", () => {
    expect(
      utils.getDefaultIsNotVisibleMessage(nonExistingElementLocatedByButtonText)
    ).toEqual("element with locator 'by.buttonText(\"foo\")' is not visible");
  });

  it("by.partialButtonText - function getDefaultIsNotClickableMessage", () => {
    expect(
      utils.getDefaultIsNotClickableMessage(
        nonExistingElementLocatedByPartialButtonText
      )
    ).toEqual(
      "element with locator 'by.partialButtonText(\"foo\")' is not clickable. Possibly it's not present or visible."
    );
  });

  it("by.partialButtonText - function getDefaultIsNotPresentMessage", () => {
    expect(
      utils.getDefaultIsNotPresentMessage(
        nonExistingElementLocatedByPartialButtonText
      )
    ).toEqual(
      "element with locator 'by.partialButtonText(\"foo\")' is not present"
    );
  });

  it("by.partialButtonText - function getDefaultIsNotVisibleMessage", () => {
    expect(
      utils.getDefaultIsNotVisibleMessage(
        nonExistingElementLocatedByPartialButtonText
      )
    ).toEqual(
      "element with locator 'by.partialButtonText(\"foo\")' is not visible"
    );
  });

  it("by.id - function getDefaultIsNotClickableMessage", () => {
    expect(
      utils.getDefaultIsNotClickableMessage(nonExistingElementLocatedById)
    ).toEqual(
      "element with locator 'By(css selector, *[id=\"foo\"])' is not clickable. Possibly it's not present or visible."
    );
  });

  it("by.id - function getDefaultIsNotPresentMessage", () => {
    expect(
      utils.getDefaultIsNotPresentMessage(nonExistingElementLocatedById)
    ).toEqual(
      "element with locator 'By(css selector, *[id=\"foo\"])' is not present"
    );
  });

  it("by.id - function getDefaultIsNotVisibleMessage", () => {
    expect(
      utils.getDefaultIsNotVisibleMessage(nonExistingElementLocatedById)
    ).toEqual(
      "element with locator 'By(css selector, *[id=\"foo\"])' is not visible"
    );
  });
});
