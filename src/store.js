import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isWeiXin:window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == "micromessenger",
    isAndroid: window.navigator.userAgent.indexOf("Android") > -1 || window.navigator.userAgent.indexOf("Adr") > -1,
    isiOS: !!window.navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    imgResult:'',
  },
  //同步
  mutations: {
    setImgResult(val){
      this.state.imgResult = val;//更新了
    }

  },
  //异步
  actions: {

  }
})
