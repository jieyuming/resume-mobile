import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible'
// 按需引入vant组件
import './common/vant_ui'
import VueWechatTitle from 'vue-wechat-title'

// 引入状态管理
import store from './vuex/store'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(VueWechatTitle)
Vue.config.productionTip = false
Vue.config.errorHandler = function (err, vm, info) {
  console.error(err)
  console.error(info)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
    // 如果是 iOS 设备，则使用如下 hack 的写法实现页面标题的更新
    if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      const hackIframe = document.createElement('iframe');
      hackIframe.style.display = 'none';
      hackIframe.src = '/static/html/fixIosTitle.html?r=' + Math.random();
      document.body.appendChild(hackIframe);
      setTimeout(_ => {
        document.body.removeChild(hackIframe)
      }, 300)
    }
  }
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});