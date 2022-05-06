main();

function main() {
  const originalFocusableEls = $$("a[href],button,input,[tabindex]");
  for (const el of originalFocusableEls) {
    el.setAttribute("tabindex", "-1");
  }

  const searchResults = findSearchResults();

  const textboxEl = document.querySelector('input[type="text"]');
  for (const e of searchResults.concat(textboxEl)) {
    e.setAttribute("tabindex", "1");
  }

  // To focus on the first candidate when user hit a first TAB key
  if (searchResults.length) {
    searchResults[0].focus();
    forceMakeOutlineVisible();
  }
}

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

function findSearchResults() {
  const topLevelResults = Array.from($$("#res h3"))
    .map((e) => e.parentNode)
    .filter(isAnchorElement);

  const footerPagers = `[role="navigation"] [role="presentation"] a[href]`;
  const categoryResults = '#res a[aria-level="3"]';
  const nestedResults = Array.from(
    $$(`#res h3 a:first-of-type, ${footerPagers}, ${categoryResults}`)
  ).filter((e) => e.offsetParent);

  return topLevelResults.concat(nestedResults);
}

/**
 * @param {Element} e
 * @returns {boolean}
 */
function isAnchorElement(e) {
  return e.tagName === "A";
}

/**
 * @param {string} sel
 * @param {Element=} parent
 * @returns {Iterable!}
 */
function $$(sel, parent) {
  return /** @type {Iterable!} */ ((parent || document).querySelectorAll(sel));
}
