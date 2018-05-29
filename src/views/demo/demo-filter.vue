<template>
  <div class="demo-filter">
    <fs-filter
      :conf="filterConfData"
      :selected="queryObj"
      @on-filter="handleFilter"
    />
  </div>
</template>

<script>
import Filter from '../components/filter'
export default {
  name: 'demo-filter',
  components: {
    [Filter.name]: Filter,
  },
  data() {
    const { query } = this.$route
    return {
      filterConfData: this.filterConf,
      queryObj: query,
    }
  },
  methods: {
    handleFilter() {

    },
  },
}
</script>
