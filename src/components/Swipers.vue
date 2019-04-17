<template>
  <swiper
  class="main-swiper"
  :current="currentTab"
  :circular = "circular"
  @change="exchangeSwiperPage">
    <swiper-item v-for="(item, index) in swiperData" :key="index">
        <div><image :src="item.pic_url" /></div>
    </swiper-item>
  </swiper>
</template>

<script>
/*
 * @Description: 轮播图
 * @Author: zhiozhou
 * @Date: 2019-04-17 15:08:20
 * @LastEditTime: 2019-04-17 15:08:20
 */
export default {
  // warn: vue组件名不能与小程序组件名同名，包括大小写
  name: 'MySwiper',
  props: {
    swiperData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentTab: 0,
      circular: true
    }
  },
  methods: {
    exchangeSwiperPage () {
      // TODO: 轮播图事件
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/rpx';
.main-swiper {
  @include rpx(min-height, 189px);
  margin: 0 auto;
  width: 98%;
  image {
    display: block;
    width: 98%;
    margin: 0 1%;
    @include rpx((
      border-radius: 8px,
      height: 364rpx,
      box-shadow: 0 3px 10px 0 rgba(41,41,59,.4)
    ))
  }
}
</style>
