<template>
  <div class="color-content">
    <div>
      <h3>LoveLive应援色</h3>
      <ColorItem :colorList="colorLoveLive" />
    </div>
  </div>
</template>

<script>
import ColorItem from "./colorItem";
export default {
  components: {
    ColorItem,
  },
  data() {
    return {
      colorLoveLive: [
        {
          name: "上原步梦",
          color: "#F6ABBB",
        },
        {
          name: "中须霞",
          color: "#E7DE71",
        },
        {
          name: "樱坂雫",
          color: "#A5D9EC",
        },
        {
          name: "朝香果林",
          color: "#A7B5F9",
        },
        {
          name: "宫下爱",
          color: "#FDB792",
        },
        {
          name: "近江彼方",
          color: "#D0B0E6",
        },
        {
          name: "优木雪菜",
          color: "#F9A6AA",
        },
        {
          name: "艾玛·维尔德",
          color: "#B5EDA6",
        },
        {
          name: "天王寺璃奈",
          color: "#BBC3D7 ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.color-content {
  padding: 0px 20px;
}
</style>