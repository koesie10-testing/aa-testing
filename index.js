const output = document.createTextNode(window.location.search);
const target = document.body || document.documentElement;
if (target) {
  target.appendChild(output);
}
