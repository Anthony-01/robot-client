<template>
    <!--:close-on-click-modal="false == true"-->
    <div class="modify-wrapper">
      <el-dialog
        title="批量修改属性"
        :visible.sync="onlyVisible"
        class="m-wrapper"

      >
        <div class="content-wrapper">
          <div class="line"></div>
          <div class="split" style="margin-top: 23px;">批量修改游戏</div>
          <div class="game">
            <div class="title"><span>游戏1:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
            <div class="title"><span>游戏2:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
            <div class="title"><span>游戏3:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
          </div>
          <div class="split" style="margin-top: 23px;">批量修改行为</div>
          <div class="select-wrapper">
            <div class="title"><span>行为模型1:</span></div>
            <select>
              <option value="0">皇帝</option>
              <option value="1">地主</option>
              <option value="2">贫农</option>
            </select>
          </div>
          <div class="split" style="margin-top: 23px;">批量修改时间</div>
          <div class="select-wrapper">
            <div class="title"><span>上线时间:</span></div>
            <el-time-picker
              arrow-control
              v-model="timeOnline"
              :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
              }"
              class="timeSelect"
              placeholder="任意时间点">
            </el-time-picker>
            <div class="title"><span>下线时间:</span></div>
            <el-time-picker
              arrow-control
              v-model="timeOffline"
              :picker-options="{
                selectableRange: '18:30:00 - 20:30:00'
              }"
              class="timeSelect"
              placeholder="任意时间点">
            </el-time-picker>
          </div>
          <div class="split" style="margin-top: 23px;">批量添加加分</div>
          <div class="select-wrapper">
            <div class="title"><span>加分规则:</span></div>
            <select>
              <option value="0">钱不多</option>
              <option value="1">钱不少</option>
              <option value="2">钱正好</option>
            </select>
          </div>
          <div class="btn-close">
            <my-button :commonSrc="agreeSrc" class="agree-btn" eventName="agree-event" @agree-event="_close"></my-button>
            <my-button :commonSrc="closeSrc" class="close-btn" eventName="close-event" @close-event="_close"></my-button>
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
        onlyVisible: this.modifyDialog,
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
        this.$emit("closeModifyDialog");
      },
      closeDialog() {
        this.onlyVisible = false;
      },
      openDialog() {
        this.onlyVisible = true;
      }
    },
    props: {
      modifyDialog: {
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
  @import "./stylus/modify.styl";
</style>
