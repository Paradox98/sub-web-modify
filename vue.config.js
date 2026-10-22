const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_SUBCONVERTER_DEFAULT_BACKEND': JSON.stringify(
          process.env.VUE_APP_SUBCONVERTER_DEFAULT_BACKEND || ''
        )
      })
    ]
  }
}
