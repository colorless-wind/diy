import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zhCN from './lang/zh-CN'
import enUS from './lang/en-US'
import koKR from './lang/ko-KR'
import esES from './lang/es-ES'

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh-CN',
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
    'ko-KR': koKR,
    'es-ES': esES
  }
})

export default i18n
