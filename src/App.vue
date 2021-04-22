<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
export default {
  name: "App",
  created() {

  },
};
</script>

<style>
/* 公共样式 */
@import "/common/css/common.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #333;
  font-size: 0.26rem;
  max-width: 7.5rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background: #fff;
  /* margin-top: 60px; */
}
</style>
