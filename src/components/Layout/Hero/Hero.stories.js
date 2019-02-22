import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import

import Hero from "./Hero.vue";
import yoga2x from '../../../assets/yoga@2x.png';

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

storiesOf("Layout/Hero", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { Hero },
    data: function() {
      return {
        image: yoga2x,
      }
    },
    template: `<hero :src="image"/>`
  }))
  .add("large", () => ({
    components: { Hero },
    data: function() {
      return {
        image: yoga2x,
      }
    },
    template: `
      <hero size="large" :src="image" alignment="bottom">
        <template>
          <div class="body-2 text-uppercase mb-2">fri, jan 23</div>
          <h1 class="display-4 mb-2">
            Get Grounded, Underground
          </h1>
          <div>
            <div class="mb-2">
              Starts at <span class='text-uppercase'>8am</span>
            </div>
            <div class="mb-2">
              Free * at Pacific Centre Store
            </div>
            <div>
              Hosted by Carlos Roberts-Oso
            </div>
          </div>
        </template>
      </hero>
    `
  }))
  
