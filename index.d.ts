import { ElementFinder, ActionSequence } from "protractor";

// clickers and tappers
export function click(elem: ElementFinder, timeoutInMs?: number): Promise<void>
export function hoverAndClick(elem: ElementFinder, timeoutInMs?: number): ActionSequence
export function tap(elem: ElementFinder, timeoutInMs?: number): ActionSequence

// input field interactions
export function fillFieldWithText(elem: ElementFinder, text: string, timeoutInMs?: number): Promise<void>
export function uploadFileIntoInputField(elem: ElementFinder, absoluteFilePath: string, timeoutInMs?: number): Promise<void>
export function clear(elem: ElementFinder, timeoutInMs?: number): Promise<void>
export function clearFieldAndFillItWithText(elem: ElementFinder, text: string, timeoutInMs?: number): Promise<void>
export function fillFieldWithTextAndPressEnter(elem: ElementFinder, text: string, timeoutInMs?: number): Promise<void>

// misc
export function isCurrentUrlDifferentFromBaseUrl(): boolean
export function scrollToElement(elem: ElementFinder, timeoutInMs?: number): Promise<T>
export function setTimeout(timeoutInMs?: number): void

// waiters
export function waitForElementPresence(elem: ElementFinder, timeoutInMs?: number): Promise<T>
export function waitForElementNotToBePresent(elem: ElementFinder, timeoutInMs?: number): Promise<T>
export function waitForElementVisibility(elem: ElementFinder, timeoutInMs?: number): Promise<T>
export function waitForElementNotToBeVisible(elem: ElementFinder, timeoutInMs?: number): Promise<T>
export function waitForTextToBePresentInElement(elem: ElementFinder, text: string, timeoutInMs?: number): Promise<T>
export function waitForTextNotToBePresentInElement(elem: ElementFinder, text: string, timeoutInMs?: number): Promise<T>
export function waitForUrlToBeEqualToExpectedUrl(expectedUrl: string, timeoutInMs?: number): Promise<T>
export function waitForUrlNotToBeEqualToExpectedUrl(expectedUrl: string, timeoutInMs?: number): Promise<T>
export function waitForUrlToContainString(expectedString: string, timeoutInMs?: number): Promise<T>
export function waitForUrlNotToContainString(expectedString: string, timeoutInMs?: number): Promise<T>
