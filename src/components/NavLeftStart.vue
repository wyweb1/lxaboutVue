<!-- 该组件只在除了CataLogBox的组件外的其他组件显示 -->
<template>
    <div 
        id="navBox" 
        draggable="true"
        @dragstart.stop="onDragStart"
        @dragenter.stop="onDragEnter"
        @dragend.stop="onDragEnd"
        ref="navDom"
        >
        <ul class="navLeft">
            <li v-for="item in navList" v-bind:key="item.title" @click="$router.push(item.url)">{{item.title}}</li>
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
            navList:Array,
        },
        data(){
            return{
                isFold:false,
                styleNmae:'navLeft',
                animNmae:'anmHide'
            }
        },
        methods:{
            onDragStart(e){//开始拖拽
                console.log(e,'拖拽开始');
                let target = e.target;//拖拽对象
                let mouseXforW = e.clientX;//获取鼠标相对于浏览器的坐标x的位置
                let mouseHforW = e.clientX;//获取鼠标相对于浏览器的坐标H的位置
                let mouseXforDom=e.pageX;//获取鼠标相对于整个文档的坐标x
                let mouseHforDom=e.pageX;//获取鼠标相对于整个文档的坐标h
                
            },
            onDragEnter(e){//拖拽中
                console.log(e,'拖拽中');
            },
            onDragEnd(e){//拖拽结束
                console.log(e,'拖拽结束');
                // 获取拖拽结束时鼠标的坐标点
                let target = e.target;//拖拽对象
                let mouseX = e.clientX;
                let mouseY = e.clientY;

                // 获取拖拽对象宽度
                let w = this.$refs.navDom.clientWidth;   // 获取标签属性
                let h = this.$refs.navDom.clientHeight;
                
                // this.$refs.navDom.style.left = mouseX - w/2+'px';
                // this.$refs.navDom.style.top = mouseY - h/2+'px';
                this.$refs.navDom.style = `left:${mouseX - w/2}px;top:${mouseY - h/2}px`
               
                console.log(this.$refs.navDom.clientHeight,'pp')
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
    top:200px;
    z-index: 1000;
}
.navLeft{
    list-style: none;
    width: auto;
    height: auto;
    background: #99CC99;
    border-radius: 50px;
    overflow: hidden;
    transition: all .2s ease-in-out;
    box-shadow: 1px 2px 13px 0px #33663361;
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
