<template>
  <div>
    <scroll-view
      class="zl-coin-box"
      scroll-y
      lower-threshold="50"
      enable-back-to-top="true"
      @scrolltolower="loadMore"
    >
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
      <article class="js-drawer-container js-live">
        <section class="js-lives">
          <LiveItem v-if="newLiveData && newLiveData.length > 0" :liveData="newLiveData" />
        </section>
      </article>
    </scroll-view>
  </div>
</template>
<script>
/*
 * 快讯模块
 */
import MySwiper from '@/components/Swipers'
import MoringNews from '@/components/MoringNews'
import LiveItem from './LiveItem'
import wxApi from '@/lib/request'
import {
  BANNER_LIST,
  MAIN_NEWS
} from '@/api/apiList'
export default {
  name: 'Live',
  props: {
    livesList: {
      required: true,
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      // banner集合
      swiperData: [],
      // 早新闻
      newsData: [],
      // 自定义快讯数据
      newLiveData: []
    }
  },
  components: {
    MySwiper,
    MoringNews,
    LiveItem
  },
  mounted () {
    // 获取轮播数据
    this.getBanner()
    // 获取早新闻
    this.getMorningNews()
    // 处理快讯数据 方便使用
    this.handleLiveData()
  },
  methods: {
    handleLiveData () {
      let tmpDate = ''
      this.livesList.forEach((live, ind) => {
        // 数组中时间相同
        if (live.date === tmpDate) {
          this.newLiveData[ind].lives.push(live)
        } else {
          // 数组中有不相同时间数据
          this.newLiveData.push({
            date: live.date,
            lives: live.lives
          })
        }
        tmpDate = live.date
      })
    },
    getBanner () {
      wxApi.get(BANNER_LIST, {
        position: 'app_index_top'
      })
        .then(res => {
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
          if (res.statusCode === 200) {
            res.data.forEach(resp => {
              resp.title = resp.title.replace(/金色/g, '今日')
            })
            this.newsData = res.data
          }
        })
    },
    loadMore () {
      // todo 获取下一条快讯需要上次的bottom_id 目前id未传过来 待修复
      // this.$emit('handleLive')
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/mixins';
@include b(live) {
  width: 100%;
}
@include b(coin-box) {
  height: 100vh;
}
@include b(lives) {
  box-sizing: border-box;
}
@include b(back-btn) {
  position: fixed;
  right: r(20px);
  bottom: r(60px);
}
.js-no-mores {
  margin: r(30px) 0;
  text-align: center;
  font-size: r(16px) !important;
}
</style>
