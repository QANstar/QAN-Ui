<template>
  <div>
    <div class="item">
      <QANcard>卡片</QANcard>
    </div>
    <div class="item">
      <QANcard shadow="always">阴影卡片</QANcard>
    </div>
    <div class="item">
      <QANcard shadow="hover">覆盖阴影卡片</QANcard>
    </div>
    <div class="item">
      <QANcard round>圆角卡片</QANcard>
    </div>
    <div class="item">
      <QANcard width="600px" round>设置宽度600px</QANcard>
    </div>
  </div>
</template>

<style scoped>
.item {
  padding: 20px;
}
</style>