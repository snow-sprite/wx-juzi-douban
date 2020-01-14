<template>
  <div>
    <scroll-view
      class="zl-movie-box"
      scroll-y
      lower-threshold="50"
      enable-back-to-top="true"
    >
      <main class="zl-movie" v-show="movieList.length > 0">
        <p class="zl-movie__title">影院热映</p>
        <ul class="zl-movie__list">
          <li class="zl-movie__item" v-for="(item, index) in movieList" :key="index">
            <img :src="item.images.small" class="zl-movie__item--thumb">
            <span class="zl-movie__item--title">{{ item.title }}</span>
            <p>
              <img 
                src="../../../static/img/movie/star_active.svg"
                class="zl-movie__item--star"
                v-for="(star, ind) in item.activeStar"
                :key="ind">
              <img 
                src="../../../static/img/movie/star_half.svg"
                class="zl-movie__item--star"
                v-show="item.halfActiveStar">
              <img 
                src="../../../static/img/movie/star_inactive.svg"
                class="zl-movie__item--star"
                v-for="(star, ind) in item.inactiveStar"
                :key="ind">
              <span class="zl-movie__item--score">{{ item.rating.average }}</span>
            </p>
          </li>
          <p class="zl-movie__clear"></p>
        </ul>
      </main>
    </scroll-view>
  </div>
</template>

<script>
import wxApi from '@/lib/request'
import { IN_THEATERS } from '@/api/apiList'
export default {
  name: 'Movies',
  data () {
    return {
      movieList: []
    }
  },
  created () {
    this.getInTheaters()
  },
  methods: {
    async getInTheaters () {
      try {
        let { data } = await wxApi.post(IN_THEATERS, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        if (data && data.count > 0) {
          this.movieList = data.subjects.slice(0, 6)
          for (let movieItem of this.movieList) {
            // star总分50， 这里以5为最大评分
            movieItem.activeStar = Math.floor(movieItem.rating.stars / 10)
            movieItem.inactiveStar = Math.floor(5 - movieItem.rating.stars / 10)
            movieItem.halfActiveStar = movieItem.rating.stars % 10 > 0
          }
        }
      } catch (error) {
        console.log('err', error)
        this.movieList = []
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
  }
  @include e(list) {
    box-sizing: border-box;
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