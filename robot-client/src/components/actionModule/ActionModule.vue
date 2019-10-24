<template>
    <div class="action-wrapper">
      <el-dialog
        title="新建/编辑行为模板"
        :visible.sync="onlyVisible"
        class="a-wrapper"
        top="6vh"
        width="90%"
      >
        <div class="content-wrapper">
          <div class="line"></div>
          <div class="one">
            <div class="left">
              <div class="id left-item">
                <div class="title">
                  <span>模板ID:</span>
                </div>
                <input type="text" class="left-input">
              </div>
              <div class="name  left-item">
                <div class="title">
                  <span>模板名称:</span>
                </div>
                <input type="text" class="left-input">
              </div>
              <div class="game  left-item">
                <div class="title">
                  <span>对应游戏:</span>
                </div>
                <input type="text" class="left-input">
              </div>
              <div class="extend  left-item">
                <div class="title">
                  <span>选择继承对象:</span>
                </div>
                <select class="left-input extend-select">
                  <option value="0">继承1</option>
                  <option value="1">继承2</option>
                  <option value="2">继承3</option>
                  <option value="3">继承4</option>
                </select>
                <my-button :commonSrc="extendSrc" class="btn-extend"></my-button>
              </div>
            </div>
            <div class="right">
              <div class="back-split">牛牛桌子底分</div>
              <div class="niu-content">
                <div class="niu-left">
                  <div class="first left-item">
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分以下</span>
                    </div>
                  </div>
                  <div class="second left-item">
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分-</span>
                    </div>
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分</span>
                    </div>
                  </div>
                  <div class="third left-item">
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分-</span>
                    </div>
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分</span>
                    </div>
                  </div>
                  <div class="fourth left-item">
                    <input type="text" class="niu-input">
                    <div class="txt">
                      <span>倍  底分以上</span>
                    </div>
                  </div>
                </div>
                <div class="niu-right">
                  <table class="niu-table">
                    <tr>
                      <th>模式A</th>
                      <th>模式B</th>
                      <th>模式C</th>
                      <th>模式D</th>
                    </tr>
                    <tr v-for="item in [1,1,1,1]">
                      <td>60%</td>
                      <td>25%</td>
                      <td>10%</td>
                      <td>50%</td>
                    </tr>
                  </table>
                </div>
              </div>

            </div>
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
        onlyVisible: this.actionDialog,
        name: "拉风的蘑菇",
        extendSrc: "btn_extend",
        timeOnline: null,
        timeOffline: null,
        clubId: 123129,
        agreeSrc: "btn_agree",
        closeSrc: "btn_close"
      }
    },
    methods: {
      handleClose(done) {
        done();
      },
      _close() {
        console.log("关闭");
        this.$emit("closeActionDialog");
      },
      closeDialog() {
        this.onlyVisible = false;
      },
      openDialog() {
        this.onlyVisible = true;
      }
    },
    props: {
      actionDialog: {
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
  @import "./stylus/actionModule.styl";
</style>
