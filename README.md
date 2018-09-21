# example1
    导航条，组件方式实现，能自由切换，涉及到路由的各种应用
> A Vue.js project

## Build Setup
```bash
#   路由的形式
   mode： -hash:默认hash形式
         -history

#   router-link激活状态的样式设定
    linkActiveClass:'is-active'

#   router-link激活样式不同
    添加属性active-class

#   url不存在时重定向
     path:'*',
      redirect: '/home'

#  	router-link 的exact属性
    主要用在样式改变时

#   嵌套路由的使用（子路由）

#   滚动行为
    1.记录坐标方式
    2.hash方式

#   动态路径
    路径加参数，获取路由信息，添加查询字符串

#   切换过渡动画
    transition

#   编程式导航
     this.$router.back()


```

``` bash

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
