<template>
  <div :class="{
    [`${prefixCls}-router-transition`]: true
  }">

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

    }
  },
}
</script>

<style>

</style>
