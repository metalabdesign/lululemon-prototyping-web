<template>
  <hero size="small" :src="src" alignment="bottom">
    <template>
      <div class="body-2 mb-1">{{ locationLabel }}</div>
      <h1 class="display-4 mb-2">
        {{ name }}
      </h1>
      <div class="mb-1">
        {{ ambassadorLabel }} <a href=''>{{ storeLabel }}</a>
      </div>
      <div class="disciplines">
        <template v-for="(discipline, index) in disciplines">
          <a href="" class="discipline">{{ discipline }}</a>
          <span v-if="index != disciplines.length - 1">, </span>
        </template>
      </div>
    </template>
  </hero>
</template>

<script>
import Hero from "@/components/Base/Hero";

export default {
  name: 'AmbassadorHero',
  components: { Hero },
  props: {
    src: String,
    locationLabel: String,
    name: String,
    ambassadorType: {
      validator: (value) => {
        return ['store', 'elite', 'globalYoga']
      }
    },
    storeLabel: String,
    storeUrl: String,
    disciplines: Array
  },
  computed: {
    ambassadorLabel() {
      switch(this.ambassadorType) {
        case "store":
          return "Store Ambassador";
        case "elite":
          return "Elite Ambassaor";
        case "globalYoga":
          return "Gobal Yoga Ambassaor";
        default:
          return "Ambassador";
      }
    },
  },
};
</script>

<style lang="css" scoped>

</style>
