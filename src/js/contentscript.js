main();

function main() {
  const originalFocusableEls = document.querySelectorAll('a[href],button,input,[tabindex]');
  const textboxEl = document.querySelector('input[type="text"]');
  const candidateEls = findCandidateEls();

// Not to be focued on original links and so on
  [...originalFocusableEls].forEach((e) => {
    e.setAttribute('tabindex', '-1');
  });

// To be able to focus only on textbox and search results
  [
    textboxEl,
    ...candidateEls
  ].forEach((el) => {
    el.setAttribute('tabindex', '1');
  });

// To focus on the first candidate when user hit a first TAB key
  if (candidateEls.length) {
    candidateEls[0].focus();
  }
}

function findCandidateEls() {
  // Skip ads

  // Search results
  const els = [
    // Ordinal search results
    ...Array.from(document.querySelectorAll('#res h3'))
        .map(e => e.parentNode)
        .filter(e => e.tagName === 'A'),
    // Nested search results and footer pager links
    ...document.querySelectorAll('#res h3 a:first-of-type, #foot a[href]'),
  ];

  return els;
}
