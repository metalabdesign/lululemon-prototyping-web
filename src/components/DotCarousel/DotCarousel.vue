<template>
  <div class="DotCarousel">
    <dot-nav :title="title" :index="activeIndex" :numDots="slideCount" />
    <carousel
      class="dot-carousel"
      :perPageCustom="[[320, 1], [480, 2], [640, 4]]"
      :mouse-drag="true"
      :loop="true"
      :centerMode="false"
      :scrollPerPage="true"
      :paginationEnabled="showDefaultPagination"
      paginationPosition="top"
      paginationActiveColor="rgba(0,0,0,1)"
      paginationColor="rgba(0,0,0,0.2)"
      :paginationSize="8"
      :paginationPadding="3"
      :navigateTo="navigateTo"
      @pageChange="updateIndex"
    >
      <slot />
    </carousel>
  </div>
</template>

<script>
import { Carousel } from "vue-carousel";
import DotNav from "../DotNav/DotNav";

export default {
  name: "DotCarousel",
  components: { Carousel, DotNav },
  props: {
    navigateTo: Number,
    title: String,
    showDefaultPagination: Boolean
  },
  data: () => ({
    activeIndex: 0,
    slideCount: 2
  }),
  created: function() {
    // Obtain the number of available slides.
    // Cloned from https://github.com/SSENSE/vue-carousel/blob/master/src/Carousel.vue
    this.slideCount =
      (this.$slots &&
        this.$slots.default &&
        this.$slots.default.filter(
          slot =>
            slot.tag && slot.tag.match(`^vue-component-\\d+-slide$`) !== null
        ).length) ||
      0;
  },
  methods: {
    updateIndex: function(i) {
      this.activeIndex = i;
    }
  }
};
</script>

<style lang="scss">
.DotCarousel {
  .VueCarousel-pagination {
    text-align: right;
  }
}
</style>
