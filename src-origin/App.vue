<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <HelloWorld />
    <HelloWorld />
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue';
  export default {
    components: {
      HelloWorld
    }
  }
</script>
<style scoped>
  img{
    width: 300px;
    height: 300px;
  }
</style>
