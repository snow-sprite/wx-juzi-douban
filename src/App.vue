<script>
import store from '@/store'
export default {
  created () {
    // 先获取以下用户信息
    store.dispatch('getUserInfo')
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style lang=scss>
@import './assets/rpx';
@import './assets/mixins';
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
@include b(movie-box) {
  height: 100vh;
}
@include b(movie) {
  padding: 0 r(8px);
  padding-top: r(8px);
  @include e(title) {
    font-size: r(16px);
    font-weight: 450;
    margin-bottom: r(8px);
    @include m(time) {
      font-size: r(12px);
    }
    @include m(more) {
      float: right;
      &>span {
        font-size: r(12px);
        font-style: normal;
        font-weight:normal;
        color: #808080;
        display: inline-block;
        vertical-align: middle;
      }
      &>img {
        width: r(10px);
        height: r(10px);
        margin-left: r(5px);
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
  @include e(list) {
    box-sizing: border-box;
    margin-bottom: r(2px);
  }
  @include e(item) {
    width: calc((100% - 20px) / 3);
    margin-right: 10px;
    margin-bottom: 10px;
    display: flex;
    float: left;
    flex-direction: column;
    justify-content: space-between;
    &:nth-child(3n) {
      margin-right: 0;
    }
    @include m(thumb) {
      height: r(130px);
      width: 100%;
      background-size: 100% 100%;
    }
    @include m(mask) {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.4;
    }
    @include m(title) {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: r(12px);
    }
    @include m(star) {
      width: r(8px);
      height: r(8px);
    }
    @include m(score) {
      color: #666;
      font-size: r(10px);
      margin-left: r(3px);
    }
    @include m(genres) {
      color: rgb(10, 5, 5);
      font-size: r(10px);
    }
    @include m(pubtip) {
      font-size: r(10px);
      font-weight: normal;
    }
    @include m(genresbox) {
      line-height: r(12px);
    }
    @include m(pubdate) {
      font-size: r(8px);
      color: #ff4055;
      /* display: inline-block; */
      border: 1px solid #f67;
      padding: 0 r(4px);
      border-radius: 1px;
      /* margin-left: r(1px); */
    }
  }
  @include e(clear) {
    width: 0;
    height: 0;
    clear: both;
  }
}
</style>