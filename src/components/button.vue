<template>
  <div class="show-content">
    <h3>Button 按钮</h3>
    <div class="intr-font">基础的操作组件，通过QANbutton标签来使用</div>
    <h4>按钮类型</h4>
    <div class="intr-font">使用type属性来指定类型</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="button-content">
        <QANbutton>默认按钮</QANbutton>
        <QANbutton type="blue">蓝色按钮</QANbutton>
        <QANbutton type="pink">粉色按钮</QANbutton>
      </div>
      <div slot="hide">
        <div class="code-show">{{ buttonType }}</div>
      </div>
    </QANcard>
    <h4>圆角</h4>
    <div class="intr-font">添加round来改变为圆角样式</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="button-content">
        <QANbutton round>默认圆角按钮</QANbutton>
        <QANbutton type="blue" round>蓝色圆角按钮</QANbutton>
        <QANbutton type="pink" round>粉色圆角按钮</QANbutton>
      </div>
      <div slot="hide">
        <div class="code-show">{{ buttonRound }}</div>
      </div>
    </QANcard>
    <h4>加载</h4>
    <div class="intr-font">添加loading来改变为加载状态</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="button-content">
        <QANbutton loading>加载按钮</QANbutton>
      </div>
      <div slot="hide">
        <div class="code-show">{{ buttonLoad }}</div>
      </div>
    </QANcard>
    <h4>禁用</h4>
    <div class="intr-font">添加disabled来改变为禁用状态</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="button-content">
        <QANbutton disabled>禁用按钮</QANbutton>
      </div>
      <div slot="hide">
        <div class="code-show">{{ buttonDisabled }}</div>
      </div>
    </QANcard>
    <h4>大小</h4>
    <div class="intr-font">
      使用size属性来改变按钮的大小，有默认，中和小三个大小
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="button-content">
        <QANbutton>默认大小</QANbutton>
        <QANbutton size="medium">中等大小</QANbutton>
        <QANbutton size="small">小型大小</QANbutton>
      </div>
      <div slot="hide">
        <div class="code-show">{{ buttonSize }}</div>
      </div>
    </QANcard>
  </div>
</template>

<style scoped>
.button-content {
  display: flex;
  align-items: center;
}
.button-content button {
  margin-right: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      buttonType:
        "<QANbutton>默认按钮</QANbutton>\n" +
        '<QANbutton type="blue">蓝色按钮</QANbutton>\n' +
        '<QANbutton type="pink">粉色按钮</QANbutton>',
      buttonRound:
        "<QANbutton round>默认圆角按钮</QANbutton>\n" +
        '<QANbutton type="blue" round>蓝色圆角按钮</QANbutton>\n' +
        '<QANbutton type="pink" round>粉色圆角按钮</QANbutton>\n',
      buttonLoad: "<QANbutton loading>加载按钮</QANbutton>",
      buttonDisabled: "<QANbutton disabled>禁用按钮</QANbutton>",
      buttonSize:
        "<QANbutton>默认大小</QANbutton>\n" +
        '<QANbutton size="medium">中等大小</QANbutton>\n' +
        '<QANbutton size="small">小型大小</QANbutton>',
    };
  },
};
</script>