import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import
import { Slide } from "vue-carousel";

import BarCarousel from "./BarCarousel.vue";

// Decorator for adding Storybook styles around the component to be rendered
const appDecorator = () => {
  return {
    components: { VApp, VContent },
    template: `
      <v-app>
        <div style="padding: 20px; width: 100%; height: 100%;">
          <v-content>
            <story />
          </v-content>
        </div>
      </v-app>
    `
  };
};

const imageSlide = `
  <slide style="padding-right: 20px;">
    <v-img class="CarouselImage" src="https://c.stocksy.com/a/Y5L000/z9/81068.jpg" cover height="300" style="filter: grayscale(100);">
    </v-img>
  </slide>
`;

storiesOf("Bar Carousel", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { BarCarousel, Slide },
    template: `
      <bar-carousel>
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
      </bar-carousel>
    `
  }));
