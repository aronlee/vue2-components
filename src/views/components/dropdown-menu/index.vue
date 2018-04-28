<template>
  <div class="mod-dropdown-menu">
    <slot></slot>
    <transition name="dropdown-fade">
      <div class="dropdown-menu-pop" v-if="show" v-clickoutside="clickOutside" :style="styles">
        <div class="baffle top"></div>
        <div class="baffle bot"></div>
        <div class="dropdown-menu-inner">
          <div class="list-wrap">
            <div
              class="menu-item"
              v-for="(menu, index) in menuList"
              :key="menu[keyName]"
              @click="handleSelect(menu)"
            >
              <div class="menu-item-inner">{{menu.label}}</div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

function menuListValidate(menuList) {
  for (let i = 0; i < menuList.length; i++) {
    const menu = menuList[i]
    const keys = Object.keys(menu)
    if (keys.indexOf('label') > -1 && ['string', 'number'].indexOf(typeof menu['label']) > -1) {
      continue
    }
    return false
  }
  return true
}

export default {
  name: 'dropdown-menu',
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 288,
    },
    // 唯一标识符的字段名
    keyName: {
      type: String,
      default: 'id',
    },
    menuList: {
      type: Array,
      default: () => [],
      validator: menuListValidate,
    },
    placement: {
      type: String,
      validator: (p) => ['left', 'right', 'center'].indexOf(p) > -1,
      default: 'left',
    },
  },
  directives: {
    clickoutside: {
      bind(el, binding) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            return false
          }
          if (binding.expression) {
            binding.value(e)
          }
        }
        el.__clickOutside__ = documentHandler
        document.addEventListener('click', documentHandler)
      },
      unbind(el, binding) {
        document.removeEventListener('click', el.__clickOutside__)
        delete el.__clickOutside__
      },
    },
  },
  computed: {
    styles() {
      const { width, left, top } = this
      return {
        width: `${width}px`,
        left: `${left}px`,
        top: `${top}px`,
      }
    },
  },
  data() {
    return {
      show: this.visible,
      left: 0,
      top: 0,
    }
  },
  methods: {
    handleSelect(menu) {
      this.$emit('select', menu)
    },
    clickOutside() {
      this.show = false
      this.$emit('input', this.show)
    },
    calculateStyle() {
      const el = this.$el
      const parent = el.parentNode
      const parentSt = getComputedStyle(parent)
      const parentPL = parseFloat(parentSt.paddingLeft)
      const parentPR = parseFloat(parentSt.paddingRight)
      // const parentPT = parseFloat(parentSt.paddingTop)
      // const parentPB = parseFloat(parentSt.paddingBottom)
      const parentHeight = parseFloat(parentSt.height)
      const bodyWidth = document.body.clientWidth
      console.log(parentPL, parentPR)
      // const documentOffset = document.offset
      console.log(bodyWidth)
      console.log(parentSt.height)
      // 如果父元素不是'absolute', 'fixed', 'relative'中一个，设置style为
      if (['absolute', 'fixed', 'relative'].indexOf(parentSt.position) < 0) {
        parent.style.position = 'relative'
      }
      this.top =
        parseFloat(parentSt.borderTopWidth) +
        parseFloat(parentSt.borderBottomWidth) +
        parseFloat(parentSt.paddingTop) +
        parseFloat(parentSt.paddingBottom) +
        parentHeight
      this.left = Math.max(16, parentPL)
    },
  },
  watch: {
    value(val) {
      this.show = val
      if (val) {
        this.$nextTick(this.calculateStyle)
      }
    },
  },
}
</script>

<style lang="scss">
$radius: 4px;
.mod-dropdown-menu {
  position: relative;

  .dropdown-menu-pop {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    border-radius: $radius;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, .26);
    max-height: 230px;
    z-index: 2000;
  }

  .dropdown-menu-inner {
    max-height: 230px;
    overflow-y: auto;
  }

  .menu-item {
    line-height: 48px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;

    &:not(:last-child) {
      .menu-item-inner {
        border-bottom: 1px solid #efefef;
      }
    }
  }

  .baffle {
    position: absolute;
    z-index: 100;
    left: 0;
    height: 12px;
    width: 100%;

    &.top {
      top: 0;
      border-radius: $radius $radius 0 0;
      background: linear-gradient(#ffffff, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, .1));
    }

    &.bot {
      bottom: 0;
      border-radius: 0 0 $radius $radius;
      background: linear-gradient(0deg, #ffffff, rgba(255, 255, 255, 1) 80%, rgba(255, 255, 255, .1));
    }
  }
}
</style>
