<template>
    <div class="toggle-wrapper"
         @click.prevent="onClick($event)"
    >
      <img :src="currentImage" class="img">
      <slot></slot>
    </div>
</template>

<script>
  import Vuex from 'vuex';

  export default {
    data() {
      return {
        image0: "",
        image1: "",
        isSelected: this.select
      }
    },
    model: {
      prop: 'select',
      event: 'change'
    },
    mounted() {
      import("@@/btn/" + this.commonSrc + "_0.png").then(src => {
        this.image0 = src;
      });
      import("@@/btn/" + this.commonSrc + "_1.png").then(src => {
        this.image1 = src;
      });
      console.log(this.select);
    },
    methods: {

      onClick(event) {
        this.isSelected = !this.isSelected;
        this.$emit('change', this.isSelected)
        let emitObj = {
          type: this.index,
          target: this,
          name: this.relation
        };
        this.$emit('toggle', emitObj);
        this.$emit('update:select', !this.select);
      },
      getSelected() {
        return this.isSelected;
      }
    },
    computed: {
      currentImage() {
        return this.select ? this.image1 : this.image0;
      }
    },
    props: {
      commonSrc: {
        type: String,
        default: "btn_toggle"
      },
      select: {
        type: Boolean,
        default: false
      },
      index: {
        type: Number,
        default: -1
      },
      relation: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style>
  .img{
    cursor: pointer;
  }
</style>
