import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import AppWhiteShow from '@/components/AppWhiteShow'
import CataLogBox from '@/components/CataLogBox'
import Catalog from '@/components/Catalog'
import HelloWorld from '@/components/HelloWorld'
import Fruit from '@/components/Fruit'
import Home from '@/components/home/Home'
import HomeIndex from '@/components/home/HomeIndex'

import HomeList from '@/components/home/HomeList'
import HomeSet from '@/components/home/HomeSet'
import HomeThisItem from '@/components/home/HomeThisItem'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',//访问路由的路径
     
      component:CataLogBox,//打开该项目默认展示的组件！
    },
    {
      path: '/helloworld',//访问路由的路径
      name: 'HelloWorld',//路由名称
      component: HelloWorld,//对应组件
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
    },
    {
      path: '/fruit',
      name: 'Fruit',
      component: Fruit
    },
    {
      path: '/home', 
      // name: 'Home',//有子路由的父级不要name属性控制台会报错误提醒
      component: Home,
      children:[
        {path:'/',component:HomeIndex},
        {path:'/homeindex',component:HomeIndex},
        {path:'/homelist',component:HomeList},
        {path:'/homeset',component:HomeSet},
      ]
    },
    {
      path: '/thisitem/:id',
      name: 'HomeThisItem',
      component: HomeThisItem
    },
   
  ]
})

// 解决：Uncaught (in promise) NavigationDuplicated; 
let originalPush = Router.prototype.push; // 先保存一份 Router.prototype.push方法
let originalRepace = Router.prototype.replace;
 
Router.prototype.push = function push(location) {
    // call(); 篡改上下文    catch(); 捕获异常 **** 
    return originalPush.call(this, location).catch(e => e);
}
Router.prototype.replace = function replace(location) {
    return originalRepace.call(this, location).catch(e => e);
}

