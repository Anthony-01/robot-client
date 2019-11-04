<template>
    <div class="server-wrapper">
      <div class="header">
        <img src="@@/server_module/title_server.png" class="header-title">
      </div>
      <div class="search">
        <span class="search-txt">批次ID：</span>
        <input type="text" class="club-id">
        <span class="search-txt">俱乐部ID：</span>
        <input type="text" class="club-id">
        <span class="search-txt">俱乐部名称：</span>
        <input type="text" class="club-name" readonly="readonly" v-model="clubName">
        <div class="btn-config">
          <!--<img src="@@/btn/btn_config.png" @click="onConfig" class="img-btn-config">-->
          <my-button :commonSrc="configSrc" class="img-btn-config" eventName="onConfig" @onConfig="onConfig"></my-button>
        </div>
      </div>
      <div class="buttons">
        <my-button :commonSrc="addSrc" class="button-item" eventName="add-event" @add-event="addEvent"></my-button>
        <my-button :commonSrc="batchSrc" class="button-item" eventName="batch-event" @batch-event="batchEvent"></my-button>
      </div>
      <div class="show-list">
        <table class="server-table" width="100%">
          <tr class="table-row table-title">
            <th class="table-title-item" width="25" style="flex-grow:1">      </th>
            <th class="table-title-item" width="70" style="flex-grow:1">序号</th>
            <th class="table-title-item" width="70" style="flex-grow:2">ID</th>
            <th class="table-title-item" width="70" style="flex-grow:3">昵称</th>
            <th class="table-title-item" width="70" style="flex-grow:2">游戏1</th>
            <th class="table-title-item" width="70" style="flex-grow:2">行为模式1</th>
            <th class="table-title-item" width="70" style="flex-grow:2">游戏2</th>
            <th class="table-title-item" width="70" style="flex-grow:2">行为模式2</th>
            <th class="table-title-item" width="70" style="flex-grow:2">游戏3</th>
            <th class="table-title-item" width="70" style="flex-grow:2">行为模式3</th>
            <th class="table-title-item" width="70" style="flex-grow:2">加分规则</th>
            <th class="table-title-item" width="70" style="flex-grow:2">服务时间</th>
            <th class="table-title-item" width="70" style="flex-grow:2">积分</th>
            <th class="table-title-item" width="70" style="flex-grow:8"></th>
          </tr>
          <tr v-for="(item, index) in batchAry" class="table-row table-body">
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
            <td class="table-body-item" width="70"  style="flex-grow:1">{{item.index}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.id}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">{{item.nickName}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.game1}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.action1}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.game2}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.action2}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.game3}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.action3}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.rule}}</td>
            <td class="table-body-item blue-txt" width="70"  style="flex-grow:2">{{item.serverTime}}</td>
            <td class="table-body-item blue-txt" width="70"  style="flex-grow:2">{{item.score}}</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:8">
              <div height="36" class="table-btn-wrapper">
                <my-button class="table-btn"  :commonSrc="editSrc" :targetIndex="index" eventName="editRobot" @editRobot="editRobot"></my-button>
                <my-button class="table-btn" height="36" :commonSrc="deleteSrc" :targetIndex="index" eventName="deleteRobot" @deleteRobot="deleteRobot"></my-button>
              </div>

            </td>
          </tr>
        </table>
      </div>
      <div class="btn-wrapper">
        <div class="btn-all">
          <!--<input type="checkbox" @click="_cancel" v-model="btnCancel"><label >{{infoTip}}</label>-->
          <toggle-button class="check-input" :select="btnCancel"  @toggle="_cancel"></toggle-button>
          <span class="txt">{{infoTip}}</span>
        </div>
        <div class="sub-wrapper">
          <my-button :commonSrc="modifyAllSrc" class="sub-button" eventName="modify-event" @modify-event="modifyEvent"></my-button>
          <my-button :commonSrc="deleteAllSrc" class="sub-button" eventName="deleteAll" @deleteAll="deleteAll" ></my-button>
        </div>

      </div>
      <nav-footer class="nav-footer"></nav-footer>
      <build-dialog :dialogVisible="buildDialog" @closeDialog="closeDialog" ref="buildDialog"></build-dialog>
      <batch-dialog :batchVisible="batchAddDialog" @closeBatchDialog="closeBatchDialog" ref="batchDialog"></batch-dialog>
      <modify-dialog :modifyDialog="modifyAllDialog" @closeModifyDialog="closeModifyDialog" ref="modifyDialog"></modify-dialog>
    </div>
