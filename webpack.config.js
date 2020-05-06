const path = require('path');

const options = {
  entry: {
    contentscript: path.join(__dirname, 'src/js/contentscript.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  devtool: 'inline-source-map'
};

module.exports = options;
