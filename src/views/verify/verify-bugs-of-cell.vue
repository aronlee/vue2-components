<template>
  <div class="verify-bugs-of-cell">
    <fs-cell v-for="(select, index) in selectList" :key="index" :title="select.title">
      <input type="text" :placeholder="select.placeholder" v-model="select.iptVal" />
      <span>{{select.iptVal}}</span>
    </fs-cell>
  </div>
</template>

<script>
import Cell from '../components/cell'

const selectList = [
  {
    title: '测试1',
    iptVal: '',
    placeholder: '请输入名称',
  },
  {
    title: '测试2',
    iptVal: '',
    placeholder: '请输入测试2',
  },
  {
    title: '测试3',
    iptVal: '',
    placeholder: '请输入测试3',
  },
  {
    title: '测试4',
    iptVal: '',
    placeholder: '请输入测试4',
  },
]

export default {
  name: 'verify-bugs-of-cell',
  components: {
    'fs-cell': Cell,
  },
  data() {
    return {
      selectList: selectList,
    }
  },
}
</script>

<style lang="scss">
.verify-bugs-of-cell {

}
</style>
