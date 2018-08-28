<template>
  <ul>

    <li v-for="(news,index) in newsList" :key="index">{{news}}</li>
  </ul>
</template>
<script>
  export default {
    data (){
      return {
        newsList : ['News001','News003','News005','News007']
      }
    }
  }
</script>
<style scoped>
</style>
