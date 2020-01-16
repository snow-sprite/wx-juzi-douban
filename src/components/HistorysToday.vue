<template>
  <scroll-view
    class="zl-history-box"
    scroll-y
    upper-threshold="50"
    lower-threshold="50"
    enable-back-to-top="true"
  >
    <ul class="zl-history" v-if="!isShowErrorBox">
      <li class="zl-history__item" :class="{'night-border' : isNightMode}" v-for="(story, ind) in historyStoryList" :key="ind" @click="navigateToDetail(story, ind)">
        <ul class="zl-history__item--info">
          <li class="zl-history__item--title" :class="{'night-text' : isNightMode}">{{ story.title }}</li>
          <!-- <li class="zl-history__item--desc">伊朗要打仗了</li> -->
          <li class="zl-history__item--publish">
            <span class="zl-history__item--time" :class="{'night-text' : isNightMode}">{{ story.year }}.{{  story.month < 10 ? '0'+story.month : story.month }}.{{  story.day < 10 ? '0'+story.day : story.day  }}</span>
            <img v-show="!isNightMode" class="zl-history__tag" src="../../static/img/history/tag.svg">
            <img v-show="isNightMode" class="zl-history__tag" src="../../static/img/history/tag-night.svg">
            <span class="zl-history__item--tag" :class="{'night-text' : isNightMode}">历史上的今天</span>
          </li>
        </ul>
        <!-- <div class="zl-history__item--more">
          <img src="../../static/img/weather/qingtian.svg" alt="">
        </div> -->
        <div class="zl-history__item--thumb">
          <img :src="story.picUrl ? story.picUrl : '../../static/img/history/fail.png'" alt="" :onerror="defaultThumb">
        </div>
      </li>
    </ul>
    <div class="zl-history__error" :class="{'night-text' : isNightMode}" v-else>
      {{ errText }}
      <div>
        <button class="zl-history__error--try" :class="{'night-text' : isNightMode}" @click="getHistoryStoryList">刷新重试</button>
      </div>
    </div>
  </scroll-view>
</template>

<script>
/**
 * @Description: 历史上的今天
 * @Author: Cid
 */
import store from '@/store'
import wxApi from '@/lib/request'
import {
  HISTORY_TODAY
} from '@/api/apiList'
export default {
  name: 'HistorysToday',
  computed: {
    fontsize: _ => Number(store.getters.textIndex),
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      historyStoryList: [],
      defaultThumb: `this.src=../../static/img/history/fail.png`,
      errText: '',
      isShowErrorBox: false
    }
  },
  created () {
    this.getHistoryStoryList()
  },
  methods: {
    async getHistoryStoryList () {
      this.errText = ' '
      try {
        let { data } = await wxApi.get(HISTORY_TODAY, {
          type: 1
        })
        if (data.code === 1) {
          this.historyStoryList = data.data
          this.isShowErrorBox = false
        }
      } catch (error) {
        this.isShowErrorBox = true
        this.errText = error.errMsg
      }
    },
    navigateToDetail (data, ind) {
      store.commit('setDetailData', data)
      // url相对pages页面来设置
      // 没有详情接口，直接传吧- -
      wx.navigateTo({
        // url: `../detail/main?story=${JSON.stringify(Object.assign({}, data))}`
        url: `../detail/main?year=${data.year}&month=${data.month}&day=${data.day}&title=${data.title}&picUrl=${data.picUrl}&details=${data.details}`
      })
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/mixins';
@include b(history-box) {
  height: 100vh;
}
@include b(history) {
  width: 100%;
  box-sizing: border-box;
  padding: 0 r(12px);
  @include e(item) {
    padding: r(15px) 0;
    box-sizing: border-box;
    height: r(100px);
    display: flex;
    border-bottom: 1px solid #eee;
    justify-content: space-between;
    @include m(thumb) {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: r(4px);
      }
    }
    @include m(info) {
      width: 56%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @include m(title) {
      width: 100%;
      color: #29293b;
      overflow: hidden;
      line-height: r(18px);
      text-overflow: ellipsis;
      display: -webkit-box;
      word-break: break-all;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
    @include m(publish) {
      color: #666;
      font-size: r(12px);
    }
    @include m(tag) {
      color: #9999a6;
      font-size: r(10px);
    }
  }
  @include e(tag) {
    width: r(12px);
    height: r(12px);
    vertical-align: middle;
    margin-left: r(6px);
  }
  @include e(error) {
    width: 100%;
    margin-top: r(20px);
    text-align: center;
    color: #999;
    @include m(try) {
      margin-top: r(100px);
      width: r(100px);
      height: r(40px);
      line-height: r(40px);
      color: #666;
      font-size: r(14px);
      &::after {
        border: 0;
      }
    }
  }
}
.zl-history__item:last-of-type {
  border-bottom: 0;
}
/* dark theme */
.night-text {
  color: #666 !important;
}
.night-border {
  border-bottom: 1px solid #2c2c2c !important;
}
</style>