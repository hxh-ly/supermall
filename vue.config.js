const path = require('path')
const webpack = require('webpack')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('assets', resolve('./src/assets'))
      .set('views', resolve('./src/views'))
      .set('common', resolve('./src/common'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('./src/views'))
      .set('network', resolve('./src/network'))
  }

} 