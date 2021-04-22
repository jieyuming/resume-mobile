<template>
  <div>
  <navbar title="身份信息"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">国家/地区</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.country"
            name="accountType"
            center
            label
            readonly
            placeholder="请选择"
            input-align="right"
            @click="showPopup('country')"
          ></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">身份证件号码</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.number"
            name="name"
            center
            label
            placeholder="请输入"
            input-align="right"
          ></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">身份证有效期开始时间</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.startTime"
            name="accountType"
            center
            label
            readonly
            placeholder="请选择"
            input-align="right"
            @click="showPopup('startTime')"
          ></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">身份证有效期结束日期</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.endTime"
            name="accountType"
            center
            label
            readonly
            placeholder="请选择"
            input-align="right"
            @click="showPopup('endTime')"
          ></van-field>
        </div>
      </div>
    </div>
    <div class="commit-button fix-button">保存</div>
    <picker
      ref="country"
      :index="countryIndex"
      :columns="countryColumns"
      @onChange="onCountryColumnsChange"
    ></picker>
    <datetime ref="startTime" @onDateChange="onChangeDate"></datetime>
    <datetime ref="endTime" @onDateChange="onChangeDate1"></datetime>
  </div>
</template>

<script>
  import navbar from "@/component/navbar";
import datetime from "@/component/datetime";
import picker from "@/component/picker";
export default {
  data() {
    return {
      countryIndex: 0,
      countryColumns: ["中国", "美国", "日本"],
      userInfo: {
        country: "",
        number: "",
        startTime: "",
        endTime: "",
      },
    };
  },
  components: {
    datetime,
    picker,
    navbar
  },
  computed: {},
  async created() {},
  methods: {
    onCountryColumnsChange(index) {
      this.countryIndex = index;
      this.userInfo.country = this.countryColumns[index];
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
