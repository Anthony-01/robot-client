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
                    <tr class="table-row table-title">
                      <th>模式A</th>
                      <th>模式B</th>
                      <th>模式C</th>
                      <th>模式D</th>
                    </tr>
                    <tr v-for="item in [1,1,1,1]" class="table-row">
                      <td class="row-item">60%</td>
                      <td class="row-item">25%</td>
                      <td class="row-item">10%</td>
                      <td class="row-item">50%</td>
                    </tr>
                  </table>
                </div>
              </div>

            </div>
          </div>
          <div class="two" v-for="(item, index) in module">
            <div class="left two-item">
              <div class="back-split">模式{{item[0]}}</div>
              <div class="module-content">
                <div class="qiang-option content-item">
                  <div class="title">
                    <div class="txt">
                      <span>抢庄选项:</span>
                    </div>
                    <div class="option">
                      <!--<input type="checkbox" class="toggle select-option" id="buqiang1"><label for="buqiang1">不抢</label>-->
                      <!--@click.native="modules[0].option1.btn1 = !modules[0].option1.btn1"-->
                      <!--:select.sync="modules[0].option1.btn1"-->
                      <toggle-button class="toggle select-option"   v-model="modules[0].option1.btn1" ></toggle-button><span>不抢</span>
                    </div>
                  </div>
                  <div class="qiang-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>
                  <div class="qiang-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="">
                      <option value="0">抢 2 倍</option>
                      <option value="1">抢 4 倍</option>
                      <option value="2">抢 8 倍</option>
                    </select>
                  </div>
                </div>
                <div class="tui-option  content-item">
                  <div class="title">
                    <div class="txt">
                      <span>推注选项:</span>
                    </div>
                    <div class="option">
                      <input type="checkbox" class="toggle select-option" :id="'butui' + index"><label :for="'butui' + index">不推注</label>
                    </div>
                  </div>
                  <div class="tui-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型推注</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>

                </div>
                <div class="xia-option  content-item">
                  <div class="title">
                    <div class="txt">
                      <span>下庄选项:</span>
                    </div>
                    <div class="option">
                      <input type="checkbox" class="toggle select-option" :id="'difen1' + index"><label :for="'difen1' + index">下底分</label>
                    </div>

                  </div>
                  <div class="xia-item two-option">
                    <div class="option-wrapper">
                      <div class="option">
                        <input type="checkbox" class="toggle select-option" :id="'difen2' + index"><label :for="'difen2' + index">2 倍</label>
                      </div>
                      <div class="option">
                        <input type="checkbox" class="toggle select-option" :id="'difen3' + index"><label :for="'difen3' + index">4 倍</label>
                      </div>
                    </div>

                  </div>
                  <div class="xia-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型推注</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="right two-item">
              <div class="back-split">模式{{item[1]}}</div>
              <div class="module-content">
                <div class="qiang-option content-item">
                  <div class="title">
                    <div class="txt">
                      <span>抢庄选项:</span>
                    </div>
                    <div class="option">
                      <input type="checkbox" class="toggle select-option" id="buqiang"><label for="buqiang">不抢</label>
                    </div>
                  </div>
                  <div class="qiang-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>
                  <div class="qiang-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="">
                      <option value="0">抢 2 倍</option>
                      <option value="1">抢 4 倍</option>
                      <option value="2">抢 8 倍</option>
                    </select>
                  </div>
                </div>
                <div class="tui-option  content-item">
                  <div class="title">
                    <div class="txt">
                      <span>推注选项:</span>
                    </div>
                    <div class="option">
                      <input type="checkbox" class="toggle select-option" id="butui"><label for="butui">不推注</label>
                    </div>
                  </div>
                  <div class="tui-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型推注</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>

                </div>
                <div class="xia-option  content-item">
                  <div class="title">
                    <div class="txt">
                      <span>下庄选项:</span>
                    </div>
                    <div class="option">
                      <input type="checkbox" class="toggle select-option" id="difen1"><label for="difen1">下底分</label>
                    </div>

                  </div>
                  <div class="xia-item two-option">
                    <div class="option-wrapper">
                      <div class="option">
                        <input type="checkbox" class="toggle select-option" id="difen2"><label for="difen2">2 倍</label>
                      </div>
                      <div class="option">
                        <input type="checkbox" class="toggle select-option" id="difen3"><label for="difen3">4 倍</label>
                      </div>
                    </div>

                  </div>
                  <div class="xia-item">
                    <input type="checkbox" class="toggle select-option">
                    <select name="" >
                      <option value="0">任意牌型推注</option>
                      <option value="1">牌型一</option>
                      <option value="2">牌型二</option>
                    </select>
                  </div>
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
            {{test1}}
          </div>
        </div>
      </el-dialog>
    </div>
</template>

<script>
  import MyButton from "../myButton/MyButton.vue";
  import ToggleButton from '../myToggleButton/MyToggleButton.vue'
  import user from '../../store/user';

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
        closeSrc: "btn_close",
        module: [
          ["A", "B"],
          ["C", "D"]
        ],
        modules: [
          {
            option1: {
              btn1: false,
              btn2: false,
              btn3: false
            },
            option2: {
              btn1: false,
              btn2: false,
            },
            option3: {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: false,
            }
          },
          {
            option1: {
              btn1: false,
              btn2: false,
              btn3: false
            },
            option2: {
              btn1: false,
              btn2: false,
            },
            option3: {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: false,
            }
          },
          {
            option1: {
              btn1: false,
              btn2: false,
              btn3: false
            },
            option2: {
              btn1: false,
              btn2: false,
            },
            option3: {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: false,
            }
          },
          {
            option1: {
              btn1: false,
              btn2: false,
              btn3: false
            },
            option2: {
              btn1: false,
              btn2: false,
            },
            option3: {
              btn1: false,
              btn2: false,
              btn3: false,
              btn4: false,
            }
          }
        ]
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
      },
      onToggleBtn(event) {
        console.log(event.name);
        console.log(user.count);
        switch(event.name) {
          case "name1": {

          }
        }
      },
      testE(event) {
        console.log("hello", event);
      }
    },
    props: {
      actionDialog: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      test1() {
        return  user.count;
      }
    },
    components: {
      'my-button': MyButton,
      'toggle-button': ToggleButton
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  @import "./stylus/actionModule.styl";
</style>
