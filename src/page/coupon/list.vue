<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      loginVisible: false, //登录弹框
    };
  },
  components: {},
  computed: {},
  async created() {},
  methods: {
    onCloseLoginDialog() {
      this.loginVisible = false;
    },
    onCloseResultDialog() {
      resultViseible = false;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
