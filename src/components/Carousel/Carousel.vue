<template>
  <carousel
    :class="getClass"
    :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
    :spacePadding="0"
    :mouse-drag="true"
    :loop="true"
    :centerMode="false"
    :scrollPerPage="false"
    :navigationEnabled="sideNav"
    :paginationEnabled="getNavEnabled"
    :paginationPosition="getNavPosition"
    :paginationColor="getNavColor"
    :paginationActiveColor="getNavActiveColor"
  >
    <slot />
  </carousel>
</template>

<script>
import { Carousel } from "vue-carousel";

export default {
  // This is named as such to avoid collision with the existing <carousel />
  name: "CarouselComponent",
  components: { Carousel },
  props: {
    dotNav: Boolean,
    barNav: Boolean,
    sideNav: Boolean
  },
  created: function() {
    console.table({
      dotNav: this.dotNav,
      barNav: this.barNav
    });
  },
  computed: {
    getNavEnabled: function() {
      return this.dotNav || this.barNav;
    },
    getNavPosition: function() {
      if (this.dotNav) {
        return "top";
      } else if (this.barNav) {
        return "bottom-overlay";
      }
    },
    getNavColor: function() {
      if (this.dotNav) {
        return "#efefef";
      } else if (this.barNav) {
        return "rgba(255,255,255,0.6)";
      }
    },
    getNavActiveColor: function() {
      if (this.dotNav) {
        return "#000000";
      } else if (this.barNav) {
        return "rgba(255,255,255,1)";
      }
    },
    getClass: function() {
      let elemClasses = ["carousel"];
      if (this.dotNav) elemClasses.push("dot-nav");
      if (this.barNav) elemClasses.push("bar-nav");

      return elemClasses.join(" ");
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.dot-nav .VueCarousel-pagination {
  text-align: right;
}
.bar-nav .VueCarousel-pagination .VueCarousel-dot {
  width: 50px !important;
  height: 3px !important;
  border-radius: 50px;
}
</style>
