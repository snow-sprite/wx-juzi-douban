<template>
  <div>
    <div v-if="movieDetail.id">
      <dl class="zl-movie">
        <dt class="zl-movie__thumb">
          <img :src="movieDetail.images.small" alt="">
        </dt>
        <dd class="zl-movie__info">
          <h2 class="zl-movie__info--title">
            <span>{{ movieDetail.title }}</span>
            <span v-if="movieDetail.year">（{{ movieDetail.year }}）</span>
          </h2>
          <p class="zl-movie__info--sourcename">
            <span>{{ movieDetail.original_title }}</span>
            <span v-if="movieDetail.year">({{ movieDetail.year }})</span>
          </p>
          <p class="zl-movie__info--language">
            <span>语言：</span>
            <span v-for="language in movieDetail.languages" :key="language">{{ language }}&nbsp;</span>
          </p>
          <p class="zl-movie__info--details">
            <span v-for="(tag, ind) in movieDetail.genres" :key="ind">
              {{ tag }}
            </span>
            <span v-if="movieDetail.countries[0]">/ {{ movieDetail.countries[0] }}</span>
             <span v-if="movieDetail.durations[0]">/ 片长{{ movieDetail.durations[0] }}</span>
          </p>
          <ul class="zl-movie__info--watchbox">
            <li class="zl-movie__info--see">
              想看{{ movieDetail.wish_count }}
            </li>
            <li class="zl-movie__info--see">
              看过{{ movieDetail.reviews_count }}
            </li>
          </ul>
        </dd>
      </dl>
      <div>
        <dl>
          <dt>
            <span>7.6</span>
            <div>
              <img src="../../../static/img/movie/star_active.svg" alt="">
            </div>
          </dt>
          <dd>
            <ul>
              <li>
                <img src="../../../static/img/movie/star_inactive.svg" alt="">
                <span></span>
              </li>
            </ul>
          </dd>
        </dl>
      </div>
    </div>
  </div>
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
      this.movieDetail = {}
      try {
        let { data } = await wxApi.post(`${MOVIE_DETAIL}/${this.id}`, {
          apikey: '0b2bdeda43b5688921839c8ecb20399b'
        })
        this.movieDetail = data
        console.log('dd', this.movieDetail)
      } catch (error) {
        console.error('bad', error)
      }
    }
  },
  onLoad (option) {
    this.title = option.title
    this.id = option.id
  },
  mounted () {
    wx.setNavigationBarTitle({
      title: this.title
    })
    this.getMovieDetail()
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/_mixins.scss';

@include b(movie) {
  display: flex;
  justify-content: space-between;
  padding: r(8px);
  @include e(thumb) {
    width: 35%;
    height: r(130px);
    &>img {
      width: 100%;
      height: 100%;
      border-radius: r(3px);
      box-shadow: 0px 1px 2px #999;
    }
  }
  @include e(info) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding-left: r(8px);
    width: 65%;
    @include m(title) {
      font-size: r(18px);
    }
    @include m(sourcename) {
      color: #666;
      font-size: r(13px);
      line-height: r(14px);
    }
    @include m(language) {
      color: #666;
      font-size: r(12px);
    }
    @include m(details) {
      color: #666;
      font-size: r(10px);
      /* margin-top: r(8px); */
    }
    @include m(watchbox) {
      display: flex;
      justify-content: space-between;
    }
    @include m(see) {
      display: inline-block;
      padding: r(4px) r(16px);
      font-size: r(10px);
      font-weight: 400;
      background: rgb(244, 242, 242);
      /* box-shadow: 0 1px 2px #999; */
    }
  }
}
</style>