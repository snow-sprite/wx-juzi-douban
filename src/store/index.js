import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isShowRefresh: wx.getStorageSync('isShowIndexRefresh'),
    textIndex: wx.getStorageSync('globalFontSize') || 1,
    themeIndex: wx.getStorageSync('globalTheme') || 0,
    isAutoNightMode: wx.getStorageSync('isAutoNightModeInGlobal') || false,
    isNightMode: wx.getStorageSync('isNightModeInGlobal') || false
  },
  getters: {
    isShowRefresh: state => state.isShowRefresh,
    textIndex: state => state.textIndex,
    themeIndex: state => state.themeIndex,
    isAutoNightMode: state => state.isAutoNightMode,
    isNightMode: state => state.isNightMode
  },
  mutations: {
    toggleRefresh (state) { // 设置首页是否有刷新
      state.isShowRefresh = !state.isShowRefresh
    },
    pickerTextSizeChange (state, val) { // 设置全局字体
      state.textIndex = val
    },
    pickerThemeChange (state, val) { // 设置主题模式
      state.themeIndex = val
    },
    toggleAutoNightMode (state) { // 设置自动夜间模式
      state.isAutoNightMode = !state.isAutoNightMode
    },
    toggleNightMode (state, value) { // 设置夜间模式
      state.isNightMode = value
      if (value) {
        // 设置夜间模式下头部背景
        wx.setNavigationBarColor({
          frontColor: '#666',
          backgroundColor: '#232323'
        })
        // 底部tabbar夜间模式
        wx.setTabBarStyle({
          color: '#a5a5a5',
          backgroundColor: '#232323',
          selectedColor: '#ffd700'
        })
      } else {
        // 设置非夜间模式下的头部背景
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff'
        })
        // 底部tabbar非夜间模式
        wx.setTabBarStyle({
          color: '#a5a5a5',
          backgroundColor: '#ffffff',
          selectedColor: '#ffd700'
        })
      }
    }
  }
})
