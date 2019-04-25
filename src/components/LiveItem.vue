<template>
  <article class="zl-live">
    <div
      v-for="(val, ind) in liveData"
      :key="ind"
    >
      <aside class="zl-live__time">
        <ul class="zl-live__time--calendar">
          <li class="month">
            {{ val.date }}
          </li>
        </ul>
      </aside>
      <div
        v-for="(value, index) in val.lives"
        :key="index"
        class="zl-live__content"
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
        <aside class="zl-live__publishtime">
          {{ value.created_at_new }}
        </aside>
        <aside class="zl-live__title">
          <span class="zl-live__title--tag" />
          {{ value.title }}
        </aside>
        <section class="zl-live__contents">
          {{ value.content }}
        </section>
        <div class="zl-live__operate">
          <ul>
            <li @click="bullBtn(value.id, ind, index)">
              <img
                v-if="value.up_counts > value.down_counts"
                src="../../static/img/live/liveup.svg"
              >
              <img
                v-if="value.up_counts < value.down_counts || value.up_counts == value.down_counts"
                src="../../static/img/live/noliveup.svg"
              >
              <span class="zl-bull_num">
                {{ value.up_counts }}
              </span>
            </li>
            <li @click="bearBtn(value.id, ind, index)">
              <img
                v-if="value.up_counts < value.down_counts"
                src="../../static/img/live/livedown.svg"
              >
              <img
                v-if="value.up_counts > value.down_counts || value.up_counts == value.down_counts"
                src="../../static/img/live/nolivedown.svg"
              >
              <span class="zl-bull_num">
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
import formatObj from '@/utils/formatTime.js'
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
          val.created_at_new = formatObj.getTime(val.created_at)
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
    font-size: r(16px);
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: $--color-black-1;
    line-height: 12px;
  }
  @include e(title) {
    margin: r(15px) 0;
    font-size: r(18px);
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: $--color-important;
  }
  @include e(content) {
    font-size: r(16px);
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
    font-size: r(16px);
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
      font-size: r(12px);
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
        font-size: r(12px);
        font-family: OpenSans-SemiBold;
        font-weight: 600;
        border-radius: 4px;
        background: linear-gradient(to right, #ff7172, #ff6262, #ff3031);
      }
      & .day {
        width: r(38px);
        height: r(24px);
        font-size: r(18px);
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
        font-size: r(14px);
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(45, 45, 53, 1);
      }
      & .week {
        font-size: r(14px);
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
</style>
