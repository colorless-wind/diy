import './less/common.css'
import './less/common.less'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import './registerServiceWorker'
import 'lib-flexible'
import Toasted from 'vue-toasted'
import VueClipboard from 'vue-clipboard2'
//引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Calendar from 'vue2-datepick';
import hidemenu from './assets/js/hidemenu.js';

/*全局引入*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' //这里注意具体看使用的版本是否需要引入样式，以及具体位置。

import AlloyFinger from 'alloyfinger'
import Transform from 'css3transform'
import AlloyFingerPlugin from 'alloyfinger/vue/alloy_finger_vue'
import wx from "weixin-js-sdk";

import VConsole from "vconsole"
import { isDev } from './utils/config'

// import '../public/js/transform.js'
// import '../public/js/alloy_finger.js'
// import '../public/js/to.js'
if(isDev){
  new VConsole();
}

Vue.use(Transform)
Vue.use(AlloyFingerPlugin, {
  AlloyFinger
})

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(Toasted)
Vue.use(VueClipboard)
Vue.use(MintUI)
Vue.use(Calendar);

import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS
  }
})

Vue.prototype.axios = Axios
Vue.config.productionTip = false
Vue.prototype.hidemenu = hidemenu;


//路由验证
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login'||to.path === '/'||to.path === '/home'||to.path === '/pet_message'||to.path === '/Callback') {
//     if(to.path === '/'||to.path === '/home'){
//       wx.showOptionMenu();
//     }
//     // 登录页 不需要判断
//     next();
//   } else{
//     if(!store.state.isWeiXin){
//       if(sessionStorage.getItem("h5_data")){
//         next();
//       }else{
//         next({
//           path: '/home',
//         })
//       }
//       return
//     }
//     wx.hideOptionMenu();
//     next();
//   }
// })
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
