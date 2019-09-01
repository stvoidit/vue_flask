<template>
  <div>
    <div class="container">
        <h3>{{Title}}</h3>
      <table class="table">
        <thead>
          <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="td in TableData" :key="td.id">
            <td scope="row">{{td.id}}</td>
            <td>{{td.name}}</td>
            <td>{{td.money}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      TableData: [
        { id: 1, name: "Max", money: 100 },
        { id: 2, name: "Alex", money: 50 }
      ],
      Title: "Some Table"
    };
  }
};
</script>