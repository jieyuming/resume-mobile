<template>
  <div class="main-body">
    <navbar title="电子附件"></navbar>
    <div class="list">
      <div class="item">
        <div class="" style="padding: 0.29rem 0 0.16rem">
          <div class="accessorie-list" v-for="(item ,index) in list" :key="index" >
            <div class="space-between" style="padding: 0 0 0.21rem">
              <div class="theme">
                <span v-if="item.isMust" class="mark">*</span>
                <span>{{item.name}}</span>
              </div>
              <!-- multiple 属性 -->
              <van-uploader :after-read="afterRead">
                <img class="beta edit-icon" src="../../images/add.png" alt="" />
              </van-uploader>

            </div>

            <div class="img-box">
              <img class="header_img"
                src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1489807627,808259306&fm=26&gp=0.jpg"
                alt="" />
              <img class="remove_icon" src="../../images/remove.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="commit-button">保存</div>
  </div>
</template>

<script>
import navbar from "@/component/navbar";
  export default {
    data() {
      return {
        list: [{ id: 1, name: '身份证人像面', isMust: true}, { id: 1, name: '身份证国徽面' , isMust: true}, { id: 1, name: '毕业证书' , isMust: true}, { id: 1, name: '学位证书', isMust: true }, { id: 1, name: '体检报告' }, { id: 1, name: '原单位离职证明' }, { id: 1, name: '职称证书' }]
      };
    },
    components: {
      navbar
    },
    computed: {},
    async created() { },
    methods: {
      afterRead(file) {
        // 此时可以自行将文件上传至服务器
        console.log(file.content);
      },
    },
  };
</script>

<style scoped lang="scss">
  .main-body {
    padding: 0.03rem 0 0.34rem;

    .list {
      padding: 0 0.4rem 0.23rem;

      .item {
        padding: 0 0 0.34rem;

        .alpha {
          font-size: 0.32rem;
        }

        .summary {
          font-size: 0.26rem;
          font-weight: normal;
          color: #999;
          padding: 0.11rem 0 0;
        }

        .beta {}
      }

      .had {
        padding: 0.3rem 0;
      }
    }

    .add-icon {
      width: 0.42rem;
      height: 0.42rem;
    }

    .edit-icon {
      width: 0.4rem;
      height: 0.4rem;
    }
  }

  .accessorie-list {
    font-size: 0.28rem;
    padding: 0 0 0.3rem;

    .mark {
      color: #e53e27;
    }

    .img-box {
      position: relative;
      padding: 0 0 0.4rem;
      border-bottom: 0.5px solid #eaeaea;

      .header_img {
        border: 1px solid #f0f0f0;
        width: 1.52rem;
        height: 1.52rem;
      }

      .remove_icon {
        position: absolute;
        top: -0.15rem;
        left: 1.34rem;
        width: 0.36rem;
        height: 0.36rem;
        z-index: 1;
      }
    }
  }
</style>