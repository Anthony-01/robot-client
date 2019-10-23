<template>
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
        </div>

        <!--<div class="test" style="background: red;"></div>-->
        <!--<span slot="footer" class="dialog-footer ">-->
          <!--<el-button @click="_close">取 消</el-button>-->
          <!--<el-button type="primary" @click="_close">确 定</el-button>-->
        <!--</span>-->
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
        extendSrc: "btn_extend"
      }
    },
    methods: {
      handleClose(done) {
            done();
      },
      _close() {
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
