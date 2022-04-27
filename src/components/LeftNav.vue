<template>
  <div class="leftNav">
    <QANmenu width="200px" @select="onSelect" type="vertical" :defaultActive="$route.path">
      <div
        style="
          margin-bottom: 20px;
          font-size: 20px;
          font-weight: bold;
          color: #00aeec;
          text-align: center;
        "
      >
        QANui
      </div>
      <QANmenuItem index="/component/button">按钮</QANmenuItem>
      <QANmenuItem index="/component/nav">导航</QANmenuItem>
      <QANmenuItem index="/component/card">卡片</QANmenuItem>
      <QANmenuItem index="/component/modal">模态框</QANmenuItem>
    </QANmenu>
  </div>
</template>
<script>
export default {
  methods:{
    onSelect(index){
      this.$router.push(index);
    }
  }
}
</script>
<style scoped>
.leftNav{
    position: fixed;
    top: 0;
    bottom: 0;
}
</style>