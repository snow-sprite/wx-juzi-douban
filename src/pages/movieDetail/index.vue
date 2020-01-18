<template>
  <div>电影详情</div>
</template>

<script>
import wxApi from '@/lib/request'
import { MOVIE_DETAIL } from '@/api/apiList'
export default {
  name: 'movieDetail',
  data () {
    return {
      id: '',
      title: '',
      movieDetail: {}
    }
  },
  methods: {
    async getMovieDetail () {
      try {
        let { data } = await wxApi.post(`${MOVIE_DETAIL}/${this.id}`, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        this.movieDetail = data
      } catch (error) {
        console.error(error)
      }
    }
  },
  onLoad (option) {
    this.title = option.title
    this.id = option.id
    this.getMovieDetail()
  },
  mounted () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  }
}
</script>

<style lang=scss scoped>

</style>