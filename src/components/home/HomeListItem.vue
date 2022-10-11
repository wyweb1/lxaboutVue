<template>
    <li class="list flexCommon" @click="goItem(list.id)">
         <div class="picBox">
            <img class="playpic" src="" alt="">
         </div>
         <div class="info">
            <p class="title1">{{list.title1}}</p>
            <p class="title2">{{list.title2}}</p>
            <p class="title3">{{list.title3}}</p>
            <p class="title4">{{list.title4}}</p>
         </div>
    </li>
</template>
<script>
    export default{
        name:'HomeListItem',
        props:{
            list:Object,
        },
        methods:{
            goItem(id){
               
                this.$router.push(`/thisitem/${id}`)
                // this.$router.push({path:'/thisitem',query:{id}});
            }
        },
        created(){//创建后？
            console.log(this.item,'data')
        },

    }
</script>
<style>
.list {
    width: 100%;
    padding: 30px 15px;
    height: auto;
    justify-content: space-between;
    background: #fff;
    border-radius: 5px;
    margin-top: 20px;
}
.list .picBox{
    width: 225px;
    height: 150px;
    border-radius: 5px;
    overflow: hidden;
    margin-right: 15px;
 
}
.list .picBox img{
    width: 100%;
    height: 100%;
    background: #000;
    border: none;
}
.list .info{
    width: calc(100% - 240px);
}
.list .info .title1{
    font-size:28px ;
    color: #000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height:40px ;
}
.list .info .title2{
    font-size:20px ;
    color: #666;
    line-height:30px ;
}
.list .info .title3{
    font-size:25px ;
    color: red;
    font-weight: bold;
    line-height:30px ;
}
.list .info .title4{
    font-size:2px ;
    color: #999;
    line-height:30px ;
}

</style>