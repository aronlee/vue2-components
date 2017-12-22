<template>
  <div>
    <div>demo-router-transition</div>
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
}
</script>

<style lang="scss">

</style>
