<template>
  <!--:close-on-click-modal="false == true"-->
    <div class="accompany-wrapper">
      <el-dialog
        title="新建/编辑陪玩"
        :visible.sync="onlyVisible"
        class="d-wrapper"
        >
        <div class="content-wrapper">
          <div class="line"></div>
          <div class="split">基本信息</div>
          <div class="base-info">
            <div class="avatar">avatar</div>
            <div class="info">
              <div class="number">
                <span class="txt">序号: </span><span class="index">001</span>
                <span class="txt">ID: </span><span class="id">254561</span>
              </div>
              <div class="nick-name">
                <span class="txt">昵称:</span>
                <input type="text" class="name" readonly="readonly" v-model="name"/>
              </div>
              <div class="other">
                <div class="sex">
                  <span class="txt">性别:</span>
                  <div class="sex-radio">
                    <label><input type="radio" name="sex"/> 男</label>
                    <label><input type="radio" name="sex"/> 女</label>
                  </div>
                </div>
                <div class="extend">
                  <span class="txt">选择继承对象:</span>
                  <input type="text" class="extend-input">
                  <my-button :commonSrc="extendSrc" class="btn-extend"></my-button>
                </div>
              </div>
            </div>
          </div>
          <div class="split">陪玩属性</div>
          <div class="select-wrapper">
            <div class="title"><span>游戏类型1:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
            <div class="title"><span>行为模型1:</span></div>
            <select>
              <option value="0">皇帝</option>
              <option value="1">地主</option>
              <option value="2">贫农</option>
            </select>
          </div>
          <div class="select-wrapper">
            <div class="title"><span>游戏类型2:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
            <div class="title"><span>行为模型2:</span></div>
            <select>
              <option value="0">皇帝</option>
              <option value="1">地主</option>
              <option value="2">贫农</option>
            </select>
          </div>
          <div class="select-wrapper">
            <div class="title"><span>游戏类型3:</span></div>
            <select>
              <option value="0">斗地主</option>
              <option value="1">牛牛</option>
              <option value="2">麻将</option>
            </select>
            <div class="title"><span>行为模型3:</span></div>
            <select>
              <option value="0">皇帝</option>
              <option value="1">地主</option>
              <option value="2">贫农</option>
            </select>
          </div>
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
          <div class="select-wrapper">
            <div class="title"><span>俱乐部ID:</span></div>
            <input type="text" class="club-id" v-model="clubId">
          </div>
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
        onlyVisible: this.dialogVisible,
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
        this.$emit("closeDialog");
      },
      closeDialog() {
        this.onlyVisible = false;
      },
      openDialog() {
        this.onlyVisible = true;
      }
    },
    props: {
      dialogVisible: {
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
  @import "./stylus/accompony.styl";
</style>
