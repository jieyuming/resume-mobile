<template>
  <div>
    <navbar title="紧急联系人"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">关系</span>
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
          <span class="c-666">姓名</span>
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
          <span class="c-666">联系电话</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.startTime"
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
          <span class="c-666">联系地址</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.number1"
            name="name"
            center
            label
            placeholder="请输入"
            input-align="right"
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
    <!-- <tipDialog ref="tipDialog" @onConfirm="onConfirm"></tipDialog> -->
  </div>
</template>

<script>
import navbar from "@/component/navbar";
// import tipDialog from "@/component/tipDialog";
import picker from "@/component/picker";
export default {
  data() {
    return {
      countryIndex: 0,
      countryColumns: ["父子", "父女", "兄弟"],
      userInfo: {
        country: "",
        number: "",
        number1: "",
        startTime: "",
        endTime: "",
      },
    };
  },
  components: {
    picker,
    navbar,
    // tipDialog,
  },
  computed: {},
  async created() {},
  methods: {
    showPopup(name) {
      this.$refs[name].showPopupDialog();
    },
    onCountryColumnsChange(index) {
      this.countryIndex = index;
      this.userInfo.country = this.countryColumns[index];
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
