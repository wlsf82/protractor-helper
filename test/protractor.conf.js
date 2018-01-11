const constants = require("./constants");

module.exports.config = {
    baseUrl: constants.BASE_URL,
    specs: ["*.spec.js"],
    onPrepare() { browser.ignoreSynchronization = true },
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true,
    },
};
