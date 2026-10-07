document.write(window.location.search.replace(/[&<>"]/g, char => {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };
  return map[char];
}));
