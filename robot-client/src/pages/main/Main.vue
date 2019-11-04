<template>
    <div class="wrapper">
      <div class="header" ref="header">
        <img src="./resource/login_logo.png" alt="" class="logo">
        <div class="info">
          <div class="user">
            <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="" class="avatar">
            <span class="username">拉风的蘑菇</span>
          </div>
          <div class="btn-exit" @click="_exit">
            <i class="icon el-icon-switch-button"></i>
            <span class="text">退出</span>
          </div>
        </div>

      </div>
      <div style="width:100%;" ref="mainWrapper" class="main-wrapper">
          <div class="aside">
            <nav-menu class="menu" :activeIndex="activeIndex" @change="_changeRouter" ref="nav"></nav-menu>
          </div>
          <div class="content-wrapper">
            <keep-alive>
              <router-view class="show-view" @changeNav="changeNav"></router-view>
            </keep-alive>
          </div>
      </div>



    </div>
</template>

<script>
  import NavMenu from '@/components/nav/NavMenu';
  import {Test, myNum} from '../../utils/test';

  export default {
    data() {
      return {
        activeIndex: 0
      }
    },
    created() {
      let one = Test.getIns();
      one.say();
      console.log(myNum);
    },
    mounted() {
      this.$nextTick(() => {
        this._adjustHeight();
      })
    },
    methods: {
      _exit() {
        console.log("退出");
        this.$router.push({path: '/login'})
      },
      _adjustHeight() {
        let bodyHeight = document.documentElement.clientHeight;
        let headerHeight = this.$refs.header.clientHeight;
        let asideHeight = bodyHeight - headerHeight;
        this.$refs.mainWrapper.style.height = asideHeight + "px";
      },
      _changeRouter(type) {
//        console.log('切换路由', type);
      },
      changeNav(type) {
        console.log("主页面切换:", type);
        this.$refs.nav.changeIndex(type);
      }
    },
    components: {
      "nav-menu": NavMenu,

    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "./stylus/main.styl"
</style>
