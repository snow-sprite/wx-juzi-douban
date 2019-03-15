<template lang="html">
  <div>
    <div class="single-setting">
  		<text>显示首页刷新按钮</text>
  		<switch class="fr" :checked="isShowRefresh" @change="toggleRefresh" />
  	</div>
  	<div class="single-setting">
  		<picker
  			@change="pickerTextSizeChange"
  			:value="textIndex"
  			:range="textSizeList"
  			range-key="size">
  			<div>
  				<text>列表/正文字体大小</text><text class="fr pr10">{{textSizeList[textIndex].size}}</text>
  			</div>
  		</picker>
  	</div>
  	<div class="single-setting">
  		<picker
  		@change="pickerThemeChange"
  		:value="themeIndex"
  		:range="themeModeList"
  		range-key="theme">
  			<text>主题模式</text><text class="fr pr10">{{themeModeList[themeIndex].theme}}</text>
  		</picker>

  	</div>
  	<div class="single-setting">
  		<text>自动夜间模式</text>
  		<switch class="fr" @change="toggleAutoNightMode" />
  	</div>
  	<div class="single-setting">
  		<text>夜间模式{{test}}</text>
  		<switch class="fr" @change="toggleNightMode" />
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
    isShowRefresh: _ => store.getters.isShowRefresh,
    textIndex: _ => store.getters.textIndex,
    themeIndex: _ => store.getters.themeIndex,
    isAutoNightMode: _ => store.getters.isAutoNightMode,
    isNightMode: _ => store.getters.isNightMode
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
      store.commit('isNightMode', e.target.value)
      if (this.isAutoNightMode) { // 本地存储
        wx.setStorageSync('isNightModeInGlobal', true)
      } else {
        wx.setStorageSync('isNightModeInGlobal', false)
      }
    }
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/css/rpx';
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
</style>
