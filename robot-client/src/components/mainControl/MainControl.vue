<template>
    <div class="main_control_wrapper">
      <!--<h1 class="title">主界面管理</h1>-->
      <div class="header">
        <div class="txt">
          <img src="./resource/txt_total.png" class="txt-item">
          <span class="txt total-txt">{{totalMaj}}</span>
          <img src="./resource/txt_had.png" class="txt-item">
          <span class="txt had-txt">{{hadMaj}}</span>
          <img src="./resource/txt_have_not.png" class="txt-item">
          <span class="txt have-not-txt">{{notMaj}}</span>
        </div>

        <div class="buttons">
          <my-button class="btn-build main-button" :commonSrc="buildSrc"></my-button>
          <my-button class="btn-module main-button" :commonSrc="moduleSrc"></my-button>
          <my-button class="btn_rule main-button" :commonSrc="ruleSrc"></my-button>
        </div>
      </div>
      <div class="show-list">
        <my-table :dataAry="currentTable"></my-table>
      </div>
      <div class="footer">陪玩管理主界面:用于显示整体信息和机器人所在俱乐部的批次和信息</div>
    </div>

</template>

<script>
  import MyButton from '../myButton/MyButton.vue';
  import MyTable from "../table/MyTable.vue";

  export default {
    data() {
      return {
        totalMaj: 188,
        hadMaj: 0,
        notMaj: 0,
        buildSrc: "btn_build",
        moduleSrc: "btn_module",
        ruleSrc: "btn_rule",
        currentTable: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '赵小四',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    },
    components: {
      'my-button': MyButton,
      'my-table': MyTable
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  @import "./stylus/mainControl.styl";
</style>
