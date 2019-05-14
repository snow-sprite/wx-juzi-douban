<template>
  <article class="zl-live">
    <div
      v-for="(val, ind) in liveData"
      :key="ind"
    >
      <aside class="zl-live__time" :class="{'night-bg': isNightMode}">
        <ul class="zl-live__time--calendar">
          <li
            class="month"
            :class="{
              'zl-mini-fontsize': fontsize === 0,
              'zl-default-fontsize': fontsize === 1,
              'zl-large-fontsize': fontsize === 2,
              'zl-mini-date': fontsize === 0,
              'zl-default-date': fontsize === 1,
              'zl-large-date': fontsize === 2,
              'night-text': isNightMode,
              'night-text-date': isNightMode
            }"
          >
            {{ val.date }}
          </li>
        </ul>
      </aside>
      <div
        v-for="(value, index) in val.lives"
        :key="index"
        class="zl-live__content"
        :class="{
          'night-text': isNightMode,
          'night-border-left': isNightMode
        }"
      >
        <p
          v-if="value.grade ==5"
          class="zl-important"
        />
        <p
          v-if="value.grade ==4 || value.grade ==3"
          class="zl-normal"
        />
        <p
          v-if="value.grade ==1 || value.grade ==2"
          class="zl-default"
        />
        <aside 
          class="zl-live__publishtime"
          :class="{
            'zl-mini-fontsize': fontsize === 0,
            'zl-default-fontsize': fontsize === 1,
            'zl-large-fontsize': fontsize === 2,
            'night-text': isNightMode
          }"
        >
          {{ value.created_at_new }}
        </aside>
        <aside
          class="zl-live__title"
          :class="{
            'zl-mini-title-gaps': fontsize === 0,
            'zl-default-title-gaps': fontsize === 1,
            'zl-large-title-gaps': fontsize === 2,
            'night-text': isNightMode
          }"
        >
          <span class="zl-live__title--tag" />
          <span
            v-if="value.grade ==5"
            style="color: #ea3e3e;"
            :class="{'zl-mini-title': fontsize === 0, 'zl-default-title': fontsize === 1, 'zl-large-title': fontsize === 2}"
          >{{ value.title }}</span>
          <span
            v-else
            :class="{
              'zl-mini-title': fontsize === 0,
              'zl-default-title': fontsize === 1,
              'zl-large-title': fontsize === 2,
              'night-text': isNightMode
            }"
          >{{ value.title }}</span>
        </aside>
        <section
          class="zl-live__contents"
          :class="{
            'zl-mini-fontsize': fontsize === 0,
            'zl-default-fontsize': fontsize === 1,
            'zl-large-fontsize': fontsize === 2,
            'night-text': isNightMode
          }"
        >
          {{ value.content }}
        </section>
        <div
          class="zl-live__operate"
          :class="{'zl-mini-operate': fontsize === 0, 'zl-default-operate': fontsize === 1, 'zl-large-operate': fontsize === 2}"
        >
          <ul>
            <!-- <li @click="bullBtn(value.id, ind, index)"> -->
            <li>
              <img
                v-if="value.up_counts > value.down_counts"
                src="../../static/img/live/liveup.svg"
                :class="{'zl-mini-up-img': fontsize === 0, 'zl-default-up-img': fontsize === 1, 'zl-large-up-img': fontsize === 2}"
              >
              <img
                v-if="value.up_counts < value.down_counts || value.up_counts == value.down_counts"
                src="../../static/img/live/noliveup.svg"
                :class="{'zl-mini-up-img': fontsize === 0, 'zl-default-up-img': fontsize === 1, 'zl-large-up-img': fontsize === 2}"
              >
              <span
                class="zl-bull_num"
                :class="{
                  'zl-mini-fontsize': fontsize === 0,
                  'zl-default-fontsize': fontsize === 1,
                  'zl-large-fontsize': fontsize === 2,
                  'night-text': isNightMode
                }" 
              >
                {{ value.up_counts }}
              </span>
            </li>
            <!-- <li @click="bearBtn(value.id, ind, index)"> -->
            <li>
              <img
                v-if="value.up_counts < value.down_counts"
                src="../../static/img/live/livedown.svg"
                :class="{'zl-mini-down-img': fontsize === 0, 'zl-default-down-img': fontsize === 1, 'zl-large-down-img': fontsize === 2}"
              >
              <img
                v-if="value.up_counts > value.down_counts || value.up_counts == value.down_counts"
                src="../../static/img/live/nolivedown.svg"
                :class="{'zl-mini-down-img': fontsize === 0, 'zl-default-down-img': fontsize === 1, 'zl-large-down-img': fontsize === 2}"
              >
              <span
                class="zl-bull_num"
                :class="{
                  'zl-mini-fontsize': fontsize === 0,
                  'zl-default-fontsize': fontsize === 1,
                  'zl-large-fontsize': fontsize === 2,
                  'night-text': isNightMode
                }"
              >
                {{ value.down_counts }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import utils from '@/lib/utils.js'
import store from '@/store'
export default {
  name: 'LiveItem',
  props: {
    liveData: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  computed: {
    fontsize: _ => Number(store.getters.textIndex),
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      newLiveData: []
    }
  },
  mounted () {
    this.translateLiveData()
  },
  methods: {
    // 有必要的转换下数据格式
    translateLiveData () {
      this.newLiveData = this.liveData
      this.newLiveData.forEach(live => {
        live.lives.forEach(val => {
          val.created_at_new = utils.getTime(val.created_at)
          val.title = val.content.match(/【(.+)?】/) ? val.content.slice(val.content.indexOf('【') + 1, val.content.indexOf('】')) : ''
        })
      })
    }
  }
}
</script>
<style lang=scss scoped>
@import '../assets/mixins';
@include b(live) {
  position: relative;
  box-sizing: border-box;
  @include e(publishtime) {
    /* font-size: r(16px); */
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: $--color-black-1;
    line-height: 12px;
  }
  @include e(title) {
    margin: r(15px) 0;
    /* font-size: r(18px); */
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: $--color-important;
  }
  @include e(content) {
    /* font-size: r(16px); */
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: $--color-black-1;
    line-height: 28px;
    padding-left: r(19px);
    border-left: 1px solid #eaeaef;
    position: relative;
    margin: 0 r(15px) 0 r(19px);
  }
  @include e(contents) {
    /* font-size: r(16px); */
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: $--color-black-1;
    line-height: 28px;
  }
  @include e(operate) {
    display: flex;
    justify-content: flex-end;
    margin-top: r(17px);
    padding-bottom: r(15px);
    & li {
      margin-right: r(27px);
      /* font-size: r(12px); */
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: $--color-999;
      display: inline-block;
      vertical-align: middle;
    }
    & .share {
      margin-right: 0;
    }
    & img {
      width: r(11px);
      height: r(13px);
      vertical-align: middle;
    }
  }
}
@include b(important) {
  position: absolute;
  width: r(9px);
  height: r(9px);
  border-radius: 50%;
  background: $--background-color-important;
  left: r(-4.5px);
  top: 0;
}
@include b(normal) {
  position: absolute;
  width: r(9px);
  height: r(9px);
  border-radius: 50%;
  background: $--background-color-normal;
  left: r(-4.5px);
  top: 0;
}
@include b(default) {
  position: absolute;
  width: r(9px);
  height: r(9px);
  border-radius: 50%;
  background: $--background-color-default;
  left: r(-4.5px);
  top: 0;
}
@include b(live) {
  width: 100%;
  @include e(time) {
    display: flex;
    box-sizing: border-box;
    padding: 15px 0 12px 15px;
    width: 100%;
    /* height: r(74px); */
    margin-bottom: r(20px);
    background: rgba(249, 249, 249, 1);
    @include m(calendar) {
      border: 1px solid rgba(155, 155, 155, 0.38);
      text-align: center;
      border-radius: 4px;
      & .month {
        border: none;
        width: r(80px);
        height: r(26px);
        color: #fff;
        line-height: r(26px);
        /* font-size: r(12px); */
        font-family: OpenSans-SemiBold;
        font-weight: 600;
        border-radius: 4px;
        background: linear-gradient(to right, #ff7172, #ff6262, #ff3031);
      }
      & .day {
        width: r(38px);
        height: r(24px);
        /* font-size: r(18px); */
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(45, 45, 53, 1);
        line-height: r(24px);
        background: #fff;
      }
    }
    @include m(date) {
      margin-left: r(10px);
      & .today {
        /* font-size: r(14px); */
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(45, 45, 53, 1);
      }
      & .week {
        /* font-size: r(14px); */
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(144, 144, 153, 1);
      }
    }
  }
}
@include b(lives) {
  box-sizing: border-box;
}
.zl-live__content:last-child {
  margin-bottom: r(20px);
}
.zl-live__time--date .today {
  margin-bottom: r(8px);
}
.zl-bull_num {
  vertical-align: inherit;
}
/* 关于快讯的内容：选择了不同字体 */
.zl-mini-fontsize {
  font-size: $--mini-font-size;
}
.zl-default-fontsize {
  font-size: $--default-font-size;
}
.zl-large-fontsize {
  font-size: $--large-font-size;
}
/* 日期标题 */
.zl-mini-date {
  width: r(60px) !important;
}
.zl-large-date {
  width: r(100px) !important;
}
/* 标题部分 */
.zl-mini-title {
  font-size: 14px;
}
.zl-default-title {
  font-size: 18px;
}
.zl-large-title {
  font-size: 22px;
}
/* 标题上下间隙 */
.zl-mini-title-gaps {
  margin: 6px 0 !important;
}
.zl-default-title-gaps {
  margin: r(10px) 0 !important;
}
/* 操作上线间隔 */
.zl-mini-operate {
  margin-top: 0 !important;
}
.zl-default-operate {
  margin-top: r(10px) !important;
}
/* 看涨看跌图片大小 */
.zl-mini-up-img {
  height: r(8px) !important;
}
.zl-mini-down-img {
  height: r(8px) !important;
}
/* 夜间模式 */
.night-bg {
  background: #232323;
  color: #666 !important;
}
.night-text {
  color: #666 !important;
}
.night-text-date {
  background: linear-gradient(to right, #ffb6c1, #ffc0cb, #ff7172);
}
.night-border-left {
  border-left: 1px solid #666;
}
</style>
