<script>
import { Slide } from "vue-carousel";
export default {
  name: "slide",
  components: { "carousel-slide": Slide },
  template: `
    <carousel-slide class="CarouselSlide">
      <slot />
    </carousel-slide>
  `
};
</script>

<style scoped>
.CarouselSlide {
  background: red;
  padding-right: 20px;
}
</style>
