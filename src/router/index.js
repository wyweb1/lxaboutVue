import Vue from 'vue'
import Router from 'vue-router'
import Catalog from '@/components/Catalog'
import HelloWorld from '@/components/HelloWorld'
import Fruit from '@/components/Fruit'
import Home from '@/components/home/Home'
Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path: '/',//访问路由的路径
    //   name: 'App',//路由名称
    //   component: App,//对应组件
    // },
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
    {
      path: '/home/', 
      name: 'Home',
      component: Home,
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

