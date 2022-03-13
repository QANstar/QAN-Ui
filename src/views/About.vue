<template>
  <div class="about">
    <QANmenu defaultActive="1"> 
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