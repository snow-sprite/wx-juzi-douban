<template>
  <div>
    <div
      v-for="item in newsData"
      :key="item.id"
      class="moring-news-box"
    >
      <header>
        <img
          src="../../static/img/morning.png"
          alt="logo"
          class="logo"
          >
        <span>区块链早讯</span>
        <!-- <span class="bg-line"></span> -->
      </header>
      <article>
        <section>
          {{ item.title }}
        </section>
      </article>
    </div>
  </div>
</template>

<script>
/*
 * @Description: 早新闻
 * @Author: zhiozhou
 * @Date: 2019-04-17 15:08:20
 * @LastEditTime: 2019-04-17 15:08:20
 */
export default {
  name: 'MoringNews',
  props: {
    newsData: {
      require: true,
      type: Array
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/rpx';
.moring-news-box {
  box-sizing: border-box;
  width: 96%;
  @include rpx((
    margin: 10px auto,
    padding: 16px,
    padding-top: 10px,
    border-radius: 4px,
    box-shadow: 0 3px 10px 0 rgba(41,41,59,.12)
  ))
  header {
    position: relative;
    .bg-line {
      position: absolute;
      display: block;
      background: #F0A046;
      z-index: -1;
      opacity: 0.6;
      @include rpx((
        width: 80px,
        height: 8px,
        left: 28px,
        bottom: 4px
      ))
    }
    .logo {
      vertical-align: middle;
      @include rpx((
        width: 28px,
        height: 28px
      ))
    }
    span {
      display: inline-block;
      vertical-align: middle;
      @include rpx((
        margin-left: 6px
      ))
    }
    @include rpx((
      font-size: 16px
    ))
  }
  article {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    color: #666;
    @include rpx((
      font-size: 18px,
      padding-left: 4px,
      margin-top: 10px
    ))
  }
}
</style>
