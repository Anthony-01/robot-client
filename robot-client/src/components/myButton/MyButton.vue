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
        imgSrc0: "",
        imgSrc1: "",
        currentSrc: ""
      }
    },
    mounted() {
      import('../../assets/' + this.commonSrc + "_0.png").then(src => {
        this.imgSrc0 = src;
        this.currentSrc = src;
      });
      import('../../assets/' + this.commonSrc + "_1.png").then(src => {
        this.imgSrc1 = src;
      });
    },
    methods: {
      onButtonDown() {
//        console.log("点击事件down");
        this.currentSrc = this.imgSrc1;
      },
      onButtonUp() {
//        console.log("点击事件down");
        this.currentSrc = this.imgSrc0;
      }
    },
    props: {
      commonSrc: {
        type: String,
        default: "common"
      }
    }
  }
</script>

<style>
  .my-button-wrapper{
    cursor: pointer;
  }
</style>
