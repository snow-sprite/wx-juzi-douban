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
  		<switch class="fr" @change="toggleAutoNightMode" />
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
      themeIndex: 0, // 默认主题 index
      test: !getApp().globalData.isShowIndexRefresh
    }
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh, // 首页刷新
    textIndex: _ => store.getters.textIndex, // 字体
    themeIndex: _ => store.getters.themeIndex, // 主题
    isAutoNightMode: _ => store.getters.isAutoNightMode, // 自动夜间模式
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  mounted () {
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
      // 顶部导航非夜间
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
  },
  methods: {
    onShareAppMessage () { // 我的页的转发
      return {
        title: '我的2',
        imageUrl: '../index/img/banner.png',
        success (res) {
          console.log(11, res)
        },
        fail (err) {
          console.log(22, err)
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
    pickerThemeChange (e) {
      store.commit('pickerThemeChange', e.target.value || 0)
      let themeIndex = e.target.value
      wx.setStorageSync('globalTheme', themeIndex)
    },
    toggleAutoNightMode (e) {
      store.commit('toggleAutoNightMode', e.target.value)
      if (this.isAutoNightMode) { // 本地存储
        wx.setStorageSync('isAutoNightModeInGlobal', true)
      } else {
        wx.setStorageSync('isAutoNightModeInGlobal', false)
      }
    },
    toggleNightMode (e) {
      store.commit('toggleNightMode', e.target.value)
      if (this.isNightMode) { // 本地存储
        wx.setStorageSync('isNightModeInGlobal', true)
      } else {
        wx.setStorageSync('isNightModeInGlobal', false)
      }
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
/* 夜间模式 */
.night {
  background: #232323;
  color: #fff;
}
.line-color {
  border-bottom: 1px solid #2c2c2c !important;
}
.night-text {
  color: #666 !important;
}
/* 夜间模式结束 */
</style>
