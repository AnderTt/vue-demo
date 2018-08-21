<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo" />
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <todo-footer :todos="todos" :clearCompletedTodos="clearCompletedTodos" :isCheckedAll="isCheckedAll"></todo-footer>
    </div>
  </div>
</template>
<script>
  import Header from './components/Header.vue';
  import List from './components/List.vue';
  import Footer from './components/Footer.vue';
  export default {
    components : {
      TodoHeader : Header,
      List,
      TodoFooter : Footer
    },
    data(){
      return {
        todos : [
          {title : '吃饭' , completed : false},
          {title : '睡觉' , completed : false},
          {title : '敲代码' , completed : true}
        ]
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
