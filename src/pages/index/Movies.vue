<template>
  <div>
    <scroll-view
      class="zl-movie-box"
      :class="{'night-bg': isNightMode}"
      scroll-y
      lower-threshold="50"
      enable-back-to-top="true"
    >
      <main class="zl-movie">
        <!-- 分开写，保证影院热映在首页 -->
        <!-- 影院热映 -->
        <p class="zl-movie__title" :class="{'night-text': isNightMode}" v-show="inTheaters.length > 0">影院热映</p>
        <Movie :movie="inTheaters"></Movie>
        <!-- 即将上映 -->
        <p class="zl-movie__title" :class="{'night-text': isNightMode}" v-show="comingSoon.length > 0">即将上映</p>
        <Movie :movie="comingSoon"></Movie>
        <!-- 口碑榜 -->
        <p class="zl-movie__title" :class="{'night-text': isNightMode}" v-show="topList.length > 0">Top250</p>
        <Movie :movie="topList"></Movie>
        <!-- 北美票房榜 -->
        <p class="zl-movie__title" :class="{'night-text': isNightMode}" v-show="topList.length > 0">
          北美票房榜<span class="zl-movie__title--time">（{{ northTopData && northTopData.date }}）</span>
        </p>
        <Movie :movie="northTopData.subjects" :northUs="true"></Movie>
      </main>
    </scroll-view>
  </div>
</template>

<script>
import wxApi from '@/lib/request'
import { IN_THEATERS, COMMING_SOON, TOP250, NORTHTOP } from '@/api/apiList'
import Movie from '@/components/Movie'
import store from '@/store'
export default {
  name: 'Movies',
  components: {
    Movie
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      inTheaters: [],
      comingSoon: [],
      topList: [],
      northTopData: {
        date: '',
        subjects: []
      }
    }
  },
  created () {
    this.getMovies(IN_THEATERS, 'in_theaters')
    this.getMovies(COMMING_SOON, 'coming_soon')
    this.getMovies(TOP250, 'top250')
    this.getNorthTopList()
  },
  methods: {
    async getMovies (uri, key) {
      try {
        let { data } = await wxApi.post(uri, {
          start: 0,
          count: 6,
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        if (data && data.count > 0) {
          // data.subjects = data.subjects.slice(0, 6)
          for (let movieItem of data.subjects) {
            // star总分50， 这里以5为最大评分
            movieItem.activeStar = Math.floor(movieItem.rating.stars / 10)
            movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10)
            movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0
          }
          if (data.title === '正在上映的电影-北京') {
            this.inTheaters = data.subjects
          } else if (data.title === '即将上映的电影') {
            this.comingSoon = data.subjects
          } else if (data.title === '豆瓣电影Top250') {
            this.topList = data.subjects
          }
        }
      } catch (error) {
        console.log('err', error)
        this.hotMovieList = []
      }
    },
    async getNorthTopList () {
      try {
        let { data } = await wxApi.post(NORTHTOP, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        data.subjects = data.subjects.slice(0, 6)
        for (let movieItem of data.subjects) {
        // star总分50， 这里以5为最大评分
          movieItem.subject.activeStar = Math.floor(movieItem.subject.rating.stars / 10)
          movieItem.subject.inactiveStar = Math.floor(5 - movieItem.subject.rating.stars / 10)
          movieItem.subject.halfActiveStar = movieItem.subject.rating.stars % 10 > 0
        }
        Object.keys(this.northTopData).forEach(key => {
          this.northTopData[key] = data[key]
        })
      } catch (error) {
        console.log(error)
        this.northTopData.date = ''
        this.northTopData.subjects = []
      }
    }
  }
}
</script>

<style lang=scss>
@import '../../assets/mixins';
@include b(movie-box) {
  height: 100vh;
}
@include b(movie) {
  padding: 0 r(8px);
  padding-top: r(8px);
  @include e(title) {
    font-size: r(18px);
    font-weight: 450;
    margin-bottom: r(8px);
    @include m(time) {
      font-size: r(12px);
    }
  }
  @include e(list) {
    box-sizing: border-box;
    margin-bottom: r(8px);
  }
  @include e(item) {
    width: calc((100% - 20px) / 3);
    margin-right: 10px;
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
  }
  @include e(clear) {
    width: 0;
    height: 0;
    clear: both;
  }
}
</style>