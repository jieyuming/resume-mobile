import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Index from '@/page/index/index'
// 兑换券列表
import list from '@/page/coupon/list'

// 个人信息编辑
import detail from '@/page/user/detail'
// 电子附件
import accessories from '@/page/user/accessories'
// 个人信息
import base from '@/page/user/base'
// 职业资格
import qualification from '@/page/user/qualification'
// 爱好
import hobby from '@/page/user/hobby'
// 家庭成员
import members from '@/page/user/members'
// 联系人
import concat from '@/page/user/concat'
// 手机信息
import telephone from '@/page/user/telephone'
// 工作经验
import experience from '@/page/user/experience'
// 身份信息
import identity from '@/page/user/identity'
// 银行卡信息
import card from '@/page/user/card'
// 职称信息
import profession from '@/page/user/profession'
// 学历
import education from '@/page/user/education'

Vue.use(Router)

export default new Router({
  mode: 'history',//hash模式改为history 模式
  routes: [
    {
      path: '/', redirect: '/index'
    },
    // 活动首页
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {
        title: '验证',
      }
    },
    {
      path: '/user/detail',
      name: 'detail',
      component: detail,
      meta: {
        title: '基本信息',
      }
    },
    {
      path: '/user/accessories',
      name: 'accessories',
      component: accessories,
      meta: {
        title: '电子附件',
      }
    },
    {
      path: '/user/base',
      name: 'base',
      component: base,
      meta: {
        title: '个人信息',
      }
    },
    {
      path: '/user/qualification',
      name: 'qualification',
      component: qualification,
      meta: {
        title: '职业资格',
      }
    },
    {
      path: '/user/hobby',
      name: 'hobby',
      component: hobby,
      meta: {
        title: '兴趣爱好',
      }
    },
    {
      path: '/user/members',
      name: 'members',
      component: members,
      meta: {
        title: '家庭成员',
      }
    },
    {
      path: '/user/concat',
      name: 'concat',
      component: concat,
      meta: {
        title: '紧急联系人',
      }
    },
    {
      path: '/user/telephone',
      name: 'telephone',
      component: telephone,
      meta: {
        title: '电话信息',
      }
    },
    {
      path: '/user/experience',
      name: 'experience',
      component: experience,
      meta: {
        title: '工作经历',
      }
    },
    {
      path: '/user/identity',
      name: 'identity',
      component: identity,
      meta: {
        title: '身份信息',
      }
    },
    {
      path: '/user/card',
      name: 'card',
      component: card,
      meta: {
        title: '工作经历',
      }
    },
    {
      path: '/user/profession',
      name: 'profession',
      component: profession,
      meta: {
        title: '职称信息',
      }
    },
    {
      path: '/user/education',
      name: 'education',
      component: education,
      meta: {
        title: '学历信息',
      }
    },
  ]
})
