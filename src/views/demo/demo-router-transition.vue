<template>
  <div class="flex-column demo-router-transition">
    <fs-header class="flex-none header" title="RouterTransition"/>
    <div class="flex-none flex router-link-wrap">
      <a class="flex-1 text-center router-link" @click="handleReplace">replace</a>
      <router-link class="flex-1 text-center router-link" :to="{name: 'demo-router-transition-page-1'}">page-1</router-link>
      <router-link class="flex-1 text-center router-link" :to="{name: 'demo-router-transition-page-2'}">page-2</router-link>
      <router-link class="flex-1 text-center router-link" :to="{name: 'demo-router-transition-page-3'}">page-3</router-link>
      <router-link class="flex-1 text-center router-link" :to="{name: 'demo-router-transition-page-4'}">page-4</router-link>
      <router-link class="flex-1 text-center router-link" :to="{name: 'demo-router-transition-page-5'}">page-5</router-link>
    </div>
    <router-transition>
      <template slot-scope="slotProps">
        <router-view :class="['flex-1', slotProps.routerCls]"></router-view>
      </template>
    </router-transition>
  </div>
</template>

<script>
import RouterTransition	from '../components/router-transition'
import Header from '../components/header'
export default {
  name: 'demo-router-transition',
  components: {
    [RouterTransition.name]: RouterTransition,
    [Header.name]: Header,
  },
  methods: {
    handleReplace() {
      console.log('handleReplace')
      this.$router.replace({ name: 'demo-router-transition-page-4' })
    },
  },
  data() {
    return {
      menus: ['menu1', 'menu2', 'menu3', 'menu4'],
    }
  },
}
</script>

<style lang="scss">
.demo-router-transition {
  min-height: 100%;
}
.router-link-wrap {
  display: flex;
  background-color: #ffffff;

  .router-link {
    line-height: 32px;
    text-decoration: none;
    color: #666666;

    &:not(:last-child) {
      border-right: 1px solid #f1f1f1;
    }
  }
}
</style>
