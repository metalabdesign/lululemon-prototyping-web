import { storiesOf } from "@storybook/vue";
import {
  VApp,
  VContent,
} from "vuetify/lib"; // <-- add the import

import StoreFinder from "./StoreFinder.vue";

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

const stores = [
  {id: 1, name: 'Pacific Centre', city: 'Vancouver', province: 'British Columbia', country: 'Canada'},
  {id: 2, name: 'Oakridge', city: 'Vancouver', province: 'Washington', country: 'United States'},
  {id: 3, name: 'Park Royal', city: 'North Vancouver', province: 'British Columbia', country: 'Canada'},
  {id: 4, name: 'Robson Street', city: 'West Vancouver', province: 'British Columbia', country: 'Canada'},
  {id: 5, name: 'Uptown Seasonal', city: 'Victoria', province: 'British Columbia', country: 'Canada'},
  {id: 6, name: 'Johnson', city: 'Victoria', province: 'British Columbia', country: 'Canada'},
  {id: 7, name: 'Morgan Crossing', city: 'Whiterock', province: 'British Columbia', country: 'Canada'},
  {id: 8, name: 'Highstreet', city: 'Abbotsford', province: 'British Columbia', country: 'Canada'},
  {id: 9, name: 'Willowbrook', city: 'Langley', province: 'British Columbia', country: 'Canada'},
  {id: 10, name: 'Coquitlam Centre', city: 'Coquitlam', province: 'British Columbia', country: 'Canada'},
  {id: 11, name: 'Metrotown', city: 'Burnaby', province: 'British Columbia', country: 'Canada'},
  {id: 12, name: 'Robson Street', city: 'West Vancouver', province: 'British Columbia', country: 'Canada'},

];

const singleStore = stores[0];

storiesOf("Partial/StoreFinder", module)
  .addDecorator(appDecorator)
  .add("default", () => ({
    components: { StoreFinder },
    data: () => ({
      stores: stores
    }),
    template: `<store-finder :storeList="stores" />`
  }))
  .add("pre-selected", () => ({
    components: { StoreFinder },
    data: () => ({
      stores,
      singleStore
    }),
    template: `<store-finder :storeList="stores" :initial="singleStore" />`
  }))
  .add("empty", () => ({
    components: { StoreFinder },
    data: () => ({
      stores: stores
    }),
    template: `<store-finder />`
  }))
