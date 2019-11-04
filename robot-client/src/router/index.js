import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login';
import Main from '../pages/main/Main.vue';
import MainControl from "@/components/mainControl/MainControl.vue";
import ModuleControl from "@/components/moduleControl/ModuleControl.vue";
import ServerControl from "@/components/serverControl/ServerControl.vue";
import RuleControl from "@/components/ruleControl/RuleControl.vue";
import ClubControl from "@/components/clubControl/ClubControl.vue";

Vue.use(Router)

console.log(Login);

export default new Router({
  routes: [
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
      component: Main,
      children: [
        {
          path: "mainControl",
          component: MainControl
        },
        {
          path: 'moduleControl',
          component: ModuleControl
        },
        {
          path: 'serverControl',
          component: ServerControl
        },
        {
          path: 'ruleControl',
          component: RuleControl
        },
        {
          path: 'clubControl',
          component: ClubControl
        }
      ]
    }
  ]
})
