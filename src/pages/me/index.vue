<template lang="html">
  <div :class="isNightMode ? 'night' : ''" style="height: 100vh;">
    <div class="avatar-box">
        <button class="avatar"
          open-type="getUserInfo"
          lang="zh_CN"
          @getuserinfo="login"
        >
          <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl">
          <div v-else class="default-avatar-box">
            <text class="default-avatar-login">点击登录</text>
          </div>
        </button>
        <div v-if="userInfo.nickName" class="nickname-box">
          <text class="nickname">{{userInfo.nickName}}</text>
        </div>
    </div>
    <!-- :class="isNightMode ? 'line-color' : ''" -->
    <div :class="{'line-color': isNightMode, 'nickname-top': userInfo.nickName}"  class="single-setting">
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
      // 解决bug的
      timer: null,
      // 设置时间戳
      timer2: null,
      linearTime: null
    }
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh, // 首页刷新
    textIndex: _ => store.getters.textIndex, // 字体
    themeIndex: _ => store.getters.themeIndex, // 主题
    isAutoNightMode: _ => store.getters.isAutoNightMode, // 自动夜间模式
    globalAutoNightStartTime: _ => store.getters.globalAutoNightStartTime,
    globalAutoNightEndTime: _ => store.getters.globalAutoNightEndTime,
    isNightMode: _ => store.getters.isNightMode, // 夜间模式,
    userInfo: _ => store.getters.userInfo
  },
  mounted () {
    this.setNightMoode()
    // 可被转发
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  watch: {
    'linearTime': function (newTime) {
      if (newTime && this.setAutoNightModelTime()) {
        this.setAutoNightModeTheme()
      } else {
        this.resetAutoNightModeTheme()
      }
    },
    'themeIndex': function (newState) {
      if (newState) {
        this.setTheme(newState)
      }
    }
  },
  methods: {
    login (e) {
      // let that = this
      wx.getSetting({
        success: result => {
          this.setUser(result)
        }
      })
    },
    setUser (result) {
      if (result.authSetting['scope.userInfo']) {
        wx.login({
          success: res => {
            if (res && res.code) this.getUserInfo(res.code)
          }
        })
      } else {
        wx.authorize({
          scope: 'scope.userInfo',
          success () {}
        })
      }
    },
    getUserInfo (code) {
      store.dispatch('getUserInfo')
    },
    onShareAppMessage () { // 我的页的转发
      return {
        title: '我的2',
        imageUrl: '../../../static/img/avatar.png',
        success (res) {},
        fail () {}
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
    toggleAutoNightMode (e) { // 自动夜间模式按钮
      store.commit('toggleAutoNightMode', e.target.value)
      if (e.target.value) {
        this.linearTime = new Date().getTime()
        // 打开自动夜间模式 设置计时
        this.setLinearTime()
        // 触发主题设置
        if (this.setAutoNightModelTime()) {
          this.setAutoNightModeTheme()
        } else {
          this.resetAutoNightModeTheme()
        }
      } else {
        this.linearTime = null
        // 关闭自动夜间模式 则关闭计时器
        this.clearLinearTime()
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
    // 设置时间对比当前系统时间，匹配则返回true
    setAutoNightModelTime () {
      let year = new Date(this.linearTime).getFullYear()
      let month = new Date(this.linearTime).getMonth() + 1
      let day = new Date(this.linearTime).getDate()

      let startTime = new Date(`${year}/${month}/${day} ${this.globalAutoNightStartTime}`)
      let endTime = new Date(`${year}/${month}/${day} ${this.globalAutoNightEndTime}`)

      // 起始时间戳
      let startTimestamp = startTime.getTime()
      // 终止时间戳
      let endTImestamp = endTime.getTime()
      // 1.起始时间小于终止时间 是同一天
      // 设置的时间正好在起始时间和结束时间之间
      if (startTimestamp <= endTImestamp) {
        if (this.linearTime < startTimestamp || this.linearTime > endTImestamp) {
          return false
        }
      } else {
        // 2.起始时间大于终止时间 说明不是同一天了
        if (this.linearTime > endTImestamp) {
          return false
        }
        if (this.linearTime < startTimestamp - 1000 * 3600 * 24) {
          return false
        }
      }
      return true
    },
    // 系统调制夜间模式
    setAutoNightModeTheme () {
      store.commit('toggleNightMode', true)
    },
    // 还原正常模式
    resetAutoNightModeTheme () {
      store.commit('toggleNightMode', false)
    },
    pickerAutoNightStartTime (e) {
      // TODO
      let timeIndex = e.target.value
      store.commit('pickerAutoNightStartTime', timeIndex || '00:00')
      wx.setStorageSync('globalAutoNightStartTime', timeIndex)
    },
    pickerAutoNightEndTime (e) {
      // TODO
      let timeIndex = e.target.value
      store.commit('pickerAutoNightEndTime', timeIndex || '00:00')
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
    },
    setNightMoode () {
      // 默认先设置一下主题
      if (this.isNightMode) {
        store.commit('toggleNightMode', true)
      } else {
        // 非夜间模式可以先设置主题皮肤
        // store.commit('toggleNightMode', false)
        this.setTheme(this.themeIndex)
      }
    },
    // 计时器开始工作
    setLinearTime () {
      let that = this
      this.timer2 = setInterval(function () {
        that.linearTime += 1000
      }, 1000)
    },
    // 停止计时器
    clearLinearTime () {
      this.timer2 = clearInterval(this.timer2)
    }
  },
  beforeDestroy () {
    this.timer = clearTimeout(this.timer)
    this.timer2 = clearInterval(this.timer2)
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
.avatar-box {
  width: 100%;
  height: 120px;
}
.avatar {
  width: 85px;
  height: 85px;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  .default-avatar-box {
    width: 100%;
    height: 100%;
    background: url(../../../static/img/default-avatar.svg) no-repeat;
    background-size: 100% 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    .default-avatar-login {
      font-size: 16px;
      line-height: 130px;
      color: #333;
      display: inline-block;
    }
    &::after {
      content: '';
      display: block;
      width: 85px;
      height: 36px;
      background: rgba(0, 0, 0, 0.3);
      position: absolute;
      left: 0;
      bottom: 0px;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.nickname-top {
  margin-top: 25px;
}
.nickname-box {
  margin-top: 25px;
  text-align: center;
}
/* .nickname {
  margin: 0 auto;
  text-align: center;
} */
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
