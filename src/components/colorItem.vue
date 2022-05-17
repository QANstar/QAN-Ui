<template>
  <div class="colorContent">
    <div
      @click="copyColor(colorItem.color)"
      class="item"
      v-for="colorItem in colorList"
      :key="colorItem.name"
    >
      <div class="box" :style="{ background: colorItem.color }"></div>
      <div>{{ colorItem.name }}</div>
      <div :style="{ color: colorItem.color }">{{ colorItem.color }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    colorList: {
      default: [],
    },
  },
  methods: {
    copyColor(color) {
      var input = document.createElement("input"); // 创建input对象
      input.value = color; // 设置复制内容
      document.body.appendChild(input); // 添加临时实例
      input.select(); // 选择实例内容
      document.execCommand("Copy"); // 执行复制
      document.body.removeChild(input); // 删除临时实例
    },
  },
};
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border-radius: 4px;
  margin: 10px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
}
.colorContent {
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>