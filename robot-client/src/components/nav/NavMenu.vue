<template>
    <div class="nva-wrapper">
      <!--activeIndex = 1-->
      <div class="main-menu menu-item" :class="{on: currentIndex===0}" @click="_selectMenu(0, $event)">
        <i class="el-icon-s-home"></i>
        <!--<router-link to="/main/mainControl"></router-link>-->
        <span >主界面</span>
        <div class="triangle" v-show="currentIndex===0"></div>
      </div>
      <div class="sub-menu menu-item" :class="{on: currentIndex===1}" @click="_selectMenu(1, $event)">
        <!--<router-link to="/main/serverControl"></router-link>-->
        <span >陪玩服务管理</span>
        <div class="triangle" v-show="currentIndex===1"></div>
      </div>
      <div class="sub-menu menu-item" :class="{on: currentIndex===2}" @click="_selectMenu(2, $event)">
        <!--<router-link to="/main/moduleControl"></router-link>-->
        <span >行为模板管理</span>
        <div class="triangle" v-show="currentIndex===2"></div>
      </div>
      <div class="sub-menu menu-item" :class="{on: currentIndex===3}" @click="_selectMenu(3, $event)">
        <!--<router-link to="/main/ruleControl"></router-link>-->
        <span >加分规则管理</span>
        <div class="triangle" v-show="currentIndex===3"></div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      activeIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        currentIndex: this.activeIndex
      }
    },
    methods: {
      _selectMenu(type, event) {
        if (type == this.currentIndex) return;
        let name;
        switch (type) {
          case 0: {
            name = "mainControl";
            break;
          }
          case 1: {
            name = "serverControl";
            break;
          }
          case 2: {
            name = "moduleControl";
            break;
          }
          case 3: {
            name = "ruleControl";
            break;
          }
        }
        this.currentIndex = type;
        this.$emit("change", type);
        this.$router.push({path: `/main/${name}`});
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  @import "./stylus/men.styl"
</style>
