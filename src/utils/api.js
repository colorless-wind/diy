/* ############# 打包前确认好【网申】【支付】【服务地址】【模板配置】等信息匹配且无误后才可进行，重要！！！ ############# */
/* ############# 创建完常量不要忘记导出注册后才能生效 ############# */

const baseConfig = require('./baseConfig.js')

let TEST_MODE = process.env.NODE_ENV === 'production' ? false : true // 测试环境可设置true方便测试跳过网申 【生产环境必须 false】

/* TODO 网申及支付相关地址 */
let PAY_URL = 'https://umvc.umvcard.com/pay' // 测试用
let APPLY_URL = 'https://web.cupdata.com/ncoas/6481/m/#/basicInfo' // 测试用
let FINISH_URL = 'https://web.cupdata.com/ncoas/6481/m/#/complete' // 测试用

// let PAY_URL = 'http://fmis.umvcard.com/pay' // 生产用
// let APPLY_URL = 'https://crcard.whccb.com/ncoas/m/#/basicInfo' // 生产用
// let FINISH_URL = 'https://crcard.whccb.com/ncoas/m/#/complete' // 生产用

/* TODO 微信支付相关信息 */
let WX_APPID = 'wx58acfec6e83d18cf'
let WX_SECRET = '22ab42bab330c365d82cb49e8c187b73'

/* 支付跳转地址 */
let PAY_CURRNT_URL = 'saas.goldpac.cn'
let PAY_TARGET_URL = 'testpay.goldpac.cn'
let CURRNT_HASH_URL = '?env=saas#'

// 根据执行命令区分打包环境
if (process.env.VUE_APP_TITLE == 240) {
  // 240环境
  TEST_MODE = true
} else if (process.env.NODE_ENV == 'production') {
  // 生产环境
  TEST_MODE = false

  /* 网申及支付相关地址 */
  PAY_URL = 'https://fmis.umvcard.com/pay' // 生产用
  APPLY_URL = 'https://crcard.whccb.com/ncoas/m/#/basicInfo' // 生产用
  FINISH_URL = 'https://crcard.whccb.com/ncoas/m/#/complete' // 生产用
  /* 微信支付相关信息 */
  WX_APPID = 'wx26e2d2a458b8c739' // 生产用
  WX_SECRET = '4ba22b45b28a27d4b3ddece0fdcbc976' // 生产用
  /* 支付地址 */
  PAY_CURRNT_URL = 'cpc.goldpac.cn'
  PAY_TARGET_URL = 'pay.goldpac.cn'
  CURRNT_HASH_URL = '?env=cpc#'
}

const BASE_URL = `${process.env.NODE_ENV == 'development'
  ? '/api/gateway/api'
  : baseConfig.BASE_URL + '/gateway/api'
  }` //测试地址
const COMJS = baseConfig.COMJS //测试地址
// const IMAGE_URL = `${
//   process.env.NODE_ENV == 'development' ? '/api/' : baseConfig.IMAGE_URL
// }`
const IMAGE_URL = baseConfig.IMAGE_URL //umv修改004
const MQTT_IP = baseConfig.MQTT_IP
const MQTT_PORT = baseConfig.MQTT_PORT

const SCENE = baseConfig.SCENE
const CHANNEL = baseConfig.CHANNEL
const APP_ID = baseConfig.APP_ID
const PWD = baseConfig.PWD
const VERSION = baseConfig.VERSION
const PWD_TWO = baseConfig.PWD_TWO



/* ############# 打包前确认好【网申】【支付】【服务地址】【模板配置】等信息匹配且无误后才可进行，重要！！！ ############# */
/* ############# 创建完常量不要忘记导出注册后才能生效 ############# */
export default {
  BASE_URL,
  COMJS,
  IMAGE_URL,
  MQTT_IP,
  MQTT_PORT,
  APP_ID,
  PWD,
  SCENE,
  CHANNEL,
  APPLY_URL,
  PAY_URL,
  FINISH_URL,
  WX_APPID,
  WX_SECRET,
  TEST_MODE,
  PAY_CURRNT_URL,
  PAY_TARGET_URL,
  CURRNT_HASH_URL,
  VERSION,
  PWD_TWO
}
