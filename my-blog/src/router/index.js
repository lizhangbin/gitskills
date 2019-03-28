// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue';
import Router from 'vue-router';
import HomeContainer from '../components/header/header'
import NewsContainer from "../components/home/NewsContainer"



Vue.use(Router);
export default new Router({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component: HomeContainer},
        {path:"/news",component:NewsContainer},
        ]
})