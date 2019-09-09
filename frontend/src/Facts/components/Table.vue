<template>
  <table class="table highlight">
    <thead>
      <tr>
        <th>Facts!</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(fact, index) in somedata" :key="index">
        <td>{{fact.fact}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "table",
  props: ["somedata"]
};
</script>
