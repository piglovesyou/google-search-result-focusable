main();

function main() {
  const candidateEls = findCandidateEls();

  // Suppress to focue on original focusables
  const originalFocusableEls = $$('a[href],button,input,[tabindex]');
  for (let el of originalFocusableEls) {
    el.setAttribute('tabindex', '-1');
  }

  // To be able to focus only on textbox and search results
  const textboxEl = document.querySelector('input[type="text"]');
  for (let el of [textboxEl, ...candidateEls]) {
    el.setAttribute('tabindex', '1');
  }

  // To focus on the first candidate when user hit a first TAB key
  if (candidateEls.length) {
    candidateEls[0].focus();
  }
}

function findCandidateEls() {
  // Search results
  return [
    // Ordinal search results
    ...$$('#res h3')
    .map(e => e.parentNode)
    .filter(isAnchorElement),
    // Nested search results and footer pager links
    ...$$('#res h3 a:first-of-type, #foot a[href]'),
  ];
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

