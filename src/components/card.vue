<template>
  <div class="show-content">
    <div class="item">
      <QANcard>卡片</QANcard>
    </div>
    <div class="item">
      <QANcard shadow="always">阴影卡片</QANcard>
    </div>
    <div class="item">
      <QANcard shadow="hover">覆盖阴影卡片</QANcard>
    </div>
    <div class="item">
      <QANcard round>圆角卡片</QANcard>
    </div>
    <div class="item">
      <QANcard width="600px" round>设置宽度600px</QANcard>
    </div>
    <div class="item">
      <QANcard width="600px" hide round
        >额外内容

        <div slot="hide">
          <code>
            <div style="height:500px">1413</div>
          </code>
        </div>
      </QANcard>
    </div>
    <div class="item">
      <QANcard width="600px" hide shadow="hover"
        >额外内容

        <div slot="hide">
          <code>
            <div style="height:500px">6666</div>
          </code>
        </div>
      </QANcard>
    </div>
  </div>
</template>

<style scoped>

</style>