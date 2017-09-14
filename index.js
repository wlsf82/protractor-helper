const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 5000;

function elementWithAttributeHasValue(htmlElement, attribute, value) {
    return htmlElement.getAttribute(attribute).then((elementAttribute) => {
        return elementAttribute.includes(value);
    });
}

function elementWithAttributeHasNotValue(htmlElement, attribute, value) {
    return htmlElement.getAttribute(attribute).then((elementAttribute) => {
        return !elementAttribute.includes(value);
    });
}

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

exports.waitForElementPresence = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.presenceOf(htmlElement), timeout, message);
}

exports.waitForElementNotToBePresent = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.stalenessOf(htmlElement), timeout, message);
}

exports.waitForElementVisibility = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.visibilityOf(htmlElement), timeout, message);
}

exports.waitForElementNotToBeVisible = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.invisibilityOf(htmlElement), timeout, message);
}

exports.clickWhenClickable = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
    htmlElement.click();
}

exports.sendKeysWhenVisible = function(htmlElement, value, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    this.waitForElementVisibility(htmlElement, message, timeout);
    htmlElement.sendKeys(value);
}

exports.sendKeysForFileInputField = function(htmlElement, value, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    this.waitForElementPresence(htmlElement, message, timeout);
    htmlElement.sendKeys(value);
}

exports.clearFieldWhenVisible = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    this.waitForElementVisibility(htmlElement, message, timeout);
    htmlElement.clear();
}

exports.tapWhenTapable = function(htmlElement, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
    browser.touchActions().tap(htmlElement).perform();
}

exports.waitForTextToBePresentInElement = function(htmlElement, text, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.textToBePresentInElement(htmlElement, text), timeout, message);
}

exports.waitForTextNotToBePresentInElement = function(htmlElement, text, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.not(EC.textToBePresentInElement(htmlElement, text)), timeout, message);
}

exports.waitForUrlToBeEqualToExpectedUrl = function(expectedUrl, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(EC.urlIs(expectedUrl), timeout, message);
}

exports.waitForElementAttributeToHaveValue = function(htmlElement, attribute, value, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(elementWithAttributeHasValue(htmlElement, attribute, value), timeout, message);
}

exports.waitForElementAttributeNotToHaveValue = function(htmlElement, attribute, value, message, timeout = DEFAULT_TIMEOUT_IN_MS) {
    browser.wait(elementWithAttributeHasNotValue(htmlElement, attribute, value), timeout, message);
}
