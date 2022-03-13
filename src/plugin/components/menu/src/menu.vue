<template>
  <div :class="['qan-nav-' + type, 'qan-nav-theme-' + theme]">
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
      default: "horizontal",
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
  provide() {
    return {
      rootMenu: this,
    };
  },
  data() {
    return {
      activeIndex: this.defaultActive,
    };
  },
};
</script>