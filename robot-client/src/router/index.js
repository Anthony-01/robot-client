import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '../pages/login/Login';
import Main from '../pages/main/Main.vue';

Vue.use(Router)

console.log(Login);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   // redirect: '/login',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
