<template>
    <div class="itemPage">
        <!-- @click.capture 设置捕获事件从富集到子集 -->
        <p class="backBox"  @click="goBack"><span class="backPic"></span><span>返回</span></p>
        详情
        <p class="newspage"></p>
    </div>
</template>
<script>

    export default{
        name:'ThisItem',
        data(){
            return{
                title:'你熬'
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1);//返回上一页，vue自带的路由和window的url不想等
            }
        },
        created(){//创建后？
            console.log(this.$router.history.current.params.id,'1')
        },
        mounted(){
            console.log(this.data,'2')
        },
        beforeUpdate(){
            console.log(this.data,'3')
        },
        updated(){
            console.log(this.data,'4')
        },
    }
</script>
<style>
.itemPage{
    margin: 0 auto;
    background: #f7f7f7;
    width: 750px;
    height: 800px;
    /* padding: 20px; */
    position: relative;
    padding: 20px;
}
.backBox{
    cursor: pointer;
    height: 30px;
}
.backBox span{
    vertical-align: text-top;
    display:inline-block;
    height: 30px;
}
.backBox span:nth-child(2){
    font-size: 20px;
    color:rgb(74, 178, 238);
}
.backPic{
    display: inline-block;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color:rgb(74, 178, 238);
    transition: all 0.3s ease-in-out;
    transform: rotate(90deg);
    margin-bottom:6px;
    margin-right: 10px;

}
</style>