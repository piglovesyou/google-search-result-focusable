const resultContainer = `#res`; // Excludes Ads
const searchResultSelector = `
${resultContainer} h3,
${resultContainer} [aria-level="3"],
${resultContainer} [aria-level="4"],
${resultContainer} h3 a:first-of-type,
[role="navigation"] [role="presentation"] a[href]`;

main();

function main() {
  const searchResults = Array.from(
    document.querySelectorAll(searchResultSelector)
  )
    .map(findAnchorParent)
    .filter(isVisible);

  const originalFocusableEls = document.querySelectorAll(
    "a[href],button,input,[tabindex]"
  );
  for (const el of originalFocusableEls) el.setAttribute("tabindex", "-1");

  const textboxEl = document.querySelector('input[type="text"]');
  for (const e of searchResults.concat(textboxEl))
    e.setAttribute("tabindex", "1");

  // The above selector doesn't guarantee the order of search results.
  // We have to query again to find the first search result.
  const firstResult = document.querySelector(`a[tabindex="1"]`);

  // Focus on the first result
  if (firstResult) {
    firstResult.focus();
    forceMakeOutlineVisible();
  }
}

/**
 * Google does some magic to control focus outline, which prevents us to draw outline on what we want.
 * This solves it.
 */
function forceMakeOutlineVisible() {
  for (const sheets of document.styleSheets) {
    try {
      if (!sheets.cssRules.length) continue;
    } catch (e) {
      // Sometimes DOMException occures on accessing cssRules
      continue;
    }
    let offset = 0;
    for (const [i, rule] of Object.entries(sheets.cssRules)) {
      if (rule.cssText.endsWith("{ outline: 0px; }")) {
        sheets.deleteRule(i - offset++);
      }
    }
  }
}

function findAnchorParent(e) {
  return findParent(e, isAnchor, 3);
}

function findParent(el, fn, maxUp = Infinity) {
  let count = 0;
  let parent = el;
  while (parent && count++ <= maxUp) {
    if (fn(parent)) return parent;
    parent = parent.parentNode;
  }
}

function isVisible(e) {
  return e && Boolean(e.offsetParent);
}

function isAnchor(e) {
  return e.tagName === "A";
}
