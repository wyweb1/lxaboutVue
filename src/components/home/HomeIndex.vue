<template>
    <div class="homeindex">
        <p class="title"><img class="logo" src="../../assets/leaf.png" alt="" />{{title}}</p>
        <HomeHeader/>
      
    </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'

    export default{
        name:'HomeIndex',
        components:{
            HomeHeader,
          
        },
        data(){
            return{
                title:'home',
               
            }
        },
        beforeUpdate(){
            let path = this.$router.path;
            console.log(path,'pathindex')
            
        }
    }
</script>
<style >
/* 样式作用域 只在该组件内部起作用 有三种写法 */
/* scoped  */
/* module */
/* 不常用 */

.homeindex{
    margin: 0 auto;
    background: #f7f7f7;
    width: 750px;
    height: 800px;
    /* padding: 20px; */
}

.title{
    font-size: 30px;
    line-height: 50px;
    /* height: 50px; */
    padding: 20px;
}
.logo{
    width: 50px;height: 50px;
    vertical-align: middle;
}










</style>