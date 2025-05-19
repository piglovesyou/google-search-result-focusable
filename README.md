

Once:

-   `brew install pre-install`
-   `pre-commit install`
-   `yarn build`
-   In `chrome://extensions/` load "unpacked" of `./build`

Every time you modify the code:

-   `yarn build`
-   Verify it in Google search result page

# Publish (for me)

-   `yarn build`
-   `yarn version  # specify new version`
-   Upload `build.zip` to https://chrome.google.com/webstore/developer/dashboard

# License

MIT
