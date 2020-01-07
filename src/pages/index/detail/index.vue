<template>
  <div class="zl-detail">
    <h3 class="zl-detail__title">
      <span class="zl-detail__title--tag">
        {{ detailData.year }}.{{  detailData.month < 10 ? '0'+detailData.month : detailData.month }}.{{  detailData.day < 10 ? '0'+detailData.day : story.day  }}
      </span> |
      {{ detailData.title }}
    </h3>
    <section class="zl-detail__publish"></section>
    <div class="zl-detail__thumb">
      <transition name="fade">
        <img :src="detailData.picUrl" :onerror="defaultThumb" v-if="detailData.picUrl">
        <img src="../../../../static/img/history/fail.png" v-else>
      </transition>
    </div>
    <article class="zl-detail__article" v-html="detailData.details"></article>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'HistoryDetail',
  computed: {
    detailData: _ => store.getters.detailData
  },
  data () {
    return {
      defaultThumb: `this.src=../../../../static/img/history/fail.png`
    }
  },
  created () {
    if (this.detailData && this.detailData.details) {
      // eslint-disable-next-line no-irregular-whitespace
      this.detailData.details = this.detailData.details.replace(/　　/g, '<br/>')
    }
  }
}
</script>

<style lang=scss scoped>
@import '../../../assets/mixins';

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
  @include e(thumb) {
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
</style>