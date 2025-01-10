const path = require('path');

module.exports = {
  entry: './gemini.js',
  output: {
    filename: 'bundleOutput.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
};