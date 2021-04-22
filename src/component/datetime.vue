<template>
  <div>
    <van-popup v-model="showPopup" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        :type="type"
        @cancel="onCancelDate"
        @confirm="onConfirmDate"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @change="changeFn"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      minDate: new Date(1921, 0, 1),
      maxDate: new Date(),
      currentDate: new Date(),
      changeDate: new Date(),
      showPopup: false
    };
  },
  props: {
    // 默认设置年月日 year-month设置年月
    type: {
      type: String,
      default: "date",
    },
  },
  computed: {},
  mounted() {},
  methods: {
    onConfirmDate() {
      // 数值来自日期组件自定义格式的方法回调
      this.$emit("onDateChange", [this.value1, this.value2, this.value3]);
      this.currentDate = new Date(`${this.value1}-${this.value2}-${this.value3}`);
      this.onCancelDate();
    },
    onCancelDate() {
      this.showPopup = false;
    },
    // 回显设置当前时间 参数 字符串1995-09-09 或 时间戳格式
    setCurrentTime(time){
      this.currentDate = new Date(time);
    },
    changeFn() {

    },
    // 日期组件自定义格式
    formatter(type, value) {
      if (type === "year") {
        this.value1 = value; // 可以拿到当前点击的数值
        return `${value}年`;
      } else if (type === "month") {
        this.value2 = value;
        return `${value}月`;
      }
      this.value3 = value;
      return `${value}日`;
    },
    showPopupDialog() {
      this.showPopup = true;
    }
  }
};
</script>

<style scoped lang="scss">
</style>