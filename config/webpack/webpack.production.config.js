const sassLoader = require('../loaders/sass.loader.js')(false)
const cssExtractPlugin = require('../plugins/cssExtract.plugin.js')


module.exports = {
  name: 'webpack-production-config',
  mode: 'production',
  target: ['web', /* 'es5' */],
  plugins: [
    cssExtractPlugin
  ],
  module: {
    rules: [
      sassLoader
    ]
  }
}
