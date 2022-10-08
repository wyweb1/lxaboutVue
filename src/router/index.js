import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import HelloWorld from '@/components/HelloWorld'
import Fruit from '@/components/Fruit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloworld',//访问路由的路径
      name: 'HelloWorld',//路由名称
      component: HelloWorld,//对应组件
    },
    {
      path: '/catalog',//访问路由的路径
      name: 'Catalog',//路由名称
      component: Catalog,//对应组件
    },
    {
      path: '/fruit',//访问路由的路径
      name: 'Fruit',//路由名称
      component: Fruit,//对应组件
    },
   
  ]
})
