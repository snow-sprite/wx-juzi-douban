<template>
  <div>
    <scroll-view
      class="zl-coin-box"
      scroll-y
      upper-threshold="50"
      lower-threshold="50"
      enable-back-to-top="true"
      @scrolltolower="loadMore"
      @scrolltoupper="getCurrencyList"
    >
      <div>
        <div
          v-for="(item, ind) in list"
          :key="ind"
          class="zl-coin"
          :class="{'night-line-color': isNightMode}"
        >
          <ul
            class="zl-coin__simp"
            @click="switchInfo(item)"
          >
            <li
              class="zl-coin__name"
              :class="{'night-text': isNightMode}"
            >
              <img
                :src="item.icon_url"
                :alt="item.symbol"
              >
              {{ item.symbol }}
            </li>
            <li class="zl-coin__price" :class="{'night-text': isNightMode}">{{ item.price }}</li>
            <li class="zl-coin__gd">
              <span
                v-if="item.change > 0"
                class="zl-coin__gd--gorw"
              >+{{ item.change | formatPoint }}%</span>
              <span
                v-else-if="item.change < 0"
                class="zl-coin__gd--fall"
              >{{ item.change | formatPoint }}%</span>
              <span v-else>+0.00%</span>
            </li>
          </ul>
          <ul
            v-if="isShowInfo && currentSymbol == item.symbol"
            class="zl-coin__info"
            :class="{'night-bg': isNightMode}"
          >
            <li class="zl-coin__info--box" :class="{'night-text': isNightMode}">
              <!-- 流通量 -->
              <span>流通量：</span>
              <span>{{ coinDetail.supply }}</span>
            </li>
            <li class="zl-coin__info--box" :class="{'night-text': isNightMode}">
              <!-- 24小时成交额 -->
              <span>24小时成交额：</span>
              <span>¥&nbsp;{{ coinDetail.vol }}</span>
            </li>
            <li class="zl-coin__info--box" :class="{'night-text': isNightMode}">
              <!--  -->
              <span>市值：</span>
              <span>¥&nbsp;{{ coinDetail.market_cap }}</span>
            </li>
          </ul>
        </div>
      </div>
    </scroll-view>
  </div>
</template>

<script>
/*
 * @Description: 币种行情
 * @Author: zhoun
 * @Date: 2019-03-24 15:08:20
 * @LastEditTime: 2019-3-24 15:08:20
 */
import wxApi from '@/lib/request'
import store from '@/store'
import {
  COINS_LIST
} from '@/api/apiList'
export default {
  name: 'Coin',
  filters: {
    formatPoint (value) {
      let num = parseFloat(value)
      return num.toFixed(2)
    }
  },
  data () {
    return {
      param: {
        page: 1,
        limit: 15,
        offset: 0,
        currency: '',
        sortby: 'market_cap',
        order: 'desc'
      },
      list: [],
      isShowInfo: false,
      currentSymbol: '',
      coinDetail: {
        // 流通量
        supply: '',
        vol: '',
        market_cap: ''
      },
      isLoading: true,
      busy: true,
      state: 1
    }
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  mounted () {
    this.getCurrencyList()
  },
  methods: {
    // 显示详情
    switchInfo (item) {
      if (this.currentSymbol === item.symbol && this.isShowInfo) {
        this.isShowInfo = false
        return false
      }
      this.isShowInfo = true
      this.currentSymbol = item.symbol
      this.coinDetail.supply = item.supply
      this.coinDetail.vol = item.vol
      this.coinDetail.market_cap = item.market_cap
    },
    // 获取列表
    getCurrencyList () {
      this.isLoading = true
      this.busy = true
      wxApi.get(COINS_LIST, this.param)
        .then(res => {
          if (res.statusCode === 200) {
            // this.list = res.data
            this.list = this.list.concat(res.data)
            this.busy = false
            this.isLoading = false
            if (this.param.page >= 50) {
              this.busy = true
              this.state = 2
              this.isLoading = true
            }
          }
        })
        .catch(() => {
          this.isLoading = false
          this.busy = true
        })
    },
    loadMore () {
      this.param.page++
      this.param.offset += this.param.limit
      this.getCurrencyList()
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/mixins';
@include b(coin-box) {
  height: 100vh;
}
@include b(coin) {
  border-bottom: 1px solid $--color-default;
  box-sizing: border-box;
  padding: 0 15px;
  @include e(simp) {
    display: flex;
    justify-content: space-between;
    font-size: r(14px);
    font-family: PingFangSC-Regular;
    font-weight: 400;
    & li {
      height: r(50px);
      line-height: r(50px);
    }
  }
  @include e(name) {
    width: r(100px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    & img {
      width: r(28px);
      height: r(28px);
      border-radius: 50%;
      vertical-align: middle;
    }
    & span {
      display: inline-block;
      vertical-align: middle;
      margin-left: r(2px);
    }
  }
  @include e(price) {
    width: r(100px);
    text-align: right;
  }
  @include e(gd) {
    width: r(80px);
    text-align: right;
    @include m(gorw) {
      color: $--color-important;
    }
    @include m(fall) {
      color: $-color-3CB838;
    }
  }
  @include e(info) {
    width: 100%;
    height: r(100px);
    display: flex;
    flex-direction: column;
    background: $--color-white-1;
    margin-bottom: r(8px);
    padding: r(8px) r(15px);
    box-sizing: border-box;
    @include m(box) {
      display: flex;
      justify-content: space-between;
      font-size: r(12px);
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: $--color-black-1;
      line-height: r(28px);
    }
  }
}
/* 夜间模式 */
.night-line-color {
  border-bottom: 1px solid #2c2c2c !important;
}
.night-text {
  color: #666;
}
.night-bg {
  background: #dcdcdc;
}
</style>
