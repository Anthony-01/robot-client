<template>
    <div class="font-wrapper">
      <ul class="font-ul">
        <li v-for="item in fontStr">
          <img :src="">
        </li>
      </ul>
    </div>
</template>

<script>


  export default {
    data() {
      return {
        fontStr: this.myNum.toString().split(""),
        numSrcAry: []
      }
    },
    mounted() {
      //导入字体
      import("../../assets" + this.fontSrc + ".png").then(num => {
        console.log(num);
        this._setFont(num);
      })
    },
    methods: {
      _getSrc(num) {
        //返回地址
      },
      _setFont(num) {

      }
    },
    props: {
      myNum: {
        type: Number,
        default: 0
      },
      fontSrc: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
</style>
