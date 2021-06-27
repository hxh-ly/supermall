module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375, //视窗宽度，对应我们的设计稿
      viewportHeight: 667,//视窗高度，对应我们的设计稿
      unitPrecision: 5, //小数数位
      viewportUnit: 'vw',//vh / vw
      selectorBlackList: [],//指定不需要转换的类
      minPixelValue: 1,//小于等于数值的不转换
      mediaQuery: false, //允许媒体查询转换px
      exclude: [/tabbar/]
    }
  }
}