<template>
  <div>
    <swiper
    class="main-swiper"
    :current="currentTab"
    :circular = "circular"
    @change="exchangeSwiperPage">
      <swiper-item v-for="(item, index) in swiperArray" :key="index">
        <div><image :src="item.pic_url" id="myCanvas" /></div>
      </swiper-item>
    </swiper>
    <div>
      <image
        class="img-refresh"
        src="../../static/img/me_refresh.png"
        :hidden="!isShowRefresh"
        @click="refresh"/>
    </div>
  </div>
</template>

<script>
/*
 * 快讯模块
 */
import store from '@/store'
import wxApi from '@/utils/request'
import {
  BANNER_LIST
} from '@/utils/apiList'
export default {
  name: 'Live',
  data () {
    return {
      currentTab: 0,
      circular: true,
      // banner集合
      swiperArray: []
    }
  },
  computed: {
    // 是否显示首页刷新按钮
    isShowRefresh: _ => store.getters.isShowRefresh
  },
  created () {
    // 获取banner列表数据
    this.getBanner()
  },
  methods: {
    exchangeSwiperPage () {
      // TODO: 轮播图事件
    },
    getBanner () {
      wxApi.get(BANNER_LIST, {
        position: 'app_index_top'
      })
        .then(res => {
          console.log(1, res)
          if (res.statusCode === 200) this.swiperArray = res.data
        })
    },
    // 首页刷新按钮
    refresh () {
      console.log('刷新了')
    }
  }
}
</script>

<style lang=scss scoped>
.img-refresh {
  width:80rpx;
  height:80rpx;
  border-radius:50%;
  position:absolute;
  right: 100rpx;
  bottom: 260rpx;
}
.main-swiper {
  min-height: 380rpx;
  margin: 0 auto;
  width: 98%;
  image {
    display: block;
    width: 98%;
    border-radius: 8px;
    height: 364rpx;
    margin: 0 1%;
    box-shadow: 0 3px 10px 0 rgba(41,41,59,.4);
  }
}
</style>
