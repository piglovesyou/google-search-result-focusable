const webpack = require('webpack');
const path = require('path');
const fileSystem = require('fs');
const env = require('./utils/env');
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const isDevelop = process.env.NODE_ENV !== 'production';

const options = {
  entry: {
    contentscript: path.join(__dirname, 'src', 'js', 'contentscript.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV)
    }),

    isDevelop ? null : new ClosureCompilerPlugin({
      compiler: {
        language_in: 'ECMASCRIPT_NEXT',
        language_out: 'ECMASCRIPT_NEXT',
        output_wrapper: '+function(){%output%}.call(this)',
        compilation_level: 'ADVANCED',
        debug: false,
      },
      concurrency: 3,
    })
  ].filter(e => !!e),
  devtool: isDevelop ? 'inline-source-map' : undefined,
};

module.exports = options;
