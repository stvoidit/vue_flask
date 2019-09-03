<template>
<div id="app">
  <body>
    <div class="container justify-content-center">
      <h1>i am table</h1>
      <Navigate></Navigate>
    </div>
    <div class="container">
      <input type="text" placeholder="your choise" :value="userChoise"/>
      <div class="input-field col s12" ref="myInput">
        <select @change="selectChoise">
          <option value disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
    </div>
    <br />
    <br />
    <customeTable></customeTable>
  </body>
</div>
</template>

<script>
import Header from "@/Header/Header.vue";
import Navigate from "@/Header/Navigate.vue";
import customeTable from "./components/ComeTable";
import { Printing, A } from "@/assests/mymy";
require("@/assests/materialize.min.css");
require("@/assests/materialize.min");

export default {
  name: "table",
  components: { Header, Navigate, customeTable },
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      userChoise: null
    };
  },
  computed: {},
  methods: {
    selectChoise(e) {
      this.userChoise = e.target.value
    }
  },
  watch: {}
};
</script>