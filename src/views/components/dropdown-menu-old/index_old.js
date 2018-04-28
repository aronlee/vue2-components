import Vue from 'vue'
import DropdownMenu from './dropdown-menu'

// const

const DropdownMenuWrap = new Vue({
  name: 'dropdown-menu-wrap',
  template: '<dropdown-menu></dropdown-menu>',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    aa: {},
    bb: {},
  },
  components: {
    'dropdown-menu': DropdownMenu,
  },
  data() {
    return {}
  },
})

export default DropdownMenuWrap
