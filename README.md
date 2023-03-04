# Hit TAB and ENTER on Google Search Results [![Node.js CI](https://github.com/piglovesyou/google-search-result-focusable/actions/workflows/node.js.yml/badge.svg)](https://github.com/piglovesyou/google-search-result-focusable/actions/workflows/node.js.yml)

[![image](https://user-images.githubusercontent.com/217530/167819535-43da638e-7521-4847-be57-abd9fea154c6.png)](https://chrome.google.com/webstore/detail/hit-tab-and-enter-on-goog/kkldgaaaafjoipnomoinnkccihdiffee)

The source code of Google Chrome Extension, Hit TAB and ENTER on Google Search Results.

[👉 Install it from chrome web store](https://chrome.google.com/webstore/detail/hit-tab-and-enter-on-goog/kkldgaaaafjoipnomoinnkccihdiffee)

# Develop

- Run `yarn build`
- In `chrome://extensions/` load "unpacked" of `./build`
- Verify it in Google search result page

# Publish (for me)

- `yarn build`
- `yarn version  # specify new version`
- Upload `build.zip` to https://chrome.google.com/webstore/developer/dashboard

# License

MIT
