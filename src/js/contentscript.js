const originalFocusableEls = document.querySelectorAll('a[href],button,input,[tabindex]');
const textboxEl = document.querySelector('input[type="text"]');
const candidateEls = document.querySelectorAll(createItemQuery());

// Not to be focued on original links and so on
[...originalFocusableEls].forEach((e) => {
  e.setAttribute('tabindex', '-1');
});

// To be able to focus only on textbox and search results
[textboxEl, ...candidateEls].forEach((el) => {
  el.setAttribute('tabindex', '1');
});

// To focus on the first candidate when user hit a first TAB key
if (candidateEls.length) {
  textboxEl.addEventListener('focus', onFocusOnTextboxEl, true);

  function onFocusOnTextboxEl(e) {
    candidateEls[0].focus();
    textboxEl.removeEventListener('focus', onFocusOnTextboxEl, true);
    e.preventDefault();
  }
}

function createItemQuery() {
  const item = document.querySelector('h3');
  if (!item) return;
  return `h3.${item.classList[0]} a:first-of-type, #foot a[href]`;
}
