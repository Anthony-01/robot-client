<template>
    <div class="wrapper">
      <div class="header">
        <img src="./resource/login_logo.png" >
      </div>
      <div class="box">
        <!--<el-button type="primary" @click="_login">登录</el-button>-->
        <!--<el-button type="primary" style="margin-left: 10px" @click="_register">注册</el-button>-->
        <!--<el-button type="primary" style="margin-left: 10px" @click="_forgetPwd">忘记密码</el-button>-->
        <!--登录模块-->


        <el-input placeholder="账户" v-model="username" clearable class="name-input"></el-input>
        <div class="pwd-div">
          <el-input placeholder="密码" v-model="password" show-password class="pwd-input"></el-input>
          <!--忘记密码按钮-->
          <el-button type="text" class="btn-forget">忘记密码</el-button>
        </div>

        <!--<span class="forget">忘记密码</span>-->
        <div class="checkcha-div">
          <input type="text" class="check-input" placeholder="请输入验证码" v-model="inputCheckcha">
          <canvas class="checkcha" width="115" height="50" id="auth-code" @click="_changeCheck">{{checkcha}}</canvas>
        </div>
        <el-button type="success" class="btn-login" @click="_login">登录</el-button>

      </div>
      <div class="footer">
        <span>Copyright © Foxuc</span>
        <br/>
        <span>Powered by Vue.js</span>
      </div>
    </div>
</template>

<script>

  import writeAuthCode from '../../utils/checkCha/checkCha.js';
  import {Test} from '../../utils/test';
  import {ttt} from '../../utils/web/MyTs';
  //如何实现通信模块
  //通信模块的对外接口
  //通信存在的时候则进入main页面
  //不存在的时候就login页面并且报错
  //logonFrame如何调动组件的（×）
  //logonFrame必须和组件结合在一起onGameMessage和logonFrame如何结合在一起，自定义事件的形式通知？
  //每个组件里面new一个Frame，frame暴露接口来和Vue组件通信
  export default {
    data() {
      return {
        username: '',
        password: '',
        checkcha: "",
        inputCheckcha: ''
      }
    },
    created() {
      let one = Test.getIns();
      one.say();
      Test.setNum(10086);
      one.say();
      let tt = new ttt.MyTs();
    },
    mounted() {
      //等待dom更新以后再调用
      this.$nextTick(() => {
        this._getCheckcha();
      })
      console.log(this.$store.state.test);
    },
    methods: {
      _login() {
        if (this.inputCheckcha.toString() !== this.checkcha) {
          this.$alert('验证码输入错误', '输入错误', {
            confirmButtonText: '确定',
//            callback: action => {
//              this.$message({
//                type: 'info',
//                message: `action: ${ action }`
//              });
//            }
          }).catch(err => {
            console.log(err);
          });
          this.inputCheckcha = '';
          console.log("弹窗显示验证码错误!");
          return ;
        }
        console.log("验证码正确");
        console.log(this.$router.push({path: 'main/mainControl'}));
      },
      _register() {

      },
      _forgetPwd() {

      },
      _getCheckcha() {
        this.checkcha = this._getRandomCheck();
        let options = {
          canvasId: "auth-code",/**canvas的id*/
          txt: this.checkcha,/**传入验证码内容*/
          height: 50,/**验证码高度 */
          width: 115/**验证码宽度 */
        };
        writeAuthCode(options);
      },
      _getRandomCheck() {
        return Math.random().toString().substring(2,6);
      },
      _changeCheck() {
        this._getCheckcha();
      }
    }
  }
</script>
<style lang="stylus" type="text/stylus" scoped>
  @import './stylus/login.styl';
</style>
