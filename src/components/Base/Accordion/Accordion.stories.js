import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib";

import Accordion from "./Accordion.vue";
import AccordionContent from "./AccordionContent.vue";

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

storiesOf("Base/Accordion", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { Accordion, AccordionContent },
    template: `
      <accordion>
        <accordion-content>
          <div class="info-accordion-header" slot="header">Test 1</div>
          <p>Some text</p>
        </accordion-content>
        <accordion-content>
          <div class="info-accordion-header" slot="header">Test 2</div>
          <p>Some text</p>
        </accordion-content>
        <accordion-content>
          <div class="info-accordion-header" slot="header">Test 3</div>
          <p>Some text</p>
        </accordion-content>
      </accordion>
    `
  }));
