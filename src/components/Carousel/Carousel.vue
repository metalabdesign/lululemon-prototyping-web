<template>
  <vue-carousel
    :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
    :mouse-drag="true"
    :centerMode="false"
    :navigationEnabled="false"
    :paginationEnabled="false"
    :navigateTo="navigateTo"
  >
    <slot />
  </vue-carousel>
</template>

<script>
import { Carousel } from "vue-carousel";

export default {
  name: "Carousel",
  components: { "vue-carousel": Carousel },
  props: ["navigateTo"]
};
</script>

<style></style>
