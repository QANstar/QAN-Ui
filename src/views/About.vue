<template>
  <div class="about">
    <QANmenu type="vertical" defaultActive="1"> 
      <div style="margin-bottom:20px;font-size:20px;font-weight:bold;color:#00AEEC">QANui</div>
      <QANmenuItem index="1">按钮</QANmenuItem>
      <QANmenuItem index="2">导航</QANmenuItem>
      <QANmenuItem index="3">模态框</QANmenuItem>
    </QANmenu>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loading:false,
    }
  },
  methods: {
    test() {
      this.loading = !this.loading
    },
  },
};
</script>

<style scoped>
.about{
  display: flex;
}
</style>