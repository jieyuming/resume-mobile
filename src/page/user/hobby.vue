<template>
  <div>
    <navbar title="兴趣爱好"></navbar>
    <div class="list">
      <div class="item" :class="selectedIds.indexOf(item.id) > -1 ? 'selected' : ''" v-for="(item, index) in list"
        :key='index' @click="chooseHobby(item.id)">
        {{item.name}}
      </div>
    </div>
    <div class="commit-button fix-button">保存</div>
  </div>
</template>

<script>
  import navbar from "@/component/navbar";
  export default {
    data() {
      return {
        selectedIds: [],//选中的id集合
        list: [
          { id: 1, name: '看书写字' },
          { id: 2, name: '看视频' },
          { id: 3, name: '看书' },
          { id: 4, name: '是个字的' },
          { id: 5, name: '是个字发' },
        ]
      };
    },
    components: {
      navbar
    },
    computed: {},
    async created() { },
    methods: {
      chooseHobby(id) {
        let localIndex = this.selectedIds.indexOf(id)
        if (localIndex > -1) {
          this.selectedIds.splice(localIndex, 1)
        } else {
          this.selectedIds.push(id)
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .list {
    padding: 0.42rem 0 1rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 0 0.34rem;

    .item {
      width: 1.53rem;
      height: 0.56rem;
      line-height: 0.56rem;
      background: #FFFFFF;
      border: 0.5px solid #DCDCDC;
      margin: 0 0.2rem 0.43rem 0;
      text-align: center;
    }

    .selected {
      color: #B91A1C;
      border-color: #B91A1C;
    }
  }
</style>