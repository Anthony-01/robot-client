<template>
    <div class="wrapper">
      <!--<el-container style="height:100%;width:100%;"></el-container>-->
      <div class="header" ref="header">
        <img src="./resource/login_logo.png" alt="" class="logo">
        <div class="info">
          <div class="user">
            <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="" class="avatar">
            <span class="username">拉风的蘑菇</span>
          </div>
          <div class="btn-exit" @click="_exit">
            <!--<span class="icon"></span>-->
            <i class="icon el-icon-switch-button"></i>
            <span class="text">退出</span>
          </div>
        </div>

      </div>
      <!--<div style="width:100%;" ref="mainWrapper" class="main-wrapper">
        <el-container width="100%" height="100%">
          <el-aside width="200px" class="aside">
            <nav-menu class="menu" :activeIndex="activeIndex"></nav-menu>
          </el-aside>
          <el-main>
            <div class="content">
              管理界面
            </div>
            &lt;!&ndash;使用路由管理&ndash;&gt;
            <router-link to="" class="show-view"></router-link>
          </el-main>

        </el-container>-->
      <div style="width:100%;" ref="mainWrapper" class="main-wrapper">
          <div class="aside">
            <nav-menu class="menu" :activeIndex="activeIndex" @change="_changeRouter"></nav-menu>
          </div>
          <div class="content-wrapper">
            <!--使用路由管理-->
            <router-view class="show-view"></router-view>
          </div>


      </div>



    </div>
</template>

<script>
  import Nav from '@/components/nav/Nav';
  import NavMenu from '@/components/nav/NavMenu';

  export default {
    data() {
      return {
        activeIndex: 0
      }
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
