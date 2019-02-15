<template>
  <carousel
    class="dot-nav"
    :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
    :mouse-drag="true"
    :loop="true"
    :centerMode="false"
    :scrollPerPage="false"
    :paginationEnabled="true"
    paginationPosition="top"
    paginationActiveColor="rgba(0,0,0,1)"
    paginationColor="rgba(0,0,0,0.2)"
    :paginationSize="8"
    :paginationPadding="3"
    :navigateTo="navigateTo"
  >
    <slot />
  </carousel>
</template>

<script>
import { Carousel } from "vue-carousel";

export default {
  name: "DotCarousel",
  components: { Carousel },
  props: ["navigateTo"]
};
</script>

<style lang="scss">
.dot-nav {
  .VueCarousel-pagination {
    text-align: right;

    .VueCarousel-dot-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }

    .VueCarousel-dot {
      transition: background-color 0.2s ease-out;

      &:first-child:not(.VueCarousel-dot--active),
      &:last-child:not(.VueCarousel-dot--active) {
        width: 4px !important;
        height: 4px !important;
        padding-left: 5px !important;
        padding-right: 5px !important;
      }
    }
  }
}
</style>
