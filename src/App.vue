<template>
  <div>
    <h2>clicked : {{count}} times,count is {{oddEven}}</h2>
    &nbsp;&nbsp;<button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">incrementIfOdd</button>
    <button @click="incrementAsync">incrementAsync</button>
  </div>
</template>
<script>
  export default {
    computed : {
      count(){
        return this.$store.state.count
      },
      oddEven(){
        return this.$store.getters.oddEven;
      }
    },
    methods : {
      increment(){
        this.$store.dispatch('increment')
      },
      decrement(){
        this.$store.dispatch('decrement')
      },
      incrementIfOdd(){
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync(){
        this.$store.dispatch('incrementAsync')
      }
    }
  }
</script>
<style scoped>
</style>
