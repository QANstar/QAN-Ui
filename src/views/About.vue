<template>
  <div class="about">
    <QANmenu> 
      <li>按钮</li>
      <li>导航</li>
      <li><QANbutton>111</QANbutton></li>
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