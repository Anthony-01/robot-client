<template>
  <div class="my-button-wrapper" @mouseup.prevent="onButtonUp" @mousedown.prevent="onButtonDown" @mouseout.prevent="onButtonUp">
    <img :src="currentSrc">
  </div>
</template>

<script>
  //  import src0 from ''

  export default {
    data() {
      return {
        imgSrc0: this.commonSrc.src0,
        imgSrc1: this.commonSrc.src1,
        currentSrc: this.commonSrc.src0
      }
    },
    mounted() {
      import('@@/btn/' + this.commonSrc + ".png").then(src => {
        this.imgSrc0 = src;
        this.currentSrc = src;
      });
//      import('../../assets/btn/' + this.commonSrc + "_1.png").then(src => {
//        this.imgSrc1 = src;
//      });
    },
    methods: {
      onButtonDown() {
//        console.log("点击事件down");
//        this.currentSrc = this.imgSrc1;
      },
      onButtonUp() {
//        console.log("点击事件down");
        this.currentSrc = this.imgSrc0;
      }
    },
    props: {
      commonSrc: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
  .my-button-wrapper{
    cursor: pointer;
  }
</style>
