/*
 * @Author: aronlee
 * @Date: 2018-04-10 15:41:52
 * @Last Modified by: aronlee
 * @Last Modified time: 2018-05-25 19:03:33
 * @desc 列表筛选
 */

<template>
  <div class="mod-filter">
    <div
      :class="['filter-menu', 'flex', {
        'no-slided': !slided,
      }]"
    >
      <div
        :class="['menu-item', 'flex', 'flex-1', 'center-v', 'center-h', {
          'active': active === index + 1,
          'slided':  slided,
        }]"
        v-for="(item, index) in conf"
        :key="index"
        @click="handleSlide(item, index)"
      >
        <span>{{item.name}}</span>
        <i class="iconfont if-dropdown_arrow"></i>
      </div>
    </div>
    <transition name="slidefilter">
      <div class="filter-slide" v-show="slided">
        <keep-alive>
          <component
            v-if="showComponent"
            :is="activeMenu.component"
            :areas="activeMenu.children"
            :list-type="listType"
          ></component>
        </keep-alive>
        <div v-if="!showComponent && showSlideItem" class="filter-slide-inner">
          <div
            :class="['filter-slide-item flex between', {
              'active': filterObj[activeMenu.field] === item.value
            }]"
            v-for="(item, index) in activeMenu.children"
            @click="handleSelect(item)"
          >
            <span>{{item.name}}</span>
            <span class="tips">{{item.tips}}</span>
          </div>
        </div>
        <div class="filter-mask" @click="active = 0"></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FsFilter',
  props: {
    conf: Array,
    listType: String,
    selected: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    slided() {
      return this.active > 0 && this.active <= this.conf.length
    },
    showComponent() {
      const { component } = this.activeMenu || {}
      return typeof component === 'object' && Object.keys(component).length
    },
    showSlideItem() {
      const { children } = this.activeMenu || {}
      return children && children.length > 0
    },
  },
  data() {
    const filter = this.conf.length ? this.conf.map(i => i.field).reduce((total, cur) => {
      total[cur] = this.selected[cur]
      return total
    }, {}) : {}
    return {
      active: 0,
      filterObj: filter,
      activeMenu: null,
    }
  },
  methods: {
    handleSlide(menu, index) {
      if (!this.active || this.active !== index + 1) {
        this.active = index + 1
        this.activeMenu = menu
      } else {
        this.active = 0
      }
    },
    startFilter(obj) {
      this.active = 0
      this.filterObj = Object.assign({}, this.filterObj, obj)
      this.$emit('on-filter', obj)
    },
    handleSelect(obj) {
      const { value } = obj
      const field = this.activeMenu.field || '_noField'
      this.activeMenu.value = value
      this.startFilter(this.activeMenu.returnObj ? obj : { [field]: value })
    },
  },

  mounted() {
    // document.addEventListener('touchmove', e => this.active !== 0 && e.preventDefault())
  },
}
</script>

<style lang="scss">
@import "../../../style/variables.scss";
@import "../../../style/functions.scss";
$duration: 0.2s;
$primeryColor: #003d87;

.mod-filter {
  height: 40px;

  .mod-area-filter {
    max-height: 276px;
  }

  .filter-menu {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2030;

    &.no-slided {
      box-shadow: 0 1px 0 0 #f1f5f8;
      background-color: #ffffff;
    }
  }

  .menu-item {
    position: relative;
    height: 40px;
    font-size: 14px;
    text-align: center;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-clip: border-box;

    &.slided {
      background-image: url(./assets/slided.svg);
    }

    &.active {
      color: $primeryColor;
      background-image: url(./assets/actived.svg);

      &:after {
        display: block;
      }

      .if-dropdown_arrow {
        transform: rotate(180deg);
      }
    }
  }

  .if-dropdown_arrow {
    font-size: 12px;
    margin-left: 1px;
    transition: transform $duration;
  }

  .filter-slide-item {
    height: 48px;
    line-height: 48px;
    padding: 0 16px;

    &.active {
      color: $primeryColor;
    }

    &:not(:first-child) {
      @include border(top, rgb(220, 218, 218), content-box);
    }
  }

  .filter-slide-inner {
    @include border(bottom, rgb(220, 218, 218), border-box);
    background-color: #ffffff;
    max-height: 270px;
    overflow-y: auto;
  }

  .filter-slide {
    position: absolute;
    top: 34px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2020;
    overflow: hidden;

    &.slidefilter-enter-active,
    &.slidefilter-leave-active {
      transition: opacity $duration;

      .filter-slide-inner,
      .mod-area-filter {
        transition: transform $duration ease-out;
      }
    }

    &.slidefilter-enter,
    &.slidefilter-leave-to {
      opacity: 0;

      .filter-slide-inner,
      .mod-area-filter {
        transform: translate3d(0, -100%, 0);
      }
    }
  }

  .filter-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(33, 33, 33, 0.4);
    z-index: -1;
  }

  .area-filter-col {
    .area-filter-item {
      &:first-child {
        height: 51px;
        padding-top: 6px;
      }
    }
  }

  .tips {
    color: #bdbdbd;
  }
}
</style>
