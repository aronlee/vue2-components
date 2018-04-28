<template>
  <span></span>
</template>

<script>
import Vue from 'vue'
import DropdownMenu from './dropdown-menu.vue'

export default {
  name: 'dropdown-menu-wrap',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    aa: {},
    bb: {},
  },
  data() {
    const container = document.createElement('div')
    const DropdownMenuConstructor = Vue.extend(DropdownMenu)
    const instance = new DropdownMenuConstructor().$mount(container)
    return {
      dropdownMenu: instance,
    }
  },
  mounted() {
    if (this.visible) {
      document.body.appendChild(this.dropdownMenu.$el)
    }
  },
  watch: {
    visible(val) {
      const elem = this.dropdownMenu.$el
      if (val === !0) {
        document.body.appendChild(elem)
      } else {
        elem.parentNode && elem.parentNode.removeChild(elem)
      }
    },
  },
}
</script>

<style lang="scss">

</style>
