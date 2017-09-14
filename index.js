const EC = protractor.ExpectedConditions;
const DEFAULT_TIMEOUT_IN_MS = 3000;

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

class Helper {
    getBodyElementFromCurrentBrowserOrBrowserInstance(browserInstance) {
        const cssSelector = "body";

        if (browserInstance) {
            return browserInstance.element(by.css(cssSelector));
        } else {
            return browser.element(by.css(cssSelector));
        }
    }

    openNewBrowserInTheSamePage(browser) {
        return browser.forkNewDriverInstance(true);
    }

    isCurrentUrlDifferentFromBaseUrl() {
        return browser.getCurrentUrl().then((url) => {
            return url !== browser.baseUrl;
        });
    }

    waitForElementPresence(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.presenceOf(htmlElement), timeout, message);
    }

    waitForElementNotToBePresent(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.stalenessOf(htmlElement), timeout, message);
    }

    waitForElementVisibility(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.visibilityOf(htmlElement), timeout, message);
    }

    waitForElementNotToBeVisible(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.invisibilityOf(htmlElement), timeout, message);
    }

    clickWhenClickable(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        htmlElement.click();
    }

    sendKeysWhenVisible(htmlElement, value, message, timeout = DEFAULT_TIMEOUT_MS) {
        this.waitForElementVisibility(htmlElement, message, timeout);
        htmlElement.sendKeys(value);
    }

    sendKeysForFileInputField(htmlElement, value, message, timeout = DEFAULT_TIMEOUT_MS) {
        this.waitForElementPresence(htmlElement, message, timeout);
        htmlElement.sendKeys(value);
    }

    clearFieldWhenVisible(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        this.waitForElementVisibility(htmlElement, message, timeout);
        htmlElement.clear();
    }

    tapWhenTapable(htmlElement, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.elementToBeClickable(htmlElement), timeout, message);
        browser.touchActions().tap(htmlElement).perform();
    }

    waitForTextToBePresentInElement(htmlElement, text, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.textToBePresentInElement(htmlElement, text), timeout, message);
    }

    waitForTextNotToBePresentInElement(htmlElement, text, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.not(EC.textToBePresentInElement(htmlElement, text)), timeout, message);
    }

    waitForUrlToBeEqualToExpectedUrl(expectedUrl, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(EC.urlIs(expectedUrl), timeout, message);
    }

    waitForElementAttributeToHaveValue(htmlElement, attribute, value, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(elementWithAttributeHasValue(htmlElement, attribute, value), timeout, message);
    }

    waitForElementAttributeNotToHaveValue(htmlElement, attribute, value, message, timeout = DEFAULT_TIMEOUT_MS) {
        browser.wait(elementWithAttributeHasNotValue(htmlElement, attribute, value), timeout, message);
    }
}

exports = Helper;
