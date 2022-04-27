<template>
  <transition>
    <div v-show="visible" @click.self="wrapperClick" class="qan-modal-wrapper">
      <div class="qan-modal-content">
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
  },
  data() {
    return {};
  },
  methods: {
    wrapperClick() {
      this.visible = false;
    },
  },
};
</script>