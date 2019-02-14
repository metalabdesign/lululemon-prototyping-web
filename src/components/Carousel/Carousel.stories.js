import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import
import { Slide } from "vue-carousel";

import Carousel from "./Carousel.vue";

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

// Dummy slide component, defined locally for Storybook visualization.
// Doesn't work as a Vue component (unsure why), so we keep it as a template literal.
const eventSlide = `
  <slide style="padding-right: 20px;">
    <v-img class="CarouselImage" src="https://c.stocksy.com/a/Y5L000/z9/81068.jpg" cover height="300" style="filter: grayscale(100);">
      <v-layout column fill-height>
        <v-spacer></v-spacer>
        <v-btn>RSVP</v-btn>
      </v-layout>
    </v-img>
    <h3>Get Grounded, Underground</h3>
    <div>
      <v-icon>access_time</v-icon> 8AM • 1H
      <v-icon>attach_money</v-icon> Free
    </div>
    <div><v-icon>location_on</v-icon> Pacific Centre</div>
    <div>with Courtney Bailey</div>
  </slide>
`;

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
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
      </carousel>
    `
  }))
  .add("Dot Navigation", () => ({
    components: { Carousel, Slide },
    template: `
      <carousel :dotNav="true">
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
      </carousel>
    `
  }))
  .add("Bar Navigation", () => ({
    components: { Carousel, Slide },
    template: `
      <carousel :barNav="true">
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
        ${imageSlide}
      </carousel>
    `
  }))
  .add("Side Navigation", () => ({
    components: { Carousel, Slide },
    template: `
      <carousel :sideNav="true">
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
      </carousel>
    `
  }));
