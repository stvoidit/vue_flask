<template>
  <div class="container">
    <div class="row jistify-content-center">
      <subtable></subtable>
    </div>
  </div>
</template>
<script>
import subtable from "./components/SubTable.vue";
export default {
  name: 'tableOne',
  components: {subtable}
}
</script>