<template>
  <div class="main">
    <div class="main-entry">
      <div class="main-entry-inner">
        <a class="fs-btn btn-primary">
          <span>Example</span>
        </a>
        <a class="fs-btn btn-primary">
          <span>Document</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
    const a = {
      b: '1',
      c: '2',
    }

    const m = Object.create(a)

    for (const i in m) {
      console.log(i)
    }
    return {}
  },
}
</script>

<style lang="scss">
.main {
  background-color: #f1f1f1;
  height: 100%;
}
.main-entry {
  padding-top: 100px;
}

.main-entry-inner {
  padding-left: 20px;
  padding-right: 20px;
  // justify-content: space-between;
  > .fs-btn:not(:last-child) {
    margin-bottom: 20px;
  }
}

.main-link {
  color: rgb(1, 146, 98);
  font-size: 16px;
  line-height: 36px;
  display: block;
  text-decoration: none;
}

.fs-btn {
  display: block;
  text-align: center;
  padding: 8px 20px;
  background-color: #ffffff;
  border-radius: 4px;
  outline: 0 none;
}
</style>
