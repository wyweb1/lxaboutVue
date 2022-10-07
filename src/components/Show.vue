<template>
    <div id="show">
            <span>{{good.name}}</span>
            <span>单价：{{good.price}} ￥</span>
            <span>库存：{{good.maxkc}} 斤 | 剩余{{good.kucun}}</span>
            <span>加入购物车：{{good.buy}}</span>
            <van-button v-on:click="$emit('onAddGoods',[good.price,good.id])" v-bind:disabled="good.kucun==0? true:false" plain type="primary">+</van-button>
            <van-button v-on:click="$emit('onSubtract',[good.price,good.id])" v-bind:disabled="good.buy==0?true:false" plain type="primary">-</van-button>
    </div>
</template>
<script>

    export default{
        name:'Show',
        props:{//对参数类型进行限制两种方式 1.对象参数一一列举出属性类型 2.对象参数直接设Object
            good:{
                name:String,
                price:Number,
                kucun:Number,
                id:Number,
            },
            // good:Object
        },
        components:{
            
        },
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped>
#show{
    /* width: 60px; */
    /* display: inline-block; */
    padding: 20px;
    border: 1px solid #4385c7;
    width: 800px;
    text-align: left;
    display: flex;
    justify-content: space-between;
}
#show span:nth-child(1){
    width: 15%;
}
#show span:nth-child(2){
    width: 20%;
}
#show span:nth-child(3){
    width: 30%;
}
#show span:last-child(2){
    width: 10%;
}
#show span:last-child{
    width: 10%;
    margin-right: 10px;
}
#show>div{
    font-size: 20px;
    color: rgb(88, 90, 194);
    display: inline-block;
    /* padding: 20px; */
}

p{
    font-size: 12px;
 

}
button{
    height: 25px;
    width: 30px !important;
    text-align: center;
}
</style>
