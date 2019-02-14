import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib";

import ArrowNav from "./ArrowNav.vue";

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

storiesOf("Arrow Nav", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { ArrowNav },
    template: `
      <div>
        <arrow-nav v-on:left="left++" v-on:right="right++" />
        <div style="margin-top:60px;">
          <div>Left clicks: {{left}}</div>
          <div>Right clicks: {{right}}</div>
        </div>
      </div>
    `,
    data: () => ({
      left: 0,
      right: 0
    })
  }));
