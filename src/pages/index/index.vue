<template>
  <div>
    <!-- <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo && userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->
    <!-- <a href="/pages/market/main">market</a> -->
    <div class="swiper-tab">
      <div
        class="tab-list-left"
        :class="isActiveLive"
        data-current-tab="0"
        @click="switchSwiper">
        行情
      </div>
      <div
        class="tab-list-right"
        :class="isActiveMarket"
        data-current-tab="1"
        @click="switchSwiper">
        快讯
      </div>
    </div>
    <div class="main">
      <swiper
      class="main-swiper"
      :current="currentTab"
      :circular = "circular"
      @change="exchangeSwiperPage">
        <swiper-item v-for="(item, index) in swiperArray" :key="index">
          <div><image :src="item.pic_url" id="myCanvas" /></div>
        </swiper-item>
      </swiper>
    </div>
    <div>
      <image
        class="img-refresh"
        src="../../static/img/me_refresh.png"
        :hidden="!isShowRefresh"
        @click="refresh"/>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import wxApi from '@/utils/request'
import {
  BANNER_LIST
} from '@/utils/apiList'
export default {
  name: 'Live',
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      swiperArray: [],
      livesList: [1, 2, 3, 4, 5],
      currentTab: 0,
      circular: true
    }
  },
  computed: {
    isActiveLive () {
      return this.currentTab === 0 ? 'tab-active' : ''
    },
    isActiveMarket () {
      return this.currentTab === 1 ? 'tab-active' : ''
    },
    isShowRefresh: _ => store.getters.isShowRefresh
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
    switchSwiper (e) {
      if (this.currentTab === e.target.dataset.currentTab) {
        return false
      } else {
        this.currentTab = e.target.dataset.currentTab
      }
    },
    exchangeSwiperPage (e) {
      this.currentTab = e.target.current
    },
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
    refresh () { // 首页刷新按钮
      console.log('刷新了')
    },
    getBanner () {
      wxApi.get(BANNER_LIST, {
        position: 'app_index_top'
      })
        .then(res => {
          console.log(1, res)
          if (res.statusCode === 200) this.swiperArray = res.data
        })
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.getBanner()
  }
}
</script>

<style lang=scss scoped>
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
  .main-swiper {
    min-height: 380rpx;
    margin: 0 auto;
    width: 98%;
    /* box-shadow: 0 10px 20px 2px rgba(41,41,59,.4); */
    image {
      display: block;
      width: 98%;
      border-radius: 8px;
      height: 364rpx;
      margin: 0 1%;
      box-shadow: 0 3px 10px 0 rgba(41,41,59,.4);
    }
  }
}
.swiper-tab {
  display: flex;
  justify-content: center;
  padding-bottom: 30rpx;
  border-bottom: 1rpx solid #eee;
}
.tab-list-left {
  margin-right: 30rpx;
  font-size: 36rpx;
  font-weight: bold;
}
.tab-list-right {
  margin-left: 30rpx;
  font-size: 36rpx;
  font-weight: bold;
}
.tab-active {
  color: #ffd700;
}
.img-refresh {
  width:80rpx;
  height:80rpx;
  border-radius:50%;
  position:absolute;
  right: 100rpx;
  bottom: 260rpx;
}
</style>
