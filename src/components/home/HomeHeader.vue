<template>
    <div class="header flexCommon">
            <!-- <img src="./assets/leaf.png"> -->
            <span></span>
            <input class="search" type="text" placeholder="搜商品、搜厂商">
            <p></p>
    </div>
</template>
<script>

    export default {
        name:'HomeHeader',
       
        data(){
            return{

            }
        }
    }
</script>
<style scoped>
.header{
    width: 100%;
    height: 88px;

}

.header input{
    font-size:20px;
    color: #666;
    height: 50px;
    outline: none;
    border:none;
    background: #9999992e;
    border-radius: 30px;
    width: 500px;
    text-indent: 30px;
}

.header p{
    width: 50px;
    height: 50px;
    background: #000;
}
.header span{
    display: inline-block;
    width: 120px;
    height: 50px;
    background: GOLD;
}

</style>