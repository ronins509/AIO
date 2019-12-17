<template>
  <div class="main">
    <h1>This is an main page</h1>
    <loongDate :date="date"></loongDate>
    <div
      class="txt"
      v-popover.right="{content:$t(popover.content),width:popover.width}"
    >气泡提示</div>
  </div>
</template>
<script>
import loongDate from "@/components/lib/loongDate";
export default {
  components: {
    loongDate,
  },
  data() {
    return {
      popover: {
        content: "i18n.cloud_vn_pn_type_tip",
        width: "390px"
      },
      date:{
          type:"time",
      },
    };
  },
  methods: {}
};
</script>
<style lang="less">
.txt {
  border: 1px solid #000;
  position: absolute;
  left: 50px;
  top: 200px;
}
</style>