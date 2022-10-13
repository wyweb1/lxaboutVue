<template>
    <div class="homeset">
        - 设置 <br>
        - 路由守卫
    </div>
</template>
<script>
    export default{
        name:'HomeSet',
        data(){
            return{
                'title':''
            }
        },
        // 路由守卫-eg没登录就没有权限进入
        beforeRouteEnter (to, from, next) {
            // ...进入该页面之前，该方法时还不能访问到此页面this
            console.log(to,from,'enter');
            next(true);//允许进入
            
        },
        beforeRouteLeave (to, from, next) {
            // ...离开该页面，可以访问到this
            let isOk = window.confirm('确认离开此页面吗？');
            isOk?next(true):next(false);
        }

    }
</script>
<style scoped>

</style>