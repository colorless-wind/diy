let BASE_URL = 'http://10.165.60.116:19903'
let COMJS = 'http://10.165.60.116:9504/' //测试地址
let IMAGE_URL = 'http://10.165.60.116:9504'
let MQTT_IP = '10.165.25.130:443'
let MQTT_PORT = 443

let SCENE = 'DiyCard'
let CHANNEL = 'UMV'

let APP_ID = '202503280001'
let PWD = 'c8897ff0fe5e4f10b5d01ab5a1c76655'
let PWD_TWO

let VERSION = '1.0'

if (process.env.VUE_APP_TITLE == 'prd') {
  // 生产环境
  BASE_URL = 'https://cpc.goldpac.cn/cardGatewaybackend'
  COMJS = 'https://cpc.goldpac.cn/cardGatewaybackend/' //测试地址
  IMAGE_URL = 'https://cpc.goldpac.cn/'
  MQTT_IP = 'client.umvcard.com/diy-gateway'
  MQTT_PORT = 443

  SCENE = 'DiyCard'
  CHANNEL = 'UMV'
  VERSION = VERSION

  APP_ID = '202503280001'
  PWD = 'c8897ff0fe5e4f10b5d01ab5a1c76655'
} else {
  BASE_URL = 'http://10.165.60.116:9504'
  COMJS = 'http://10.165.60.116:9504/' //测试地址
  IMAGE_URL = 'http://10.165.60.116:8443/'
  BASE_URL = 'https://cpc.goldpac.cn/cardGatewaybackend'
  COMJS = 'https://cpc.goldpac.cn/cardGatewaybackend/' //测试地址
  IMAGE_URL = 'https://cpc.goldpac.cn/'
  MQTT_IP = '10.165.25.130:443'
  MQTT_PORT = 443

  SCENE = 'DiyCard'
  CHANNEL = 'UMV'
  VERSION = VERSION

  APP_ID = '202503280001'
  PWD = 'c8897ff0fe5e4f10b5d01ab5a1c76655'
}
console.log('环境信息', BASE_URL)

/** ============ 动态打包配置商户号和密钥 ==============      start       ========================== */

// if (process.env.NODE_ENV == 'production') {
//   // 模板包
//   APP_ID = '${orgNo}'
//   // PWD = '${md5}'
//   PWD_TWO = '${desSign}'
// }

/** ==========================            end             ========================== */
// tips 开发环境默认开启了代理配置，如果不需要可以在utils/api页面修改
module.exports = {
  BASE_URL,
  COMJS,
  IMAGE_URL,
  MQTT_IP,
  MQTT_PORT,

  SCENE,
  CHANNEL,

  // APP_ID: "${orgNo}",
  // PWD: "${md5}",
  APP_ID,
  PWD,
  PWD_TWO,
  VERSION

}
