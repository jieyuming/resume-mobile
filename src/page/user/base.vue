<template>
  <div class="main-body">
    <navbar title="基本信息"></navbar>
    <div class="list">
      <div class="item border-bt" @click="goNextPage('detail')">
        <div class="alpha">
          <div v-if="isHadUserInfo">
            <div class="fw-bold">张先生</div>
            <div class="summary">女·未婚·1998.09</div>
          </div>
          <div v-else class="fw-bold">个人信息</div>
        </div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有身份信息 -->
      <div
        class="border-bt"
        v-if="isIdentity"
        @click="goNextPage('identity')"
        style="padding: 0.33rem 0 0.29rem"
      >
        <div class="space-between">
          <div class="fw-bold fs-32">身份信息</div>
          <img class="beta edit-icon" src="../../images/edit.png" alt="" />
        </div>
        <div style="padding: 0.15rem 0 0.08rem; line-height: 0.37rem">
          <span style="padding: 0 0.5rem 0 0">中国</span
          ><span>441428888888888888</span>
        </div>
        <div class="c-999">2019.02.11-2039.02.11</div>
      </div>
      <!-- 无身份信息 -->
      <div class="item border-bt" v-else @click="goNextPage('identity')">
        <div class="alpha">
          <div class="fw-bold">身份信息</div>
        </div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有银行卡信息 -->
      <div
        class="border-bt"
        v-if="isHadCard"
        @click="goNextPage('card')"
        style="padding: 0.32rem 0 0.26rem"
      >
        <div class="space-between">
          <div class="fw-bold fs-32">银行卡信息</div>
          <img class="beta edit-icon" src="../../images/edit.png" alt="" />
        </div>
        <div style="padding: 0.15rem 0 0.08rem; line-height: 0.37rem">
          <span>张某某</span>
        </div>
        <div>
          <span style="padding: 0 0.3rem 0 0">中国银行</span
          ><span>441428888888888888</span>
        </div>
      </div>
      <!-- 无银行卡信息 -->
      <div @click="goNextPage('card')" v-else class="item border-bt">
        <div class="alpha">银行卡信息</div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有学历信息 -->
      <div
        class="border-bt"
        v-if="isHadeduation"
        style="padding: 0.29rem 0 0.04rem"
        @click="goNextPage('education')"
      >
        <div class="space-between pb-15">
          <div class="fw-bold fs-32">学历信息</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div style="padding: 0 0 0.28rem; line-height: 0.37rem">
          <div class="space-between" style="padding: 0 0 0.1rem">
            <div>广东外语外贸南国学院</div>
            <div class="c-999">2015-2019</div>
          </div>
          <div class="c-999">
            大学本科·学士学位｜计算机应用技术（大数据方向）
          </div>
        </div>
        <div style="padding: 0 0 0.28rem; line-height: 0.37rem">
          <div class="space-between" style="padding: 0 0 0.1rem">
            <div>广东外语外贸南国学院</div>
            <div class="c-999">2015-2019</div>
          </div>
          <div class="c-999">
            大学本科·学士学位｜计算机应用技术（大数据方向）
          </div>
        </div>
      </div>
      <!-- 无学历信息 -->
      <div v-else @click="goNextPage('education')" class="item border-bt">
        <div class="alpha">学历信息</div>
        <img class="beta add-icon" src="../../images/add.png" alt="" />
      </div>
      <!-- 有职称信息 -->
      <div
        class="border-bt"
        v-if="isProfession"
        @click="goNextPage('profession')"
        style="padding: 0.29rem 0 0.04rem"
      >
        <div class="space-between pb-15">
          <div class="fw-bold fs-32">职称信息</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div style="padding: 0 0 0.28rem; line-height: 0.37rem">
          <div class="space-between" style="padding: 0 0 0.1rem">
            <div>职称字段</div>
            <div class="c-999">2019.06.12</div>
          </div>
          <div class="c-999">评审机构｜证书编号</div>
        </div>
      </div>
      <!-- 无职称信息 -->
      <div v-else @click="goNextPage('profession')" class="item border-bt">
        <div class="alpha">职称信息</div>
        <img class="beta add-icon" src="../../images/add.png" alt="" />
      </div>
      <!--  -->
      <!-- 有职业资格信息 -->
      <div
        class="border-bt"
        v-if="isQualification"
        @click="goNextPage('qualification')"
        style="padding: 0.29rem 0 0.04rem"
      >
        <div class="space-between pb-15">
          <div class="fw-bold fs-32">职业资格信息</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div style="padding: 0 0 0.28rem; line-height: 0.37rem">
          <div class="space-between" style="padding: 0 0 0.1rem">
            <div>职业资格字段</div>
            <div class="c-999">2013.04.23-2021.04.23</div>
          </div>
          <div class="c-999">名称｜签发机构</div>
        </div>
      </div>
      <!-- 无业资格信息 -->
      <div v-else @click="goNextPage('qualification')" class="item border-bt">
        <div class="alpha">职业资格信息</div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有兴趣爱好 -->
      <div
        class="border-bt"
        v-if="isHobby"
        @click="goNextPage('hobby')"
        style="padding: 0.29rem 0 0.04rem"
      >
        <div class="space-between">
          <div class="fw-bold fs-32">兴趣爱好</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div class="hobby-list">
          <div
            class="hobby-item"
            v-for="(item, index) in habbyList"
            :key="index"
          >
            看书
          </div>
        </div>
      </div>
      <!-- 无兴趣爱好 -->
      <div v-else @click="goNextPage('hobby')" class="item border-bt">
        <div class="alpha">兴趣爱好</div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有电话信息 -->
      <div
        class="border-bt"
        @click="goNextPage('telephone')"
        v-if="isHadTel"
        style="padding: 0.29rem 0 0.04rem"
      >
        <div class="space-between">
          <div class="fw-bold fs-32">电话信息</div>
          <img class="beta add-icon" src="../../images/add.png" alt="" />
        </div>
        <div style="padding: 0.22rem 0 0.14rem">
          <div
            class="space-between"
            style="padding: 0 0 0.26rem"
            v-for="(item, index) in habbyList"
            :key="index"
          >
            <div>
              <span class="default-tag" :class="index === 0 ? 'first-tag' : ''"
                >首选</span
              >
              <span>18888888888</span>
            </div>
            <div class="c-999">电话类型｜分机</div>
          </div>
        </div>
      </div>
      <!-- 无电话信息 -->
      <div v-else @click="goNextPage('telephone')" class="item border-bt">
        <div class="alpha">电话信息</div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
      <!-- 有过往工作信息 -->
      <div
        class="border-bt"
        v-if="isHadExp"
        @click="goNextPage('experience')"
        style="padding: 0.29rem 0 0.16rem"
      >
        <div class="space-between" style="padding: 0 0 0.21rem">
          <div class="fw-bold fs-32">过往工作信息</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div
          v-for="(item, index) in habbyList"
          :key="index"
          style="padding: 0 0 0.2rem; line-height: 0.37rem"
        >
          <div class="space-between" style="padding: 0 0 0.14rem">
            <div>单位名称</div>
            <div class="c-999">2013.04.23-2021.04.23</div>
          </div>
          <div>所属行业｜最后职位</div>
        </div>
      </div>
      <!-- 无过往工作信息 -->
      <div v-else @click="goNextPage('experience')" class="item border-bt">
        <div class="alpha">过往工作信息</div>
        <img class="beta add-icon" src="../../images/add.png" alt="" />
      </div>

      <!-- 有主要家庭成员 -->
      <div
        class="border-bt"
        v-if="isHadMember"
        @click="goNextPage('members')"
        style="padding: 0.29rem 0 0.16rem"
      >
        <div class="space-between" style="padding: 0 0 0.21rem">
          <div class="fw-bold fs-32">主要家庭成员</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div v-for="(item, index) in habbyList" :key="index">
          <div
            class="space-between"
            style="padding: 0 0 0.23rem; line-height: 0.37rem"
          >
            <div>
              <span style="padding: 0 0.25rem 0 0">张某某</span>
              <span>父子</span>
            </div>
            <div>18888888888</div>
          </div>
        </div>
      </div>
      <!-- 无主要家庭成员 -->
      <div v-else @click="goNextPage('members')" class="item border-bt">
        <div class="alpha">主要家庭成员</div>
        <img class="beta add-icon" src="../../images/add.png" alt="" />
      </div>

      <!-- 有紧急联系人 由多项改为单项 -->
      <div
        class="border-bt"
        v-if="isHadConcat"
        @click="goNextPage('concat')"
        style="padding: 0.29rem 0 0.16rem"
      >
        <div class="space-between" style="padding: 0 0 0.21rem">
          <div class="fw-bold fs-32">紧急联系人</div>
          <img class="beta edit-icon" src="../../images/add.png" alt="" />
        </div>
        <div style="padding: 0 0 0.23rem">
          <div
            class="space-between"
            style="padding: 0 0 0.12rem; line-height: 0.37rem"
          >
            <div>
              <span style="padding: 0 0.25rem 0 0">张某某</span>
              <span>父子</span>
            </div>
            <div>18888888888</div>
          </div>
          <div>广东省深圳市宝安区锦绣半岛花园小区</div>
        </div>
      </div>
      <!-- 无紧急联系人 -->
      <div v-else @click="goNextPage('concat')" class="item border-bt">
        <div class="alpha">紧急联系人</div>
        <img class="beta add-icon" src="../../images/add.png" alt="" />
      </div>

      <!-- 有电子附件信息 -->
      <div
        class=""
        v-if="isHadMember"
        @click="goNextPage('accessories')"
        style="padding: 0.29rem 0 0.16rem"
      >
        <div class="space-between" style="padding: 0 0 0.21rem">
          <div class="fw-bold fs-32">电子附件信息</div>
          <img class="beta edit-icon" src="../../images/edit.png" alt="" />
        </div>
        <div
          v-for="(item, index) in asslist"
          :key="index"
          class="accessorie-list"
        >
          <div class="theme">
            <span v-if="item.isMust" class="mark">*</span>
            <span>{{item.name}}</span>
          </div>
          <div class="img-box">
            <img
              class="header_img"
              src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1489807627,808259306&fm=26&gp=0.jpg"
              alt=""
            />
            <img class="remove_icon" src="../../images/remove.png" alt="" />
          </div>
        </div>
      </div>
      <!-- 无电子附件信息 -->
      <div v-else @click="goNextPage('accessories')" class="item border-bt">
        <div class="alpha">电子附件信息</div>
        <img class="beta edit-icon" src="../../images/edit.png" alt="" />
      </div>
    </div>
    <div class="commit-button">提交</div>
  </div>
