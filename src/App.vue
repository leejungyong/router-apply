<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">

        <router-link to="/" exact tag="li" >
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>

        <router-link to="/about" tag="li" active-class="activeClass" >
          <i></i>
          <span>about</span>
        </router-link>

        <router-link :to="{path:'/document/#abc'}" tag="li" >
          <i></i>
          <span> document</span>
        </router-link>

            <router-link to="/user" tag="li">
          <i></i>
          <span> user</span>
        </router-link>

      </ul>
    </div>

    <input type="button" value="后退" @click="backHandle">
    <input type="button" value="前进" @click="forward"> 
    <input type="button" value="控制前进后退步数" @click="goHandle"> 
    <input type="button" value="控制指定导航push" @click="pushHandle"> 
    <input type="button" value="控制指定导航replace" @click="replaceHandle"> 
    
   
   <transition :name="names">
      <router-view class="center"></router-view> 
   </transition>
  
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      index: "/home",
      names:'left'
    };
  },
  watch: {
    $route(to,from){
      if(to.meta.index<from.meta.index){
        this.names='right';
      }
      else{
        this.names='left';
      }
    }
  },
  methods:{
    backHandle(){
      this.$router.back();//后退一步
    },
    forward(){
      this.$router.forward();
    },
    goHandle(){
      this.$router.go(-2);
    },
    pushHandle(){
    //  this.$router.push('/document');
    this.$router.push({path:'/document'}); //添加history入栈
    },
    replaceHandle(){
      this.$router.replace({path:'/document'}); 
    }
  }
};
</script>

<style>
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 2s;
}
.left-enter{
  transform: translateX(100%); 
}

.left-enter-active,.left-leave-active{
  transition: 1s;
}

.left-leave-to{
  transform: translateX(-100%);
}
.right-leave-active,.right-enter-active{
  transition: 1s;
}
.right-enter{
  transform: translateX(-100%);
}

.right-leave-to{
  transform: translateX(100%);
}
</style>
