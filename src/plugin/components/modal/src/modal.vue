<template>
  <transition name="modal">
    <div v-show="visible" @click.self="wrapperClick" class="qan-modal-wrapper">
      <div :style="{ width: width }" class="qan-modal-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active {
  animation: modal-in 0.3s;
}

.modal-leave-active {
  animation: modal-out 0.3s;
}

@keyframes modal-in {
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes modal-out {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
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