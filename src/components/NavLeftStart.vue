<!-- 该组件只在除了CataLogBox的组件外的其他组件显示 -->
<template>
    <div id="navBox">
        <ul class="navLeft">
        <li>fruit</li>
        <li>fruit</li>
        <li>fruit</li>
        <li>fruit</li>
    </ul> 
    </div>
       
</template>
<script>

    //可拖动？

// 引入状态管理模式-store
import {store} from '../store/store.js'

    export default{
        name:'NavLeftStart',
        props:{

        },
        data(){
            return{
                isFold:false,
                styleNmae:'navLeft',
                animNmae:'anmHide'
            }
        },
        beforeUpdate(){
        // 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程
        this.isFold = store.state.iShowNavCommon;
        },
    }
</script>
<style scoped>
#navBox{
    position: fixed;
    left: 10px;
}
.navLeft{
    list-style: none;
    width: auto;
    height: auto;
    background: #99CC99;
    border-radius: 30px;
    overflow: hidden;
    transition: all .2s ease-in-out;
}
.navLeft li{
    padding: 10px;
    font-size: 18px;
    color: #336633;
    width: 100%;
    text-align: center;
    /* line-height: 40px; */
    cursor: pointer;
    transition: all 0.1s ease-in-out;
}
.navLeft li:nth-child(1){
    padding-top: 20px;
}
.navLeft li:nth-last-child(1){
    padding-bottom: 20px;
}
.navLeft li:hover{
    background: #669933;
    /* color: #fff; */
}
.anmHide{
    height: auto;
    /* animation: anmateHeight 0.4s ease-in-out inherit;
    animation-iteration-count:1; */
}
@keyframes anmateHeight {
    0%{
        height: 0;
    }
    100%{
        height: auto;
    }
}

</style>
