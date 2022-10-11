<template>
    <div class="homm">
        <router-view/>
        <HomeTab v-bind:tabList="tabList" />
        
    </div>
</template>
<script>

import HomeTab from './HomeTab.vue'
    export default{
        name:'Home',
        components:{
           
            HomeTab,
        },
        data(){
            return{
                title:'home',
                tabList:[
                    {
                        title:'首页',
                        unactpic:'/static/image/footer_index.png',
                        actpic:'/static/image/footer_index_ac.png',
                        path:'/homeindex',
                        isact:true,
                    },
                    {
                        title:'列表页',
                        unactpic:'/static/image/footer_list.png',
                        actpic:'/static/image/footer_list_act.png',
                        path:'homelist',
                        isact:false,
                    },
                    {
                        title:'设置',
                        unactpic:'/static/image/footer_xj.png',
                        actpic:'/static/image/footer_xj_ac.png',
                        path:'homeset',
                        isact:false,
                    }
                ],
            }
        },
        undate(){
            let path = this.$router.path;
            console.log(path,'path')
            
        }
    }
</script>
<style >
/* 样式作用域 只在该组件内部起作用 有三种写法 */
/* scoped  */
/* module */
/* 不常用 */

.homm{
    margin: 0 auto;
    background: #f7f7f7;
    width: 750px;
    height: 800px;
    /* padding: 20px; */
    position: relative;
}
.flexCommon{
    display: flex;
   
    align-items: center;
}










</style>