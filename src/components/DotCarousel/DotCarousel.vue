<template>
  <carousel
    class="dot-nav"
    :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
    :mouse-drag="true"
    :loop="true"
    :centerMode="false"
    :scrollPerPage="true"
    :paginationEnabled="true"
    paginationPosition="top"
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

<style>
.dot-nav .VueCarousel-pagination {
  text-align: right;
}
</style>
