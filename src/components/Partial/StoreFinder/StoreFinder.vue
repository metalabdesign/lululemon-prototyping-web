<template>
  <v-autocomplete
    class="StoreFinder"
    v-model="selected"
    :items="storeList"
    :search-input.sync="search"
    :hint="buildHint()"
    persistent-hint
    item-text="name"
    item-value="id"
    placeholder="Search Locations"
    return-object
    @click:clear="cleared()"
    @change="changed"
    :search-input="search"
  >
    <template slot="append">
      <v-btn icon flat small v-on:click="clear()">
        <v-icon v-if="!!search">clear</v-icon>
        <v-icon v-if="!search">arrow_drop_down</v-icon>
      </v-btn>
    </template>

    <template slot="append-outer">
      <v-btn icon flat small v-on:click="locate()">
        <v-icon>gps_fixed</v-icon>
      </v-btn>
    </template>
  </v-autocomplete>
</template>

<script>
import { VAutocomplete, VIcon } from "vuetify/lib";

export default {
  name: "StoreFinder",
  components: { VAutocomplete, VIcon },
  props: {
    navigateTo: Number,
    title: String,
    showDefaultPagination: Boolean,
    storeList: Array,
    initial: Object
  },
  data: () => ({
    id: null,
    selected: {},
    search: ""
  }),
  created: function() {
    if (!!this.initial) {
      this.selected = this.initial;
    }
  },
  methods: {
    buildHint: function() {
      if (!!this.selected && !!this.selected.city) {
        return `${this.selected.city}, ${this.selected.province}`;
      }
    },
    changed: function(store) {
      console.log(store);
    },
    clear: function() {
      this.selected = null;
    },
    locate: function() {
      alert("Initiating browser geolocation request");
    }
  }
};
</script>

<style lang="scss">
.StoreFinder {
}
</style>