</template>

<script>
import navbar from "@/component/navbar";
export default {
  data() {
    return {
      habbyList: [{}, {}, {}], //
      asslist: [{ id: 1, name: '身份证人像面', isMust: true}, { id: 1, name: '身份证国徽面' , isMust: true}, { id: 1, name: '毕业证书' , isMust: true}, { id: 1, name: '学位证书', isMust: true }, { id: 1, name: '体检报告' }, { id: 1, name: '原单位离职证明' }, { id: 1, name: '职称证书' }],
      isHadUserInfo: true, //是否有个人信息
      isIdentity: true, //是否有身份信息
      isHadCard: true, //是否有银行卡信息
      isHadeduation: true, //是否有学历
      isProfession: true, //是否由职称
      isQualification: true, //是否由职业资格
      isHobby: true, //是否由职业资格
      isHadTel: true, //是否有电话
      isHadExp: true, //是否有工作经历
      isHadMember: true, //是否有家庭成员
      isHadConcat: true, //是否有紧急联系人
      isHadAccessories: true, //是否有电子附件
    };
  },
  components: {
    navbar,
  },
  computed: {},
  async created() {},
  methods: {
    goNextPage(name) {
      this.$router.push({ path: `/user/${name}` });
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.34rem 0;
      .alpha {
        font-size: 0.32rem;
      }
      .summary {
        font-size: 0.26rem;
        font-weight: normal;
        color: #999;
        padding: 0.11rem 0 0;
      }
      .beta {
      }
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
.hobby-list {
  display: flex;
  padding: 0 0 0.3rem;
  .hobby-item {
    width: 1.56rem;
    height: 0.56rem;
    line-height: 0.56rem;
    text-align: center;
    border: 0.5px solid #dcdcdc;
    margin: 0.25rem 0.2rem 0 0;
  }
}
.default-tag {
  background: #c0c0c0;
  border-radius: 8px;
  font-size: 0.18rem;
  padding: 0.03rem 0.08rem;
  color: #fff;
}
.first-tag {
  background: #b91a1c;
}
.accessorie-list {
  font-size: 0.28rem;
  .theme {
    padding: 0.3rem 0 0.36rem;
  }
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
.pb-15 {
  padding: 0 0 0.15rem;
}
</style>
