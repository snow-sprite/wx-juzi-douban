<template>
  <div class="zl-detail" :class="{'night-theme': isNightMode}">
    <h3 class="zl-detail__title" :class="{'night-text': isNightMode}">
      <span class="zl-detail__title--tag">
        {{ detailData.year }}.{{  detailData.month < 10 ? '0'+detailData.month : detailData.month }}.{{  detailData.day < 10 ? '0'+detailData.day : detailData.day  }}
      </span> |
      {{ detailData.title }}
    </h3>
    <div class="zl-detail__share"><button class="zl-detail__share--button" open-type="share"></button></div>
    <section class="zl-detail__publish" :class="{'night-bg': isNightMode}"></section>
    <div class="zl-detail__thumb">
      <transition name="fade">
        <img :src="detailData.picUrl" :onerror="defaultThumb" v-if="detailData.picUrl">
        <img src="../../../static/img/history/fail.png" v-else>
      </transition>
    </div>
    <article class="zl-detail__article" :class="{'night-text': isNightMode}" v-html="myDetail"></article>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'HistoryDetail',
  computed: {
    fontsize: _ => Number(store.getters.textIndex),
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      detailData: {},
      defaultThumb: `this.src=../../../static/img/history/fail.png`,
      myDetail: ''
    }
  },
  created () {
    if (this.isNightMode) {
      store.commit('toggleNightMode', true)
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#232323'
      })
    } else {
      store.commit('toggleNightMode', false)
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      })
    }
  },
  onLoad (option) {
    this.detailData = JSON.parse(option.story)
    if (this.detailData && this.detailData.details) {
      // eslint-disable-next-line no-irregular-whitespace
      this.myDetail = this.detailData.details.replace(/　　/g, '<br/>')
    }
  },
  // 分享当前页
  onShareAppMessage () {
    return {
      title: '「历史上的今天」',
      path: `/pages/detail/main?story=${JSON.stringify(this.detailData)}`,
      success (res) {},
      fail () {}
    }
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/mixins';

@include b(detail) {
  padding: r(12px);
  padding-top: 0;
  @include e(title) {
    margin-bottom: r(12px);
    font-size: r(20px);
    font-weight: 500;
    @include m(tag) {
      font-weight: 800;
    }
  }
  @include e(publish) {
    height: r(1px);
    background: #ddd;
    margin-bottom: r(10px);
  }
  @include e(share) {
    height: r(16px);
    margin-bottom: r(4px);
    box-sizing: border-box;
    padding-right: r(5px);
    @include m(button) {
      width: r(16px);
      height: r(16px);
      background: url(../../../static/img/share.svg) no-repeat center;
      background-size: r(16px) r(16px);
      float: right;
      &::after {
        border: 0;
        outline: 0;
      }
    }
  }
  @include e(thumb) {
    clear: both;
    width: 100%;
    height: r(140px);
    margin-bottom: r(10px);
    img {
      width: 100%;
      height: 100%;
    }
  }
  @include e(article) {
    font-size: r(14px);
    line-height: r(20px);
    color: #29293b;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* dark theme */
.night-theme {
  background: #232323 !important;
}
.night-bg {
  background: #2c2c2c !important;
}
.night-text {
  color: #666 !important;
}
</style>