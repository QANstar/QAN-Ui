<template>
  <div>
    <LeftNav/>
    <div class="content"><router-view/></div>
  </div>
</template>
<script>
import LeftNav from "../components/LeftNav.vue"
export default {
  components:{
    LeftNav
  }
}
</script>
<style>
.content{
  padding-left: 200px;
}
</style>
