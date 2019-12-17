import Vue from "vue";
Vue.directive('popover', {
  inserted: (el, binding) => {
    let flag = false;
    let value = binding.value
    el.onmouseover = function () {
      if (!flag) {
        let $popover = document.createElement("div");
        let $poparrow = document.createElement("div");
        let $popinner = document.createElement("div");
        $popover.id = "tip";
        $popover.className = "popover wsw " + Object.keys(binding.modifiers)[0];
        $poparrow.className = "lg-pop-arrow";
        $popinner.className = "lg-pop-inner";
        $popinner.style.width = value.width;
        $popinner.innerHTML = value.content;

        $popover.append($poparrow);
        $popover.append($popinner);
        document.body.append($popover);
        flag = true;
        const mlw = document.getElementsByClassName("main-left")[0].offsetWidth;
        const tipH = $popover.offsetHeight, //tip的宽高
          tipW = $popover.offsetWidth,
          elH = el.scrollHeight, //绑定元素的实际宽高
          elW = el.scrollWidth;
        const scrollX = document.documentElement.scrollLeft || document.body.scrollLeft,
          scrollY = document.documentElement.scrollTop || document.body.scrollTop,
          x = el.offsetLeft + scrollX,
          y = el.offsetTop + scrollY;
        let top, left;
          switch (Object.keys(binding.modifiers)[0]) {
          case "top":
            top = y - tipH + 55,
              left = x + (elW - tipW) / 2 + mlw;
            break;
          case "bottom":
            top = y + elH + 55,
              left = x + (elW - tipW) / 2 + mlw;
            break;
          case "left":
            top = y + (elH - tipH) / 2 + 55,
              left = x - tipW + mlw;
            break;
          case "right":
            top = y + (elH - tipH) / 2 + 55,
              left = x + elW + mlw;
            break;

        }
        $popover.style.cssText = `top:${top}px;left:${left}px`;
      }
    }
    el.onmouseout = function () {
      document.getElementById('tip').remove();
      flag = false;
    }
  }
})