<template>
  <div>
    <div class="nav-box">
      <div class="alpha" @click="backLastPage" v-if="leftStatus">
        <img class="back-icon" src="../images/back.png" alt="">
      </div>
      <div class="none-box" v-else></div>
      <div class="title">{{title}}</div>
      <div class="beta" v-if="rightStatus" @click="onTap">
        <img class="delete-icon" src="../images/delete-item.png" alt="">
        <span class="text">删除</span>
      </div>
      <div class="none-box" v-else></div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    props: {
      title: {
        type: String,
        default: "",
      },
      // 是否开启左侧按钮
      leftStatus: {
        type: Boolean,
        default: true,
      },
      // 是否开启右侧按钮
      rightStatus: {
        type: Boolean,
        default: false,
      },
      // 是否自定义返回事件
      isControlBack: {
        type: Boolean,
        default: false,
      },
    },
    computed: {},
    mounted() { },
    methods: {
      backLastPage() {
        // 返回上一页
        if (this.isControlBack) {
          this.$emit("onBack")
        } else {
          this.$router.go(-1)
        }
      },
      onTap() {
        this.$emit("onDelete")
      },
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
  .none-box {
    width: 1.46rem;
  }
</style>