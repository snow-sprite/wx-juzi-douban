<template>
  <scroll-view
    class="zl-history-box"
    scroll-y
    upper-threshold="50"
    lower-threshold="50"
    enable-back-to-top="true"
  >
    <ul class="zl-history">
      <li class="zl-history__item" v-for="(story, ind) in historyStoryList" :key="ind" @click="navigateToDetail(story)">
        <ul class="zl-history__item--info">
          <li class="zl-history__item--title">{{ story.title }}</li>
          <!-- <li class="zl-history__item--desc">伊朗要打仗了</li> -->
          <li class="zl-history__item--publish">
            <span class="zl-history__item--time">{{ story.year }}.{{  story.month < 10 ? '0'+story.month : story.month }}.{{  story.day < 10 ? '0'+story.day : story.day  }}</span>
            <img class="zl-history__tag" src="../../static/img/history/tag.svg" alt="">
            <span class="zl-history__item--tag">历史上的今天</span>
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
  data () {
    return {
      historyStoryList: [],
      defaultThumb: `this.src=../../static/img/history/fail.png`
    }
  },
  created () {
    this.getHistoryStoryList()
  },
  methods: {
    async getHistoryStoryList () {
      let { data } = await wxApi.get(HISTORY_TODAY, {
        type: 1
      })

      if (data.code === 1) {
        this.historyStoryList = data.data
      }
    },
    navigateToDetail (data) {
      store.commit('setDetailData', data)
      wx.navigateTo({
        url: 'detail/main'
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
}
.zl-history__item:last-of-type {
  border-bottom: 0;
}
</style>