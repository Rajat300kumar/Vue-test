<template>
  <div id="app">
    <main>
      <Pagination
        v-if="tableData"
        :totalRecords="tableData.length"
        :perPageOptions="perPageOptions"
        v-model="pagination"
      />
      <Table3
        v-if="tableData"
        :theData="computedTableData"
        :config="config"
        :style="{height: '600px'}"
      />
    </main>
  </div>
</template>

<script>
import Table3 from './Table3'
import Pagination from './Pagination.vue'
const perPageOptions = [20, 50, 100]
export default {
    name:"Table2",
  components: {
    Table3,
    Pagination
  },
  data: function () {
    return {
      perPageOptions,
      tableData: undefined,
      pagination: { page: 1, perPage: perPageOptions[0] },
      config: [
        {
          key: 'Userid',
          title: 'Userid',
          type: 'Userid'
        },
        {
          key: 'id',
          title: 'id',
          type: 'Number',
          sortable: true
        },
        {
          key: 'title',
          title: 'title',
          type: 'text',
          sortable: true
        },
        {
          key: 'body',
          title: 'body',
          type: 'text'
        },
      ]
    }
  },
  computed: {
    computedTableData () {
      if (!this.tableData) return []
      else {
        const firstIndex = (this.pagination.page - 1) * this.pagination.perPage
        const lastIndex = this.pagination.page * this.pagination.perPage
        return this.tableData.slice(firstIndex, lastIndex)
      }
    }
  },
  mounted () {
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(({data}) => {
      this.tableData = data
    })
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  margin: 0;
}
main {
  margin:0px 30px 30px 30px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>