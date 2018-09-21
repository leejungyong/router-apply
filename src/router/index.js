import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import About from '@/components/About'
import document from '@/components/Document'
import notFound from '@/components/404'
import Study from '@/views/study'
import Work from '@/views/work'
import Hobby from '@/views/hobby'
import Slider from '@/views/slider'
import User from '@/components/User'


Vue.use(Router)

let router= new Router({
  mode:'history',
  linkActiveClass:'is-active',
  scrollBehavior(to,from,savePosition){
    // console.log(to);          //要进入的目标路由，去向哪里
    // console.log(from);        // 离开的路由对象，从哪里来
    // console.log(savePosition);  //记录滚动条的坐标，点击前进后退时记录的值
    // if(savePosition){
    //   return savePosition;
    // }else{
    //   return{x:0,y:0};
    // }

    if(to.hash){
      return{
        selector:to.hash
      }
    }

  },
  routes: [
    {
      path: '/',
      component: Home,
      meta:{
        index:0,
        title:'home'
      }

    },
    // {
    //   path:'/home',
    //   name:'Home',
    //   component:Home,
    //   alias: '/index'   //别名
    // },
    {
      path:'/about',
     
      component:About,
     
      children:[
        {
          path:'',   //默认子路由
          name:'About',
          component:Study,
           meta:{
        index:1,
        title:'about'
      },
        },
        {
          path:'work', 
          name:'Work',
          component:Work
        },
        {
          path:'hobby',
          name:'Hobby',
          component:Hobby
        },
      ]
    },
    {
      path:'/document',
      components:{
        default:document,
        slider:Slider
      },
      beforeEnter(to,from,next){
        console.log('zhixing');
        next();
      },
      meta:{
        index:2,
        title:'document'
      }

      
    },
    {
      path:'*',
       // component:notFound    //调到404页面
       // redirect: '/home'     //重定向到主页1
       // redirect: { path: '/home'}  //2
       // redirect: {name:'Home'}        //3
      redirect:(to)=>{          
        //目标路由对象，访问路径的路由信息

        if(to.path==='/123'){
          return '/home'
        }else if(to.path==='/456'){
          return '/document'
        }else{
           return '/about'
        }
        
      }
    },
    {
      path:'/user/:tip?/:userId?',
      component:User,
      meta:{
        index:3,
        title:'user'
      }
    }

  ]
})
// router.beforeEach((to,from,next)=>{   //导航钩子函数
//  // next()
//  //next(false); //无法进入导航
//  //next()        


//  if(to.meta.login){ //只有登录才能进入页面
//    next('./login');
//  }else{
//    next();
//  }
// });

// router.afterEach((to,from)=>{  //可以用来展示不同title
//   if(to.meta.title){
//    window. document.title=to.meta.title;
//   }else{
//     window. document.title='test';
//   }
// })

export default router;