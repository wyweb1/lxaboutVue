<template>
    <ul class="hometab flexCommon">
        <li class="flexCommon" v-for="item in tabList" v-bind:key="item.title" @click="goPage(item.path)">           
            <img v-bind:src="item.isact?item.actpic:item.unactpic" alt="">
            <p v-bind:class="item.isact?'fontBlue':''">{{item.title}}</p>
        </li>
    </ul>
</template>
<script>


    export default{
        name:'HomeTab',
        props:{
            tabList:Array,
            // 天啊怎么定义对象类的数组参数
            title:String,
            unactpic:String,
            actpic:String,
            path:String,
            isact:Boolean,
            // tabList:[
            //     {
            //         title:String,
            //         unactpic:String,
            //         actpic:String,
            //         path:String,
            //         isact:Boolean
            //     },
                
            // ]
        },
        data(){
            return{

            }
        },
        methods:{
            goPage(path){
                this.tabList.forEach(item => item.path==path?item.isact=true:item.isact=false);
                this.$router.push(path);
            }
        },
       

    }
</script>
<style scoped>
.hometab{
width: 750px;
padding:0 40px;
height: 100px;
justify-content: space-between;
background: #fff;
position: absolute;
left: 0;
bottom: 0;
box-shadow: 0px -6px 27px -12px rgb(0 0 0 / 20%);
}
.hometab li{
    height: 100px;
    /* line-height: 100px; */
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}
   
.hometab img{
    width: 40px;
    height: 36px;
}
.hometab p{
   margin-top: 10px;
    line-height: 20px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    color:#000,
}
.fontBlue{
    color:blue ;
}
</style>