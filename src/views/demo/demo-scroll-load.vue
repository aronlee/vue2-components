<template>
  <div class="demo-scroll-load">
    <fs-header class="header" title="ScrollLoad"/>
    <scroll-load class="scroll-load">
      <div class="list">
        <div class="list-item" v-for="item in list" :key="item.index">
          <div class="item-left">{{item.index}}</div>
          <div class="item-right">{{item.name}}</div>
        </div>
      </div>
    </scroll-load>
  </div>
</template>

<script>
import Header from '../components/header'
import ScrollLoad from '../components/scroll-load'

export default {
  name: 'demo-scroll-load',
  components: {
    [ScrollLoad.name]: ScrollLoad,
    [Header.name]: Header,
  },
  data() {
    return {
      curPage: 1,
      totalPage: 0,
      list: [],
    }
  },
  mounted() {
    this.queryList()
  },
  methods: {
    queryList(page = 1) {
      const pageSize = 20
      const data = []
      this.curPage = page
      for (let i = (page - 1) * pageSize; i < page * pageSize; i++) {
        data.push({
          index: i,
          name: `第${i + 1}个`,
        })
      }
      page === 1 ? this.list = data : this.list = this.list.concat(data)
    },
  },
}
</script>

<style lang="scss">
@import '../../style/functions.scss';
.demo-scroll-load {
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    flex: none;
  }

  .scroll-load {
    flex: 1;
    overflow-y: auto;
  }

  .list {
    background-color: #ffffff;
    @include border(top);
  }

  .list-item {
    display: flex;
    padding: 12px 16px;
    @include border(bottom, #bdbdbd, border-box);
  }

  .item-left {
    flex: none;
    margin-right: 12px;
    width: 100px;
    height: 60px;
    background-color: #ffcc66;
    text-align: center;
    line-height: 60px;
  }

  .item-right {
    flex: 1;
  }
}
</style>
