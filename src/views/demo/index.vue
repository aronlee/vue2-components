<template>
  <div class="demo">
    <div v-if="$route.name === 'demo'" class="demo-title">
      <div class="title">demo all</div>
      <router-link class="demo-link" :to="{name: 'demo-scroll-load'}">ScrollLoad</router-link>
      <!-- <router-link class="demo-link" :to="{name: 'demo-filter'}">Filter</router-link> -->
      <router-link class="demo-link" :to="{name: 'demo-router-transition'}">RouterTransition</router-link>
      <router-link class="demo-link" :to="{name: 'demo-limit-input'}">LimitInput</router-link>
      <router-link class="demo-link" :to="{name: 'demo-dropdown-menu'}">DropdownMenu</router-link>
    </div>
    <router-transition class="">
      <template slot-scope="slotProps">
        <router-view :class="slotProps.routerCls"></router-view>
      </template>
    </router-transition>
  </div>
</template>

<script>
import RouterTransition from '../components/router-transition'
export default {
  name: 'demo',
  components: {
    [RouterTransition.name]: RouterTransition,
  },
  data() {
    return {
      direction: 'router-in',
    }
  },
}
</script>

<style lang="scss">
$orange: #ff6600;
$bgc: #f2f2f2;
.demo {
  height: 100%;
  background-color: $bgc;
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 44px;
    font-weight: 700;
  }
}
.demo-link {
  text-decoration: none;
  font-size: 16px;
  line-height: 36px;
  display: block;
  // border-bottom: 1px solid #757575;
  // background-color: rgb(255, 102, 0);
  color: $orange;
  padding: 0 16px;
}
</style>

