const $expandButton = $("#expand");
const $shortenButton = $("#shorten");
const $responseField = $("#responseField");

$expandButton.click(expand);
$shortenButton.click(shorten);

function expand() {
  $responseField.empty();
  expandUrl();
  return false;
}

function shorten() {
  $responseField.empty();
  shortenUrl();
  return false;
}

function expandUrl() {
  $responseField.append(
    `<p> Your expanded URL is: </p><a href="https://foo.bar.baz.bah.boo" target="_blank">
    https://foo.bar.baz.bah.boo
    </a>`
  );
}

function shortenUrl() {
  $responseField.append(
    `<p> Your expanded URL is: </p><a href="https://foo.bar" target="_blank">
    https://foo.bar
    </a>`
  );
}

$("[type=file]").on("change", function() {
  const file = this.files[0].name;
  const placeholder = $(this).attr("placeholder");
  if ($(this).val() != "") {
    $(this)
      .next()
      .text(file);
  } else {
    $(this)
      .next()
      .text(placeholder);
  }
});
