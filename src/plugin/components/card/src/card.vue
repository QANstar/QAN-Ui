<template>
  <div
    :style="{ width: width }"
    class="qan-card"
    :class="['qan-card-shadow-' + shadow, { 'qan-card-round': round }]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "QANcard",
  props: {
    round: Boolean,
    shadow: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "200px",
    },
  },
};
</script>