<template>
    <div class="listpage">
        <ul>
            <HomeListItem v-for="item in listList" v-bind:list="item" v-bind:key="item.title"/>
        </ul>
    </div>
</template>
<script>
import HomeListItem from './HomeListItem.vue'

// 随机字段生成器
    function rollString(leng){
        let chars=['金','好','天','金','向','上','晴','格','亿','万'];
        var newstr='';
        for(var i = 0; i < leng ; i ++) {
        var id = Math.ceil(Math.random()*9);
        newstr += chars[id];
        }
        return newstr;
        
    }


    export default{
        name:'HomeList',
        components:{
            HomeListItem
        },
        data(){
            return{
                listList:[
                    {
                        title1:rollString(16),
                        title2:rollString(10),
                        title3:`￥`+rollString(5),
                        title4:rollString(20),
                        id:1,
                    },
                    {
                        title1:rollString(16),
                        title2:rollString(10),
                        title3:`￥`+rollString(5),
                        title4:rollString(20),
                        id:2,
                    },
                    {
                        title1:rollString(16),
                        title2:rollString(10),
                        title3:`￥`+rollString(5),
                        title4:rollString(20),
                        id:3,
                    },
                    {
                        title1:rollString(16),
                        title2:rollString(10),
                        title3:`￥`+rollString(5),
                        title4:rollString(20),
                        id:4,
                    }
                    
                ]
            }
        }
    }
</script>
<style scoped>
.listpage{
    padding: 20px;
    height:100%;
    padding-bottom: 200px;
    overflow-y: auto;
}
.listpage{

}

</style>