<template>
  <div :style="{width:width}" :class="['qan-nav-' + type, 'qan-nav-theme-' + theme]">
    <div  class="qan-nav-content">
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
    width: {
      type: String,
      default: null,
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
  methods: {
    handleItemClick(item) {
      const { index } = item;
      const hasIndex = item.index !== null;

      if (hasIndex) {
        this.activeIndex = item.index;
      }

      this.$emit("select", index, item);
    },
  },
  mounted() {
    this.$on("item-click", this.handleItemClick);
  },
};
</script>