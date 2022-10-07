<template>
    <div id="test">
        <h1>{{msg}}</h1>
    </div>
</template>
<script>
    export default{
        name:'Test',
        data(){
            return{
                msg:'越过增删改查',
            }
        }
    }
</script>
<style scoped>
/* scoped 样式仅对当前组件有效 */
h1, h2 {
  font-weight: normal;
  /* color: #4385c7; */
}
</style>
