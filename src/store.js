/*vuex的核心管理对象 ： store*/

import Vue from 'vue';
import Vuex from 'vuex';

//申明使用vuex插件
Vue.use(Vuex);

//初始化状态
const state = {
  count : 0
};

//定义多个直接更新状态的方法的集合
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  },
};

//定义多个间接更新状态的方法的集合
const actions = {
  increment({commit}){
    commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },
  incrementIfOdd({commit,state}){
    if(state%2===1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(()=>{
      commit('INCREMENT')
    },1000)
  }
};

//定义计算计算属性的getters
const getters = {
  oddEven(state){
    return state.count%2===0 ? '偶数' : '奇数'
  }
};

//暴露一个store对象，这样所有的组件都会添加一个$store属性
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
