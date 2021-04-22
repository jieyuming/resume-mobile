<template>
  <div style="padding: 0 0 0.33rem">
  <navbar title="个人信息"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">照片</span>
        </div>
        <div class="beta">
          <div class="image-box">
            <van-uploader :deletable="false" :max-count="1" :preview-full-image="false" :after-read="afterRead"
              image-fit="contain">
              <!-- 设置默认图 72 * 88 -->
              <img v-if="imgSrc" class="header_img" :src="imgSrc" alt="">
              <img v-else class="header_img"
                src="../../images/default-header.png"
                alt />
            </van-uploader>
          </div>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">姓名</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name" name="name" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">出生日期</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.birth" name="birth" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('birth')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">性别</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.sex" name="sex" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('sex')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">婚姻状况</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.marryStatus" name="marryStatus" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('marryPicker')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">参加工作时间</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.workTime" name="workTime" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('workTime')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">民族</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.nation" name="nation" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('nation')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">政治面貌</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.outlook" name="outlook" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('outlook')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">籍贯</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.nativePlace" name="nativePlace" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('nativePlace')"></van-field>
        </div>
      </div>

      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">社保账号</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.a" name="a" center label placeholder="请输入" input-align="right">
          </van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">公积金账号</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.b" name="name" center label placeholder="请输入" input-align="right">
          </van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">户口类别</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.accountType" name="accountType" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('accountType')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">户口所在地</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.residence" name="residence" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('residence')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">血型</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.bloodType" name="bloodType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('bloodType')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">个人邮箱地址</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.c" name="name" center label placeholder="请输入" input-align="right">
          </van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">现居住地址</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.d" name="name" center label placeholder="请输入" input-align="right">
          </van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">家庭住址</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.e" name="name" center label placeholder="请输入" input-align="right">
          </van-field>
        </div>
      </div>
    </div>
    <div class="commit-button">保存</div>
    <datetime ref="birth" @onDateChange="onChangeDate"></datetime>
    <datetime ref="workTime" @onDateChange="onWorkChangeDate"></datetime>
    <picker ref="sex" :index="sexIndex" :columns="sexColumns" @onChange="onSexChange"></picker>
    <picker ref="marryPicker" :index="marryIndex" :columns="marryColumns" @onChange="onMarryChange"></picker>
    <picker ref="nation" :index="nationIndex" :columns="nationColumns" @onChange="onNationChange"></picker>
    <picker ref="outlook" :index="outlookIndex" :columns="outlookColumns" @onChange="onOutlookColumnsChange"></picker>
    <picker ref="accountType" :index="outlookIndex" :columns="accountTypeColumns" @onChange="onAccountTypeChange">
    </picker>
    <picker ref="bloodType" :index="outlookIndex" :columns="bloodTypeColumns" @onChange="onBloodTypeColumnsChange">
    </picker>
    <cascader ref="nativePlace" :options="options" @onChange="onNativeChange"></cascader>
    <cascader ref="residence" :options="options" @onChange="onResidenceChange"></cascader>
  </div>
</template>

<script>
  import navbar from "@/component/navbar";
  import datetime from "@/component/datetime";
  import picker from "@/component/picker";
  import cascader from "@/component/cascader";

  export default {
    data() {
      return {
        sexIndex: 0, //选择器下标，用于回显
        marryIndex: 0,
        nationIndex: 0,
        outlookIndex: 0,
        accountTypeIndex: 0,
        bloodTypeIndex: 0,
        marryColumns: ["已婚", "未婚"],
        sexColumns: ["男", "女"],
        nationColumns: ["汉族", "回族"],
        outlookColumns: ["群众", "团员", "党员"],
        accountTypeColumns: ["城市", "农村"],
        bloodTypeColumns: ["O型", "A型", "B型", "AB型"],
        options: [
          {
            text: "浙江省",
            value: "330000",
            children: [
              { text: "杭州市", value: "330100" },
              { text: "某某州", value: "1111" },
            ],
          },
          {
            text: "广东省",
            value: "620000",
            children: [
              { text: "广州市", value: "320101" },
              { text: "佛山市", value: "22222" },
            ],
          },
        ],
        userInfo: {
          name: "",
          birth: "",
          sex: "",
          marryStatus: "",
          workTime: "",
          nation: "",
          outlook: "", //政治面貌
          nativePlace: "", //籍贯
          accountType: "", //户口类别
          residence: "", //户口所在地
          bloodType: "", //血型
          a: "",
          b: "",
          c: "",
          d: "",
          e: "",
        },
        imgSrc: '',//用户头像
      };
    },
    components: {
      datetime,
      picker,
      cascader,
      navbar
    },
    computed: {},
    async created() { 
      
    },
    mounted() {
      // 回显时间组件
      // this.$refs["birth"].setCurrentTime('1995-10-09');
      // this.$refs["birth"].setCurrentTime(1615368564463);
      // 回显地区组件
      // this.$refs["nativePlace"].setCascaderValue('1111');
    },
    methods: {
      onCloseLoginDialog() {
        this.loginVisible = false;
      },
      onCloseResultDialog() {
        resultViseible = false;
      },
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file.content);
        this.imgSrc = file.content;
      },
      onChangeDate(options) {
        console.log(options);
        this.userInfo.birth = `${options[0]}-${options[1]}-${options[2]}`;
      },
      onWorkChangeDate(options) {
        this.userInfo.workTime = `${options[0]}-${options[1]}-${options[2]}`;
      },
      showPopup(name) {
        this.$refs[name].showPopupDialog();
      },
      onSexChange(index) {
        this.sexIndex = index;
        this.userInfo.sex = this.sexColumns[index];
      },
      onMarryChange(index) {
        this.marryIndex = index;
        this.userInfo.marryStatus = this.marryColumns[index];
      },
      onNationChange(index) {
        this.nationIndex = index;
        this.userInfo.nation = this.nationColumns[index];
      },
      onNativeChange(value) {
        this.userInfo.nativePlace = value;
      },
      onResidenceChange(value) {
        this.userInfo.residence = value;
      },
      onOutlookColumnsChange(index) {
        this.outlookIndex = index;
        this.userInfo.outlook = this.outlookColumns[index];
      },
      onAccountTypeChange(index) {
        this.accountTypeIndex = index;
        this.userInfo.accountType = this.accountTypeColumns[index];
      },
      onBloodTypeColumnsChange(index) {
        this.bloodTypeIndex = index;
        this.userInfo.bloodType = this.bloodTypeColumns[index];
      },
    },
  };
</script>

<style lang="scss" scoped>
  .list {
    padding: 0 0.4rem 0.42rem;

    .item {
      padding: 0.25rem 0;
      border-bottom: 1px solid #eaeaea;

      .mark {
        color: #e53e27;
      }
    }

    .beta {
      background: #f0f0f0;

      .image-box {
        width: 0.72rem;
        height: 0.88rem;
        overflow: hidden;
        display: flex;
        align-items: center;
      }

      .header_img {
        width: 100%;
        display: block;
      }

      .input {
        padding: 0;
      }
    }
  }
  .van-uploader__preview-image{
    width: 100%;
    height: 100%;
  }
</style>