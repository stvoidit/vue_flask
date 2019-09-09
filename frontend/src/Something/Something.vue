<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <h4>
          random Cats from
          <a href="http://aws.random.cat">aws.random.cat</a>
        </h4>
      </div>
      <div class="row">
        <div class="col s4 m3" v-for="(img, index) in images" :key="index">
          <div class="card">
            <div class="card-image">
              <img :src="img.file" />
              <span class="card-title"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
require("@/assests/materialize.min.css");
require("@/assests/materialize.min");
import Axios from "axios";

export default {
  name: "table",
  components: {},
  data() {
    return {
      images: []
    };
  },
  created() {
    M.AutoInit();
    Axios.get("/something/get_pussy").then(
      res => (this.images = res.data)
    );
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