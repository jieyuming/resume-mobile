<template>
  <div>
  <navbar title="电话信息" :rightStatus="true" @onDelete="onDelete"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">电话类型</span>
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
          <span class="c-666">电话号码</span>
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
          <span class="c-666">分机</span>
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
          <span class="mark">*</span>
          <span class="c-666">首选</span>
        </div>
        <div class="beta">
          <van-field
            class="input"
            v-model="userInfo.country1"
            name="accountType"
            center
            label
            readonly
            placeholder="请选择"
            input-align="right"
            @click="showPopup('country1')"
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
    <picker
    ref="country1"
    :index="countryIndex1"
    :columns="countryColumns1"
    @onChange="onCountryColumnsChange1"
  ></picker>
  <tipDialog ref="tipDialog" @onConfirm="onConfirm"></tipDialog>
  </div>
</template>

<script>
import navbar from "@/component/navbar";
import tipDialog from "@/component/tipDialog";
import picker from "@/component/picker";
export default {
  data() {
    return {
      countryIndex: 0,
      countryIndex1: 0,
      countryColumns: ["父子", "父女", "兄弟"],
      countryColumns1: ["首选1", "首选2", "首选3"],
      userInfo: {
        country: "",
        country1: '',
        number: "",
        startTime: "",
        endTime: "",
      },
    };
  },
  components: {
    picker,
    navbar,
    tipDialog,
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
    onCountryColumnsChange1(index) {
      this.countryIndex1 = index;
      this.userInfo.country1 = this.countryColumns1[index];
    },
        onDelete(){
      console.log("删除类别的某一项");
      this.$refs['tipDialog'].showDialog();
    },
    onConfirm(){
      console.log("确认删除类别的某一项");
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
