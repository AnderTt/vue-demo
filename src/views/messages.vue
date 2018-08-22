<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="index">
        <router-link :to="`/home/messages/detail/${message.id}`"> {{message.title}}</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>
<script>
  export default {
    data(){
      return {
        messages : [],
      }
    },
    mounted(){
      setTimeout(()=>{
        const messages = [
          {id : 1 , title : 'message001', content : 'message.....'},
          {id : 3 , title : 'message003', content : 'message.....'},
          {id : 5 , title : 'message005', content : 'message.....'},
          {id : 7 , title : 'message007', content : 'message.....'},
        ];
        this.messages = messages;
      },1000)
    }
  }
</script>
<style scoped>
</style>
