const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const analyzer = (options) => {
  return {
    configWebpack({ config }) {
      config.plugin('analyzer').use(BundleAnalyzerPlugin)
    },
  }
}

module.exports = analyzer
