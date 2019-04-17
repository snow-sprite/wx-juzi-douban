<template>
  <div class="zl-app">
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
        <!-- 轮播组件 -->
        <MySwiper
          v-if="swiperData && swiperData.length > 0"
          :swiperData="swiperData"
        />
        <!-- 早新闻组件 -->
        <MoringNews
          v-if="newsData && newsData.length > 0"
          :newsData="newsData"
        />
        <!-- 快讯组件 -->
        <Live :livesList="livesList" />
      </swiper-item>
      <swiper-item>
        <!-- 行情组件 -->
        <Market />
      </swiper-item>
    </swiper>
    <div class="zl-refresh" v-show="isShowRefresh" @click="refreshLiveList">
      <img src="../../../static/img/fresh.svg" alt="">
    </div>
  </div>
</template>

<script>
import MySwiper from '@/components/Swipers'
import Live from '@/components/Live'
import Market from '@/components/Market'
import MoringNews from '@/components/MoringNews'
import store from '@/store'
import wxApi from '@/utils/request'
import {
  BANNER_LIST,
  MAIN_NEWS,
  LIVES_LIST
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
      newsData: [],
      // 快讯列表
      livesList: []
    }
  },
  components: {
    MySwiper,
    Live,
    Market,
    MoringNews
  },
  computed: {
    isShowRefresh: _ => store.getters.isShowRefresh
  },
  mounted () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    // 获取轮播数据
    this.getBanner()
    // 获取早新闻
    this.getMorningNews()
    // 获取快讯
    this.getLives()
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
          if (res.statusCode === 200) {
            res.data.forEach(resp => {
              resp.title = resp.title.replace(/金色/g, '今日')
            })
            this.newsData = res.data
          }
        })
    },
    async getLives () {
      try {
        let { data } = await wxApi.get(LIVES_LIST, {
          reading: false,
          limit: 10
        })
        this.livesList = data
        console.log('data', data)
      } catch (e) {
        this.livesList = []
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
      this.getLives()
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
.app {
  height: 100vh;
}
.main {
  @include rpx((
    min-height: 182px
  ))
}
.zl-app {
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
  color: #ffd700;
}

</style>
