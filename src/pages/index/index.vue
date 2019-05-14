<template>
<div>
  <div class="zl-app" :class="isNightMode ? 'night' : ''">
    <div class="zl-refresh-tip" ref="refreshTip" v-show="refreshLoading && isBtnCommit">
      <span>{{ refreshText }}</span>
    </div>
    <div class="swiper-tab" :class="{
      'night-text': isNightMode,
      'night-line-color': isNightMode  
    }">
      <div
        class="tab-list-box"
        :class="{
          'tab-active': currentPage === 0
        }"
        data-current-tab="0"
        @click="switchPage(0)">
        快讯
      </div>
      <div
        class="tab-list-box"
        :class="currentPage === 1 ? 'tab-active' : ''"
        data-current-tab="1"
        @click="switchPage(1)">
        行情
      </div>
    </div>
    <swiper
      :current="currentPage"
      :duration="300"
      @change="changePage"
      class="app"
    >
      <!-- <div class="userinfo">
        <img class="userinfo-avatar" v-if="userInfo && userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
        <div class="userinfo-nickname">
          <card :text="userInfo.nickName"></card>
        </div>
      </div> -->
      <!-- <a href="/pages/market/main">market</a> -->
      <swiper-item class="main">
        <!-- 快讯组件 -->
        <Live v-if="livesList.length > 0" :livesList="livesList" @handleLive="getLives" />
      </swiper-item>
      <swiper-item>
        <!-- 行情组件 -->
        <Market />
      </swiper-item>
    </swiper>
    <!-- 首页刷新按钮 -->
    <div class="zl-refresh" v-show="isShowRefresh && currentPage === 0" @click="refreshLiveList">
      <img src="../../../static/img/fresh.svg" alt="">
    </div>
  </div>
</div>
</template>

<script>
import Live from '@/components/Live'
import Market from '@/components/Market'
import store from '@/store'
import wxApi from '@/lib/request'
import {
  LIVES_LIST
} from '@/api/apiList'

export default {
  name: 'Home',
  components: {
    Live,
    Market
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh,
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      userInfo: {},
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      circular: true,
      refreshLoading: true,
      refreshText: '',
      timer: null,
      // 快讯列表
      livesList: [],
      isBtnCommit: false
    }
  },
  mounted () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    // 获取快讯
    this.getLives()
    this.setNavigationBarStyle()
  },
  watch: {
    'isNightMode': (newVal) => {
      if (newVal) {
        // 顶部导航夜间模式
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
    }
  },
  methods: {
    setNavigationBarStyle () {
      if (this.isNightMode) {
        // 顶部导航夜间模式
        wx.setNavigationBarColor({
          frontColor: '#ffffff',
          backgroundColor: '#232323'
        })
      } else {
        wx.setNavigationBarColor({
          frontColor: '#000000',
          backgroundColor: '#ffffff'
        })
      }
    },
    getUserInfo () {
      // 调用登录接口
      let that = this
      wx.login({
        success: (res) => {
          wx.getUserInfo({
            success: (response) => {
              console.log('response', response)
              that.userInfo = response.userInfo
            }
          })
        }
      })
    },
    // 切换tab选项
    switchPage (page) {
      if (this.currentPage === page) return
      this.currentPage = page
    },
    async getLives () {
      try {
        let that = this
        this.refreshText = '正在刷新快讯列表'
        let { data } = await wxApi.get(LIVES_LIST, {
          reading: false,
          limit: 66,
          flag: 'down'
        })
        // this.livesList.push(data.data.list)
        data.list.forEach(list => {
          this.livesList.push(list)
        })
        this.refreshText = '快讯刷新完成'
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          that.refreshLoading = false
        }, 1000)
        this.isBtnCommit = false
      } catch (e) {
        this.livesList = []
        this.refreshLoading = false
        this.refreshText = '网络错误'
        this.isBtnCommit = false
      }
    },
    // 分享当前页
    onShareAppMessage () {
      return {
        title: '巴拉巴拉1',
        imageUrl: '../../static/img/banner.png',
        success (res) {
          console.log(11, res)
        },
        fail (err) {
          console.log(22, err)
        }
      }
    },
    changePage (e) {
      this.currentPage = e.target.current
    },
    // click refresh button
    refreshLiveList () {
      this.livesList = []
      this.isBtnCommit = true
      this.refreshLoading = true
      this.getLives()
    }
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/mixins';
@import '../../assets/rpx';
/* .userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
} */
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
