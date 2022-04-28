<template>
  <transition name="modal">
    <div v-show="visible" @click.self="wrapperClick" class="qan-modal-wrapper">
      <div :style="{ width: width }" class="qan-modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  name: "QANmodal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "400px",
    },
  },
  data() {
    return {};
  },
  methods: {
    wrapperClick() {
      this.$emit("update:visible", false);
    },
  },
};
</script>