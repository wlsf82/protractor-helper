const messageBuilder = require("../../src/constants_and_utils/messageBuilder");

describe("messageBuilder", () => {
  it("getDefaultCurrentUrlContainsTheString()", () => {
    const sampleUrl = "http://some-url.com/some-string";

    const actualResult = messageBuilder
      .getDefaultCurrentUrlContainsTheString(sampleUrl);
    const expectedResult = `current URL contains the string '${sampleUrl}'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultCurrentUrlDoesNotContainStringMessage()", () => {
    const sampleString = "some-string";

    const actualResult = messageBuilder
      .getDefaultCurrentUrlDoesNotContainStringMessage(sampleString);
    const expectedResult = `current URL does not contains the string '${sampleString}'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage()", () => {
    const sampleUrl = "http://some-url.com";

    const actualResult = messageBuilder
      .getDefaultCurrentUrlIsDifferentThanExpectedUrlMessage(sampleUrl);
    const expectedResult = `current URL is different than expected URL: '${sampleUrl}'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultCurrentUrlIsEqualToExpectedUrlMessage()", () => {
    const sampleUrl = "http://some-other-url.com";

    const actualResult = messageBuilder
      .getDefaultCurrentUrlIsEqualToExpectedUrlMessage(sampleUrl);
    const expectedResult = `current URL is equal to expected URL: '${sampleUrl}'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsNotClickableMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: ".some-class"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsNotClickableMessage(sampleElement);
    const expectedResult = `element with locator '${
      sampleElement.parentElementArrayFinder.locator_
    }' is not clickable. Possibly it's not present or visible, or it may be disabled.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsNotPresentMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: ".some-other-class"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsNotPresentMessage(sampleElement);
    const expectedResult = `element with locator '${sampleElement
      .parentElementArrayFinder.locator_}' is not present.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsNotVisibleMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "#some-id"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsNotVisibleMessage(sampleElement);
    const expectedResult = `element with locator '${sampleElement
      .parentElementArrayFinder.locator_}' is not visible.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsStillPresentMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "#some-other-id"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsStillPresentMessage(sampleElement);
    const expectedResult = `element with locator '${sampleElement
      .parentElementArrayFinder.locator_}' is still present.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsNotTappableMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "[type='submit']"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsNotTappableMessage(sampleElement);
    const expectedResult = `element with locator '${
      sampleElement.parentElementArrayFinder.locator_
    }' is not tappable. Possibly it's not present or visible, or it may be disabled.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultIsStillVisibleMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "[href='/']"
      }
    };

    const actualResult = messageBuilder
      .getDefaultIsStillVisibleMessage(sampleElement);
    const expectedResult = `element with locator '${sampleElement
      .parentElementArrayFinder.locator_}' is still visible.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultTextTextIsStillPresentOnElementMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "[href='/some-page']"
      }
    };

    const someText = "some text";

    const actualResult = messageBuilder
      .getDefaultTextTextIsStillPresentOnElementMessage(sampleElement, someText);
    const expectedResult = `text '${
      someText
    }' is still present on element with locator '${
      sampleElement.parentElementArrayFinder.locator_
    }'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getDefaultTextTextNotPresentOnElementMessage()", () => {
    const sampleElement = {
      parentElementArrayFinder: {
        locator_: "[href='/some-other-page']"
      }
    };

    const someOtherText = "some other text";

    const actualResult = messageBuilder
      .getDefaultTextTextNotPresentOnElementMessage(sampleElement, someOtherText);
    const expectedResult = `text '${
      someOtherText
    }' not present on element with locator '${
      sampleElement.parentElementArrayFinder.locator_
    }'.`;

    expect(actualResult).toEqual(expectedResult);
  });

  it("getParameterIsMissingForFunctionMessage", () => {
    const sampleParam = "text";
    const fn = { name: "sampleFunction" };

    const actualResult = messageBuilder.getParameterIsMissingForFunctionMessage(sampleParam, fn);
    const expectedResult = `Parameter '${sampleParam}' is missing at function '${
      fn.name
    }()'. \nFill the required parameter.`;

    expect(actualResult).toEqual(expectedResult);
  });
});
