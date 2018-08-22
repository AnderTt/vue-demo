<template>
  <ul>
    <li>ID: {{$route.params.id}}</li>
    <li>Title: {{messageDetail.title}}</li>
    <li>Content: {{messageDetail.content}}</li>
  </ul>
</template>
<script>
  const allMessages = [
    {id : 1 , title : 'message001', content : 'message.....'},
    {id : 3 , title : 'message003', content : 'message.....'},
    {id : 5 , title : 'message005', content : 'message.....'},
    {id : 7 , title : 'message007', content : 'message.....'},
  ]
  export default {
    data(){
      return {
        messageDetail : {}
      }
    },
    /*
    mounted什么执行? 只在初始化显示时执行一次
    路由组件对象什么时候才创建? 当前请求路由组件对应的path
    路由组件对象什么时候死亡? 当前路由被切换另一个路由去了
    当切换路由时, 只是参数变化了, 而路径没有变, 路由组件对象不会重新创建, mounted()不会重新执行
    $route当前路由组件
     */
    mounted(){
      this.showDetail(this.$route)
    },
    watch : {
      $route(val){//val为新的$route
        this.showDetail(val)
      }
    },
    methods : {
      showDetail(route){
        const id = route.params.id *1;
        this.messageDetail = allMessages.find(message=>id===message.id)
      }
    }
  }
</script>
<style scoped>
</style>
