<template>
  <v-toolbar dense>
    <v-toolbar-title class="headline text-uppercase">
      <svgicon width="24" height="24" name="lululemon"></svgicon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
import { VToolbar, VToolbarTitle, VSpacer } from "vuetify/lib";
import SvgIcon from "vue-svgicon";
import { lululemon } from "../../Base/Icons";

export default {
  name: "Toolbar",
  components: { VToolbar, VToolbarTitle, VSpacer, svgicon: SvgIcon }
};
</script>

<style lang="css" scoped></style>
