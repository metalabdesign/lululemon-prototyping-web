import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import
import { Slide } from "vue-carousel";

import DotCarousel from "./DotCarousel.vue";

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

storiesOf("Dot Carousel", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { DotCarousel, Slide },
    template: `
      <dot-carousel>
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
        ${eventSlide}
      </dot-carousel>
    `
  }));
