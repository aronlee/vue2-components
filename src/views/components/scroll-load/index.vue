<template>
  <div class="fs-scroll-load">
    <div class="down-tips">
      <div>↑</div>
      <div>{{downTips}}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'scroll-load',
  computed: {
    downTips() {
      return {
        1: '下拉可以刷新',
        2: '松开立即刷新',
        3: '正在努力帮你加载中...',
      }[this.downState]
    },
  },
  data() {
    return {
      downState: 1,
    }
  },
}
</script>

<style lang="scss">
</style>
