<template>
  <div class="app">
    <!-- <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo && userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->
    <!-- <a href="/pages/market/main">market</a> -->
    <div class="swiper-tab">
      <div
        class="tab-list-box"
        :class="currentPage === 0 ? 'tab-active' : ''"
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
    <div class="main">
      <Swiper v-if="currentPage === 0" />
      <Live v-if="currentPage === 0" />
      <Market v-else />
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper'
import Live from '../../components/Live'
import Market from '../../components/Market'
export default {
  name: 'Home',
  data () {
    return {
      userInfo: {},
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      circular: true
    }
  },
  components: {
    Swiper,
    Live,
    Market
  },
  methods: {
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
    exchangeSwiperPage (val) {
      console.log(val)
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
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style lang=scss scoped>
.app {
  /* background: #333; */
}
.userinfo {
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
}

page {
  background: #faf9fe;
  font-family: "open sans","PingFang SC","Lantinghei SC","Helvetica Neue",Helvetica,Arial,"Microsoft YaHei","sans-serif";
}
.container {
  background: #faf9fe;
}
.main {
  margin-top: 30rpx;
  min-height: 364rpx;
}
.swiper-tab {
  display: flex;
  justify-content: center;
  padding: 30rpx 0;
  border-bottom: 1rpx solid #eee;
}
.tab-list-box {
  margin-left: 30rpx;
  font-size: 36rpx;
  font-weight: bold;
}
.tab-active {
  color: #ffd700;
}

</style>
