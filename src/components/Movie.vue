<template>
  <li class="zl-movie__item" @click="showDetail()">
    <div class="zl-movie__item--thumb" :style="{backgroundImage: 'url(' + movie.images.small + ')'}">
      <p class="zl-movie__item--mask" v-show="isNightMode"></p>
      <!-- <img :src="movie.images.small" class="zl-movie__item--thumb"> -->
    </div>
    <span class="zl-movie__item--title" :class="{'night-text': isNightMode}">{{ movie.title }}</span>
    <div class="zl-movie__item--genresbox">
      <img 
        src="../../static/img/movie/star_active.svg"
        class="zl-movie__item--star"
        v-for="(star, i) in movie.activeStar"
        :key="i">
      <img 
        src="../../static/img/movie/star_half.svg"
        class="zl-movie__item--star"
        v-show="movie.halfActiveStar">
      <img 
        src="../../static/img/movie/star_inactive.svg"
        class="zl-movie__item--star"
        v-for="(star, i) in movie.inactiveStar"
        :key="i">
      <span class="zl-movie__item--score" :class="{'night-text': isNightMode}" v-if="movie.rating && movie.rating.average">{{ movie.rating.average }}</span>
      <p class="zl-movie__item--genresbox" v-if="movie.mainland_pubdate">
        <!-- <span class="zl-movie__item--pubtip">题材：</span> -->
        <span 
          v-for="(genre, ind) in movie.genres"
          :key="ind"
          class="zl-movie__item--genres"
          :class="{'night-text': isNightMode}"
        >{{ genre }} </span>
      </p>
    </div>
    <p v-if="movie.mainland_pubdate" class="zl-movie__item--genresbox">
      <span class="zl-movie__item--pubtip">上映日期：</span>
      <span class="zl-movie__item--pubdate">{{ movie.mainland_pubdate }}</span>
    </p>
  </li>
</template>

<script>
import store from '@/store'
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Object,
      default: {},
      required: true
    }
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  methods: {
    showDetail () {
      wx.navigateTo({
        url: `../movieDetail/main?id=${this.movie.id}&title=${this.movie.title}`
      })
    }
  }
}
</script>