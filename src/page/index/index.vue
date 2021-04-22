<template>
  <div class="home">
    <navbar title="验证" :leftStatus="false"></navbar>
    <div class="main">
      <div class="content">
        <img class="logo" src="../../images/company_logo.png" alt="" />
        <div class="login-form">
          <van-form ref="loginForm">
            <div class="code-box">
              <img class="photo" src="../../images/user.png" alt="" />
              <van-field
                class="input phone-input"
                v-model="user.username"
                name="username"
                label=""
                placeholder="姓名"
                center
                placeholder-class="default-placeholder"
              />
            </div>

            <div class="code-box">
              <img class="photo" src="../../images/phone.png" alt="" />
              <van-field
                class="input code-input"
                v-model="user.imgNumber"
                name="imgNumber"
                center
                label=""
                type="number"
                placeholder="手机号码"
                placeholder-class="default-placeholder"
              >
              </van-field>
            </div>
            <div class="code-box">
              <img class="photo" src="../../images/safe.png" alt="" />
              <van-field
                class="input code-input"
                v-model="user.sms"
                name="sms"
                center
                label=""
                type="number"
                placeholder="识别码"
                placeholder-class="default-placeholder"
              >
              </van-field>
            </div>
            <van-button class="login-btn" block type="info" @click="save">
              提交
            </van-button>
          </van-form>
        </div>
      </div>
    </div>
    <!-- 兑换结果弹框 -->
    <van-popup
      v-model="resultViseible"
      close-icon-position="top-right"
      class="result-popup"
      overlay-class="overlay"
      @closed="onCloseResultDialog"
    >
      <div class="content">
        <div>您输入的信息不正确，请联系对应的招聘负责人</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import navbar from "@/component/navbar";
import { mapState } from "vuex";
import { checkoutPhone, checkoutCode } from "@/common/util";
export default {
  data() {
    return {
      resultViseible: false,
      user: {
        username: "",
        sms: "",
        imgNumber: "",
      },
    };
  },
  components: {
    navbar
  },
  computed: {
    ...mapState({
      loginStatus: (state) => state.user.loginStatus,
    }),
  },
  async created() {},
  methods: {
    onCloseLoginDialog() {
      this.loginVisible = false;
    },
    onCloseResultDialog() {
      resultViseible = false;
    },
    save() {
      // this.resultViseible = true; //显示错误弹框
      this.$router.push({ path: `/user/base` });
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  background-color: #c11113;
  height: 100%;
  overflow: hidden;
  .main {
    background-image: url("../../images/home-bg.png");
    background-repeat: no-repeat;
    background-size: 100% auto;
    height: 13.34rem;
    .content {
      margin: 0 auto 0;
      .logo {
        display: block;
        width: 4.98rem;
        height: 1.32rem;
        margin: 0 auto 0;
        padding: 1.02rem 0 0;
      }
      .login-form {
        margin: 0.67rem auto 0;
        padding: 0.76rem 0 0.49rem;
        width: 5.65rem;
        // height: 5.75rem;
        background: #ffffff;
        box-shadow: 0px 1px 13px 0px rgba(0, 0, 0, 0.24);
        border-radius: 2.5px;
        text-align: center;
        display: flex;
        justify-content: center;
        .code-box {
          display: flex;
          align-items: center;
          border: 0.5px solid #c0c0c0;
          width: 5rem;
          height: 0.76rem;
          margin: 0 0 0.43rem;
          .photo {
            width: 0.6rem;
            height: 0.63rem;
            margin: 0 0.2rem 0 0.23rem;
          }
          .input {
            flex: 1;
            height: 0.63rem;
            padding: 0;
          }
        }
        .login-btn {
          display: block;
          width: 3.81rem;
          height: 0.74rem;
          background: #b91a1c;
          border-radius: 16.5px;
          border: none;
          margin: 0.16rem auto 0;
        }
      }
    }
  }
}

.result-popup {
  width: 6.69rem;
  background: #ffffff;
  box-shadow: 0px 2px 22px 0px rgba(0, 0, 0, 0.19);
  border-radius: 7px;
  .content {
    padding: 0.3rem 0.6rem;
    text-align: center;
    color: #252525;
    font-size: 0.26rem;
  }
}
</style>
