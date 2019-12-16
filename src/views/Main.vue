<template>
  <div class="main">
    <h1>This is an main page</h1>
    <div
      class="txt"
      v-popover.top="{content:$t(content,{0:'nihao'}),width:width,position:'top'}"
    >气泡提示</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "i18n.cloud_vn_pn_type_tip",
      width: "390px",
      position: "top"
    };
  },
  methods: {}
};
</script>
<style lang="less">
.txt {
  border: 1px solid #000;
  position: absolute;
  left: 200px;
  top: 200px;
}
</style>