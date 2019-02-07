import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib"; // <-- add the import

import LoveButton from "./LoveButton.vue";

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

storiesOf("LoveButton", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { LoveButton },
    template: `<love-button love="vue"/>`
  }));
