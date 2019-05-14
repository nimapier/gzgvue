const webpack = require('webpack')
module.exports = {
  devServer: {
    // before: require('./mock')
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  }
}
