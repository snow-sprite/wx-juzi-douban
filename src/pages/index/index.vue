<template>
<div>
  <div class="zl-app" :class="isNightMode ? 'night' : ''">
    <div class="zl-refresh-tip" ref="refreshTip" v-show="refreshLoading && isBtnCommit">
      <span>{{ refreshText }}</span>
    </div>
    <Weather v-if="weatherInfo && weatherInfo.cityCode" :weatherInfo="weatherInfo"></Weather>
    <div class="swiper-tab" :class="{
      'night-text': isNightMode,
      'night-line-color': isNightMode  
    }">
      <div
        v-for="(item, ind) in secondTabs"
        :key="ind"
        class="tab-list-box"
        :class="{'tab-active': currentPage === ind}"
        :data-current-tab="ind"
        @click="switchPage(ind)">
        {{ item }}
      </div>
    </div>
    <Swiper
      :current="currentPage"
      :duration="300"
      @change="changePage"
      class="app"
    >
      <swiper-item>
        <!-- 冷知识组件 -->
        <Movies />
      </swiper-item>
      <!-- <swiper-item class="main"> -->
        <!-- 快讯组件 -->
        <!-- <Live v-if="livesList.length > 0" :livesList="livesList" @handleLive="getLives" /> -->
      <!-- </swiper-item> -->
      <!-- <swiper-item> -->
        <!-- 行情组件 -->
        <!-- <Market /> -->
      <!-- </swiper-item> -->
      <swiper-item>
        <!-- 冷知识组件 -->
        <HistorysToday />
      </swiper-item>
    </Swiper>
    <!-- 首页刷新按钮 -->
    <div class="zl-refresh" v-show="isShowRefresh" @click="refreshPage">
      <img src="../../../static/img/fresh.svg" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Movies from '@/pages/index/Movies'
// import Live from '@/components/Live'
// import Market from '@/components/Market'
import Weather from '@/components/Weather'
import HistorysToday from '@/components/HistorysToday'
import store from '@/store'
import wxApi from '@/lib/request'
import {
  // LIVES_LIST,
  POST_WEATHER
} from '@/api/apiList'
export default {
  name: 'Home',
  components: {
    Movies,
    // Live,
    // Market,
    Weather,
    HistorysToday
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh,
    isNightMode: _ => store.getters.isNightMode, // 夜间模式
    themeIndex: _ => store.getters.themeIndex,
    userLocation: _ => store.getters.userLocation
  },
  data () {
    return {
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      secondTabs: [
        '电影',
        // '资讯',
        // '行情',
        '冷知识'
      ],
      circular: true,
      refreshLoading: true,
      refreshText: '',
      timer: null,
      // 快讯列表
      // livesList: [],
      isBtnCommit: false,
      weatherInfo: {}
    }
  },
  mounted () {
    this.getLocation()
    // 获取快讯
    // this.getLives()
    this.setNavigationBarStyle()
    // 当前页可被转发
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  watch: {
    'isNightMode': (newVal, oldVal) => {
      if (newVal) {
        // 顶部导航夜间模式
        // 2019-11-23 15:33:12
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#232323'
        })
      } else {
        // 顶部导航非夜间
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff'
        })
      }
    },
    'themeIndex': newState => {
      if (newState) {
        this.setTheme(newState)
      }
    }
  },
  methods: {
    setNavigationBarStyle () {
      const that = this
      this.timer = setTimeout(function () {
        if (that.isNightMode) {
        // 顶部导航夜间模式
          wx.setNavigationBarColor({
            frontColor: '#ffffff',
            backgroundColor: '#232323'
          })
        } else {
          // 非夜间模式可以先设置主题皮肤
          that.setTheme(that.themeIndex)
        }
      }, 0)
    },
    getLocation () {
      store.dispatch('getLocation')
        .then(data => {
          this.postWeather(data)
        })
    },
    // 切换tab选项
    switchPage (page) {
      if (this.currentPage === page) return
      this.currentPage = page
    },
    // async getLives () {
    //   try {
    //     let that = this
    //     this.refreshText = '正在刷新当前页面..'
    //     let { data } = await wxApi.get(LIVES_LIST, {
    //       reading: false,
    //       limit: 66,
    //       flag: 'down'
    //     })
    //     if (data) {
    //       this.refreshText = '刷新完成: )'
    //     }
    //     // this.livesList.push(data.data.list)
    //     data.list.forEach(list => {
    //       this.livesList.push(list)
    //     })
    //     clearTimeout(this.timer)
    //     this.timer = setTimeout(() => {
    //       that.refreshLoading = false
    //       this.isBtnCommit = false
    //     }, 1000)
    //   } catch (e) {
    //     this.livesList = []
    //     this.refreshLoading = false
    //     this.refreshText = '网络错误: ('
    //     this.isBtnCommit = false
    //   }
    // },
    changePage (e) {
      this.currentPage = e.target.current
    },
    // click refresh button
    refreshPage () {
      // 刷新按钮
      // this.livesList = []
      this.isBtnCommit = true
      this.refreshLoading = true
      // this.getLives()

      this.weatherInfo = {}
      this.getLocation()
    },
    setTheme (ind) {
      /*
        这里直接使用store.commit('pickerThemeChange', ind)并不会生效
        可能是因为小程序有限制，禁止了程序的自动触发改变主题皮肤
        想不到其他的原因了
        wxsb！！！😡
      */
      this.timer = setTimeout(function () {
        store.commit('pickerThemeChange', ind)
      }, 0)
    },
    async postWeather (info) {
      let city = info.city
      let { data } = await wxApi.get(`${POST_WEATHER}/${city}`)
      if (data) {
        this.weatherInfo = data.data
      }
    }
  }
  // 分享当前页
  // onShareAppMessage () {
  //   return {
  //     title: '分享给你一个好玩的小程序😄',
  //     success (res) {},
  //     fail () {}
  //   }
  // }
}
</script>

<style lang=scss scoped>
@import '../../assets/mixins';
@import '../../assets/rpx';
@include b(coin-box) {
  height: 100%;
}
.app {
  min-height: 100vh;
}
.main {
  @include rpx((
    min-height: 182px
  ))
}
.zl-app {
  height: 100vh;
  position: relative;
  .zl-refresh {
    position: fixed;
    background: #fff;
    border-radius: 50%;
    @include rpx((
      width: 45px,
      height: 45px,
      bottom: 60px,
      right: 50px
    ));
    img {
      margin: 0 auto;
      display: block;
      @include rpx((
        width: 25px,
        height: 25px,
        margin-top: 10px
      ))
    }
  }
}
.swiper-tab {
  display: flex;
  justify-content: center;
  @include rpx((
    padding: 15px 0,
    border-bottom: 1px solid #eee
  ))
}
.tab-list-box {
  @include rpx((
    margin-left: 15px,
    font-size: 18px
  ))
}
.tab-active {
  color: #dbc858;
}
.zl-refresh-tip {
  width: 100%;
  background: #f3e593;
  text-align: center;
  transition: height 2s;
  @include rpx((
    height: 40px,
    line-height: 40px
  ));
  span {
    font-weight: 400;
    @include rpx((
      font-size: 16px,
      color: #e69b37
    ))
  }
}
/* 夜间模式 */
.night {
  background: #232323;
  color: #fff;
}
.night-text {
  color: #666 !important;
}
.night-line-color {
  border-bottom: 1px solid #2c2c2c !important;
}
/* end夜间模式 */
</style>
