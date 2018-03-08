<template>
  <div class="demo">
    <div v-if="$route.name === 'demo'" class="demo-title">
      <div class="title">demo all</div>
      <router-link class="demo-link" :to="{name: 'demo-filter'}">fs-filter</router-link>
      <router-link class="demo-link" :to="{name: 'demo-router-transition'}">fs-router-transition</router-link>
      <router-link class="demo-link" :to="{name: 'demo-limit-input'}">fs-limit-input</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo',
  data() {
    return {
      direction: 'router-in',
    }
  },
}
</script>

<style lang="scss">
$orange: #ff6600;
.demo {
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

