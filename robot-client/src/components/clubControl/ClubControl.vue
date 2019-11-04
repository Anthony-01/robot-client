<template>
    <div class="club-wrapper">
      <!--俱乐部管理-->
      <div class="header">
        <img src="@@/btn/title_club_server.png" class="header-title">
      </div>
      <div class="search">
        <span class="search-txt">俱乐部ID：</span>
        <input type="text" class="club-id">
        <span class="search-txt">俱乐部名称：</span>
        <input type="text" class="club-name" readonly="readonly" v-model="clubName">
        <div class="btn-config">
          <!--<img src="./resource/btn_config.png" @click="onConfig" class="img-btn-config">-->
          <my-button :commonSrc="configSrc" class="img-btn-config" eventName="onConfig" @onConfig="onConfig"></my-button>
        </div>
      </div>
      <div class="show-list">
        <table class="club-table" width="100%">
          <tr class="table-row table-title">
            <th class="table-title-item" width="25" style="flex-grow:1">      </th>
            <th class="table-title-item" width="70" style="flex-grow:2">序号</th>
            <th class="table-title-item" width="70" style="flex-grow:2">俱乐部ID</th>
            <th class="table-title-item" width="70" style="flex-grow:3">俱乐部昵称</th>
            <th class="table-title-item" width="70" style="flex-grow:2">机器人数量</th>
            <th class="table-title-item" width="70" style="flex-grow:8">操作项</th>
          </tr>
          <tr v-for="(item, index) in currentTable" class="table-row table-body">
            <td class="table-body-item" width="25"  style="flex-grow:1">
              <!--<input-->
              <!--name="Fruit"-->
              <!--type="checkbox"-->
              <!--class="check-input"-->
              <!--v-model="item.isSelect"-->
              <!--@click="_inputEvent($event,index)"-->
             <!--/>-->
              <toggle-button class="check-input" :select="item.isSelect" :index="index" @toggle="toggleBtn"></toggle-button>
            </td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.index}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.id}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:3">{{item.nickName}}</td>
            <td class="table-body-item" width="70"  style="flex-grow:2">{{item.robotCount}}</td>
            <td class="table-body-item table-item-operate" width="70"  style="flex-grow:8">
              <div height="36" class="table-btn-wrapper">
                <my-button class="table-btn"  :commonSrc="editSrc"></my-button>
                <my-button class="table-btn" height="36" :commonSrc="deleteSrc"  :targetIndex="index" eventName="deleteClub" @deleteClub="deleteClub"></my-button>
              </div>

            </td>
          </tr>
        </table>
      </div>
      <div class="btn-wrapper">
        <div class="btn-all">
          <toggle-button class="check-input" :select="btnCancel"  @toggle="_cancel"></toggle-button>
          <!--<input type="checkbox" @click="_cancel" v-model="btnCancel"><label >{{infoTip}}</label>-->
          <span class="txt">{{infoTip}}</span>
        </div>
        <my-button :commonSrc="deleteAllSrc"  eventName="deleteAll" @deleteAll="deleteAll" ></my-button>
      </div>
      <nav-footer class="nav-footer"></nav-footer>
<!--
      <div class="footer">服务器修改模板，里面可修改机器人属性，支持跨页全选操作。机器人带的积分，除非输光，第二次上线时，最好保持上次的值，另外可设定一个最高值，比如10万，高于则可回收。</div>
-->
    </div>
</template>

<script>
  import NavFooter from '../navFooter/NavFooter.vue';
  import MyButton from '../myButton/MyButton.vue';
  import ToggleButton from '../myToggleButton/MyToggleButton.vue';


  export default {
    data() {
      return {
        clubAry: [],
        clubName: "暂未获取到俱乐部名称",
        editSrc: "btn_edit",
        deleteSrc: "btn_delete",
        deleteAllSrc: "btn_delete_all",
        configSrc: "btn_config",
        infoTip: "全选",
        btnCancel: false,
        currentTable: [{
          index: '001',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '002',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '003',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '004',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '005',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '006',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '007',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }, {
          index: '008',
          id: '1688888',
          nickName: '拉风的大蘑菇',
          robotCount: "188",
          isSelect: false
        }]
      }
    },
    mounted() {
      //模拟异步获得信息过程
      setTimeout(() => {
        this.clubAry = [
          {
            index: "001",
            id: "1688888",
            name: "紫禁之巅",
            mcCount: 188
          },
          {
            index: "002",
            id: "1688882",
            name: "人世间",
            mcCount: 186
          },
          {
            index: "003",
            id: "1688883",
            name: "天庭",
            mcCount: 152
          }
        ]
      }, 50)
    },
    methods: {
      onConfig() {
        console.log("确认选择");
      },
      _inputEvent(event, type) {

      },
      _cancel() {
        this.btnCancel = !this.btnCancel;
        this.currentTable.forEach(item => {
          item.isSelect = this.btnCancel;
        });
      },
      deleteClub(index) {
        console.log("删除俱乐部:", index);
        this.currentTable.splice(index, 1);
      },
      deleteAll() {
        let deleteVec = [];
        this.currentTable.forEach(item => {
          if (item.isSelect == true) {
            deleteVec.push(item);
          }
        });
        deleteVec.forEach(item => {
          let index = this.currentTable.indexOf(item);
          if (index >= 0) {
            this.currentTable.splice(index, 1);
          }
        })

      },
      toggleBtn(event) {
        let index = event.type;
        this.currentTable[index].isSelect = !this.currentTable[index].isSelect;
      }

    },
    components: {
      "nav-footer": NavFooter,
      "my-button": MyButton,
      'toggle-button': ToggleButton
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  @import "./stylus/clubControl.styl";
</style>
