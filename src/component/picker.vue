<template>
  <div>
    <van-popup v-model="showPopup" position="bottom">
      <van-picker
        title
        show-toolbar
        :columns="columns"
        :default-index="index"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {},
  mounted() {},
  methods: {
    onConfirm(value, index) {
      // (`当前值：${value}, 当前索引：${index}`);
      this.$emit("onChange", index);
      this.onCancel();
    },
    onChange(picker, value, index) {},
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