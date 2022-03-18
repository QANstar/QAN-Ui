<template>
  <div class="show-content">
    <h3>NavMenu 导航菜单</h3>
    <div class="intr-font">提供导航功能的组件</div>
    <h4>基础使用</h4>
    <div class="intr-font">
      通过使用QANmenu标签来指定导航栏，使用QANmenuItem标签来指定导航栏中选项。在导航选项中指定index来规定导航的标识，在导航组件中指定defaultActive来指定初始标识
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="nav-content">
        <QANmenu defaultActive="1">
          <QANmenuItem index="1">导航一</QANmenuItem>
          <QANmenuItem index="2">导航二</QANmenuItem>
          <QANmenuItem index="3">导航三</QANmenuItem>
        </QANmenu>
      </div>
      <div slot="hide">
        <div class="code-show">{{ menuStart }}</div>
      </div>
    </QANcard>
    <h4>类型</h4>
    <div class="intr-font">
      通过指定type属性为vertical或horizontal来指定是侧边导航还是顶部导航
    </div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="nav-content">
        <QANmenu type="vertical" width="200px" defaultActive="1">
          <div class="nav-title">侧边导航栏</div>
          <QANmenuItem index="1">导航一</QANmenuItem>
          <QANmenuItem index="2">导航二</QANmenuItem>
          <QANmenuItem index="3">导航三</QANmenuItem>
        </QANmenu>
        <QANmenu type="horizontal" width="600px" defaultActive="1">
          <div class="nav-title">顶部导航栏</div>
          <QANmenuItem index="1">导航一</QANmenuItem>
          <QANmenuItem index="2">导航二</QANmenuItem>
          <QANmenuItem index="3">导航三</QANmenuItem>
        </QANmenu>
      </div>
      <div slot="hide">
        <div class="code-show">{{ menuType }}</div>
      </div>
    </QANcard>
    <h4>宽度</h4>
    <div class="intr-font">通过指定width属性设置导航栏宽度</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="nav-content">
        <QANmenu type="horizontal" width="600px" defaultActive="1">
          <div class="nav-title">设置宽度为600px</div>
          <QANmenuItem index="1">导航一</QANmenuItem>
          <QANmenuItem index="2">导航二</QANmenuItem>
          <QANmenuItem index="3">导航三</QANmenuItem>
        </QANmenu>
      </div>
      <div slot="hide">
        <div class="code-show">{{ menuWidth }}</div>
      </div>
    </QANcard>
    <h4>主题</h4>
    <div class="intr-font">通过指定theme属性设置导航栏主题</div>
    <QANcard class="show-card" width="80%" round hide shadow="hover">
      <div class="nav-content">
        <QANmenu type="horizontal" theme="shadow" defaultActive="1">
          <div class="nav-title">阴影主题</div>
          <QANmenuItem index="1">按钮</QANmenuItem>
          <QANmenuItem index="2">导航</QANmenuItem>
          <QANmenuItem index="3">模态框</QANmenuItem>
        </QANmenu>
      </div>
      <div slot="hide">
        <div class="code-show">{{ menuTheme }}</div>
      </div>
    </QANcard>
  </div>
</template>

<style scoped>
.nav-content {
  display: flex;
}
.nav-title {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #ffcc99;
  margin-right: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      menuStart:
        '<QANmenu defaultActive="1">\n' +
        '   <QANmenuItem index="1">导航一</QANmenuItem>\n' +
        '   <QANmenuItem index="2">导航二</QANmenuItem>\n' +
        '   <QANmenuItem index="3">导航三</QANmenuItem>\n' +
        "</QANmenu>",
      menuType:
        '<QANmenu type="vertical" width="200px" defaultActive="1">\n' +
        '   <div class="nav-title">侧边导航栏</div>\n' +
        '   <QANmenuItem index="1">导航一</QANmenuItem>\n' +
        '   <QANmenuItem index="2">导航二</QANmenuItem>\n' +
        '   <QANmenuItem index="3">导航三</QANmenuItem>\n' +
        "</QANmenu>\n" +
        '<QANmenu type="horizontal" width="600px" defaultActive="1">\n' +
        '   <div class="nav-title">顶部导航栏</div>\n' +
        '   <QANmenuItem index="1">导航一</QANmenuItem>\n' +
        '   <QANmenuItem index="2">导航二</QANmenuItem>\n' +
        '   <QANmenuItem index="3">导航三</QANmenuItem>\n' +
        "</QANmenu>",
      menuWidth:
        '<QANmenu type="horizontal" width="600px" defaultActive="1">\n' +
        '   <div class="nav-title">设置宽度为600px</div>\n' +
        '   <QANmenuItem index="1">导航一</QANmenuItem>\n' +
        '   <QANmenuItem index="2">导航二</QANmenuItem>\n' +
        '   <QANmenuItem index="3">导航三</QANmenuItem>\n' +
        "</QANmenu>",
      menuTheme:
        '<QANmenu type="horizontal" theme="shadow" defaultActive="1">\n' +
        '   <div class="nav-title">阴影主题</div>\n' +
        '   <QANmenuItem index="1">按钮</QANmenuItem>\n' +
        '   <QANmenuItem index="2">导航</QANmenuItem>\n' +
        '   <QANmenuItem index="3">模态框</QANmenuItem>\n' +
        "</QANmenu>",
    };
  },
};
</script>