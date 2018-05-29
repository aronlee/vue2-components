<template>
  <div class="verify">
    <div v-if="$route.name === 'verify'" class="verify-title">
      <div class="title">verify all</div>
      <router-link class="verify-link" :to="{name: 'verify-async-function'}">verify-async-function</router-link>
      <router-link class="verify-link" :to="{name: 'verify-prev-route-step1'}">verify-prev-route-step1</router-link>
      <router-link class="verify-link" :to="{name: 'verify-bugs-of-cell'}">verify-bugs-of-cell</router-link>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'verify',
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
.verify {
  height: 100%;
  background-color: $bgc;
  .title {
    text-align: center;
    font-size: 20px;
    line-height: 44px;
    font-weight: 700;
  }
}
.verify-link {
  text-decoration: none;
  font-size: 16px;
  line-height: 36px;
  display: block;
  color: $orange;
  padding: 0 16px;
}
</style>

