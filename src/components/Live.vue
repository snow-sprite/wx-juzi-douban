<template>
  <div>
    快讯列表
  </div>
</template>

<script>
/*
 * 快讯模块
 */
// import store from '@/store'
// import wxApi from '@/utils/request'
// import {
//   BANNER_LIST,
//   MAIN_NEWS,
//   LIVES_LIST
// } from '@/api/apiList'
// export default {
//   name: 'Live',
//   data () {
//     return {
//       currentTab: 0,
//       circular: true,
//       // banner集合
//       swiperArray: [],
//       // 新闻列表
//       newsList: [],
//       // 快讯列表
//       livesList: []
//     }
//   },
//   computed: {
//     // 是否显示首页刷新按钮
//     isShowRefresh: _ => store.getters.isShowRefresh
//   },
//   created () {
//     // 获取banner列表数据
//     this.getBanner()
//     // 获取新闻数据
//     this.getNews()
//     // 获取快讯
//     this.getLives()
//   },
//   methods: {
//     exchangeSwiperPage () {
//       // TODO: 轮播图事件
//     },
//     // 获取轮播图
//     getBanner () {
//       wxApi.get(BANNER_LIST, {
//         position: 'app_index_top'
//       })
//         .then(res => {
//           console.log(1, res)
//           if (res.statusCode === 200) this.swiperArray = res.data
//         })
//     },
//     // 获取早新闻
//     getNews () {
//       wxApi.get(MAIN_NEWS, {
//         tag: '金色9：30',
//         limit: 1,
//         topic_id: 0,
//         flag: 'down'
//       })
//         .then(res => {
//           console.log(2, res)
//           if (res.statusCode === 200) this.newsList = res.data
//         })
//     },
//     getLives () {
//       wxApi.get(LIVES_LIST, {
//         reading: false,
//         limit: 10
//       })
//         .then(res => {
//           console.log(3, res.data.list)
//           if (res.statusCode === 200) this.livesList = res.data.list
//         })
//     },
//     // 首页刷新按钮
//     refresh () {
//       console.log('刷新了')
//     }
//   }
// }
</script>

<style lang=scss scoped>
@import '../assets/css/rpx';
</style>
