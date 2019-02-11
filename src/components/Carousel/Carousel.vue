<template>
  <div>
    <carousel
      :perPageCustom="[[320, 2], [640, 4]]"
      :spacePadding="10"
      :mouse-drag="true"
      :loop="true"
      :centerMode="false"
      :scrollPerPage="false"
    >
      <slot />
    </carousel>
  </div>
</template>

<script>
import { Carousel } from "vue-carousel";

export default {
  // This is named as such to avoid collision with the existing <carousel />
  name: "CarouselComponent",
  components: { Carousel },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CarouselSlide {
  padding-right: 20px;
}
.CarouselImage {
  filter: grayscale(100%);
}
</style>
