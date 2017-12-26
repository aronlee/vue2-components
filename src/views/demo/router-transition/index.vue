<template>
  <div>
    <div class="fs-tabs">
      <div class="fs-tabs-items" v-for="(item, index) in menus">{{item}}</div>
    </div>
    <router-transition></router-transition>
  </div>
</template>

<script>
import RouterTransition	from '../../components/router-transition'
export default {
  name: 'demo-router-transition',
  components: {
    [RouterTransition.name]: RouterTransition,
  },
  data() {
    return {
      menus: ['menu1', 'menu2', 'menu3', 'menu4'],
    }
  },
}
</script>

<style lang="scss">

</style>
