<template>
  <scroll-view
      class="zl-movie-box"
      :class="{'night-bg': isNightMode}"
      scroll-y
      lower-threshold="50"
      enable-back-to-top="true"
    >
      <main class="zl-movie">
        <ul class="zl-movie__list">
          <Movie v-for="(item, index) in MoviesList" :key="index" :movie="item"></Movie>
          <p class="zl-movie__clear"></p>
        </ul>
      </main>
    </scroll-view>
</template>

<script>
import wxApi from '@/lib/request'
import { IN_THEATERS, COMMING_SOON, TOP250, NORTHTOP } from '@/api/apiList'
import Movie from '@/components/Movie'
import store from '@/store'
export default {
  name: 'MoviesList',
  components: {
    Movie
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      requestUri: '', // 当前详情页请求的uri
      title: '',
      MoviesList: [] // 电影列表
    }
  },
  onLoad (option) {
    // 进页面先清空一下老数据
    this.MoviesList = []
    this.title = option.title
    switch (option.payload) {
      case 'inTheaters':
        this.requestUri = IN_THEATERS
        this.getMoviesList()
        break
      case 'comingSoon':
        this.requestUri = COMMING_SOON
        this.getMoviesList()
        break
      case 'topList':
        this.requestUri = TOP250
        this.getMoviesList()
        break
      case 'northTop':
        this.requestUri = NORTHTOP
        this.getNorthTopList()
        break
    }
  },
  methods: {
    async getMoviesList () {
      try {
        let { data } = await wxApi.post(this.requestUri, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        if (data && data.count > 0) {
          // data.subjects = data.subjects.slice(0, 6)
          if (this.requestUri !== COMMING_SOON) {
            for (let movieItem of data.subjects) {
            // star总分50， 这里以5为最大评分
              movieItem.activeStar = Math.floor(movieItem.rating.stars / 10)
              movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10)
              movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0
              // 不是即将上映的去掉「上映时期」和「类型」
              movieItem.genres = []
              movieItem.mainland_pubdate = ''
            }
          }
          //  没有评分这里不显示评分了 重设上映日期
          if (this.requestUri === COMMING_SOON) {
            data.subjects.forEach(coming => {
              coming.rating = {}
              let month = new Date(coming.mainland_pubdate).getMonth() + 1
              month = month < 10 ? `0${month}` : month
              let day = new Date(coming.mainland_pubdate).getDate()
              coming.mainland_pubdate = `${month}-${day}`
            })
          }
          this.MoviesList = data.subjects
        }
      } catch (error) {
        console.log(error)
        this.hotMovieList = []
      }
    },
    async getNorthTopList () {
      try {
        let { data } = await wxApi.post(this.requestUri, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        for (let movieItem of data.subjects) {
        // star总分50， 这里以5为最大评分
          movieItem.subject.activeStar = Math.floor(movieItem.subject.rating.stars / 10)
          movieItem.subject.inactiveStar = Math.floor(5 - movieItem.subject.rating.stars / 10)
          movieItem.subject.halfActiveStar = movieItem.subject.rating.stars % 10 > 0
          // 不是即将上映的去掉「上映时期」和「类型」
          movieItem.subject.genres = []
          movieItem.subject.mainland_pubdate = ''
        }
        // 将northTopData.subjects.subject下的数据映射到northTopData.sujects下一份，跟之前数据格式保持一致
        for (let sub of data.subjects) {
          Object.keys(sub.subject).forEach(key => {
            sub[key] = sub.subject[key]
          })
        }
        this.MoviesList = data.subjects
      } catch (error) {
        console.log(error)
        this.northTopData.date = ''
        this.northTopData.subjects = []
      }
    }
  },
  mounted () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  }
}
</script>