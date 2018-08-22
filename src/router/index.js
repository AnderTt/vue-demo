import Vue from 'vue'
import VueRouter from 'vue-router';

import About from '../views/about.vue'
import Home from '../views/home.vue'
import Messages from '../views/messages.vue'
import MessageDetail from '../views/messageDetail.vue'
import NewsList from '../views/newsList.vue'

Vue.use(VueRouter)
//1)用于创建路由器的构建函数
export  default new VueRouter({
  //2)路由配置
  routes : [
    //一般路由
    {
      path : '/about',
      component : About
    },
    {
      path : '/home',
      component : Home,
      children : [
        {
          path : '/home/news',
          component : NewsList,
        },
        {
          path : '/home/messages',
          component : Messages,
          children: [
            {
              path : '/home/messages/detail/:id',
              component : MessageDetail,
            },

          ]
        },
        {
          path : '/',
          redirect : '/home/news'
        }

      ]
    },
    //动态路由
    {
      path : '/',
      redirect : '/about'
    }
  ]
});
