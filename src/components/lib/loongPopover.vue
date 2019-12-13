<template>
    <div class="popover" :class="Msgdata.position">
      <div class="lg-pop-arrow"></div>
      <div
        class="lg-pop-inner"
        :width="Msgdata.width"
      >{{Msgdata.content.startsWith('i18n.') ? $t(Msgdata.content) : Msgdata.content}}</div>
    </div>
</template>
<script>
export default {
  name: "LoongPopover",
  /*props:{
        data:{}
    },*/
  data() {
    return {
      Msgdata: {
        content: "tishi",
        width: "390px",
        position: "bottom",
        bgColor: "#333",
        fontColor: "#fff"
      }
    };
  },
  methods: {
    getData(data) {
      this.Msgdata = data;
      // console.log(this.Msgdata)
    }
  }
};
</script>
<style lang="less" scoped>
.popover {
  position: absolute;
  /*z-index:10001;*/
  z-index: 10010;
}
.lg-pop-arrow {
  position: absolute;
  width: 0;
  height: 0;
}
.lg-pop-inner {
  background-color: #333;
  color: #fff;
  word-wrap: break-word;
  white-space: pre-wrap;
  border-radius: 3px;
  line-height: 20px;
  font-size: 12px;
  padding: 5px 10px;
}
.popover.top {
  padding: 4px 0;
  .lg-pop-arrow {
    border-width: 4px 4px 0;
    border-color: #333 transparent transparent;
    border-style: solid;
    bottom: 0;
    left: 50%;
    margin-left: -4px;
  }
}
.popover.bottom {
  padding: 4px 0;
  .lg-pop-arrow {
    border-width: 0 4px 4px;
    border-color: transparent transparent #333;
    border-style: solid;
    top: 0;
    left: 50%;
    margin-left: -4px;
  }
}
.popover.left {
  padding: 0 4px;
  .lg-pop-arrow {
    border-width: 4px 0 4px 4px;
    border-color: transparent transparent transparent #333;
    border-style: solid;
    right: 0;
    top: 50%;
    margin-top: -4px;
  }
}
.popover.right {
  padding: 0 4px;
  .lg-pop-arrow {
    border-width: 4px 4px 4px 0;
    border-color: transparent #333 transparent transparent;
    border-style: solid;
    left: 0;
    top: 50%;
    margin-top: -4px;
  }
}
</style>