const constants = require("./constants");

module.exports.config = {
  baseUrl: constants.BASE_URL,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--window-size=1024,768"]
    }
  },
  specs: ["*.spec.js"],
  onPrepare() {
    browser.waitForAngularEnabled(false);
    // afterEach(() => browser.sleep(1000));
  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    random: true
  },
  // highlightDelay: 1000
};
