<template>
  <v-app style="background-color: white">
    <toolbar/>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Layout/Toolbar";
import {
  VApp,
  VToolbar,
  VToolbarTitle,
  VSpacer,
  VContent,
  VBtn
} from "vuetify/lib";

export default {
  components: { VApp, VToolbar, VToolbarTitle, VSpacer, VContent, VBtn },
  name: "App",
  components: { Toolbar },
  data() {
    return {
      //
    };
  }
};
</script>
