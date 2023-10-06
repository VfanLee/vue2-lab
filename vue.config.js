const { resolve } = require('path')

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: '',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    }
  }
}
