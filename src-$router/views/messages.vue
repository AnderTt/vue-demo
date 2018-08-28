<template>
  <div>
    <ul>
      <li v-for="(message,index) in messages" :key="index">
        <router-link :to="`/home/messages/detail/${message.id}`"> {{message.title}}</router-link>
        &nbsp;&nbsp;<button @click="pushShow(message.id)">push查看</button>
        &nbsp;&nbsp;<button @click="replaceShow(message.id)">replace查看</button>
      </li>
    </ul>
    <router-view />
    <button @click="backShow">返回</button>
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
    },
    methods : {
      pushShow(id){
        /*this.$router.*/
        console.log(this);
        this.$router.push('/home/messages/detail/'+id)
      },
      replaceShow(id){
        this.$router.replace('/home/messages/detail/'+id)
      },
      backShow(){
        this.$router.back();
      }
    },
  }
</script>
<style scoped>
</style>
