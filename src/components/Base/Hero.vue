<template>
  <div class="">
    <v-img
      :src="src"
      :aspect-ratio="aspectRatio" 
      class="image"
    >
      <v-layout column :style="styles" :class="['content', justifyClass]">
        <slot></slot>
      </v-layout>
    </v-img>
  </div>
</template>

<script>
import { VImg } from "vuetify/lib";

export default {
  name: "Hero",
  components: { VImg },
  props: ['src', 'size', 'alignment'],
  computed: {
    justifyClass: function () {
      switch(this.alignment) {
        case "top":
          return "justify-start";
        case "middle":
          return "justify-center";
        case "bottom":
          return "justify-end";
      }
    },
    aspectRatio: function () {
      switch(this.size) {
        case "large":
          return 375/502;
        case "medium":
          return 458/375;
        case "small":
          return 375/349;
        case "x-small":
          return 375/187;
        default:
          return 16/9;
      }
    },
    styles: function () {
      switch(this.size) {
        case "large":
          return { padding: '120px 40px' };
        case "medium":
          return { padding: '96px 40px' };
        case "small":
          return { padding: '48px 40px' };
        case "x-small":
          return { padding: '56px 32px' };
        default:
          return {};
      }
    }
  }
};
</script>

<style lang="css" scoped>
  .content {
    background: rgba(0, 0, 0, 0.5);
    height: 100%;
    width: 100%;
    color: white;
  }
</style>
