<template>
  <div>
    快讯列表
  </div>
</template>

<script>
/*
 * 快讯模块
 */
import wxApi from '@/utils/request'
import {
  LIVES_LIST
} from '@/api/apiList'
export default {
  name: 'Live',
  data () {
    return {
      // 快讯列表
      livesList: []
    }
  },
  created () {
    // 获取快讯
    this.getLives()
  },
  methods: {
    getLives () {
      wxApi.get(LIVES_LIST, {
        reading: false,
        limit: 10
      })
        .then(res => {
          console.log(3, res.data.list)
          if (res.statusCode === 200) this.livesList = res.data.list
        })
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/rpx';
</style>
