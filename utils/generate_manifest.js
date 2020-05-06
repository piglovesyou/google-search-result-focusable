const manifest = require('../src/manifest');
const fs = require('fs');
const path = require('path');

manifest.description = process.env.npm_package_description;
manifest.version = process.env.npm_package_version;

fs.writeFileSync(
  path.join(__dirname, "../build/manifest.json"),
  JSON.stringify(manifest)
);
