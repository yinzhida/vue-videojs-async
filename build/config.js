var path = require('path')
const pkg = require('../package.json')

exports.cssSourceMap = true
exports.extract = true
exports.jsEntry = {
  component: path.resolve(__dirname, '..', 'index.js')
}
exports.outputDir = path.resolve(__dirname, '..', 'dist/')
exports.outputJSName = pkg.name
exports.outputCssName = `${exports.outputJSName}.css`
exports.bundleAnalyzerReport = false
