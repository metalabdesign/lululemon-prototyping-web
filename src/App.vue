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

export default {
  name: "App",
  components: { Toolbar },
  data() {
    return {
      //
    };
  }
};
</script>
