<template>
    <b-container>
       <table :fields="fields">
          <thead>
            <tr>
              <td>UsserID</td>
              <td>ID</td>
              <td>Tittle</td>
              <td>Body</td>
            </tr>
          </thead>
        <tbody>
      <tr v-for="List in ListData" :key="List.id">
        <td>{{List.userId}}</td>
        <td>{{List.id}}</td>
        <td>{{List.title}}</td>
        <td>{{List.body}}</td>
      </tr>
    </tbody>
  </table>

    </b-container>
</template>

<script>
import axios from "axios";
export default {
    name:'Table',
    
    data() {
    return {
      fields: [
          {
            key: 'userid',
            sortable: false
          },
          {
            key: 'id',
            sortable: true
          },
          {
            key: 'title',
            sortable: true,
          },
          {
            key: 'body',
            sortable: false,
          }
        ],
      ListData: []
    };
  },
  // methods: {
    mounted() {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => (this.ListData = response.data));
        // console.log(ListData);
    }

}
</script>

<style scoped>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  cursor: pointer;
  padding: 8px;
  min-width: 30px;
}
table th:hover {
        background: #717699;
      }
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

table {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  cursor: pointer;
  padding: 8px;
  min-width: 30px;
}
table th:hover {
        background: #717699;
      }
table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}

</style>