<template>
  <div class="home">
    <div class="main-left cf" :class="{menuShink:toggleFlag}">
      <div class="logo-wrap">
        <div class="logo-box">
          <img src="@/assets/image/logo.png" />
        </div>
      </div>
      <div class="menu-wrap">
        <div class="menulist">
          <div class="menus">
            <!-- index -->
            <router-link to="/" tag="div" class="single-menu" @click.native="hideMenu">
              <div class="menu-content clearfix">
                <div class="menu-icon">
                  <svg class="icon" aria-hidden="true">
                    <use href="#icon-zhuye1" />
                  </svg>
                </div>
                <div class="item-text" v-show="!toggleFlag">{{$t('i18n.dashboard')}}</div>
              </div>
            </router-link>
            <!-- 动态的store,cloud,disk -->
            <div class="menu" v-for="(item,index) in initMenu" :key="index">
              <div class="first-menu" @click="showToggle(item,index)">
                <div class="menu-content clearfix">
                  <div class="menu-icon">
                    <svg class="icon" aria-hidden="true">
                      <use :href="item.isShow ? item.showIcon : item.icon" />
                    </svg>
                  </div>
                  <div class="item-text" v-show="!toggleFlag">{{item.name.startsWith('i18n.') ? $t(item.name) : item.name}}</div>
                </div>
              </div>
              <transition name="slider" mode="out-in">
                <div class="second-menu" v-show="item.isShow">
                  <router-link
                    :to="{path:list.path,name:list.path.substr(1)}"
                    tag="div"
                    v-for="(list,index) in item.chilren"
                    :key="index"
                    class="menu-content clearfix"  
                  >
                    <div class="menu-icon">
                      <svg class="icon" aria-hidden="true">
                        <use :href="list.icon" />
                      </svg>
                    </div>
                    <div class="item-text" v-show="!toggleFlag">{{list.name.startsWith('i18n.') ? $t(list.name) : list.name}}</div>
                  </router-link>
                </div>
              </transition>
            </div>

            <!-- user,set -->
            <router-link to="/user" tag="div" class="single-menu" @click.native="hideMenu">
              <div class="menu-content clearfix">
                <div class="menu-icon">
                  <svg class="icon" aria-hidden="true">
                    <use href="#icon-yonghuguanli" />
                  </svg>
                </div>
                <div class="item-text" v-show="!toggleFlag">{{$t('i18n.user_management')}}</div>
              </div>
            </router-link>
            <router-link to="/set" tag="div" class="single-menu" @click.native="hideMenu">
              <div class="menu-content clearfix">
                <div class="menu-icon">
                  <svg class="icon" aria-hidden="true">
                    <use href="#icon-shezhi1" />
                  </svg>
                </div>
                <div class="item-text" v-show="!toggleFlag">{{$t('i18n.set')}}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="tac collapse-bar" @click="toggle">
        <span class="cf">
          <svg class="icon" aria-hidden="true">
            <use :href="toggleFlag ? '#icon-muluzhankai' : '#icon-mulushouqi'" />
          </svg>
        </span>
      </div>
    </div>
    <div class="topbar" :class="{rightPo:toggleFlag}"></div>
    <div class="main-right" :class="{rightPo:toggleFlag}">
      <router-view />
    </div>
  </div>
</template>

<script>
import S from "@/assets/js/store.config";
import C from "@/assets/js/cloud.config";
import D from "@/assets/js/disk.config";
export default {
  name: "Home",
  data() {
    return {
      initMenu: [
        {
          name: "i18n.store_menu_store",
          icon: "#icon-cunchufuwushouqi",
          showIcon: "#icon-cunchufuwuzhankai",
          isShow: false,
          chilren: S.menu
        },
        {
          name: "i18n.cloud_menu_vm_cloud",
          icon: "#icon-yunguanlishouqi",
          showIcon: "#icon-yunguanlizhankai",
          isShow: false,
          chilren: C.menu
        }
        // {
        //   name: "网盘",
        //   icon: "#iconyunpanshouqi",
        //   showIcon: "#iconyunpanzhankai",
        //   isShow: false,
        //   chilren: diskMenu
        // }
      ],
      toggleFlag: false
    };
  },
  methods: {
    hideMenu(){
      this.initMenu.forEach(i => {
        i.isShow = false;
      })
    },
    toggle() {
      this.toggleFlag = !this.toggleFlag;
    },
    showToggle(item, index) {
      this.initMenu.forEach(i => {
        if (i.isShow !== this.initMenu[index].isShow) {
          i.isShow = false;
        }
      });
      item.isShow = !item.isShow;
    }
  }
  
/*手动切换语言
change(){
   if (this.$i18n.locale === 'zh-CN') { 
     this.$i18n.locale = 'en-US'; 
     localStorage.setItem('lang','en-US') 
    }else { 
      this.$i18n.locale = 'zh-CN'; 
      localStorage.setItem('lang','zh-CN') 
    }
  },//通过浏览器语言自动切换*/
};
</script>
<style lang="less">
@import url(~@/assets/css/menu.css);
@import url(~@/assets/css/public.css);
</style>
