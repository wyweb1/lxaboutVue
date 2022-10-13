
<template>
    <div id="fruit">
      <router-view></router-view>
      <TitleGood v-bind:msg='title'/>
      <div  class="showBox">
        <Show v-for="item in goods" :key="item.name" v-bind:good="item" v-on:onAddGoods="onAddGoods" v-on:onSubtract="onSubtract"/>
      </div>
      <!--  -->
      <p>总计：{{sum}}</p>


      <router-view/>
      
    </div>
  </template>
  
  <script>
  // 引入外部组件，然后在本组件components属性里注册他们
  import Show from './FruitShow.vue';
  import TitleGood from './TitleGood.vue';
  
  export default {
    name:'Fruit',
    components:{ 
      TitleGood,
      Show,
      
    },
    
    data(){
      return{
        title:'fruit-crud',
        sum:0,
        goods:[
            {name:'apple',price:15,kucun:20,maxkc:20,buy:0,id:1},
            {name:'orange',price:10,kucun:100,maxkc:100,buy:0,id:2},
            {name:'banner',price:4,kucun:60,maxkc:60,buy:0,id:3},
            {name:'lemon',price:6,kucun:90,maxkc:90,buy:0,id:4},
        ]
      }
    },
    methods:{
      onAddGoods:function(item){
        // 库存-1，购物车+1，总计++ /有bug id有的不连续就不能用index = id-1来计算；
        let index = item[1]-1;
        let good = this.goods[index];
  
        if(good.kucun){
          good.buy +=1;
          good.kucun -=1;
          this.sum += item[0];
        }else{
          // 库存为0什么都不做
          //button样式禁用
        }   

        //前提：商品id都是唯一?
        // this.goods.find((item2)=>{
        //     if(item2.id==item.id){

        //         if(item2.kucun){
        //           item2.buy +=1;
        //           item2.kucun -=1;
        //           this.sum += item[0];
        //         }else{
        //           // 库存为0什么都不做
        //           //button样式禁用
        //         }   
        //     }
        //   })

          
      },
      onSubtract:function(item){
        // 库存+1，购物车-1，总计--
        let index = item[1]-1;
        let good = this.goods[index];
  
        if(good.kucun<=good.maxkc){
          good.buy -=1
          good.kucun +=1;
          this.sum -=item[0];
        }     
      },
     
    },
    

  }
  
  </script>
  
  <style scoped>
  #fruit {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #fruit  img{
    width: 40px;
    height: 40px;
  }
  .showBox{
    display: inline-block;
    color: #4385c7;
  }
  p{
    margin: 0 auto;
    padding: 0 20px;
    color: #4385c7;
    line-height: 40px;
    border: 1px solid #4385c7;
    width: 800px;
  }
  </style>
  