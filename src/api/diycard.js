/**
 * DIY卡面业务 - BCL 接口聚合（全部 POST / @RequestBody）
 *
 * 文档来源：
 * - api-design.md
 * - interface-method-mapping.md
 *
 * 使用方式示例：
 *   import diycardApi from '@/api/diycard'
 *   diycardApi.order.create({ merchantId, channel, productId })
 */

import http from '@/utils/http'

const BASE = '/diycard/bcl'

/**
 * 接口方法名与URL映射（用于日志/排查/对照文档）
 */
export const DIYCARD_METHODS = Object.freeze({
  // 订单管理
  'diy.card.order.create': `${BASE}/order/create`,
  'diy.card.order.detail': `${BASE}/order/detail`,
  'diy.card.order.queryByUcode': `${BASE}/order/queryByUcode`,
  'diy.card.order.cancel': `${BASE}/order/cancel`,
  'diy.card.order.submit': `${BASE}/order/submit`,

  // 卡面设计
  'diy.card.design.ai.generate': `${BASE}/design/ai/generate`,
  'diy.card.design.ai.select': `${BASE}/design/ai/select`,
  'diy.card.design.diy.upload': `${BASE}/design/diy/upload`,
  'diy.card.design.review.submit': `${BASE}/design/review/submit`,
  'diy.card.design.review.result': `${BASE}/design/review/result`,

  // 客户信息
  'diy.card.customer.uploadIdCard': `${BASE}/customer/uploadIdCard`,
  'diy.card.customer.faceRecognition': `${BASE}/customer/faceRecognition`,
  'diy.card.customer.save': `${BASE}/customer/save`,
  'diy.card.customer.info': `${BASE}/customer/info`,

  // U码管理
  'diy.card.ucode.qrcode': `${BASE}/ucode/qrcode`,

  // 产品管理
  'diy.card.product.list': `${BASE}/product/list`,
  'diy.card.product.detail': `${BASE}/product/detail`,
})

/**
 * 订单管理（5）
 */
export const order = {
  /** diy.card.order.create - 创建订单（开始设计） */
  create: (data, that) => http.post(`${BASE}/order/create`, data, that),

  /** diy.card.order.detail - 查询订单详情（通过 orderId） */
  detail: (data, that) => http.post(`${BASE}/order/detail`, data, that),

  /** diy.card.order.queryByUcode - 通过U码查询订单 */
  queryByUcode: (data, that) => http.post(`${BASE}/order/queryByUcode`, data, that),

  /** diy.card.order.cancel - 取消订单 */
  cancel: (data, that) => http.post(`${BASE}/order/cancel`, data, that),

  /** diy.card.order.submit - 提交订单 */
  submit: (data, that) => http.post(`${BASE}/order/submit`, data, that),
}

/**
 * 卡面设计（5）
 */
export const design = {
  /** diy.card.design.ai.generate - AI生成卡面（Mock） */
  aiGenerate: (data, that) => http.post(`${BASE}/design/ai/generate`, data, that),

  /** diy.card.design.ai.select - 选择AI生成的卡面 */
  aiSelect: (data, that) => http.post(`${BASE}/design/ai/select`, data, that),

  /** diy.card.design.diy.upload - 用户DIY上传卡面 */
  diyUpload: (data, that) => http.post(`${BASE}/design/diy/upload`, data, that),

  /** diy.card.design.review.submit - 提交审图（Mock） */
  reviewSubmit: (data, that) => http.post(`${BASE}/design/review/submit`, data, that),

  /** diy.card.design.review.result - 查询审图结果 */
  reviewResult: (data, that) => http.post(`${BASE}/design/review/result`, data, that),
}

/**
 * 客户信息（4）
 */
export const customer = {
  /** diy.card.customer.uploadIdCard - 上传身份证 */
  uploadIdCard: (data, that) => http.post(`${BASE}/customer/uploadIdCard`, data, that),

  /** diy.card.customer.faceRecognition - 人脸识别（Mock） */
  faceRecognition: (data, that) => http.post(`${BASE}/customer/faceRecognition`, data, that),

  /** diy.card.customer.save - 保存客户信息 */
  save: (data, that) => http.post(`${BASE}/customer/save`, data, that),

  /** diy.card.customer.info - 查询客户信息 */
  info: (data, that) => http.post(`${BASE}/customer/info`, data, that),
}

/**
 * U码管理（1）
 */
export const ucode = {
  /** diy.card.ucode.qrcode - 获取U码二维码 */
  qrcode: (data, that) => http.post(`${BASE}/ucode/qrcode`, data, that),
}

/**
 * 产品管理（2）
 */
export const product = {
  /** diy.card.product.list - 查询产品列表 */
  list: (data, that) => http.post(`${BASE}/product/list`, data, that),

  /** diy.card.product.detail - 查询产品详情 */
  detail: (data, that) => http.post(`${BASE}/product/detail`, data, that),
}

/**
 * 默认导出：按模块聚合
 */
export default {
  order,
  design,
  customer,
  ucode,
  product,
}

