import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib";

import DotNav from "./DotNav.vue";

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

storiesOf("Dot Nav", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { DotNav },
    template: `
      <div>
        <dot-nav title="Get Involved Nearby" :numDots="5" :index="index" />
        
        <div style="margin-top:60px;">
          <div>Index: {{index}}</div>
          <div>
            <v-btn v-on:click="index--">--</v-btn>
            <v-btn v-on:click="index++">++</v-btn>
          </div>
        </div>
      </div>
    `,
    data: () => ({
      index: 0
    })
  }))
  .add("2-Line Title", () => ({
    components: { DotNav },
    template: `
      <div>
        <dot-nav title="This Is A Super Looooooooooong Title" :numDots="5" :index="index" />
        
        <div style="margin-top:60px;">
          <div>Index: {{index}}</div>
          <div>
            <v-btn v-on:click="index--">--</v-btn>
            <v-btn v-on:click="index++">++</v-btn>
          </div>
        </div>
      </div>
    `,
    data: () => ({
      index: 0
    })
  }))
  .add("Overflow Title", () => ({
    components: { DotNav },
    template: `
      <div>
        <dot-nav title="This Is A Super Looooooooooong Title" :titleTruncate="true" :numDots="5" :index="index" />
        
        <div style="margin-top:60px;">
          <div>Index: {{index}}</div>
          <div>
            <v-btn v-on:click="index--">--</v-btn>
            <v-btn v-on:click="index++">++</v-btn>
          </div>
        </div>
      </div>
    `,
    data: () => ({
      index: 0
    })
  }));
