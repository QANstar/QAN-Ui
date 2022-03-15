<template>
  <div class="leftNav">
    <QANmenu @select="onSelect" type="vertical" :defaultActive="$route.path">
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
      <QANmenuItem index="/component/button">按钮</QANmenuItem>
      <QANmenuItem index="/component/nav">导航</QANmenuItem>
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