<template>
  <div class="show-content">
    <h3>Card 卡片</h3>
    <div class="intr-font">
      包含单个主题的内容和操作的组件，通过QANcard标签来使用
    </div>
    <h4>基础使用</h4>
    <div class="intr-font">QANcard标签来创建卡片</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <QANcard>卡片</QANcard>
      <div slot="hide">
        <div class="code-show">{{ cardUse }}</div>
      </div>
    </QANcard>
    <h4>阴影</h4>
    <div class="intr-font">
      通过shadow标签来指定阴影，目前有default，always和hover三种
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="card-item">
        <QANcard>卡片</QANcard>
      </div>
      <div class="card-item">
        <QANcard shadow="always">阴影卡片</QANcard>
      </div>
      <div class="card-item">
        <QANcard shadow="hover">覆盖阴影卡片</QANcard>
      </div>
      <div slot="hide">
        <div class="code-show">{{ cardShadow }}</div>
      </div>
    </QANcard>
    <h4>圆角</h4>
    <div class="intr-font">通过指定round属性来创建圆角卡片</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="card-item">
        <QANcard round>圆角卡片</QANcard>
      </div>
      <div slot="hide">
        <div class="code-show">{{ cardRound }}</div>
      </div>
    </QANcard>
    <h4>宽度</h4>
    <div class="intr-font">通过设置width属性来指定组件宽度</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="card-item">
        <QANcard width="600px" round>设置宽度600px</QANcard>
      </div>
      <div slot="hide">
        <div class="code-show">{{ cardWidth }}</div>
      </div>
    </QANcard>
    <h4>额外内容</h4>
    <div class="intr-font">
      通过设置hide属性来开启额外内容功能，指定slot为hide来在其中创建隐藏内容
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="card-item">
        <QANcard width="600px" hide shadow="hover">
          额外内容
          <div slot="hide">
            <div style="height: 200px">这里是隐藏内容</div>
          </div>
        </QANcard>
      </div>
      <div slot="hide">
        <div class="code-show">{{ cardHide }}</div>
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