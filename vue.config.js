const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'production' ?
  '/' :
  '/'

module.exports = {
  baseUrl: BASE_URL,
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  productionSourceMap: false,
  // 本地代理实现测试时跨域。
  // 目前我的跨越解决方案是使用nginx做反向代理，你们可以扔给运维做这件事。
  devServer: {
    disableHostCheck: true, //  新增该配置项
    // proxy: {
    //   '/api': {
    //     target: 'http://www.weather.com.cn/data/sk/',
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: { 
      //向CSS相关的loader传递选项,否则你别指望好好用less- -
      less: {
        javascriptEnabled: true
      }
    }
  }
}
