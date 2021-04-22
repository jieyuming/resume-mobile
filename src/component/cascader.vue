<template>
  <div>
    <van-popup v-model="showPopup" position="bottom">
      <van-cascader
        v-model="cascaderValue"
        :title="title"
        :options="options"
        @close="onCancel"
        @finish="onFinish"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false,
      fieldValue: "",
      cascaderValue: ""
      // 选项列表，children 代表子选项，支持多级嵌套
    };
  },
  props: {
    options: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: "请选择所在地区"
    },
  },
  computed: {},
  mounted() {},
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({ selectedOptions }) {
      this.onCancel();
      let value = selectedOptions.map(option => option.text).join("");
      this.fieldValue = value;
      this.$emit("onChange", value)
    },
    // 设置最后一级的value值，就能回显
    setCascaderValue(value) {
      this.cascaderValue = value;
    },
    onCancel() {
      this.showPopup = false;
    },
    showPopupDialog() {
      this.showPopup = true;
    }
  }
};
</script>

<style scoped lang="scss">
</style>