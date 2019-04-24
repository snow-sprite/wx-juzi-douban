<template>
  <scroll-view
    class="zl-coin-box"
    scroll-y
    lower-threshold="50"
    enable-back-to-top="true"
  >
    <article class="js-drawer-container js-live ">
      <section class="js-lives">
        <LiveSingle />
      </section>
    </article>
  </scroll-view>
</template>
<script>
/*
 * 快讯模块
 */
import LiveSingle from './LiveSingle'
export default {
  name: 'Live',
  props: {
    livesList: {
      required: true,
      type: Array
    }
  },
  components: {
    LiveSingle
  },
  mounted () {
    console.log(100, this.livesList)
  }
}
</script>

<style lang=scss scoped>
@import '../assets/mixins';
@include b(live) {
  width: 100%;
}
@include b(coin-box) {
  height: 100vh;
}
@include b(lives) {
  box-sizing: border-box;
}
.js-no-mores {
  margin: r(30px) 0;
  text-align: center;
  font-size: r(16px) !important;
}
</style>
