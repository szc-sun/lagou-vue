import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Login from '@/components/Login';
import Search from '@/components/Search';
import Mine from '@/components/Mine';
import Detail from '@/components/Detail';
import Reg from '@/components/Reg';

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',name: 'home',component: Home},
    {path: '/login',name: 'login',component: Login},
    {path: '/search',name: 'search',component: Search},
    {path: '/mine',name: 'mine',component: Mine},
    {path: '/detail',name: 'detail',component: Detail},
    {path: '/reg',name: 'reg',component: Reg},
    

    //{path: "/*",redirect:"/"},

  ]
});
// router.beforeEach((to, from, next) => {
//   console.log("beforeEach",to);

//   const token = localStorage.token;
   
//   if(to.path == "/order"){
//      if(!token){
//        alert("请先登陆");
//        router.push("/login");
//      }
//   }
//   next();
// })
export default router;