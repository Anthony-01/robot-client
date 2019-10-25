<template>
    <div class="rule-wrapper">
      <el-dialog
        title="新建/编辑加分规则"
        :visible.sync="onlyVisible"
        class="r-wrapper"
        top="6vh"
        width="90%"
      >
        <div class="content-wrapper">
          <div class="line"></div>
          <div class="split">规则信息</div>
          <div class="other">
            <div class="id-wrapper module-wrapper">
              <span class="txt">模板ID:</span>
              <!--<div class="sex-radio">-->
                <input type="text" name="moduleId" class="module-input"/>
              <!--</div>-->
            </div>
            <div class="name-wrapper module-wrapper">
              <span class="txt">模板名称:</span>
              <!--<div class="sex-radio">-->
                <input type="text" name="moduleId" class="module-input"/>
              <!--</div>-->
            </div>
            <div class="extend">
              <span class="txt">选择继承对象:</span>
              <input type="text" class="extend-input">
              <my-button :commonSrc="extendSrc" class="btn-extend"></my-button>
            </div>
          </div>
          <div class="one">
            <div class="left one-item">
              <div class="back-split">即时加分</div>
              <div class="module-content">
                <div class="top item">
                  <div class="item-left">
                    <span class="txt">小于</span>
                    <input type="text" value="50" class="item-input">
                    <span class="txt">倍积分</span>
                  </div>
                  <div class="item-right">
                    <!--<span class="txt">即时加分</span>-->
                    <table class="item-table">
                      <tr class="item-title">
                        <th></th>
                        <th width="75px">概率</th>
                      </tr>
                      <tr class="item-row">
                        <td class="first">即时加分</td>
                        <td class="have-border">80%</td>
                      </tr>
                    </table>
                    <table class="item-table">
                      <tr class="item-title">
                        <th width="75px">上限</th>
                        <th width="75px">下限</th>
                      </tr>
                      <tr class="item-row">
                        <td class="have-border">5,000</td>
                        <td class="have-border">1,0000</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="bottom  item">
                  <div class="item-left">
                    <span class="txt">小于</span>
                    <input type="text" value="50" class="item-input">
                    <span class="txt">倍积分</span>
                  </div>
                  <div class="item-right">
                    <!--<span class="txt">即时加分</span>-->
                    <table class="item-table">
                      <tr class="item-title">
                        <th></th>
                        <th width="75px">概率</th>
                      </tr>
                      <tr class="item-row">
                        <td class="first">即时加分</td>
                        <td class="have-border">80%</td>
                      </tr>
                    </table>
                    <table class="item-table">
                      <tr class="item-title">
                        <th width="75px">上限</th>
                        <th width="75px">下限</th>
                      </tr>
                      <tr class="item-row">
                        <td class="have-border">5,000</td>
                        <td class="have-border">1,0000</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="right one-item">
              <div class="back-split">输完加分</div>
              <div class="module-content">
                <div class="item">
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="240px;"></th>
                      <th width="75px">概率</th>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">70%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">20%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">40%</td>
                    </tr>
                  </table>
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="75px">上限</th>
                      <th width="75px">下限</th>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>
          </div>
          <div class="one">
            <div class="left one-item two-left">
              <div class="back-split">未输完加分(未进行游戏)</div>
              <div class="module-content">
                <div class="item">
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="240px;"></th>
                      <th width="75px">概率</th>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">70%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">20%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">等待/旁观</span><input type="text" class="row-input" value="5"><span class="txt">秒后，加分</span></td>
                      <td class="have-border">40%</td>
                    </tr>
                  </table>
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="75px">上限</th>
                      <th width="75px">下限</th>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>
            <div class="right one-item">
              <div class="back-split">赢后减分</div>
              <div class="module-content">
                <div class="item">
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="240px;"></th>
                      <th width="75px">概率</th>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">高于</span><input type="text" class="row-input" value="5"><span class="txt">分后，减少</span></td>
                      <td class="have-border">70%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">减少</span></td>
                      <td class="have-border">20%</td>
                    </tr>
                    <tr class="item-row">
                      <td class="first"><span class="txt">减少</span></td>
                      <td class="have-border">40%</td>
                    </tr>
                  </table>
                  <table class="item-table">
                    <tr class="item-title">
                      <th width="75px">上限</th>
                      <th width="75px">下限</th>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                    <tr class="item-row">
                      <td class="have-border">5,000</td>
                      <td class="have-border">1,0000</td>
                    </tr>
                  </table>
                </div>

              </div>
            </div>
          </div>
          <div class="remarks">
            <div class="title">
              <span>备注:</span>
            </div>
            <textarea width="70%" height="85" wrap="virtual" class="remarks-box"></textarea>
          </div>
          <div class="btn-close">
            <my-button :commonSrc="agreeSrc" class="agree-btn" eventName="agree-event" @agree-event="_close"></my-button>
          </div>
        </div>

      </el-dialog>
    </div>
</template>

<script>
  import MyButton from "../myButton/MyButton.vue";
  export default {
    data() {
      return {
        onlyVisible: this.ruleDialog,
        name: "拉风的蘑菇",
        extendSrc: "btn_extend",
        timeOnline: null,
        timeOffline: null,
        clubId: 123129,
        agreeSrc: "btn_agree",
        closeSrc: "btn_close",
        module: [
          ["A", "B"],
          ["C", "D"]
        ]
      }
    },
    methods: {
      handleClose(done) {
        done();
      },
      _close() {
        console.log("关闭");
        this.$emit("closeRuleDialog");
      },
      closeDialog() {
        this.onlyVisible = false;
      },
      openDialog() {
        this.onlyVisible = true;
      }
    },
    props: {
      ruleDialog: {
        type: Boolean,
        default: false
      }
    },
    components: {
      'my-button': MyButton
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  @import "./stylus/rule.styl";
</style>
