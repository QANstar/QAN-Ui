<template>
  <button
    class="qan-btn"
    @click="handleClick"
    :disabled="loading || disabled"
    :class="[
        'qan-btn-type-' + type,
        'qan-btn-size-' + size,
        {
            'qan-btn-disabled':disabled,
            'qan-btn-loading':loading,
            'qan-btn-round':round
        }
    ]"
  ><span v-if="$slots.default"><slot></slot></span></button>
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
    round:Boolean,
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