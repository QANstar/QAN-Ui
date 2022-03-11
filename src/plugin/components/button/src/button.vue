<template>
  <button
    class="qan-btn"
    @click="handleClick"
    :disabled="loading || disabled"
    :style="{ width: width }"
    :class="[
      'qan-btn-type-' + type,
      'qan-btn-size-' + size,
      {
        'qan-btn-disabled': disabled || loading,
        'qan-btn-loading': loading,
        'qan-btn-round': round,
      },
    ]"
  >
    <i v-if="loading" style="height:15px"><img class="icon-loading" src="../../../assets/icon/loader.svg"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "QANbutton",
  props: {
    type: {
      default: "default",
    },
    size: {
      default: "default",
    },
    width: {
      default: "auto",
    },
    round: Boolean,
    loading: Boolean,
    disabled: Boolean,
  },

  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>