const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

const DEFAULT_STARTING_MESSAGE = "element with css selector";
const IS_NOT_CLICKABLE_MESSAGE = "is not clickable";
const IS_NOT_PRESENT_MESSAGE = "is not present";
const IS_NOT_TAPPABLE_MESSAGE = "is not tappable";
const IS_NOT_VISIBLE_MESSAGE = "is not visible";
const IS_STILL_PRESENT_MESSAGE = "is still present";
const IS_STILL_VISIBLE_MESSAGE = "is still visible";
const POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE = "Possibly it's not present or visible.";

function getDefaultIsNotPresentMessage(htmlElement) {
    return `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_NOT_PRESENT_MESSAGE}`;
}

function getDefaultIsNotVisibleMessage(htmlElement) {
    return `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_NOT_VISIBLE_MESSAGE}`;
}

const getBodyElementFromCurrentBrowserOrBrowserInstance = function(browserInstance) {
    const cssSelector = "body";

    if (browserInstance) {
        return browserInstance.element(by.css(cssSelector));
    } else {
        return browser.element(by.css(cssSelector));
    }
}

const openNewBrowserInTheSamePage = function(browser) {
    return browser.forkNewDriverInstance(true);
}

const isCurrentUrlDifferentFromBaseUrl = function() {
    return browser.getCurrentUrl().then((url) => {
        return url !== browser.baseUrl;
    });
}

const waitForElementPresence =
    function(
        htmlElement,
        message = getDefaultIsNotPresentMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.presenceOf(htmlElement), timeout, message);
    }

const waitForElementNotToBePresent =
    function(
        htmlElement,
        message = `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_STILL_PRESENT_MESSAGE}`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.stalenessOf(htmlElement), timeout, message);
    }

const waitForElementVisibility =
    function(
        htmlElement,
        message = getDefaultIsNotVisibleMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.visibilityOf(htmlElement), timeout, message);
    }

const waitForElementNotToBeVisible =
    function(
        htmlElement,
        message = `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_STILL_VISIBLE_MESSAGE}`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.invisibilityOf(htmlElement), timeout, message);
    }

const clickWhenClickable =
    function(
        htmlElement,
        message = `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_NOT_CLICKABLE_MESSAGE}. ${POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        htmlElement.click();
    }

const fillFieldWithTextWhenVisible =
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

const fillInputFieldWithFileWhenPresent =
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

const clearFieldWhenVisible =
    function(
        htmlElement,
        message = getDefaultIsNotVisibleMessage(htmlElement),
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        this.waitForElementVisibility(htmlElement, message, timeout);
        htmlElement.clear();
    }

const tapWhenTappable =
    function(
        htmlElement,
        message = `${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}' ${IS_NOT_TAPPABLE_MESSAGE}. ${POSSIBLE_IT_IS_NOT_PRESENT_OR_VISIBLE_MESSAGE}`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        browser.touchActions().tap(htmlElement).perform();
    }

const waitForTextToBePresentInElement =
    function(
        htmlElement,
        text,
        message = `text '${text}' not present on ${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}'`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.textToBePresentInElement(htmlElement, text), timeout, message);
    }

const waitForTextNotToBePresentInElement =
    function(
        htmlElement,
        text,
        message = `text '${text}' is still present on ${DEFAULT_STARTING_MESSAGE} '${htmlElement.parentElementArrayFinder.locator_.value}'`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.not(EC.textToBePresentInElement(htmlElement, text)), timeout, message);
    }

const waitForUrlToBeEqualToExpectedUrl =
    function(
        expectedUrl,
        message = `current URL is different of '${expectedUrl}'`,
        timeout = DEFAULT_TIMEOUT_IN_MS
    )

    {
        browser.wait(EC.urlIs(expectedUrl), timeout, message);
    }

    const waitForUrlNotToBeEqualToExpectedUrl =
        function(
            expectedUrl,
            message = `current URL is equal to '${expectedUrl}'`,
            timeout = DEFAULT_TIMEOUT_IN_MS
        )

        {
            browser.wait(EC.not(EC.urlIs(expectedUrl)), timeout, message);
        }

module.exports = {
    getBodyElementFromCurrentBrowserOrBrowserInstance,
    openNewBrowserInTheSamePage,
    isCurrentUrlDifferentFromBaseUrl,
    waitForElementPresence,
    waitForElementNotToBePresent,
    waitForElementVisibility,
    waitForElementNotToBeVisible,
    clickWhenClickable,
    fillFieldWithTextWhenVisible,
    fillInputFieldWithFileWhenPresent,
    clearFieldWhenVisible,
    tapWhenTappable,
    waitForTextToBePresentInElement,
    waitForTextNotToBePresentInElement,
    waitForUrlToBeEqualToExpectedUrl,
    waitForUrlNotToBeEqualToExpectedUrl
};
