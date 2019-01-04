<template>
  <div class="">
    第二页
  </div>
</template>

<script>
/*
 * 行情模块
 */
import wxApi from '@/utils/request'
import {
  MAIN_NEWS
} from '@/utils/apiList'
export default {
  name: 'Market',
  data () {
    return {
      // 早新闻
      newsList: []
    }
  },
  created () {
    // 获取新闻9点半
    this.getNews()
  },
  methods: {
    getNews () {
      wxApi.get(MAIN_NEWS, {
        tag: '金色9：30',
        limit: 1,
        topic_id: 0,
        flag: 'down'
      })
        .then(res => {
          console.log(2, res)
          if (res.statusCode === 200) this.newsList = res.data
        })
    }
  }
}
</script>

<style lang=scss scoped>
</style>
