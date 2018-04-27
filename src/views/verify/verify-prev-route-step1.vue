<template>
  <div class="verify-prev-route-step1">
    <div>verify-prev-route-step1</div>
    <div>
      <div class="desc">{{temp.desc}}</div>
      <div class="some-props">
        <div class="a">a: {{temp.someProps.a}}</div>
        <div class="b">b: {{temp.someProps.b}}</div>
        <div class="c">c: {{temp.someProps.c}}</div>
      </div>
    </div>
    <div class="flex btn-wrap">
      <button class="flex-1 btn-next" @click="handleNext">下一页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'verify-prev-route-step1',
  data() {
    return {
      temp: {
        desc: '这个例子测试下前一个页面如何把实例传递给下一个页面，然后在下一个页面操作上一个页面的实例，在使用keep-live的时候可能会用到',
        someProps: {
          a: 'this is a',
          b: 'this is b',
          c: 'this is c',
        },
      },
    }
  },
  mounted() {
    this.$route.meta.instance = this
    console.log('mounted')
  },
  methods: {
    handleNext() {
      this.$router.push({
        name: 'verify-prev-route-step2',
      })
    },
  },
}
</script>

<style lang="scss">
$orange: #ff6600;
$bgc: #f2f2f2;
.verify-prev-route-step1 {
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
