<template>
  <div class="show-content">
    <h3>Modal 模态框</h3>
    <div class="intr-font">保留当前页面，弹出额外内容</div>
    <h4>基础使用</h4>
    <div class="intr-font">
      QANmodal标签来创建模态框,设置visible属性来显示或隐藏模态框,使用width来设定宽度
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <QANbutton @click="visible = true" type="pink">点击打开模态框</QANbutton>
      <QANmodal width="50%" :visible.sync="visible">
        <div class="modal-base">这是模态框内容</div>
      </QANmodal>
      <div slot="hide">
        <div class="code-show">{{ modalBase }}</div>
      </div>
    </QANcard>
  </div>
</template>

<style scoped>
.card-item {
  margin: 10px;
}
.modal-base {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: 18px;
  font-weight: bold;
}
</style>

<script>
export default {
  data() {
    return {
      visible: false,
      modalBase:
        '<QANmodal width="50%" :visible.sync="visible">\n' +
        '   <div class="modal-base">这是模态框内容</div>\n' +
        "</QANmodal>\n",
    };
  },
};
</script>