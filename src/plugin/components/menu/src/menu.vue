<template>
  <div :class="'qan-nav-' + type">
    <div class="qan-nav-content">
      <ul class="qan-nav-list">
          <slot></slot>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "QANmenu",
  props: {
    type: {
      type: String,
      default: "top",
    },
    defaultActive: {
      type: String,
      default: "",
    },
    theme: {
      type: String,
      default: "default",
    },
  },
};
</script>