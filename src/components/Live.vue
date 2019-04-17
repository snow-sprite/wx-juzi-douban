<template>
  <div>
    {{ livesList.count }}
  </div>
</template>

<script>
/*
 * 快讯模块
 */
export default {
  name: 'Live',
  props: {
    livesList: {
      required: true,
      type: Object,
      default () {
        return []
      }
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/rpx';
</style>
