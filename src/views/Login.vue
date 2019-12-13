<template>
  <div id="login">
    <div class="bggradient"></div>
    <div class="login-outer-wrap pr">
      <!-- <div class="login-topbar clearfix">
        <ul class="fr dn">
          <li class="login-topbar-item">关于我们</li>
          <li class="login-topbar-item">联系方式</li>
          <li class="login-topbar-item">帮助与支持</li>
        </ul>
      </div>-->
      <div class="login-wrap">
        <div class="login-content-wrap">
          <div class="login-box">
            <div class="login-title" data-i18n-code="login">{{$t('i18n.login')}}</div>
            <div class="login-con">
              <form class="login-form">
                <div class="login-input-line">
                  <input
                    type="text"
                    name="username"
                    data-i18n-code="user_name_placeholder"
                    :placeholder="$t('i18n.user_name_placeholder')"
                    v-model="username"
                  />
                </div>
                <div class="login-input-line">
                  <input
                    type="password"
                    class="password-text"
                    data-i18n-code="pwd_placeholder"
                    :placeholder="$t('i18n.pwd_placeholder')"
                    v-model="password"
                  />
                  <input type="hidden" name="password" />
                </div>
                <div class="pt10 clearfix">
                  <div class="error-tip fs12 cred fl">{{$t(errorTip)}}</div>
                  <div class="password-tip dn">忘记密码</div>
                </div>
                <div class="login-btn" data-i18n-code="login" @click="login">{{$t('i18n.login')}}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">
        <p class="tac fs12 pt15">© 2017
            <span data-i18n-code="company_copyright">{{$t('i18n.company_copyright')}}</span>
            <span style="padding-left: 5px;">
              <span data-i18n-code="copyright">{{$t('i18n.copyright')}}</span>
            </span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name:'login',
    data(){
        return {
            username:'',
            password:'',
            errorTip:''
        }
    },
    methods:{
        login(){
          const redirect = this.$route.query.redirect;
          if(redirect){
            this.$router.push(redirect)
          }else{
            this.$router.push({
              name: "home"
            })
          }
          if(this.username == ''){
              this.errorTip='i18n.user_name_placeholder';
          }else if(this.password == ''){
              this.errorTip='i18n.pwd_placeholder';
          }
        }
    }
}

</script>
<style scoped>
#login {
  height: 100%;
}
.bggradient {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1000;
  background-image: linear-gradient(to bottom, #43bbff, #1188dd);
  background-image: -moz-linear-gradient(top, #43bbff, #1188dd);
  background: -webkit-linear-gradient(top, #43bbff 0%, #1188dd 100%);
  background: -ms-linear-gradient(top, #43bbff 0%, #1188dd 100%);
}

.login-topbar {
  position: absolute;
  width: 100%;
}

.login-topbar-item {
  float: left;
  font-size: 12px;
  padding: 18px 40px;
  color: #ffffff;
}

.login-topbar {
  border-bottom: 1px solid #3aa5ed;
}

.copyright {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 45px;
  color: #84c1ed;
}

.login-box {
  position: relative;
  width: 350px;
  height: 398px;
  background-color: #ffffff;
  border-radius: 4px;
  margin: auto;
  padding: 35px 20px 0 20px;
}

.login-con {
  padding: 0 25px;
}

.login-input-line {
  padding: 18px 0 0 0;
}

.login-input-line input {
  width: 260px;
  height: 32px;
  padding-left: 10px;
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
}

.login-title {
  padding: 30px 0 34px 33px;
  font-size: 24px;
  color: #666666;
}

.login-btn {
  margin: 20px 0;
  width: 260px;
  height: 38px;
  font-size: 14px;
  line-height: 38px;
  background-color: #1188dd;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
}

.password-tip {
  float: right;
  color: #666;
  font-size: 12px;
  cursor: pointer;
}

.login-wrap {
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
  background: url("../assets/image/public/login-bg.png") no-repeat center center;
}

.login-content-wrap {
  width: 100%;
  display: table-cell;
  vertical-align: middle;
}

.login-outer-wrap {
  height: 100%;
  min-height: 600px;
  min-width: 700px;
}
/* 
.login-bg{
    position:absolute;
    top:-115px;
    left:-443px;
    z-index: -997;

} */

.error-tip {
  color: #ff2222;
}
</style>