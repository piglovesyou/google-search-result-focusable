const searchTextboxSelector = '[name="q"]'
const resultContainer = `#res` // Excludes Ads
const searchResultSelector = `
${resultContainer} h3,
${resultContainer} [aria-level="3"],
${resultContainer} [aria-level="4"],
${resultContainer} h3 a:first-of-type,
[role="navigation"] [role="presentation"] a[href]`
const outlineTrimmerSelector1 = "snf"
const outlineTrimmerSelector2 = "snc"

main()

function main() {
    // Get references to search result items
    const textboxEl = document.querySelector(searchTextboxSelector)
    const searchResults = Array.from(document.querySelectorAll(searchResultSelector))
        .map(findAnchorParent)
        .filter(isVisible)

    // Make original focusable elements unfocusable
    const originalFocusableEls = document.querySelectorAll("a[href],button,input,[tabindex]")
    for (const el of originalFocusableEls) {
        el.setAttribute("tabindex", "-1")
    }

    // Make search result items focusable
    textboxEl.setAttribute("tabindex", "1")
    for (const el of searchResults) {
        el.setAttribute("tabindex", "1")
        forceDisableTrimmingToMakeOutlineVisible(el)
    }

    // The above selector doesn't guarantee the order of search results.
    // We have to query again to find the first search result.
    const firstResult = document.querySelector(`a[tabindex="1"]`)

    // Focus on the first result
    if (firstResult) {
        firstResult.focus()
        forceMakeOutlineVisible()
    }
}

/**
 * Google does some magic to control focus outline, which prevents us to draw outline on what we want.
 * This solves it.
 */
function forceMakeOutlineVisible() {
    for (const sheets of document.styleSheets) {
        try {
            if (!sheets.cssRules.length) continue
        } catch (e) {
            // Sometimes DOMException occures on accessing cssRules
            continue
        }
        let offset = 0
        for (const [i, rule] of Object.entries(sheets.cssRules)) {
            if (rule.cssText.endsWith("{ outline: 0px; }")) {
                sheets.deleteRule(i - offset++)
            }
        }
    }
}

/**
 * Weird styles trim left side of outline, which doesn't look beautiful. This fixes it.
 */
function forceDisableTrimmingToMakeOutlineVisible(el) {
    // Nested item
    const h3 = findParent(el, (e) => e.tagName === "H3", 1)
    if (h3) {
        applyStyleToForceDisableTrimming(h3)
    } else {
        // Root item
        const found1 = findParent(el, (e) => e.dataset && e.dataset[outlineTrimmerSelector1], 6)
        if (found1) {
            applyStyleToForceDisableTrimming(found1)
            const found2 = findParent(found1, (e) => e.dataset && e.dataset[outlineTrimmerSelector2], 2)
            if (found2) {
                applyStyleToForceDisableTrimming(found2)
            } else {
                warn(outlineTrimmerSelector2)
            }
        } else {
            // There are cases the outline trimmer doesn't exist.
        }
    }

    function warn(selector) {
        console.warn(`[google-search-result-focusable] Couldn't find outline trimmer: ${selector}`)
    }

    function applyStyleToForceDisableTrimming(e) {
        e.style.overflow = "visible"
        e.style.contain = "layout"
    }
}

function findAnchorParent(e) {
    return findParent(e, isAnchor, 3)
}

function findParent(el, fn, maxUp = Infinity) {
    let count = 0
    let parent = el
    while (parent && count++ <= maxUp) {
        if (fn(parent)) return parent
        parent = parent.parentNode
    }
}

function isVisible(e) {
    return e && Boolean(e.offsetParent)
}

function isAnchor(e) {
    return e.tagName === "A"
}
