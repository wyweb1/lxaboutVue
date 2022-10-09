<template>
    <div id="catalog">
       <a href="javascript:void(0);" @click="toFruitPage">• {{list.title}}</a>
    </div>
</template>
<script>
    export default{
        name:'Catalog',//对外输出的组件名称
        props:{
            list:{
                title:String,
                url:String,
            }
        },
        data(){
            return{

            }
        },

        methods:{
            test(){
                console.log(this.list,'pp')
            },
            toFruitPage(){
                // this.$router.push({
                //     path:'/src/components/Fruit.vue',
                //     query:{
                //         mallCode:'000'
                //     }
                // })
            }
        },

        beforeCreate(){//创建前
            // 在实例初始化之后，数据观测和事件配置之前被调用，此时组件的选项对象还未创建，el 和 data 并未初始化，因此无法访问methods， data， computed等上的方法和数据
        },
        created(){//创建后
            // this.test()
        },
        beforeMount(){//挂在开始之前被调用

        },
        mounted(){
            // 挂在完成，也就是模板中的HTML渲染到HTML页面中，此时一般可以做一些ajax操作，mounted只会执行一次。
            
            
        },
        beforeUpdate(){
            // 在数据更新之前被调用，发生在虚拟DOM重新渲染和打补丁之前，可以在该钩子中进一步地更改状态，不会触发附加地重渲染过程
        },
        updated(){
            // 更新后，在由于数据更改导致地虚拟DOM重新渲染和打补丁只会调用，调用时，组件DOM已经更新，所以可以执行依赖于DOM的操作，然后在大多是情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环，该钩子在服务器端渲染期间不被调用
        },
        beforeDestroy(){
            //销毁前
            // 在实例销毁之前调用，实例仍然完全可用，这一步还可以用this来获取实例，一般在这一步做一些重置的操作，比如清除掉组件中的定时器 和 监听的dom事件
        },
        destroyed(){
            //销毁后
            //在实例销毁之后调用，调用后，所以的事件监听器会被移出，所有的子实例也会被销毁，该钩子在服务器端渲染期间不被调用
        },

    }
</script>
<style scoped>
#catalog{
    width: 100%;
    text-align: left;

}
a{
    display: block;
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    color: #000;
}
</style>