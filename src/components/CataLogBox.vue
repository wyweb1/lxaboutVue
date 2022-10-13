
<template>
    <div id="catalog">
      <!-- <img src="./assets/leaf.png"> -->
      <TitleGood v-bind:msg="title" />
  
      <!-- 目录 -->
      <div class="catalogBox">
        <Catalog v-for="item in catalogolist " :key="item.title" v-bind:list="item"/>
      </div>
  
  
      <!--  路由展示窗口/区域:直接子路由展示区域。如果子路由B底下还有子路由B-a且B组件也写了router-view则B-a在B中的rouer-view里展示？-->
      <router-view/>
     
    </div>
  </template>
  
  <script>
  // 引入外部组件，然后在本组件components属性里注册他们
  import Catalog from './Catalog.vue';
  import TitleGood from './TitleGood.vue';

  // 引入状态管理模式-store
  import {store} from '../store/store.js'

  export default {
    components:{ 
      TitleGood,
      Catalog,
      
    },
    
    name: 'CataLogBox',
    data(){
      return{
        
        title:'目录',
        catalogolist:[
          {title:'fruit-shopping',url:'/fruit'},
          {title:'home',url:'/home'},
        ]
      }
    },
    methods:{
      
    },
    beforeRouteEnter (to, from, next) {
      // ...
      //进入该页面前隐藏侧边栏
      store.modifyNavLeftShow(false);
      
      next(true);
    },
    beforeRouteLeave(to, from, next) {
      // ...
      //离开该页面前显示改组件
      store.modifyNavLeftShow(true);

      next(true);
    },
  
  // 声明周期
  
    beforeCreate(){//创建前
    // 在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据
    },
    created(){//创建后？
  
    },
    beforeMount(){//挂在开始之前被调用？
  
    },
    mounted(){
    // 挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
    },
    beforeUpdate(){
    // 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程
    },
    updated(){
    // 更新后，在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用
    },
    beforeDestroy(){
    //销毁前
    // 在实例销毁之前调用，实例仍然完全可用，这一步还可以用this来获取实例，一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件
    },
    destroyed(){
    //销毁后
    //在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用
    },
  }
  
  </script>
  
  <style>
  *{box-sizing: border-box; -moz-box-sizing: border-box;  -webkit-box-sizing: border-box; -o-box-sizing: border-box; -ms-box-sizing: border-box; margin: 0;padding: 0;font-family: "思源黑体 CN" ;}
  input,textarea{outline: none;}
  a{text-decoration: none;}
  
  #catalog {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
    margin:0 auto;
    margin-top: 60px;
    width: 90%;
  }
  
  
  </style>
  