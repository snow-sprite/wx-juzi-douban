<template>
  <article class="zl-live">
    <div
      v-for="(val, ind) in [1, 2, 3, 4, 5, 6]"
      :key="ind"
    >
      <aside class="zl-live__time">
        <ul class="zl-live__time--calendar">
          <li class="month">
            <!-- {{ val.published_at | formatTimePoint('month') }}{{ $t('dateTime.month') }} -->
            1月
          </li>
          <li class="day">
            <!-- {{ val.date }} -->
            18
          </li>
        </ul>
        <ul class="zl-live__time--date">
          <li class="today">
            <!-- {{ val.published_at | getYesterdayOrDay }} -->
            今日
          </li>
          <li class="week">
            <!-- {{ getWeek(val.published_at) }} -->
            星期一
          </li>
        </ul>
      </aside>
      <!-- v-for="(value, index) in val.arrs" -->
      <div
        v-for="(value, index) in [1, 2, 3, 4, 5, 6]"
        :key="index"
        class="zl-live__content"
      >
        <!-- v-if="value.grade ==5" -->
        <p
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
          <!-- {{ value.published_at | formatTime('time') }} -->
          12:00:00
        </aside>
        <aside class="zl-live__title">
          <span class="zl-live__title--tag" />
          <!-- {{ value.title }} -->
          动态 | PayPal通过了一项防止加密勒索的专利
        </aside>
        <section class="zl-live__contents">
          <!-- {{ value.content }} -->
          据Coindesk消息，在线支付巨头PayPal获得一项技术专利，该技术可以检测某些类型的加密恶意软件，并减轻其影响。该专利于2016年9月首次提交，并于周二由美国专利商标局(USPTO)批准。该专利概述了如何利用现有的系统数据缓存来帮助检测勒索软件，防止其不可挽回地锁定受害者的文件。去年，该公司还提交了一项专利申请，以提高加密货币支付的速度，从而缩小在消费者和商家之间进行支付所花费的时间。
        </section>
        <div class="zl-live__operate">
          <ul>
            <li @click="bullBtn(value.id, ind, index)">
              <!-- v-if="value.bull_num>value.bear_num" -->
              <img
                src="../../static/img/live/liveup.svg"
              >
              <img
                v-if="value.bull_num<value.bear_num || value.bull_num==value.bear_num"
                src="../../static/img/live/noliveup.svg"
              >
              <span class="zl-bull_num">
                <!-- {{ value.bull_num }} -->
                10
              </span>
            </li>
            <li @click="bearBtn(value.id, ind, index)">
              <!-- v-if="value.bear_num>value.bull_num" -->
              <img
                src="../../static/img/live/livedown.svg"
              >
              <img
                v-if="value.bear_num<value.bull_num || value.bull_num==value.bear_num"
                src="../../static/img/live/nolivedown.svg"
              >
              <span class="zl-bull_num">
                <!-- {{ value.bear_num }} -->
                8
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'LiveSingle'
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
        width: r(38px);
        height: r(20px);
        color: #fff;
        line-height: r(20px);
        font-size: r(12px);
        font-family: OpenSans-SemiBold;
        font-weight: 600;
        border-radius: 4px 4px 0 0;
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
