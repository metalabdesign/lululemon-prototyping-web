<template>
  <div class="accordion">
    <v-expansion-panel :style="{boxShadow: 'none'}">
      <slot></slot>
    </v-expansion-panel>
  </div>
</template>

<script>
import { VExpansionPanel } from "vuetify/lib"

export default {
  name: 'Accordion',
  components: { VExpansionPanel },
};
</script>

<style lang="css" scoped>
.accordion >>> .v-expansion-panel__container:first-child {
  border-top: 1px solid rgba(0,0,0,0.12) !important;
}
.accordion >>> .v-expansion-panel__container:last-child {
  border-bottom: 1px solid rgba(0,0,0,0.12) 
}
.accordion >>> .v-expansion-panel__body {
  padding-bottom: 10px;
}
.accordion >>> .v-expansion-panel__header {
  padding-left: 0px;
  padding-right: 0px;
}
.content {
  padding: 5px 0 10px 0;
}
</style>
