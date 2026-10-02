const value = String(window.location.search || '');

if (document.body) {
  document.body.textContent = value;
} else {
  document.addEventListener('DOMContentLoaded', () => {
    document.body.textContent = value;
  });
}
