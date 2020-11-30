const less = require('@remax/plugin-less')
const eslint = require('./plugin/eslint')
const analyzer = require('./plugin/analyzer')

const plugins = [eslint(), less()]
if (process.env.REMAX_APP_RELEASE_ENV === 'analyzer') {
  plugins.push(analyzer())
}
module.exports = {
  // one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins,
}
