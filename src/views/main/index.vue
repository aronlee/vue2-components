<template>
  <div class="main">
    <div class="main-entry">
      <div class="main-entry-inner">
        <router-link class="fs-btn btn-primary" :to="{name: 'demo'}">
          <span>Example</span>
        </router-link>
        <!-- <router-link class="fs-btn btn-primary" :to="{name: 'doc'}">
          <span>Document</span>
        </router-link> -->
        <router-link class="fs-btn btn-primary" :to="{name: 'verify'}">
          <span>Verify</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data() {
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
