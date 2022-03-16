<template>
  <div class="button-content">
    <h2>按钮</h2>
    <div class="button-type">
      <QANbutton>默认按钮</QANbutton>
      <QANbutton type="blue">蓝色按钮</QANbutton>
      <QANbutton type="pink">粉色按钮</QANbutton>
    </div>
    <div class="button-type">
      <QANbutton round>默认圆角按钮</QANbutton>
      <QANbutton type="blue" round>蓝色圆角按钮</QANbutton>
      <QANbutton type="pink" round>粉色圆角按钮</QANbutton>
    </div>
    <div class="button-type">
      <QANbutton loading>加载按钮</QANbutton>
    </div>
    <div class="button-type">
      <QANbutton disabled>禁用按钮</QANbutton>
    </div>
    <div class="button-type">
      <QANbutton>默认大小</QANbutton>
      <QANbutton size="medium">中等大小</QANbutton>
      <QANbutton size="small">小型大小</QANbutton>
    </div>
  </div>
</template>

<style scoped>
.button-content {
  padding: 0 20px;
}
.button-type {
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin: 20px;
}
</style>

<script>
export default {};
</script>