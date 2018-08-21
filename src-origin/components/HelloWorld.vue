<template>
  <div>
    <h2>{{msg}}</h2>
  </div>
</template>
<script>
  export default {
    name : "HelloWorld",
    data () {
      return {
        msg : "这是第一个vue组件",
      }
    }
  }
</script>
<style scoped>
  h2{
    color: #000;
    background-color: #ffa71e;
    line-height: 60px;
    text-align: center;
  }
</style>
