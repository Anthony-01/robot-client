<template>
    <div class="my-button-wrapper"
         @mouseup.prevent="onButtonUp"
         @mousedown.prevent="onButtonDown"
         @mouseout.prevent="onButtonUp"
         @click.prevent="onClick"
    >
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
      import('@@/btn/' + this.commonSrc + "_0.png").then(src => {
        this.imgSrc0 = src;
        this.currentSrc = src;
      });
      import('@@/btn/' + this.commonSrc + "_1.png").then(src => {
        this.imgSrc1 = src;
      });
    },
    methods: {
      onButtonDown() {
        this.currentSrc = this.imgSrc1;
      },
      onButtonUp() {
        this.currentSrc = this.imgSrc0;
      },
      onClick() {
        if (this.eventName.length === 0) return;
        this.$emit(this.eventName);
      }
    },
    props: {
      commonSrc: {
        type: String,
        default: ""
      },
      eventName: {
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
