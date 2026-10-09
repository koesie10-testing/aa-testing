const renderSearch = () => {
  document.body.appendChild(document.createTextNode(window.location.search));
};

if (document.body) {
  renderSearch();
} else {
  window.addEventListener("DOMContentLoaded", renderSearch);
}
