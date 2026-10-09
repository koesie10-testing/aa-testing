const queryText = window.location.search;

window.addEventListener("DOMContentLoaded", () => {
  document.body.append(document.createTextNode(queryText));
});
