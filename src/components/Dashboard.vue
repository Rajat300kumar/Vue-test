<template>
    <div>
      <NavBar/>
      <Table2/>
       

      </div>
</template>

<script>
import NavBar from "./NavBar.vue"
import Table2 from "./Table2.vue"
export default {
    name:'dashboard',
     components: {
    NavBar,
    Table2
  }
}
</script>

<style scoped>
h1{
    color: aqua;
}

</style>