<template>
  <div class="about">
    <QANbutton @click="test" round>666</QANbutton>
  </div>
</template>

<script>
export default {
  methods:{
    test(){
      alert(1)
    }
  }
}
</script>