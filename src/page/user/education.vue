<template>
  <div>
    <navbar title="学历信息" :rightStatus="true" @onDelete="onDelete"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">教育程度</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.edu" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('edu')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">学位</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.location" name="accountType" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('location')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">授予学位国家</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.country" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('country')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">毕业学校</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.number" name="name" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">学习形式</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.read" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('read')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">专业</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.number" name="name" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">最高学历</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.study" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('study')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">入学日期</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.startTime" name="accountType" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('startTime')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">毕业日期</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.endTime" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('endTime')"></van-field>
        </div>
      </div>
    </div>
    <div class="commit-button fix-button">保存</div>
    <picker ref="edu" :index="eduIndex" :columns="eduColumns" @onChange="onEduColumnsChange"></picker>
    <picker ref="country" :index="countryIndex" :columns="countryColumns" @onChange="onCountryColumnsChange"></picker>
    <picker ref="location" :index="locationIndex" :columns="locationColumns" @onChange="onLocationColumnsChange">
    </picker>
    <picker ref="read" :index="readIndex" :columns="readColumns" @onChange="onReadColumnsChange"></picker>
    <picker ref="study" :index="studyIndex" :columns="studyColumns" @onChange="onStudyColumnsChange"></picker>
    <datetime ref="startTime" @onDateChange="onChangeDate"></datetime>
    <datetime ref="endTime" @onDateChange="onChangeDate1"></datetime>
    <tipDialog ref="tipDialog" @onConfirm="onConfirm"></tipDialog>
  </div>
</template>

<script>
  import navbar from "@/component/navbar";
  import tipDialog from "@/component/tipDialog";
  import datetime from "@/component/datetime";
  import picker from "@/component/picker";
  export default {
    data() {
      return {
        eduIndex: 0,
        countryIndex: 0,
        locationIndex: 0,
        readIndex: 0,
        studyIndex: 0,
        eduColumns: ["教育A", "教育b", "教育c"],
        countryColumns: ["中国", "日本", "美国"],
        locationColumns: ["理学学士", "文学学士", "化学学士"],
        readColumns: ["看书", "看视频", "看文档"],
        studyColumns: ["博士", "本科", "专科"],
        userInfo: {
          country: "",
          edu: "",
          location: "",
          read: "",
          study: "",
          number: "",
          startTime: "",
          endTime: "",
        },
      };
    },
    components: {
      datetime,
      picker,
      navbar,
      tipDialog,
    },
    computed: {},
    async created() { },
    methods: {
      onEduColumnsChange(index) {
        this.eduIndex = index;
        this.userInfo.edu = this.eduColumns[index];
      },
      onCountryColumnsChange(index) {
        this.countryIndex = index;
        this.userInfo.country = this.countryColumns[index];
      },
      onLocationColumnsChange(index) {
        this.locationIndex = index;
        this.userInfo.location = this.locationColumns[index];
      },
      onReadColumnsChange(index) {
        this.readIndex = index;
        this.userInfo.read = this.readColumns[index];
      },
      onStudyColumnsChange(index) {
        this.studyIndex = index;
        this.userInfo.study = this.studyColumns[index];
      },
      showPopup(name) {
        this.$refs[name].showPopupDialog();
      },
      onChangeDate(options) {
        this.userInfo.startTime = `${options[0]}-${options[1]}-${options[2]}`;
      },
      onChangeDate1(options) {
        this.userInfo.endTime = `${options[0]}-${options[1]}-${options[2]}`;
      },
      onDelete() {
        this.$refs['tipDialog'].showDialog();
      },
      onConfirm() {
        console.log("确定删除类别的某一项");
      },
    },
  };
</script>

<style scoped lang="scss">
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
      .input {
        padding: 0;
      }
    }
  }
</style>