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
      <div
        class="dot"
        v-for="(_, i) in numDots"
        v-bind:class="{ active: i == index }"
      />
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
    display: block;
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 100px;
    margin: 2px;
    transition: background-color 0.2s ease-out;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    &:first-child:not(.active),
    &:last-child:not(.active) {
      width: 4px;
      height: 4px;
      margin-left: 3px;
      margin-right: 3px;
    }

    &.active {
      background-color: rgba(0, 0, 0, 1);
    }
  }
}
</style>
