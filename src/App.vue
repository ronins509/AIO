<template>
  <div id="app">
    <!-- <login></login> -->
    <Home></Home>
  </div>
</template>
<script>
// import login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
export default {
  name:'App',
  components:{
    // login,
    Home
  }
}
</script>
<style lang="less">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   color: #2c3e50;
//   width: 100%;
//   height: 100%;
// }
// @import url(~@/assets/css/menu.less);
</style>
