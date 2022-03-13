<template>
  <div class="leftNav">
    <QANmenu type="vertical" defaultActive="1">
      <div
        style="
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: bold;
          color: #00aeec;
        "
      >
        QANui
      </div>
      <QANmenuItem index="1">按钮</QANmenuItem>
      <QANmenuItem index="2">导航</QANmenuItem>
      <QANmenuItem index="3">模态框</QANmenuItem>
    </QANmenu>
  </div>
</template>

<style scoped>
.leftNav{
    position: fixed;
    top: 0;
    bottom: 0;
}
</style>