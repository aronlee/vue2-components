<template>
  <div class="mod-header">
    <div class="header-back" @click="handleBack"><</div>
    <div class="header-title">{{title}}</div>
    <div class="header-right">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fs-header',
  props: {
    title: {
      type: String,
      default: 'topic',
    },
    back: Function,
  },
  data() {
    return {}
  },
  methods: {
    handleBack() {
      this.back ? this.back() : this.$router.back()
    },
  },
}
</script>

<style lang="scss">
@import '../../../style/functions.scss';
$headHeight: 48px;
.mod-header {
  height: $headHeight;
  background-color: #ffffff;
  @include border;

  .header-back {
    position: absolute;
    left: 0;
    top: 0;
    font-size: 20px;
    line-height: $headHeight;
    height: $headHeight;
    width: $headHeight;
    text-align: center;
    color: #bdbdbb;
  }

  .header-title {
    width: 100%;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    line-height: $headHeight;
  }

  .header-right {
    position: absolute;
    right: 0;
    top: 0;
    height: $headHeight;
  }
}
</style>
