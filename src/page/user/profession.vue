<template>
  <div>
   <navbar title="职称信息" :rightStatus="true" @onDelete="onDelete"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          
          <span class="c-666">日期</span>
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
          
          <span class="c-666">职称</span>
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
          
          <span class="c-666">评审机构</span>
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
      <div class="space-between item">
        <div class="alpha fs-28">
          
          <span class="c-666">证书编号</span>
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
      @onChange="onCountry1ColumnsChange"
    ></picker>
    <datetime ref="startTime" @onDateChange="onChangeDate"></datetime>
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
      countryIndex: 0,
      countryIndex1: 0,
      countryColumns: ["职称1", "职称2", "职称3"],
      countryColumns1: ["机构1", "机构12", "机构13"],
      userInfo: {
        country: "",
        country1: "",
        number: "",
        startTime: "",
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
  async created() {},
  methods: {
    onCountryColumnsChange(index) {
      this.countryIndex = index;
      this.userInfo.country = this.countryColumns[index];
    },
    onCountry1ColumnsChange(index) {
      this.countryIndex1 = index;
      this.userInfo.country1 = this.countryColumns1[index];
    },
    showPopup(name) {
      this.$refs[name].showPopupDialog();
    },
    onChangeDate(options) {
      this.userInfo.startTime = `${options[0]}-${options[1]}-${options[2]}`;
    },
    onDelete(){
      this.$refs['tipDialog'].showDialog();
    },
    onConfirm(){
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
