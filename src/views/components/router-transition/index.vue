<template>
  <div class="flex-1 mod-router-transition">
    <transition :name="transitionName">
      <slot v-bind:routerCls="'router-view'"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'router-transition',
  props: {
    prefixCls: {
      default: 'fs',
      type: String,
    },
  },
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
    $route(to, from) {
      const isBack = this.$router.isBack //  监听路由变化时的状态为前进还是后退
      console.log(this.$router)
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    },
  },
}
</script>

<style lang="scss">
.mod-router-transition {
  min-height: 100%;
  overflow: hidden;
  position: relative;
}
.router-view {
  $duration: .4s;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  &.slide-left-enter-active,
  &.slide-left-leave-active,
  &.slide-right-enter-active,
  &.slide-right-leave-active {
    opacity: 1;
    transition: transform $duration cubic-bezier(.56, 0, .1, 1), opacity $duration;
  }

  &.slide-left-enter,{
    opacity: 0;
    transform: translate(100%, 0);
  }

  &.slide-left-leave-to {
    opacity: 0;
    transform: translate(-100%, 0);
  }

  &.slide-right-enter,{
    opacity: 0;
    transform: translate(-100%, 0);
  }

  &.slide-right-leave-to {
    opacity: 0;
    transform: translate(100%, 0);
  }
}
</style>
