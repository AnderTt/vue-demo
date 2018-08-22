<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="checkAll"/>
    </label>
    <span>
          <span>已完成 {{completeCount}} </span> / 全部 {{todos.length}}
    </span>
    <button class="btn btn-danger" @click="clearCompleted">清除已完成任务</button>
  </div>
</template>
<script>
  export default {
    props : {
      todos : {
        type : Array,
        required : true
      },
      clearCompletedTodos : {
        type : Function,
        required : true
      },
      isCheckedAll : {
        type : Function,
        required : true
      }
    },
    computed : {
      completeCount(){
        return this.todos.reduce((preTotal,todo)=>{
          return preTotal + (todo.completed ? 1 : 0)
        },0)
      },
      checkAll : {
        get () {
          return this.todos.length === this.completeCount && this.completeCount>0 ;
        },
        set (value) { //value是指input框是否选中
          this.isCheckedAll(value)
        }
      }
    },
    methods : {
      clearCompleted(){
        if(window.confirm('确定删除吗？')){
          this.clearCompletedTodos();
        }
      }
    }
  }
</script>
<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }

</style>
