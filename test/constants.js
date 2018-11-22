const path = require("path");

const absolutePathOfIndexFile = path.resolve(
  __dirname,
  "../sampleApp/index.html"
);

const constants = {
  ABSOLUTE_PATH_OF_INDEX_FILE: absolutePathOfIndexFile,
  BASE_URL: `file://${absolutePathOfIndexFile}`,
  INDEX_DOT_HTML_STRING: "index.html",
  SAMPLE_URL: "http://example.com/",
  SHORTEN_URL: "https://goo.gl/Us9Txw",
  TEXT_NOT_EXISTING_ON_VISIBLE_ELEMENTS: "foo",
  TIMEOUT_IN_MS: 500,
  TITLE_TEXT: "Enter a URL"
};

module.exports = constants;
