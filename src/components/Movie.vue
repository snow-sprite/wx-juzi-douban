<template>
  <div>
    <ul class="zl-movie__list" v-if="!northUs">
      <li class="zl-movie__item" v-for="(item, ind) in movie" :key="ind">
        <img :src="item.images.small" class="zl-movie__item--thumb">
        <span class="zl-movie__item--title" :class="{'night-text': isNightMode}">{{ item.title }}</span>
        <p>
          <img 
            src="../../static/img/movie/star_active.svg"
            class="zl-movie__item--star"
            v-for="(star, i) in item.activeStar"
            :key="i">
          <img 
            src="../../static/img/movie/star_half.svg"
            class="zl-movie__item--star"
            v-show="item.halfActiveStar">
          <img 
            src="../../static/img/movie/star_inactive.svg"
            class="zl-movie__item--star"
            v-for="(star, i) in item.inactiveStar"
            :key="i">
          <span class="zl-movie__item--score" :class="{'night-text': isNightMode}">{{ item.rating.average }}</span>
        </p>
      </li>
      <p class="zl-movie__clear"></p>
    </ul>
    <ul class="zl-movie__list" v-else>
      <li class="zl-movie__item" v-for="(item, ind) in movie" :key="ind">
        <img :src="item.subject.images.small" class="zl-movie__item--thumb">
        <span class="zl-movie__item--title" :class="{'night-text': isNightMode}">{{ item.subject.title }}</span>
        <p>
          <img 
            src="../../static/img/movie/star_active.svg"
            class="zl-movie__item--star"
            v-for="(star, i) in item.subject.activeStar"
            :key="i">
          <img 
            src="../../static/img/movie/star_half.svg"
            class="zl-movie__item--star"
            v-show="item.subject.halfActiveStar">
          <img 
            src="../../static/img/movie/star_inactive.svg"
            class="zl-movie__item--star"
            v-for="(star, i) in item.subject.inactiveStar"
            :key="i">
          <span class="zl-movie__item--score" :class="{'night-text': isNightMode}">{{ item.subject.rating.average }}</span>
        </p>
      </li>
      <p class="zl-movie__clear"></p>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Movie',
  props: {
    movie: {
      type: Array,
      default: [],
      required: true
    },
    northUs: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  }
}
</script>