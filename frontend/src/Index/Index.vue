<template>
<div>
  <Header></Header>
  <body>
    <div class="container justify-content-center">
      <h1>Index page</h1>
      <Navigate></Navigate>
      <p>dqwedwqed</p>
      <nav>
        <router-link class="nav-link" :to="{name: 'about'}">Aboud</router-link>
        <router-link class="nav-link" :to="{name: 'sometable'}">Table One</router-link>
        <router-view></router-view>
      </nav>
      <div id="app"></div>
    </div>
  </body>
</div>
</template>

<script>
import Header from "@/Header/Header.vue";
import Navigate from "@/Header/Navigate.vue";

export default {
  name: "index",
  components: { Header, Navigate }
};
</script>