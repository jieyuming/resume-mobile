<template>
  <div style="padding: 0 0 0.29rem">
    <navbar title="工作经历" :rightStatus="true" @onDelete="onDelete"></navbar>
    <div class="list">
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">开始日期</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.startTime" name="accountType" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('startTime')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">结束日期</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.endTime" name="accountType" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('endTime')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">过往工作单位名称</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name" name="name" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">所属行业</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name1" name="name1" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('name1')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">国家</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name2" name="name2" center label readonly
            placeholder="请选择" input-align="right" @click="showPopup('name2')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">州/省</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name3" name="name3" center label readonly placeholder="请选择"
            input-align="right" @click="showPopup('name3')"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">城市</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name4" name="name4" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="mark">*</span>
          <span class="c-666">最后职位</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name5" name="name5" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">工作职责描述</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name6" name="name6" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">证明人</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name7" name="name7" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">联系电话</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name8" name="name8" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
      <div class="space-between item">
        <div class="alpha fs-28">
          <span class="c-666">离职原因</span>
        </div>
        <div class="beta">
          <van-field class="input" v-model="userInfo.name9" name="name9" center label placeholder="请输入"
            input-align="right"></van-field>
        </div>
      </div>
    </div>
    <div class="commit-button">保存</div>
    <picker ref="name1" :index="nameIndex" :columns="name2Columns" @onChange="onNamechage"></picker>
    <picker ref="name2" :index="nameIndex1" :columns="name3Columns" @onChange="onNamechage1"></picker>
    <picker ref="name3" :index="nameIndex2" :columns="name4Columns" @onChange="onNamechage2">
    </picker>
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
        nameIndex: 0,
        nameIndex1: 0,
        nameIndex2: 0,
        name2Columns: ["互联网", "金融", "建筑设计"],
        name3Columns: ["中国", "美国", "日本"],
        name4Columns: ["广东省", "浙江省", "东北省"],
        userInfo: {
          name: "",
          name1: "",
          name2: '中国',
          name3: "",
          name4: "",
          name5: "",
          name6: "",
          name7: "",
          name8: "",
          name9: "",
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
      onNamechage(index) {
        this.nameIndex = index;
        this.userInfo.name1 = this.name2Columns[index];
      },
      onNamechage1(index) {
        this.nameIndex1 = index;
        this.userInfo.name2 = this.name3Columns[index];
      },
      onNamechage2(index) {
        this.nameIndex2 = index;
        this.userInfo.name3 = this.name4Columns[index];
      },
      // onNamechage
      showPopup(name) {
        this.$refs[name].showPopupDialog();
      },
      onChangeDate(options) {
        this.userInfo.startTime = `${options[0]}-${options[1]}-${options[2]}`;
      },
      onChangeDate1(options) {
        this.userInfo.endTime = `${options[0]}-${options[1]}-${options[2]}`;
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