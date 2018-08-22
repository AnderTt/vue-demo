<template>
  <div>
    <h2 v-if="isShow">{{msg}}</h2>
    <p v-else> most star repo is <a :href="url">{{name}}</a></p>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        isShow : true,
        msg : '',
        name : '',
        url : ''
      }
    },
    mounted(){
      this.msg = 'loading.....';
      //发送Ajax请求
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars';
      this.$http.get(url)
        .then((response)=>{
          this.isShow = false;
          const result = response.data;
          this.name = result.items[0].name ;
          this.url = result.items[0].html_url ;
        },(error)=>{
          this.isShow = true;
          this.msg = '请求失败！！！';
        })
    }
  }
</script>
<style scoped>
</style>
