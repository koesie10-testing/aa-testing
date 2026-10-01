const value = window.location.search;
const target = document.body || document.documentElement;
if (target) {
  target.textContent = value;
}

