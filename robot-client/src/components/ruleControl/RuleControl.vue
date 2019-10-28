<template>
  <div class="rule-wrapper">
    <div class="header">
      <img src="@@/btn/title_rule.png" class="header-title">
    </div>
    <div class="top">
      <div class="left">
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
              <my-button class="table-btn"  :commonSrc="editSrc"    :targetIndex="index" eventName="editModule" @editModule="editModule"></my-button>
              <my-button class="table-btn" height="36" :commonSrc="deleteSrc" :targetIndex="index" eventName="deleteModule" @deleteModule="deleteModule"></my-button>
            </div>

          </td>
        </tr>
      </table>
    </div>
    <nav-footer class="nav-footer"></nav-footer>
    <rule-dialog :ruleDialog="ruleDialog" @closeRuleDialog="closeRuleDialog" ref="RuleDialog"></rule-dialog>

  </div>

</template>

<script>
  import MyButton from "../myButton/MyButton.vue";
  import NavFooter from '../navFooter/NavFooter.vue';
  import RuleDialog from '../rule/Rule.vue';

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
        ruleDialog: false
      }
    },
    methods: {
      actionEvent() {
        this.$refs.RuleDialog.openDialog();
      },
      closeRuleDialog() {
        this.$refs.RuleDialog.closeDialog();
      },
      deleteModule(index) {
        console.log("删除模板:", index);
        this.currentTable.splice(index, 1);
      },
      editModule(index) {
        this.$refs.RuleDialog.openDialog();
      }
    },
    components: {
      'my-button': MyButton,
      'nav-footer': NavFooter,
      'rule-dialog': RuleDialog
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  @import "./stylus/ruleControl.styl";
</style>

