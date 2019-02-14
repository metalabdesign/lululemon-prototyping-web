<template>
  <carousel
    class="bar-nav"
    :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
    :mouse-drag="true"
    :centerMode="false"
    :scrollPerPage="true"
    :paginationEnabled="true"
    paginationPosition="bottom-overlay"
    paginationColor="rgba(255, 255, 255, 0.6)"
    paginationActiveColor="rgba(255, 255, 255, 1)"
  >
    <slot />
  </carousel>
</template>

<script>
import { Carousel } from "vue-carousel";

export default {
  name: "BarCarousel",
  components: { Carousel },
  data() {
    return {};
  }
};
</script>

<style>
.bar-nav .VueCarousel-pagination .VueCarousel-dot {
  width: 50px !important;
  height: 3px !important;
  border-radius: 50px;
}
</style>
