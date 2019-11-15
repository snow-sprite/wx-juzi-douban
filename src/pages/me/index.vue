<template lang="html">
  <div :class="isNightMode ? 'night' : ''" style="height: 100vh;">
    <div :class="isNightMode ? 'line-color' : ''" class="single-setting">
  		<text :class="{'night-text': isNightMode}">显示首页刷新按钮</text>
  		<switch class="fr" :checked="isShowRefresh" @change="toggleRefresh" />
  	</div>
  	<div :class="isNightMode ? 'line-color' : ''" class="single-setting">
  		<picker
  			@change="pickerTextSizeChange"
  			:value="textIndex"
  			:range="textSizeList"
  			range-key="size">
  			<div>
  				<text :class="{'night-text': isNightMode}">列表/正文字体大小</text>
          <text :class="{'night-text': isNightMode}" class="fr pr10">{{textSizeList[textIndex].size}}</text>
  			</div>
  		</picker>
  	</div>
  	<div :class="isNightMode ? 'line-color' : ''" class="single-setting">
  		<picker
  		@change="pickerThemeChange"
  		:value="themeIndex"
  		:range="themeModeList"
  		range-key="theme">
  			<text :class="{'night-text': isNightMode}">主题模式</text>
        <text :class="{'night-text': isNightMode}" class="fr pr10">{{themeModeList[themeIndex].theme}}</text>
  		</picker>
  	</div>
  	<div class="single-setting" :class="isNightMode ? 'line-color' : ''">
  		<text :class="{'night-text': isNightMode}">自动夜间模式</text>
  		<switch class="fr" :checked="isAutoNightMode" @change="toggleAutoNightMode" />
  	</div>
    <div class="auto-timer" v-if="isAutoNightMode">
      <!-- 开始时间 -->
      <picker
        @change="pickerAutoNightStartTime"
        mode="time"
        start="00:00"
        :value="globalAutoNightStartTime"
      >
        <text
          class="auto-start-time auto-time"
          :class="{
            'night-text': isNightMode,
            'night-border': isNightMode
          }"
          @click=""
        >{{ globalAutoNightStartTime }}</text>
  		</picker>
      <!-- 结束时间 -->
      <text style="margin-left: 15px;padding-top: 3px;">-</text>
      <picker
        mode="time"
        @change="pickerAutoNightEndTime"
        start="00:00"
        :value="globalAutoNightEndTime"
      >
        <text
          class="auto-end-time auto-time"
          :class="{
            'night-text': isNightMode,
            'night-border': isNightMode
          }"
        >{{ globalAutoNightEndTime }}</text>
      </picker>
    </div>
  	<div class="single-setting" :class="isNightMode ? 'line-color' : ''">
  		<text :class="{'night-text': isNightMode}">夜间模式</text>
  		<switch class="fr" :checked="isNightMode" @change="toggleNightMode" />
  	</div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Me',
  data () {
    return {
      textSizeList: [
        {size: '小'},
        {size: '中'},
        {size: '大'}
      ],
      themeModeList: [
        {theme: '简约白'},
        {theme: '之家红'},
        {theme: '石榴粉'},
        {theme: '芒果橙'},
        {theme: '旗鱼蓝'},
        {theme: '西瓜绿'},
        {theme: '葡萄紫'}
      ],
      // themeIndex: 0, // 默认主题 index
      test: !getApp().globalData.isShowIndexRefresh,
      timer: null
    }
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh, // 首页刷新
    textIndex: _ => store.getters.textIndex, // 字体
    themeIndex: _ => store.getters.themeIndex, // 主题
    isAutoNightMode: _ => store.getters.isAutoNightMode, // 自动夜间模式
    globalAutoNightStartTime: _ => store.getters.globalAutoNightStartTime,
    globalAutoNightEndTime: _ => store.getters.globalAutoNightEndTime,
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  mounted () {
    // 默认先设置一下主题
    if (this.isNightMode) {
      // 顶部导航夜间模式
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
      // 非夜间模式可以先设置主题皮肤
      this.setTheme(this.themeIndex)
      // 顶部导航非夜间
      // wx.setNavigationBarColor({
      //   frontColor: '#000000',
      //   backgroundColor: '#ffffff'
      // })
      // 底部tabbar非夜间模式
      wx.setTabBarStyle({
        color: '#a5a5a5',
        backgroundColor: '#ffffff',
        selectedColor: '#ffd700'
      })
    }
  },
  methods: {
    onShareAppMessage () { // 我的页的转发
      return {
        title: '我的2',
        imageUrl: '../index/img/banner.png',
        success (res) {
        },
        fail (err) {
          console.err(err)
        }
      }
    },
    toggleRefresh (e) { // 切换首页刷新按钮
      store.commit('toggleRefresh')
      if (this.isShowRefresh) { // 本地存储
        wx.setStorageSync('isShowIndexRefresh', true)
      } else {
        wx.setStorageSync('isShowIndexRefresh', false)
      }
    },
    pickerTextSizeChange (e) { // 列表/正文字体选择
      store.commit('pickerTextSizeChange', e.target.value || 1)
      let fontsizeIndex = e.target.value
      wx.setStorageSync('globalFontSize', fontsizeIndex)
    },
    pickerThemeChange (e) { // 主题选择
      let themeIndex = Number(e.target.value)
      store.commit('pickerThemeChange', themeIndex || 0)
      wx.setStorageSync('globalTheme', themeIndex)
    },
    toggleAutoNightMode (e) {
      store.commit('toggleAutoNightMode', e.target.value)
      if (e.target.value) {
        this.setAutoNightModel()
      }
      if (this.isAutoNightMode) {
        // 本地存储
        wx.setStorageSync('isAutoNightModeInGlobal', true)
        // 设置自动夜间模式
        // if (this.isNightMode) {
        // }
      } else {
        wx.setStorageSync('isAutoNightModeInGlobal', false)
      }
    },
    setAutoNightModel () {
      let timer = new Date()
      let hour = Number(timer.getHours())
      let minutes = Number(timer.getMinutes())
      let startGaps = this.globalAutoNightStartTime.indexOf(':')
      let endGaps = this.globalAutoNightEndTime.indexOf(':')
      let settingStartHour = Number(this.globalAutoNightStartTime.slice(0, startGaps))
      let settingStartMinutes = Number(this.globalAutoNightStartTime.slice(startGaps + 1))

      let settingEndHour = Number(this.globalAutoNightEndTime.slice(0, endGaps))
      let settingEndtMinutes = Number(this.globalAutoNightEndTime.slice(endGaps + 1))

      if (hour === settingStartHour) {
        if (minutes >= settingStartMinutes) {
          store.commit('toggleNightMode', true)
        }
      }
      if (hour > settingStartHour) {
        store.commit('toggleNightMode', true)
      }

      if (hour === settingEndHour) {
        if (minutes <= settingEndtMinutes) {
          store.commit('toggleNightMode', true)
        }
      }
      if (hour < settingEndHour) {
        store.commit('toggleNightMode', true)
      }
    },
    pickerAutoNightStartTime (e) {
      // TODO
      store.commit('pickerAutoNightStartTime', e.target.value || '00:00')
      let timeIndex = e.target.value
      wx.setStorageSync('globalAutoNightStartTime', timeIndex)
    },
    pickerAutoNightEndTime (e) {
      // TODO
      store.commit('pickerAutoNightEndTime', e.target.value || '00:00')
      let timeIndex = e.target.value
      wx.setStorageSync('globalAutoNightEndTime', timeIndex)
    },
    toggleNightMode (e) {
      store.commit('toggleNightMode', e.target.value)
      if (this.isNightMode) { // 本地存储
        wx.setStorageSync('isNightModeInGlobal', true)
      } else {
        // 关闭夜间模式先设置默认主题皮肤
        this.setTheme(this.themeIndex)
        wx.setStorageSync('isNightModeInGlobal', false)
      }
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
    }
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/rpx';
.me-setting {
  display: flex;
  flex-direction: column;
}
.single-setting {
  @include rpx((
    padding: 0 5px 0 5px,
    height: 50px,
    line-height: 50px,
    font-size: 18px,
    border-bottom: 1px solid #eee
  ))
}
.fr {
  float: right;
}
.pr10 {
  @include rpx((
    padding-right: 10rpx
  ))
}
.auto-timer {
  height: 50px;
  /* line-height: 50px; */
  display: flex;
  justify-content: flex-start;
  padding: 10px 0 0 5px;
  box-sizing: border-box;
}
.auto-time {
  width: 55px;
  height: 35px;
  display: block;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 35px;
}
.auto-end-time {
  margin-left: 15px;
}
/* 夜间模式 */
.night {
  background: #232323;
  color: #666;
}
.line-color {
  border-bottom: 1px solid #2c2c2c !important;
}
.night-text {
  color: #666 !important;
}
.night-border {
  border: 1px solid #999;
}
/* 夜间模式结束 */
</style>
