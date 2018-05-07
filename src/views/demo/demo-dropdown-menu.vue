<template>
  <div class="demo-dropdown-menu">
    <div>demo-dropdown-menu</div>
    <div class="box-wrap">
      <div class="box-inner">
        <dropdown-menu
          v-model="show"
          :menu-list="menuList"
          :width="288"
          @select="handleSelect"
        >
          <div class="select" @click="handleDrop">
            <span class="placeholder">请输入小区</span>
            <span class="ipt-val"></span>
          </div>
        </dropdown-menu>
      </div>
    </div>
    <div class="flex box-wrap">
      <div class="flex-1 select-wrap">
        <dropdown-menu
          v-model="show1"
          :menu-list="menuList"
          :width="150"
          @select="handleSelect"
        >
          <div class="select" @click="show1 = true">
            <span class="placeholder">请输入楼号</span>
            <span class="ipt-val"></span>
          </div>
        </dropdown-menu>
      </div>
      <div class="flex-1 select-wrap">
        <dropdown-menu
          v-model="show2"
          :menu-list="menuList"
          :width="150"
          @select="handleSelect"
        >
          <div class="select" @click="show2 = true">
            <span class="placeholder">请输入单元</span>
            <span class="ipt-val"></span>
          </div>
        </dropdown-menu>
      </div>
      <div class="flex-1 select-wrap">
        <dropdown-menu
          v-model="show3"
          :menu-list="menuList"
          :width="150"
          @select="handleSelect"
        >
          <div class="select" @click="show3 = true">
            <span class="placeholder">请输入室号</span>
            <span class="ipt-val"></span>
          </div>
        </dropdown-menu>
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '../components/dropdown-menu'
export default {
  name: 'demo-dropdown-menu',
  components: {
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      menuList: [
        { id: 1, label: '长寿苑' },
        { id: 2, label: '长寿花园' },
        { id: 3, label: '长寿路999弄' },
        { id: 4, label: '长寿路792弄小区' },
        { id: 5, label: '长寿达安花园' },
        { id: 6, label: '长寿路100弄' },
        { id: 7, label: '长寿园' },
        { id: 8, label: '长寿路805弄小区' },
      ],
      // menuList: 1111,
    }
  },
  methods: {
    handleDrop() {
      this.show = true
    },
    handleSelect(menu) {
      console.log(menu)
    },
  },
}
</script>

<style lang="scss">
.demo-dropdown-menu {
  padding-top: 16px;

  .box-wrap {
    padding-top: 32px;
  }

  .box-inner {
    background-color: #ffffff;
    border-style: solid;
    border-color: #efefef;
    border-width: 1px 0 1px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .select {
    line-height: 48px;
    height: 48px;
    font-size: 16px;
    padding-left: 16px;
    padding-right: 16px;

    .placeholder {
      color: #999999;
    }
  }

  .select-wrap {
    background-color: #ffffff;
  }
}
</style>
