<template>
  <div class="show-content">
    <h3>Modal 模态框</h3>
    <div class="intr-font">保留当前页面，弹出额外内容</div>
    <h4>基础使用</h4>
    <div class="intr-font">QANmodal标签来创建模态框</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <QANbutton @click="visible = true" type="pink">点击打开模态框</QANbutton>
      <QANmodal :visible="visible">模态框</QANmodal>
      <div slot="hide">
        <div class="code-show">{{ cardUse }}</div>
      </div>
    </QANcard>
  </div>
</template>

<style scoped>
.card-item {
  margin: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      cardUse: "<QANcard>卡片</QANcard>",
      cardShadow:
        '<div class="card-item">\n' +
        "   <QANcard>卡片</QANcard>\n" +
        "</div>\n" +
        '<div class="card-item">\n' +
        '   <QANcard shadow="always">阴影卡片</QANcard>\n' +
        "</div>\n" +
        '<div class="card-item">\n' +
        '   <QANcard shadow="hover">覆盖阴影卡片</QANcard>\n' +
        "</div>\n",
      cardRound: "<QANcard round>圆角卡片</QANcard>",
      cardWidth: '<QANcard width="600px" round>设置宽度600px</QANcard>',
      cardHide:
        '<QANcard width="600px" hide shadow="hover">额外内容\n' +
        '   <div slot="hide">\n' +
        '       <div style="height: 200px">这里是隐藏内容</div>\n' +
        "   </div>\n" +
        "</QANcard>\n",
    };
  },
};
</script>