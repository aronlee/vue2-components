<template>
  <div class="demo-limitinput">
    <h1 class="demo-limitinput-title">limit input</h1>
    <div class="demo-limitinput-content">
      <div class="demo-limitinput-row">
        <div class="demo-limitinput-row-top">
          <span class="des">1,type="text"</span>
          <span class="model-value"></span>
        </div>
        <div class="ipt-wrap">
          <input v-limitinput class="ipt" type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import limitinput from '../../directives/limitinput'
export default {
  name: 'limit-input',
  directives: {
    limitinput,
  },
}
</script>

<style lang="scss">
// .demo-limitinput {
//   .display-input {}
// }
.demo-limitinput-title {
  margin: 0;
  padding: 10px 16px;
}
.demo-limitinput-row {

  padding-left: 16px;
  padding-right: 16px;

  .des {
    margin-right: 16px;
  }

  .ipt {
    flex: 1;
    height: 32px;
    line-height: 32px;
    border: 1px solid #bdbdbd;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;
    font-size: 16px;
  }

  .ipt-wrap {
    display: flex;
    align-items: center;
  }

  .model-value {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
