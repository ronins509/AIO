<template>
  <div id="set">
    <button @click="boxshow = !boxshow">点击展开/关闭</button>
    <transition name="draw">
      <!--这里的name 和 css 类名第一个字段要一样-->
      <div class="box" v-show="boxshow"></div>
    </transition>
    <div class="">{{$t('i18n.btn_add')}}</div>
  </div>
</template>
<script>
export default {
  data: () => ({
    boxshow: true
  })
};
</script>
<style>
.box {
  height: 200px;
  width: 200px;
  background-color: black;
}
.draw-enter-active,
.draw-leave-active {
  transition: all 1s ease;
}
.draw-enter, .draw-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height: 0;
}
</style> 