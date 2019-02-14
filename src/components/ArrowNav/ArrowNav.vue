<template>
  <div>
    <v-btn flat small v-on:click="$emit('left')">
      <v-icon>keyboard_arrow_left</v-icon>
    </v-btn>
    <v-btn flat small v-on:click="$emit('right')">
      <v-icon>keyboard_arrow_right</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ArrowNav"
};
</script>

<style></style>
