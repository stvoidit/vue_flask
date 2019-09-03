<template>
<div>
  <Header></Header>
  <body>
    <div class="container justify-content-center">
      <h1>Index page</h1>
      <!-- <Navigate></Navigate> -->
      <div class="container">
        <div class="input-field col s12" ref="myInput">
          <select>
            <option value disabled selected>Choose your option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Materialize Select</label>
        </div>
      </div>
      <br>
      <br>
      <br>
      <p>dqwedwqed</p>
      <nav class="nav">
        <router-link class="nav-link" :to="{name: 'about'}">Aboud</router-link>
        <router-link class="nav-link" :to="{name: 'sometable'}">Table One</router-link>
      </nav>
      <br>
      <br>
      <router-view></router-view>
      <div id="app"></div>
    </div>
  </body>
</div>
</template>

<script>
import Header from "@/Header/Header.vue";
import Navigate from "@/Header/Navigate.vue";
import "@/assests/materialize.min.css";
require("@/assests/materialize.min");

export default {
  name: "index",
  components: { Header, Navigate },
  mounted() {
    M.AutoInit()
  }
};
</script>
