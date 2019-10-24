<template>
    <div class="module-wrapper">
      <div class="header">
        <img src="@@/btn/title_club_server.png" class="header-title">
      </div>
      <div class="top">
        <div class="left">
          <div class="title">
            <span>对应游戏:</span>
          </div>
          <select>
            <option value="0">牛牛</option>
            <option value="1">百家乐</option>
            <option value="2">斗地主</option>
            <option value="3">麻将</option>
          </select>
        </div>
        <div class="right">
          <my-button :commonSrc="moduleSrc" eventName="action-event" @action-event="actionEvent"></my-button>
        </div>
      </div>
      <div class="show-list">
        <table class="club-table" width="100%">
          <tr class="table-row table-title">
            <th class="table-title-item" width="25" style="flex-grow:1">模板ID</th>
            <th class="table-title-item" width="70" style="flex-grow:2">模板名称</th>
            <th class="table-title-item" width="70" style="flex-grow:10">备注</th>
            <th class="table-title-item" width="70" style="flex-grow:3">操作项</th>
          </tr>
          <tr v-for="(item, index) in currentTable" class="table-row table-body">
            <td class="table-body-item" width="25"  style="flex-grow:1">001</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">复选框</td>
            <td class="table-body-item" width="70"  style="flex-grow:10">复选框</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:3">
              <div height="36" class="table-btn-wrapper">
                <my-button class="table-btn"  :commonSrc="editSrc"></my-button>
                <my-button class="table-btn" height="36" :commonSrc="deleteSrc"></my-button>
              </div>

            </td>
          </tr>
        </table>
      </div>
      <nav-footer class="nav-footer"></nav-footer>
      <action-dialog :actionDialog="actionDialog" @closeActionDialog="closeActionDialog" ref="ActionDialog"></action-dialog>

    </div>

</template>

<script>
  import MyButton from "../myButton/MyButton.vue";
  import NavFooter from '../navFooter/NavFooter.vue';
  import ActionDialog from '../actionModule/ActionModule.vue';

  export default {
    data() {
      return {
        moduleSrc: 'btn_add_module',
        editSrc: "btn_edit",
        deleteSrc: "btn_delete",
        deleteAllSrc: "btn_delete_all",
        currentTable: [{
          isSelect: false
        }],
        actionDialog: true
      }
    },
    methods: {
      actionEvent() {
        this.$refs.ActionDialog.openDialog();
      },
      closeActionDialog() {
        this.$refs.ActionDialog.closeDialog();
      }
    },
    components: {
      'my-button': MyButton,
      'nav-footer': NavFooter,
      'action-dialog': ActionDialog
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  @import "./stylus/moduleControl.styl";
</style>
