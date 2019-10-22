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
          <my-button class="btn-build main-button" :commonSrc="clubSrc"></my-button>
          <my-button class="btn-build main-button" :commonSrc="buildSrc"></my-button>
          <my-button class="btn-module main-button" :commonSrc="moduleSrc"></my-button>
          <my-button class="btn_rule main-button" :commonSrc="ruleSrc"></my-button>
        </div>
      </div>
      <div class="show-list">
        <!--<my-table :dataAry="currentTable"></my-table>-->
        <table class="main-table" width="100%">
          <tr class="table-row table-title">
            <th class="table-title-item" width="25" style="flex-grow:1">      </th>
            <th class="table-title-item" width="70" style="flex-grow:2">批次ID</th>
            <th class="table-title-item" width="70" style="flex-grow:3">俱乐部ID</th>
            <th class="table-title-item" width="70" style="flex-grow:3">昵称</th>
            <th class="table-title-item" width="70" style="flex-grow:2">人数</th>
            <th class="table-title-item" width="70" style="flex-grow:3">服务时间</th>
            <th class="table-title-item" width="70" style="flex-grow:5"></th>
          </tr>
          <tr v-for="(item, index) in currentTable" class="table-row table-body">
            <td class="table-body-item" width="25"  style="flex-grow:1"><input
              name="Fruit"
              type="checkbox"
              class="check-input"
              v-model="item.isSelect"
              @click="_inputEvent($event,index)"
            /></td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">复选框</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:5">
              <div height="36" class="table-btn-wrapper">
                <my-button class="table-btn"  :commonSrc="editSrc"></my-button>
                <my-button class="table-btn" height="36" :commonSrc="deleteSrc"></my-button>
              </div>

            </td>
          </tr>
        </table>
      </div>
      <div class="btn-wrapper">
        <div class="btn-all"><input type="checkbox" @click="_cancel" v-model="btnCancel"><label >{{infoTip}}</label></div>
        <my-button :commonSrc="deleteAllSrc"></my-button>
      </div>
      <nav-footer class="nav-footer"></nav-footer>
      <div class="footer">陪玩管理主界面:用于显示整体信息和机器人所在俱乐部的批次和信息</div>
      <test-button :commonSrc="objSrc"></test-button>
    </div>

</template>

<script>
  import MyButton from '../myButton/MyButton.vue';
  import MyTable from "../table/MyTable.vue";
  import NavFooter from '../navFooter/NavFooter.vue';
  import TestButton from './TestButton.vue'

  //导入图片
  import BuildImg0 from '../../assets/btn/btn_build_0.png';
  import BuildImg1 from '../../assets/btn/btn_build_1.png';

  const ALL = "全选";
  const CANCEL = "取消";

  export default {
    data() {
      return {
        totalMaj: 188,
        hadMaj: 0,
        notMaj: 0,
        //按钮名称
        buildSrc: "btn_build",
        moduleSrc: "btn_module",
        ruleSrc: "btn_rule",
        deleteAllSrc: "btn_delete_all",
        editSrc: "btn_edit",
        deleteSrc: "btn_delete",
        clubSrc: "btn_club",
        //testButton,
        objSrc: {
          src0: BuildImg0,
          src1: BuildImg1
        },
        infoTip: ALL,
        btnCancel: false,
        currentTable: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-02',
          name: '赵小四',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: true
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: false
        }, {
          date: '2016-05-04',
          name: '李小狗',
          address: '上海市普陀区金沙江路 1518 弄',
          isSelect: true
        }]
      }
    },
    mounted() {

    },
    methods: {
      _inputEvent(event, index) {
        console.log(event, index);
        //检测选项，更新全选按钮
        this.$nextTick(() => {
//          this._checkAll();
        });

      },
      _cancel() {
        this.btnCancel = !this.btnCancel;
        this.currentTable.forEach(item => {
          item.isSelect = this.btnCancel;
        });
      }
//      _checkAll() {
//        let result = this.currentTable.every(item => {
//          return item.isSelect == true;
//        });
//        console.log("是否变成取消:", result);
//        if (result) {
//          this.infoTip = CANCEL;
//          this.btnCancel = true;
//        } else {
//          this.infoTip = ALL;
//          this.btnCancel = false;
//        }
//      }
    },
    components: {
      'my-button': MyButton,
      'my-table': MyTable,
      'nav-footer': NavFooter,
      'test-button': TestButton
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  @import "./stylus/mainControl.styl";
</style>
