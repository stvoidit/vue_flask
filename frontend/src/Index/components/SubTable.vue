<template>
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
</template>
<script>
import axios from "axios";
export default {
  name: "subtable",
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