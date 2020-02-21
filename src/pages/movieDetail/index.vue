<template>
  <div class="zl-movie-detailbox">
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
              想看 {{ movieDetail.wish_count }}
            </li>
            <li class="zl-movie__info--see">
              看过 {{ movieDetail.reviews_count }}
            </li>
          </ul>
        </dd>
      </dl>
    </div>
    <div class="zl-rate-box">
      <span class="zl-rate-box__title">豆瓣评分&copy;</span>
      <dl class="zl-rate-leftbox">
        <dt class="zl-rate-box__totalrate">
          <span class="zl-rate-box__score">7.6</span>
          <div class="zl-rate-box__trate">
            <img class="zl-rate-box__trate--active" src="../../../static/img/movie/star_active.svg" alt="">
            <img class="zl-rate-box__trate--inactive" src="../../../static/img/movie/star_inactive.svg" alt="">
            <img class="zl-rate-box__trate--inactive" src="../../../static/img/movie/star_inactive.svg" alt="">
            <img class="zl-rate-box__trate--inactive" src="../../../static/img/movie/star_inactive.svg" alt="">
            <img class="zl-rate-box__trate--inactive" src="../../../static/img/movie/star_inactive.svg" alt="">
          </div>
        </dt>
        <dd class="zl-rate-box__details">
          <ul>
            <li>
              <div class="zl-rate-box__leftdetails">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
              </div>
              <div class="zl-rate-box__details--propotion">
                <span class="zl-rate-box__details--activepropotion" style="width: 50%;"></span>
              </div>
            </li>
            <li>
              <div class="zl-rate-box__leftdetails">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
              </div>
              <div class="zl-rate-box__details--propotion">
                <span class="zl-rate-box__details--activepropotion" style="width: 50%;"></span>
              </div>
            </li>
            <li>
              <div class="zl-rate-box__leftdetails">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
              </div>
              <div class="zl-rate-box__details--propotion">
                <span class="zl-rate-box__details--activepropotion" style="width: 50%;"></span>
              </div>
            </li>
            <li>
              <div class="zl-rate-box__leftdetails">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
              </div>
              <div class="zl-rate-box__details--propotion">
                <span class="zl-rate-box__details--activepropotion" style="width: 50%;"></span>
              </div>
            </li>
            <li>
              <div class="zl-rate-box__leftdetails">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
                <img class="zl-rate-box__details--star" src="../../../static/img/movie/star_inactive.svg" alt="">
              </div>
              <div class="zl-rate-box__details--propotion">
                <span class="zl-rate-box__details--activepropotion" style="width: 50%;"></span>
              </div>
            </li>
            <span class="zl-rate-box__details--people">123456人评分</span>
          </ul>
        </dd>
      </dl>
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

@include b(movie-detailbox) {
  box-sizing: border-box;
  padding: 0 r(8px);
}
@include b(movie) {
  display: flex;
  justify-content: space-between;
  padding: r(8px) 0;
  @include e(thumb) {
    width: 35%;
    height: r(130px);
    &>img {
      width: 95%;
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
      color: rgb(234, 177, 93)
      /* box-shadow: 0 1px 2px #999; */
    }
  }
}

@include b(rate-leftbox) {
  display: flex;
}

@include b(rate-box) {
  box-sizing: border-box;
  padding: r(8px) 0;
  font-size: r(10px);
  color: #666;
  background: rgb(250, 250, 250);
  @include e(title) {
    font-weight: 500;
  }
  @include e(totalrate) {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include e(score) {
      font-size: r(24px);
      display: inline-block;
      color: #000;
      text-align: right;
    }
    @include e(trate) {
      text-align: right;
    }
    img {
      width: r(10px);
      height: r(10px);
    }
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      clear: both;
    }
  }

  @include e(details) {
    position: relative;
    width: 60%;
    padding-top: r(6px);
    box-sizing: border-box;
    line-height: r(8px);
    @include m(star) {
      width: r(6px);
      height: r(6px);
      display: inline-block;
      float: right;
    }
    @include m(propotion) {
      position: relative;
      display: inline-block;
      width: r(80px);
      height: r(6px);
      background: #eee;
    }
    @include m(activepropotion) {
      position: absolute;
      height: r(6px);
      left: 0;
      top: 0;
      background: pink;
    }
    @include m(people) {
      position: absolute;
      right: 102.333rpx;
      bottom: r(-6px);
      color: #ddd;
      font-size: r(8px);
    }
  }
  @include e(leftdetails) {
    width: r(40px);
    display: inline-block;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      clear: both;
    }
  }
}
</style>