<template>
  <div class="verify-prev-route-step2">
    <div class="flex btn-wrap">
      <button class="flex-1 btn-next" @click="handleBack">回到上一页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'verify-prev-route-step2',
  data() {
    return {
      prevInstance: {},
    }
  },
  methods: {
    handleBack() {
      console.log('handleBack')
      try {
        this.prevInstance.temp.someProps.a = '我把a的值改成傻逼了，哈哈哈'
      } catch (error) {
        console.warn('这里我修改上一个页面的值失败了！')
      }
      this.$router.back()
    },
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const { name, meta } = from
      if (name === 'verify-prev-route-step1') {
        vm.prevInstance = meta.instance
      }
    })
  },
}
</script>

<style lang="scss">
$orange: #ff6600;
$bgc: #f2f2f2;
.verify-prev-route-step2 {
  min-height: 100%;
  background-color: $bgc;

  .btn-wrap {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    border-top: 1px solid #dddddd;
  }

  .btn-next {
    background-color: $orange;
    line-height: 48px;
    height: 48px;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    border-radius: 4px;

    &:active {
      background-color: $orange*.8;
    }
  }
}

</style>
