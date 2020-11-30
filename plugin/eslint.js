const ESLintPlugin = require('eslint-webpack-plugin')

const eslint = (options) => {
  return {
    configWebpack({ config }) {
      config.plugin('eslint').use(ESLintPlugin, [
        {
          extensions: ['ts', 'tsx'],
        },
      ])
    },
  }
}

module.exports = eslint
