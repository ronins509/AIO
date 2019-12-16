import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import "./assets/css/public.css"; //公共样式
import "./assets/font/loongui/iconfont";
import "./assets/font/icon.css";

//popover
import "./components/loongPopover/loongPopover";
import "./components/loongPopover/loongPopover.less";


Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
  locale:localStorage.getItem('lang'),
  messages:{
    'zh-CN':require('./i18n/lang/public.zh'),
    'en-US':require('./i18n/lang/public.en')
  }
})
router.beforeEach((to,from,next) => {
  // NProgress.start() //页面进度条 需要安装
  if(!localStorage.getItem('lang')){
    let lang = navigator.language;
    if(lang === 'zh' || lang === 'zh-CN'){
      localStorage.setItem('lang','zh-CN')
    }else{
      localStorage.setItem('lang','en-US')
    }
  }
  next()
})
new Vue({
  router,
  store,
  i18n,
  created(){
    i18n.locale = localStorage.getItem('lang')
  },
  render: h => h(App)
}).$mount("#app");
