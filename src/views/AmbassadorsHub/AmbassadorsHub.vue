<template>
  <div>
    <p>This is the ambassadors hub. Try viewing an ambassador:</p>
    <p><router-link to="/ambassador/1">Ambassador 1</router-link></p>
    <p><router-link to="/ambassador/2">Ambassador 2</router-link></p>
  </div>
</template>

<script>
export default {
  name: "AmbassadorsHub",

  data() {
    return {};
  }
};
</script>

<style lang="css" scoped></style>
