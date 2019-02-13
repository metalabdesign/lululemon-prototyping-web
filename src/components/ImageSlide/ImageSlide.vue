<script>
import { Slide } from "vue-carousel";

export default {
  name: "slide",
  components: { "carousel-slide": Slide },
  props: ["src"],
  template: `
    <carousel-slide class="ImageSlide">
      <v-img class="CarouselImage" :src="src" cover height="300" />
    </carousel-slide>
  `
};
</script>

<style scoped>
.ImageSlide {
  filter: grayscale(100);
  padding-right: 20px;
}
</style>
