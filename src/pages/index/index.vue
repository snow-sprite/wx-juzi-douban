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
      <!-- 轮播组件 -->
      <Swiper
        v-if="currentPage === 0 && swiperData && swiperData.length > 0"
        :swiperData="swiperData"
      />
      <!-- 早新闻组件 -->
      <MoringNews
        v-if="currentPage === 0 && newsData && newsData.length > 0"
        :newsData="newsData"
      />
      <!-- 快讯组件 -->
      <Live v-if="currentPage === 0" />
      <!-- 行情组件 -->
      <Market v-else />
    </div>
  </div>
</template>

<script>
import Swiper from '../../components/Swiper'
import Live from '../../components/Live'
import Market from '../../components/Market'
import MoringNews from '@/components/MoringNews'
import wxApi from '@/utils/request'
import {
  BANNER_LIST,
  MAIN_NEWS
} from '@/api/apiList'

export default {
  name: 'Home',
  data () {
    return {
      userInfo: {},
      // 当前页
      currentPage: 0,
      tabs: ['快讯', '行情'],
      circular: true,
      // banner集合
      swiperData: [],
      // 早新闻
      newsData: []
    }
  },
  components: {
    Swiper,
    Live,
    Market,
    MoringNews
  },
  mounted () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    // 获取轮播数据
    this.getBanner()
    // 获取早新闻
    this.getMorningNews()
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
    getBanner () {
      wxApi.get(BANNER_LIST, {
        position: 'app_index_top'
      })
        .then(res => {
          console.log(1, res)
          if (res.statusCode === 200) this.swiperData = res.data
        })
    },
    getMorningNews () {
      wxApi.get(MAIN_NEWS, {
        tag: '金色9：30',
        limit: 1,
        topic_id: 0,
        flag: 'down'
      })
        .then(res => {
          console.log(2, res)
          if (res.statusCode === 200) this.newsData = res.data
        })
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
  }
}
</script>

<style lang=scss scoped>
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
.main {
  @include rpx((
    min-height: 182px
  ))
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
  color: #ffd700;
}

</style>
