<template>
  <div class="verify-async-function"></div>
</template>

<script>
export default {
  name: 'verify-async-function',
  mounted() {
    // this.operation()

  },
  methods: {
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
          // resolve('finished step 2.')
          reject('step 2 error !')
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
    async operation() {
      const one = await this.func1()
      console.log('one:', one)
      const two = await this.func2()
      console.log('two:', two)
      const three = await this.func3()
      console.log('three:', three)
    },
  },
}
</script>

<style lang="scss">

</style>
