<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--绑定自定义事件-->
      <TodoHeader @addTodo="addTodo" />
      <List :todos="todos"/>
      <todo-footer :todos="todos" :clearCompletedTodos="clearCompletedTodos" :isCheckedAll="isCheckedAll"></todo-footer>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';
  import PubSub from 'pubsub-js';
  /*const TODOS_KEY = 'todos_key';*/
  import storageUilt  from './uilts/storageUilt'
  export default {
    components : {
      TodoHeader : Header,
      List,
      TodoFooter : Footer
    },
    data(){
      return {
        todos : []
      }
    },
    mounted(){
      //订阅事件,这里最好用箭头函数，this的指向组件对象，如果直接用函数，this指向PubSub
      PubSub.subscribe('deleteTodo',(msg,index) => {
        this.deleteTodo(index);
      });

      //从localStorage中读取todos的值
      setTimeout(()=>{
        /*this.todos = JSON.parse(localStorage.getItem(TODOS_KEY) || '[]');*/
        this.todos = storageUilt.getTodo();
      },1000)

    },
    watch : {
      todos : {
        deep : true, //深度监视
        // 将todos最新值的json数据保存到localStorage,val为最新的todos
        /*handler : function (val) {
          localStorage.setItem(TODOS_KEY,JSON.stringify(val))
        }*/
        /*handler : function (val) {
          storageUilt.saveTodo(val)
        }*/
        handler : storageUilt.saveTodo

      }
    },
    methods : {
      //添加todo
      addTodo(todo){
        this.todos.unshift(todo);
      },
      //删除todo
      deleteTodo(index){
        this.todos.splice(index,1);
      },
      //删除已完成的todos
      clearCompletedTodos(){
        this.todos = this.todos.filter(todo=> !todo.completed )
      },
      //对todos全选或全不选
      isCheckedAll(isChecked){
        this.todos.forEach(todo=>{
          todo.completed = isChecked
        })
      }
    }
  }
</script>
<style scoped>
</style>
