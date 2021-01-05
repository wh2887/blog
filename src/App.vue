<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script lang="js">
import Nav from '@/components/Nav.vue'

export default {
  components: {Nav}
}
</script>

<style lang="scss">
@import "~@/assets/styles/helper.scss";
@import "assets/styles/reset";

#app {
  background: #0D1117;
  font-family: $font-hei;
  font-size: 14px;
  height: 100%;
  color: $color;
  display: flex;
  flex-direction: column;
}

</style>