</template>

<script>
  import MyButton from '../myButton/MyButton.vue';
  import NavFooter from '../navFooter/NavFooter.vue';
  import BuildDialog from "../accompony/Accompony.vue";
  import BatchDialog from "../batchAdd/BatchAdd.vue";
  import ModifyDialog from "../modifyAll/ModifyAll.vue";
  import ToggleButton from '../myToggleButton/MyToggleButton.vue';
  export default {
    data() {
      return {
        clubName: "暂未获取到俱乐部名称",
        //按钮
        addSrc: "btn_add",
        batchSrc: "btn_batch",
        editSrc: "btn_edit",
        deleteSrc: "btn_delete",
        deleteAllSrc: "btn_delete_all",
        modifyAllSrc: "btn_modify_all",
        configSrc: "btn_config",
        //表格数据
        batchAry: [
          {
            index: "001",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "002",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "003",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "004",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "005",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "006",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "007",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          },
          {
            index: "008",
            id: "1688888",
            nickName: "拉风大蘑菇",
            game1: "牛牛",
            action1: "土豪1",
            game2: "三公",
            action2: "土豪1",
            game3: "无",
            action3: "无",
            rule: "大土豪1",
            serverTime: "7:00 — 10:00",
            score: "3000 - 10000",
            isSelect: false
          }
        ],
        infoTip: "全选",
        btnCancel: false,
        //dialog
        buildDialog: false,
        batchAddDialog: false,
        modifyAllDialog: false
      }
    },
    mounted() {
    },
    methods: {
      onConfig() {
        console.log("确认选择");
      },
      _cancel() {
        this.btnCancel = !this.btnCancel;
        this.batchAry.forEach(item => {
          item.isSelect = this.btnCancel;
        });
      },
      closeDialog() {
        this.$refs.buildDialog.closeDialog();
      },
      addEvent(){
        this.$refs.buildDialog.openDialog();
      },
      batchEvent(){
        this.$refs.batchDialog.openDialog();
      },
      closeBatchDialog() {
        this.$refs.batchDialog.closeDialog();
      },
      modifyEvent() {
        this.$refs.modifyDialog.openDialog();
      },
      closeModifyDialog() {
        this.$refs.modifyDialog.closeDialog();
      },
      editRobot(index) {
        console.log("编辑机器人:", index);
        this.$refs.buildDialog.openDialog();
      },
      deleteRobot(index) {
        console.log("删除机器人:", index);
        this.batchAry.splice(index, 1);
      },
      deleteAll() {
        let deleteVec = [];
        this.batchAry.forEach(item => {
          if (item.isSelect == true) {
            deleteVec.push(item);
          }
        });
        deleteVec.forEach(item => {
          let index = this.batchAry.indexOf(item);
          if (index >= 0) {
            this.batchAry.splice(index, 1);
          }
        })

      },
      _inputEvent(event, type) {

      },
      toggleBtn(event) {
        let index = event.type;
        this.batchAry[index].isSelect = !this.batchAry[index].isSelect;
      }
    },
    components: {
      'my-button': MyButton,
      'nav-footer': NavFooter,
      'build-dialog': BuildDialog,
      'batch-dialog': BatchDialog,
      'modify-dialog': ModifyDialog,
      'toggle-button': ToggleButton
    }
  }
</script>

<style   scoped type="text/stylus" lang="stylus">
  @import "./stylus/server.styl";
</style>
