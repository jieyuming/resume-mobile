<template>
  <div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    props: {
      message: {
        type: String,
        default: "确定删除当前信息",
      },
    },
    computed: {},
    mounted() { },
    methods: {
      showDialog() {
        this.$dialog.confirm({
          title: '',
          message: this.message,
          confirmButtonText: "确定",
          confirmButtonColor: "#108EE9",
        })
          .then(() => {
            // on confirm
            this.$emit('onConfirm');
          })
          .catch(() => {
            // on cancel
            this.$emit('onCancel');
          });
      }
    }
  };
</script>

<style scoped lang="scss">
  .nav-box {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.5px solid #EBEBEB;
  }

  .alpha {
    padding: 0 0.4rem;
    width: 0.66rem;
  }

  .back-icon {
    width: 0.4rem;
    height: 0.31rem;
  }

  .delete-icon {
    width: 0.25rem;
    height: 0.23rem;
  }

  .title {
    font-size: 0.36rem;
    color: #000;
    font-weight: bold;
  }

  .beta {
    display: flex;
    align-items: center;
    padding: 0 0.33rem;

    .text {
      font-size: 0.22rem;
      color: #0B6FD8;
      padding: 0 0 0 0.07rem;
    }
  }
</style>