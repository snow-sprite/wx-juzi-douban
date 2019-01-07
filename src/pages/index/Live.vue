<template>
  <div>
    <swiper
    class="main-swiper"
    :current="currentTab"
    :circular = "circular"
    @change="exchangeSwiperPage">
      <swiper-item v-for="(item, index) in swiperArray" :key="index">
          <div><image :src="item.pic_url" /></div>
      </swiper-item>
    </swiper>
    <image
      class="img-refresh"
      src="../../static/img/me_refresh.png"
      :hidden="!isShowRefresh"
      @click="refresh"/>
    <div v-for="(item, ind) in livesList" :key="ind">
      <div class="js-live-title" v-if="ind !== 0" id="live-title">
          <div class="date" v-if="item.date">
              <ul class="tc">
                  <span class="font12 month">{{item.date | getMonth}}月</span>
                  <span class="font18 day">{{item.date | getDate}}</span>
              </ul>
              <ol>
                  <li class="week">{{item.date | getDay}}</li>
                  <li>{{item.date | getWeek}}</li>
              </ol>
          </div>
      </div>
      <div class="main">
        <!-- 单条组件:key="live.id" -->
        <LiveSingle v-for="(live, index) in item.lives" :key="index" :content="live" />
      </div>
    </div>
  </div>
</template>

<script>
/*
 * 快讯模块
 */
import store from '@/store'
import wxApi from '@/utils/request'
import {
  BANNER_LIST,
  MAIN_NEWS,
  LIVES_LIST
} from '@/utils/apiList'
import LiveSingle from './commen/singleLive'
export default {
  name: 'Live',
  data () {
    return {
      currentTab: 0,
      circular: true,
      // banner集合
      swiperArray: [],
      // 新闻列表
      newsList: [],
      // 快讯列表
      livesList: []
    }
  },
  computed: {
    // 是否显示首页刷新按钮
    isShowRefresh: _ => store.getters.isShowRefresh
  },
  components: {
    LiveSingle
  },
  created () {
    // 获取banner列表数据
    this.getBanner()
    // 获取新闻数据
    this.getNews()
    // 获取快讯
    this.getLives()
  },
  methods: {
    exchangeSwiperPage () {
      // TODO: 轮播图事件
    },
    // 获取轮播图
    getBanner () {
      wxApi.get(BANNER_LIST, {
        position: 'app_index_top'
      })
        .then(res => {
          console.log(1, res)
          if (res.statusCode === 200) this.swiperArray = res.data
        })
    },
    // 获取早新闻
    getNews () {
      wxApi.get(MAIN_NEWS, {
        tag: '金色9：30',
        limit: 1,
        topic_id: 0,
        flag: 'down'
      })
        .then(res => {
          console.log(2, res)
          if (res.statusCode === 200) this.newsList = res.data
        })
    },
    getLives () {
      wxApi.get(LIVES_LIST, {
        reading: false,
        limit: 10
      })
        .then(res => {
          console.log(3, res.data.list)
          if (res.statusCode === 200) this.livesList = res.data.list
        })
    },
    // 首页刷新按钮
    refresh () {
      console.log('刷新了')
    }
  }
}
</script>

<style lang=scss scoped>
.img-refresh {
  width:80rpx;
  height:80rpx;
  border-radius:50%;
  position:absolute;
  right: 100rpx;
  bottom: 260rpx;
}
.main-swiper {
  min-height: 380rpx;
  margin: 0 auto;
  width: 98%;
  image {
    display: block;
    width: 98%;
    border-radius: 8px;
    height: 364rpx;
    margin: 0 1%;
    box-shadow: 0 3px 10px 0 rgba(41,41,59,.4);
  }
}
</style>
