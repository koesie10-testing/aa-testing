const test = require('node:test');
const assert = require('node:assert/strict');

test('write user input as text without HTML execution', () => {
  const previousWindow = globalThis.window;
  const previousDocument = globalThis.document;

  const fakeDocument = {
    documentElement: { textContent: '' },
  };

  globalThis.window = {
    location: {
      search: '<img src=x onerror=alert(1)>',
    },
  };
  globalThis.document = fakeDocument;

  delete require.cache[require.resolve('./index.js')];
  require('./index.js');

  assert.equal(fakeDocument.documentElement.textContent, '<img src=x onerror=alert(1)>');

  globalThis.window = previousWindow;
  globalThis.document = previousDocument;
});
