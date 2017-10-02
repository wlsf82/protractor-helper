const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

function getDefaultIsNotPresentMessage(htmlElement) {
    return DEFAULT_STARTING_MESSAGE +
        htmlElement.parentElementArrayFinder.locator_.value +
        IS_NOT_PRESENT_MESSAGE;
}

function getDefaultIsNotVisibleMessage(htmlElement) {
    return DEFAULT_IS_NOT_VISIBLE_MESSAGE = DEFAULT_STARTING_MESSAGE +
        htmlElement.parentElementArrayFinder.locator_.value +
        IS_NOT_VISIBLE_MESSAGE;
}

const DEFAULT_STARTING_MESSAGE = "element with css selector '";
const IS_NOT_CLICKABLE_MESSAGE = "' is not clickable";
const IS_NOT_PRESENT_MESSAGE = "' is not present";
const IS_NOT_TAPPABLE_MESSAGE = "' is not tappable";
const IS_NOT_VISIBLE_MESSAGE = "' is not visible";
const IS_STILL_PRESENT_MESSAGE = "' is still present";
const IS_STILL_VISIBLE_MESSAGE = "' is still visible";

exports.getBodyElementFromCurrentBrowserOrBrowserInstance = function(browserInstance) {
    const cssSelector = "body";

    if (browserInstance) {
        return browserInstance.element(by.css(cssSelector));
    } else {
        return browser.element(by.css(cssSelector));
    }
}

exports.openNewBrowserInTheSamePage = function(browser) {
    return browser.forkNewDriverInstance(true);
}

exports.isCurrentUrlDifferentFromBaseUrl = function() {
    return browser.getCurrentUrl().then((url) => {
        return url !== browser.baseUrl;
    });
}

exports.waitForElementPresence =
    function(
        htmlElement,
        message = getDefaultIsNotPresentMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.presenceOf(htmlElement), timeout, message);
    }

exports.waitForElementNotToBePresent =
    function(
        htmlElement,
        message = DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value +
            IS_STILL_PRESENT_MESSAGE,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.stalenessOf(htmlElement), timeout, message);
    }

exports.waitForElementVisibility =
    function(
        htmlElement,
        message = getDefaultIsNotVisibleMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.visibilityOf(htmlElement), timeout, message);
    }

exports.waitForElementNotToBeVisible =
    function(
        htmlElement,
        message = DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value +
            IS_STILL_VISIBLE_MESSAGE,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.invisibilityOf(htmlElement), timeout, message);
    }

exports.clickWhenClickable =
    function(
        htmlElement,
        message = DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value +
            IS_NOT_CLICKABLE_MESSAGE,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        htmlElement.click();
    }

exports.sendKeysWhenVisible =
    function(
        htmlElement,
        value,
        message = getDefaultIsNotVisibleMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        this.waitForElementVisibility(htmlElement, message, timeout);
        htmlElement.sendKeys(value);
    }

exports.sendKeysForFileInputField =
    function(
        htmlElement,
        value,
        message = getDefaultIsNotPresentMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        this.waitForElementPresence(htmlElement, message, timeout);
        htmlElement.sendKeys(value);
    }

exports.clearFieldWhenVisible =
    function(
        htmlElement,
        message = getDefaultIsNotVisibleMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        this.waitForElementVisibility(htmlElement, message, timeout);
        htmlElement.clear();
    }

exports.tapWhenTappable =
    function(
        htmlElement,
        message = DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value +
            IS_NOT_TAPPABLE_MESSAGE,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        browser.touchActions().tap(htmlElement).perform();
    }

exports.waitForTextToBePresentInElement =
    function(
        htmlElement,
        text,
        message = "text '" + text + "' not present on " +
            DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value + "'",
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.textToBePresentInElement(htmlElement, text), timeout, message);
    }

exports.waitForTextNotToBePresentInElement =
    function(
        htmlElement,
        text,
        message = "text '" + text + "' is still present on " +
            DEFAULT_STARTING_MESSAGE +
            htmlElement.parentElementArrayFinder.locator_.value + "'",
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.not(EC.textToBePresentInElement(htmlElement, text)), timeout, message);
    }

exports.waitForUrlToBeEqualToExpectedUrl =
    function(
        expectedUrl,
        message = "current URL is different from '" + expectedUrl + "'",
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.urlIs(expectedUrl), timeout, message);
    }
