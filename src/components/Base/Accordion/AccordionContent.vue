<template>
  <v-expansion-panel-content>
    <v-icon slot="actions" color="black">$vuetify.icons.expand</v-icon>
    <div slot="header">
      <slot name='header'></slot>
    </div>
    <slot></slot>
  </v-expansion-panel-content>
</template>

<script>
import { VExpansionPanel } from "vuetify/lib"

export default {
  name: 'AccordionContent',
  components: { VExpansionPanel },
};
</script>

<style lang="css">
.v-expansion-panel__body {
  padding-bottom: 10px;
}

.v-expansion-panel__header {
  padding-left: 0px;
  padding-right: 0px;
}
</style>
