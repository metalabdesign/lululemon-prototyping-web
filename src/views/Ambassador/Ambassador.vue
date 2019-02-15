<template>
  <div class="ambassadorDetailsPage">
    This is the route param id {{ $route.params.id }}
    Here's some info: {{ ambassadorDetails && ambassadorDetails["first-name"] }}
  </div>
</template>
  
<script>
import { mapActions, mapState } from "vuex";

export default {

  name: 'Ambassador',

  data() {
    return {

    };
  },
  mounted() {
    this.fetchDetails('$route.params.id')
  },
  computed: {
    ...mapState(["ambassadorDetails"])
  },
  methods: {
    ...mapActions(["fetchDetails"])
  }
};
</script>

<style lang="css" scoped>
</style>
