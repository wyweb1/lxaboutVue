<template>
    <div id="test">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default{
        name:'Test',
        props:{
            msg:String,
        },
        data(){
            return{
                
            }
        }
    }
</script>
<style scoped>
/* scoped 样式仅对当前组件有效 */
h1, h2 {
  font-weight: normal;
  color: #000;
  margin-bottom: 20px;
  /* color: #4385c7; */
}
</style>
