<template>
  <div class="about">
    <QANbutton loading type="blue" size="small" @click="test" round>测试按钮</QANbutton>
  </div>
</template>

<script>
export default {
  methods: {
    test() {},
  },
};
</script>

<style scoped>
.about{
  display: flex;
}
</style>