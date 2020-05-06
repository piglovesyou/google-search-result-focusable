main();

function main() {
  const searchResults = findSearchResults();

  const originalFocusableEls = $$('a[href],button,input,[tabindex]');
  originalFocusableEls.forEach((el) => {
    el.setAttribute('tabindex', '-1');
  })

  const textboxEl = document.querySelector('input[type="text"]');
  [textboxEl, ...searchResults].forEach(el => {
    el.setAttribute('tabindex', '1');
  })

  // To focus on the first candidate when user hit a first TAB key
  if (searchResults.length) {
    searchResults[0].focus();
  }
}

function findSearchResults() {
  const topLevelResults = Array.from($$('#res h3'))
    .map(e => e.parentNode)
    .filter(isAnchorElement);

  const nestedResults = $$('#res h3 a:first-of-type, #foot a[href]');

  return [...topLevelResults, ...nestedResults];
}

/**
 * @param {Element} e
 * @returns {boolean}
 */
function isAnchorElement(e) {
  return e.tagName === 'A';
}

/**
 * @param {string} sel
 * @param {Element=} parent
 * @returns {Iterable!}
 */
function $$(sel, parent) {
  return /** @type {Iterable!} */((parent || document).querySelectorAll(sel));
}

