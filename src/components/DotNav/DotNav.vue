<template>
  <div class="DotNav">
    <div
      class="title"
      v-if="title"
      v-bind:class="{ 'text-truncate': titleTruncate }"
    >
      {{ title }}
    </div>
    <div class="dots">
      <div class="dot" v-for="(_, i) in numDots" v-bind:class="buildClasses(i)">
        <div class="dot-img"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DotNav",
  props: {
    title: String,
    numDots: Number,
    index: Number,
    titleTruncate: Boolean
  },
  methods: {
    buildClasses: function(i) {
      return `distance-${Math.abs(this.index - i)}`;
    }
  }
};
</script>

<style lang="scss">
.DotNav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;

  .title {
    margin-right: 1em;
  }

  .dots {
    display: flex;
    align-items: center;
  }

  .dot {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 12px;
    height: 12px;

    .dot-img {
      display: block;
      width: 4px;
      height: 4px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 100px;
      transition: all 0.2s ease-out;
    }

    &.distance-0 .dot-img {
      background-color: rgba(0, 0, 0, 1);
      width: 8px;
      height: 8px;
    }

    &.distance-1 .dot-img {
      width: 6px;
      height: 6px;
    }
  }
}
</style>
