<template>
<div id="app">
  <Header></Header>
  <body>
    <div class="container justify-content-center">
      <h1>i am table</h1>
      <Navigate></Navigate>
    </div>
    <tt></tt>
  </body>
</div>
</template>

<script>
import Header from "@/Header/Header.vue";
import Navigate from "@/Header/Navigate.vue";
import tt from "./components/ComeTable"
export default {
  name: "table",
  components: { Header, Navigate, tt }
};
</script>