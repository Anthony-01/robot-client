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
          <img src="@@/btn/btn_config.png" @click="onConfig" class="img-btn-config">
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
            <th class="table-title-item" width="70" style="flex-grow:2">序号</th>
            <th class="table-title-item" width="70" style="flex-grow:2">俱乐部ID</th>
            <th class="table-title-item" width="70" style="flex-grow:3">俱乐部昵称</th>
            <th class="table-title-item" width="70" style="flex-grow:2">机器人数量</th>
            <th class="table-title-item" width="70" style="flex-grow:8">操作项</th>
          </tr>
          <tr v-for="(item, index) in batchAry" class="table-row table-body">
            <td class="table-body-item" width="25"  style="flex-grow:1"><input
              name="Fruit"
              type="checkbox"
              class="check-input"
              v-model="item.isSelect"
              @click="_inputEvent($event,index)"
            /></td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:8">
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
        <div class="sub-wrapper">
          <my-button :commonSrc="modifyAllSrc" class="sub-button" eventName="modify-event" @modify-event="modifyEvent"></my-button>
          <my-button :commonSrc="deleteAllSrc" class="sub-button"></my-button>
        </div>

      </div>
      <nav-footer class="nav-footer"></nav-footer>
      <div class="footer">服务器修改模板，里面可修改机器人属性，支持跨页全选操作。机器人带的积分，除非输光，第二次上线时，最好保持上次的值，另外可设定一个最高值，比如10万，高于则可回收。</div>
      <build-dialog :dialogVisible="buildDialog" @closeDialog="closeDialog" ref="buildDialog"></build-dialog>
      <batch-dialog :batchVisible="batchAddDialog" @closeBatchDialog="closeBatchDialog" ref="batchDialog"></batch-dialog>
      <modify-dialog :modifyDialog="modifyAllDialog" @closeModifyDialog="closeModifyDialog" ref="modifyDialog"></modify-dialog>
    </div>
</template>

<script>
  import MyButton from '../myButton/MyButton.vue';
  import NavFooter from '../navFooter/NavFooter.vue';
  import BuildDialog from "../accompony/Accompony.vue";
  import BatchDialog from "../batchAdd/BatchAdd.vue"
  import ModifyDialog from "../modifyAll/ModifyAll.vue"
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
        //表格数据
        batchAry: [],
        infoTip: "全选",
        btnCancel: false,
        //dialog
        buildDialog: false,
        batchAddDialog: false,
        modifyAllDialog: false
      }
    },
    mounted() {
      setTimeout(() => {
        this.batchAry = [
          {
            isSelect: false
          },
          {
            isSelect: true
          },
          {
            isSelect: false
          }
        ]
      }, 2000)
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
      }
    },
    components: {
      'my-button': MyButton,
      'nav-footer': NavFooter,
      'build-dialog': BuildDialog,
      'batch-dialog': BatchDialog,
      'modify-dialog': ModifyDialog
    }
  }
</script>

<style   scoped type="text/stylus" lang="stylus">
  @import "./stylus/server.styl";
</style>
