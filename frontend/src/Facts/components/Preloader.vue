<template>
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="gap-patch">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader"
};
</script>
<style scoped>
div .preloader-wrapper {
  margin-top: 100px;
}
</style>