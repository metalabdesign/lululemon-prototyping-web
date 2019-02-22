import { storiesOf } from "@storybook/vue";
import { VApp, VContent } from "vuetify/lib";
import SvgIcon from 'vue-svgicon'

import "./lululemon";
import * as icons from './index';

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

const rowStyle = `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1em 0;
`;

storiesOf("Base/Icons", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: {svgicon: SvgIcon, icons},
    template: `
      <div>
        <div v-for="icon of icons" :key="icon" style="${rowStyle}">
          <span style="dislay: inline-block; width: 100px;">{{ icon }}</span>
          <svgicon width="14" height="14" :name="icon"></svgicon>
          <svgicon width="24" height="24" :name="icon"></svgicon>
          <svgicon width="34" height="34" :name="icon"></svgicon>
          <svgicon width="44" height="44" :name="icon"></svgicon>
        </div>
      </div>
    `,
    data: () => ({
      icons: []
    }),
    created: function() {
      this.icons = Object.keys(icons);
    }
  }));
