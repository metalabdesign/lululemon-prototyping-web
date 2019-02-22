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
import { VApp, VContent } from "vuetify/lib";

export default {
  components: { VApp, VContent },
  name: "App",
  components: { Toolbar },
  data() {
    return {
      //
    };
  }
};
</script>
