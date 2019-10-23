<template>
    <div class="nav-footer-wrapper">
      <div class="total">共 <span style="color:#f7902b">{{totalPages}}</span> 页</div>
      <div class="right-wrapper">
        <div class="btn-first btn"  @mouseup.prevent="onButtonUp($event)" @mousedown.prevent="onButtonDown($event)" @mouseout.prevent="onButtonOut($event)">
          <!--<el-card shadow="hover">-->
            首页
          <!--</el-card>-->
        </div>
        <div class="btn-pre btn" @mouseup.prevent="onButtonUp($event)" @mousedown.prevent="onButtonDown($event)" @mouseout.prevent="onButtonOut($event)">上一页</div>
        <div class="current-page btn">{{currentIndex}}</div>
        <div class="btn-next btn btn" @mouseup.prevent="onButtonUp($event)" @mousedown.prevent="onButtonDown($event)" @mouseout.prevent="onButtonOut($event)">下一页</div>
        <div class="btn-last btn" @mouseup.prevent="onButtonUp($event)" @mousedown.prevent="onButtonDown($event)" @mouseout.prevent="onButtonOut($event)">尾页</div>
        <input type="text" class="goto" v-model="goTo">
        <div class="btn-go btn" @mouseup.prevent="onButtonUp($event)" @mousedown.prevent="onButtonDown($event)" @mouseout.prevent="onButtonOut($event)">GO</div>
      </div>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        totalPages: Math.ceil(this.totalLength / 8),
        goTo: 1,
        currentBtn: 1
      }
    },
    props: {
      totalLength: {
        type: Number,
        default: 0
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    methods: {
      onButtonUp(event) {
//        console.log(event);
      },
      onButtonDown(event){
        console.log("down");
      },
      onButtonOut(event) {

      }
    }
  }
</script>

<style  scoped type="text/stylus" lang="stylus">
  .nav-footer-wrapper
    display: flex;
    justify-content space-between
    background #f9fbfd;
    width: 100%;
    height: 40px;
    border 1px solid #e2e6ec;
    .total
      height 100%;
      line-height 40px;
      padding-left: 10px;
    .right-wrapper
      display flex;
      .active
        background: #fff;
        color: bisque;
      .btn
        height 100%;
        line-height 40px;
        cursor: pointer;
        border-left: 1px solid #e2e6ec;
        padding 0 10px;
      .current-page
        width: 45px;
        background: #fc9409
        color: #fff
      .goto
        margin auto 0;
        width 30px;
        height 20px;
      .btn-go
        border-left: 0
        color: #178eb9
</style>
