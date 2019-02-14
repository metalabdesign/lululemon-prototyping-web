import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import
import { Slide } from "vue-carousel";

import Carousel from "./Carousel.vue";
import ArrowNav from "../ArrowNav/ArrowNav.vue";

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

storiesOf("Carousel", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { Carousel, Slide },
    template: `
      <carousel>
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
      </carousel>
    `
  }))
  .add("External Navigation", () => ({
    components: { Carousel, Slide, ArrowNav },
    data: () => ({
      index: 0
    }),
    template: `
      <div>
        <arrow-nav v-on:left="index--" v-on:right="index++" />
        <div>Index: {{ index }}</div>
        <carousel :navigateTo="index">
          ${imageSlide}
          ${imageSlide}
          ${imageSlide}
          ${imageSlide}
          ${imageSlide}
          ${imageSlide}
        </carousel>
      </div>
    `
  }));
