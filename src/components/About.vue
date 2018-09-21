<template>
    <div>
        关于我
        <hr>
        <ul class="nav">
            <router-link to="/about" tag="li" exact><a>study</a></router-link>
            <router-link to="/about/work" tag="li"><a>work</a></router-link>
            <router-link to="/about/hobby" tag="li"><a>hobby</a></router-link>
        </ul>
        <hr>
        测试数据{{test}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            test:'改变前'
        }
    },
beforeRouteEnter(to, from, next){
    console.log('before');
    console.log(this);
    next((vm)=>{
        vm.test='改变了'
    })
},
//切换二级导航，，知道导航更新与否，二级导航改变时，触发下面的钩子函数

beforeRouteUpdate(to,from,next){
    console.log('beforeRouteUpdate');
    next();
},
//离开组件时执行的钩子函数
beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave');
    next();
}


}
</script>

<style scoped>

</style>
