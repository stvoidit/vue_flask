<template>
  <div id="app">
    <div class="container">
      <div class="row center">
        <h4>
          random Facts!
          <a href="https://some-random-api.ml/">some-random-api.ml</a>
        </h4>
        <Preloader v-if="!facts.cats.length && !facts.foxs.length"></Preloader>
      </div>
      <div class="row" v-if="facts.cats.length && facts.foxs.length">
        <div class="col s6">
          <Table :somedata="facts.cats"></Table>
        </div>
        <div class="col s6">
          <Table :somedata="facts.foxs"></Table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("@/assests/materialize.min.css");
require("@/assests/materialize.min");
import Preloader from "./components/Preloader.vue";
import Table from "./components/Table.vue";
import Axios from "axios";

export default {
  name: "table",
  components: { Preloader, Table },
  data() {
    return {
      facts: { cats: [], foxs: [] }
    };
  },
  created() {
    Axios.get("/facts/getFacts").then(res => {
      this.facts.cats = res.data.cat;
      this.facts.foxs = res.data.fox;
    });
  },

  computed: {},
  methods: {},
  watch: {}
};
</script>
<style>
h4 {
  background-color: #ef5350;
  padding: 5px;
}
</style>