<template>
  <div class="verify-async-function">
    <div>
      <button @click="click">{{renderBtn(11111111)}}</button>
    </div>
    <!-- <iframe src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=113.77.48.244" frameborder="0"></iframe> -->
  </div>
</template>

<script>
export default {
  name: 'verify-async-function',
  mounted() {
    this.operation().then(res => {
      console.log('suc', res)
    }).catch(err => {
      console.error('err', err)
    })
    // console.log('mounted')
  },
  methods: {
    click() {
      this.$root.reload()
    },
    renderBtn() {
      return '2222222'
    },
    func1() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('finished step 1.')
        }, 2000)
      })
    },
    func2() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('finished step 2.')
          // reject('step 2 error !')
        }, 2000)
      })
    },
    func3() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('finished step 3.')
        }, 2000)
      })
    },
    func4(index) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          index !== 6 ? resolve(`finished step ${index}.`) : reject(`step ${index} error !`)
        }, 2000)
      })
    },
    async operation() {
      const one = await this.func1()
      console.log('one:', one)
      const two = await this.func2()
      console.log('two:', two)
      const three = await this.func3()
      console.log('three:', three)

      for (let i = 4; i < 8; i++) {
        const res = await this.func4(i)
        console.log('step:', res)
      }
    },
  },
}
</script>

<style lang="scss">

</style>
