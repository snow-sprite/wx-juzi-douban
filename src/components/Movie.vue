<template>
  <li class="zl-movie__item">
    <div class="zl-movie__item--thumb" :style="{backgroundImage: 'url(' + movie.images.small + ')'}">
      <p class="zl-movie__item--mask" v-show="isNightMode"></p>
      <!-- <img :src="movie.images.small" class="zl-movie__item--thumb"> -->
    </div>
    <span class="zl-movie__item--title" :class="{'night-text': isNightMode}">{{ movie.title }}</span>
    <p>
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
      <span class="zl-movie__item--score" :class="{'night-text': isNightMode}">{{ movie.rating.average }}</span>
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
  }
}
</script>