import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import home from './views/home.vue'
import DIY from './views/diy.vue'
import submit from './views/submit.vue'
import result from './views/result.vue'
import cardSelection from './views/card-selection.vue'
import presetCard from './views/preset-card.vue'
import userApply from './views/user-apply.vue'
import applicationComplete from './views/application-complete.vue'

import components from './components/' // 加载公共组件

Object.keys(components).forEach(key => {
  var name = key.replace(/(\w)/, v => v.toUpperCase()) // 首字母大写
  Vue.component(`v${name}`, components[key])
})

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  exact: false,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/card-selection',
      meta: {
        auth: false,
        title: 'Credit Card Application'
      },
      children: []
    },
    {
      path: '/card-selection',
      meta: {
        auth: false,
        title: 'Credit Card Application'
      },
      component: cardSelection
    },
    {
      path: '/preset-card',
      meta: {
        auth: false,
        title: 'Card Details & Application'
      },
      component: presetCard
    },
    {
      path: '/home',
      meta: {
        auth: false,
        title: '专属纪念卡'
      },
      component: home
    },
    {
      path: '/result',
      meta: {
        auth: false,
        title: '专属纪念卡'
      },
      component: result
    },
    {
      path: '/DIY',
      meta: {
        auth: false,
        title: '专属纪念卡'
      },
      component: DIY
    },
    {
      path: '/Submit',
      meta: {
        auth: false,
        title: '专属纪念卡'
      },
      component: submit
    },
    {
      path: '/user-apply',
      meta: {
        auth: false,
        title: '申请信用卡'
      },
      component: userApply
    },
    {
      path: '/application-complete',
      meta: {
        auth: false,
        title: '申请完成'
      },
      component: applicationComplete
    }
  ]
})
export default router
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.meta.auth) {
  //   //判断该路由是否需要登录权限
  //   // if (localStorage.getItem('userInfo')) {
  //   //   var userId = JSON.parse(localStorage.getItem('userInfo')).userId
  //   // }
   
  //   if (localStorage.getItem("cs-tag")) {
  //     var tag = localStorage.getItem("cs-tag")
  //   }
  //   if (tag !='0') {
  //     //通过封装好的cookies读取token，如果存在，name接下一步如果不存在，那跳转回登录页
  //     next() //不要在next里面加"path:/",会陷入死循环
  //   } else {
  //     var isWeiXin = window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger";
  //     if (isWeiXin) {
  //       var  source = 0;
  //     }
  //     next({
  //       path: '/login',
  //       query: { f: from.path,source,from:'my'} //将跳转的路由path作为参数，登录成功后跳转到该路由
  //     })
  //   }
  // } else {
  //   next()
  // }
})
// router.onError((error) => {
//   const pattern = /Loading chunk (\d)+ failed/g;
//   const isChunkLoadFailed = error.message.match(pattern);
//   const targetPath = router.history.pending.fullPath;
//   if (isChunkLoadFailed) {
//     router.replace(targetPath);
//   }
// });
