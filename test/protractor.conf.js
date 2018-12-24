const constants = require("./constants");

module.exports.config = {
  baseUrl: constants.BASE_URL,
  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      args: ["--headless", "--disable-gpu", "--window-size=1024,768"]
    }
  },
  specs: ["*.spec.js"],
  onPrepare() {
    browser.ignoreSynchronization = true;
  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    random: true
  }
};
