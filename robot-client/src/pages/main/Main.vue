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
      <div style="width:100%;" ref="mainWrapper" class="main-wrapper">
        <el-container width="100%">
          <el-aside width="200px" class="aside">
            <nav-menu class="menu"></nav-menu>
          </el-aside>
          <el-main>
            <div class="content">
              管理界面
            </div>
            <!--使用路由管理-->
          </el-main>

        </el-container>

      </div>



    </div>
</template>

<script>
  import Nav from '@/components/nav/Nav';

  export default {
    data() {
      return {

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
        this.$router.push({path: 'login'})
      },
      _adjustHeight() {
        let bodyHeight = document.documentElement.clientHeight;
        let headerHeight = this.$refs.header.clientHeight;
        let asideHeight = bodyHeight - headerHeight;
        this.$refs.mainWrapper.style.height = asideHeight + "px";
      }
    },
    components: {
      "nav-menu": Nav
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "./stylus/main.styl"
</style>
