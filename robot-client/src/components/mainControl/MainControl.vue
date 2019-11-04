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
          <my-button class="btn-build main-button" :commonSrc="clubSrc" event-name="clubToggle" @clubToggle="changeControl" :targetIndex="1"></my-button>
          <my-button class="btn-build main-button" :commonSrc="buildSrc" event-name="buildToggle" @buildToggle="changeControl" :targetIndex="2"></my-button>
          <my-button class="btn-module main-button" :commonSrc="moduleSrc" event-name="moduleToggle" @moduleToggle="changeControl" :targetIndex="3"></my-button>
          <my-button class="btn_rule main-button" :commonSrc="ruleSrc" event-name="ruleToggle" @ruleToggle="changeControl" :targetIndex="4"></my-button>
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
            <td class="table-body-item" width="25"  style="flex-grow:1">
              <!--<input-->
              <!--name="Fruit"-->
              <!--type="checkbox"-->
              <!--class="check-input"-->
              <!--v-model="item.isSelect"-->
              <!--@click="_inputEvent($event,index)"-->
              <!--/>-->
              <toggle-button class="check-input" :select="item.isSelect" :index="index" @toggle="toggleBtn"></toggle-button>
            </td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.batch}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">{{item.id}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">{{item.nickName}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.number}}</td>
            <td class="table-body-item server-time" width="70"  style="flex-grow:3">{{item.serverTime}}</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:5">
              <div height="36" class="table-btn-wrapper">
                <my-button class="table-btn"  :commonSrc="editSrc"></my-button>
                <my-button class="table-btn" height="36" :commonSrc="deleteSrc"  :targetIndex="index" eventName="deleteBatch" @deleteBatch="deleteBatch"></my-button>
              </div>

            </td>
          </tr>
        </table>
      </div>
      <div class="btn-wrapper">
        <div class="btn-all">
          <toggle-button class="check-input" :select="btnCancel"  @toggle="_cancel"></toggle-button>
          <!--<input type="checkbox" @click="_cancel" v-model="btnCancel"><label >-->
          <span class="txt">{{infoTip}}</span>
        </div>
        <my-button :commonSrc="deleteAllSrc" eventName="deleteAll" @deleteAll="deleteAll" ></my-button>
      </div>
      <nav-footer class="nav-footer"></nav-footer>
      <!--<div class="footer">陪玩管理主界面:用于显示整体信息和机器人所在俱乐部的批次和信息</div>-->

    </div>

</template>

<script>
  import MyButton from '../myButton/MyButton.vue';
  import MyTable from "../table/MyTable.vue";
  import NavFooter from '../navFooter/NavFooter.vue';
  import TestButton from './TestButton.vue'
  import ToggleButton from '../myToggleButton/MyToggleButton.vue'


  const ALL = "全选";
  const CANCEL = "取消";

  export default {
    data() {
      return {
        totalMaj: 188,
        hadMaj: 0,
        notMaj: 0,
        buildSrc: "btn_build",
        moduleSrc: "btn_module",
        ruleSrc: "btn_rule",
        deleteAllSrc: "btn_delete_all",
        editSrc: "btn_edit",
        deleteSrc: "btn_delete",
        clubSrc: "btn_club",
        infoTip: ALL,
        btnCancel: false,
        currentTable: [{
          batch: '001',
          id: '1268888',
          nickName: '俱乐部昵称1',
          number: 66,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '002',
          id: '1268888',
          nickName: '俱乐部昵称2',
          number: 166,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '003',
          id: '1268888',
          nickName: '俱乐部昵称3',
          number: 366,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '004',
          id: '1268888',
          nickName: '俱乐部昵称4',
          serverTime: "7:00—18:00",
          number: 466,
          isSelect: false
        }, {
          batch: '005',
          id: '1268888',
          nickName: '俱乐部昵称5',
          number: 566,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '006',
          id: '1268888',
          nickName: '俱乐部昵称6',
          number: 666,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '007',
          id: '1268888',
          nickName: '俱乐部昵称7',
          number: 766,
          serverTime: "7:00—18:00",
          isSelect: false
        }, {
          batch: '008',
          id: '1268888',
          nickName: '俱乐部昵称8',
          number: 866,
          serverTime: "7:00—18:00",
          isSelect: false
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
        });

      },
      _cancel() {
        this.btnCancel = !this.btnCancel;
        this.currentTable.forEach(item => {
          item.isSelect = this.btnCancel;
        });
      },
      changeControl(type) {
        if (type < 1 || type > 4) return;
        this.$emit("changeNav", type);
      },
      deleteBatch(index) {
        console.log("删除批次:", index);
        this.currentTable.splice(index, 1);
      },
      deleteAll() {
        let deleteVec = [];
        this.currentTable.forEach(item => {
          if (item.isSelect == true) {
            deleteVec.push(item);
          }
        });
        deleteVec.forEach(item => {
          let index = this.currentTable.indexOf(item);
          if (index >= 0) {
            this.currentTable.splice(index, 1);
          }
        })

      },
      toggleBtn(event) {
        let index = event.type;
        this.currentTable[index].isSelect = !this.currentTable[index].isSelect;
      }
    },
    components: {
      'my-button': MyButton,
      'my-table': MyTable,
      'nav-footer': NavFooter,
      'test-button': TestButton,
      'toggle-button': ToggleButton
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus">
  @import "./stylus/mainControl.styl";
</style>
