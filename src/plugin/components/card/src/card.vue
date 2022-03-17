<template>
  <div
    :style="{ width: width }"
    class="qan-card"
    :class="['qan-card-shadow-' + shadow, { 'qan-card-round': round }]"
  >
    <div class="qan-card-content">
      <slot></slot>
    </div>
    <div v-if="hide">
      <div
        ref="hide"
        :style="{ height: hideHeight }"
        class="qan-card-hide-content"
      >
        <slot name="hide">{{ hide }}</slot>
      </div>
      <div @click="hideClick" class="qan-card-hide">
        {{ hideText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QANcard",
  data() {
    return {
      hideText: "显示内容",
      hideHeight: "0px",
      isShow: false,
    };
  },
  methods: {
    hideClick() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.hideHeight = this.hideShowHeight;
        this.hideText = "隐藏内容";
      } else {
        this.hideHeight = "0px";
        this.hideText = "显示内容";
      }
    },
  },
  computed: {
    hideShowHeight() {
      return this.$refs.hide.children[0].clientHeight + "px";
    },
  },
  props: {
    round: Boolean,
    hide: Boolean,
    shadow: {
      type: String,
      default: "",
    },
    width: {
      type: String,
      default: "auto",
    },
  },
};
</script>