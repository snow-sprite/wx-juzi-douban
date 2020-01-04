import Vue from 'vue'
import Vuex from 'vuex'
import QQMapWX from '../../static/js/qqmap-wx-jssdk'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    isShowRefresh: wx.getStorageSync('isShowIndexRefresh'),
    textIndex: wx.getStorageSync('globalFontSize') || 1,
    themeIndex: wx.getStorageSync('globalTheme') || 0,
    isAutoNightMode: wx.getStorageSync('isAutoNightModeInGlobal') || false,
    globalAutoNightStartTime: wx.getStorageSync('globalAutoNightStartTime') || '20:00', // start time
    globalAutoNightEndTime: wx.getStorageSync('globalAutoNightEndTime') || '06:00', // end time
    isNightMode: wx.getStorageSync('isNightModeInGlobal') || false,
    userInfo: {
      nickName: '',
      avatarUrl: ''
    },
    userLocation: {}
  },
  getters: {
    isShowRefresh: state => state.isShowRefresh,
    textIndex: state => state.textIndex,
    themeIndex: state => Number(state.themeIndex),
    isAutoNightMode: state => state.isAutoNightMode,
    globalAutoNightStartTime: state => state.globalAutoNightStartTime,
    globalAutoNightEndTime: state => state.globalAutoNightEndTime,
    isNightMode: state => state.isNightMode,
    userInfo: state => state.userInfo,
    userLocation: state => state.userLocation
  },
  mutations: {
    toggleRefresh (state) { // 设置首页是否有刷新
      state.isShowRefresh = !state.isShowRefresh
    },
    pickerTextSizeChange (state, val) { // 设置全局字体
      state.textIndex = val
    },
    pickerThemeChange (state, val) { // 设置主题模式
      val = Number(val)
      state.themeIndex = val
      switch (val) {
        case 1:
          // test github workflow CI: 2019 年11月15日 星期五 23:5348
          // 设置之家红主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#C2362D',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 2:
          // 设置石榴粉主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#ED7C98',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 3:
          // 设置芒果橙主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#F09D39',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 4:
          // 设置旗鱼蓝主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#4892E7',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 5:
          // 设置西瓜绿主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#62A47E',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        case 6:
          // 设置葡萄紫主题
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#613FB0',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
          break
        default:
          // 简约白
          wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#fff',
            animation: {
              duration: 400,
              timingFunc: 'easeIn'
            }
          })
      }
    },
    toggleAutoNightMode (state, val) { // 设置自动夜间模式
      state.isAutoNightMode = val
    },
    pickerAutoNightStartTime (state, startTime) { // 设置start时间
      state.globalAutoNightStartTime = startTime
    },
    pickerAutoNightEndTime (state, endTime) { // 设置end时间
      state.globalAutoNightEndTime = endTime
    },
    toggleNightMode (state, value) { // 设置夜间模式
      state.isNightMode = value
      if (value) {
        // 设置夜间模式下头部背景
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
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
  },
  actions: {
    getUserInfo ({ state }) {
      wx.getUserInfo({
        success: res => {
          state.userInfo.avatarUrl = res.userInfo.avatarUrl
          state.userInfo.nickName = res.userInfo.nickName
        }
      })
    },
    getLocation ({ state }) {
      return new Promise(resolve => {
        wx.getLocation({
          success: res => {
            if (res.errMsg === 'getLocation:ok') {
              var qqmapsdk = new QQMapWX({
                key: '4UDBZ-RR5CU-LPRVY-2LERT-PYPAS-OJB7H'
              })
              qqmapsdk.reverseGeocoder({
                location: {
                  latitude: res.latitude,
                  longitude: res.longitude
                },
                success: result => {
                  if (result.status === 0 && result.message === 'query ok') {
                    let addressObj = Object.assign({}, result.result.address_component)
                    Object.keys(addressObj).forEach(key => {
                      state.userLocation[key] = addressObj[key]
                    })
                  }
                  resolve(state.userLocation)
                }
              })
            }
          }
        })
      })
    }
  }
})
