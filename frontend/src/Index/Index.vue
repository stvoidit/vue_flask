<template>
<div id="app">
  <Header></Header>
  <body>
    <div class="container justify-content-center">
      <h1>Index page</h1>
      <Navigate></Navigate>
    </div>
    <div class="container">
      <table class="table table-sm table-hover">
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{task.id}}</td>
            <td>{{task.title}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</div>
</template>

<script>
import Header from "@/Header/Header.vue";
import Navigate from "@/Header/Navigate.vue";
import axios from "axios";
export default {
  name: "index",
  components: { Header, Navigate },
  data() {
    return {
      tasks: []
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => (this.tasks = res.data));
  }
};
</script>