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

import CONST from '@/utils/api.js'
import md5 from 'js-md5'
import errCode from '@/utils/errorcode'

// 接口方法名到URL的映射关系
const METHOD_URL_MAPPING = {
	// 订单管理
	'diy.card.order.create': '/diycard/bcl/order/create',
	'diy.card.order.detail': '/diycard/bcl/order/detail',
	'diy.card.order.queryByUcode': '/diycard/bcl/order/queryByUcode',
	'diy.card.order.cancel': '/diycard/bcl/order/cancel',
	'diy.card.order.submit': '/diycard/bcl/order/submit',

	// 卡面设计
	'diy.card.design.ai.generate': '/diycard/bcl/design/ai/generate',
	'diy.card.design.ai.select': '/diycard/bcl/design/ai/select',
	'diy.card.design.diy.upload': '/diycard/bcl/design/diy/upload',
	'diy.card.design.review.submit': '/diycard/bcl/design/review/submit',
	'diy.card.design.review.result': '/diycard/bcl/design/review/result',

	// 客户信息
	'diy.card.customer.uploadIdCard': '/diycard/bcl/customer/uploadIdCard',
	'diy.card.customer.faceRecognition': '/diycard/bcl/customer/faceRecognition',
	'diy.card.customer.save': '/diycard/bcl/customer/save',
	'diy.card.customer.info': '/diycard/bcl/customer/info',

	// U码管理
	'diy.card.ucode.qrcode': '/diycard/bcl/ucode/qrcode',

	// 产品管理
	'diy.card.product.list': '/diycard/bcl/product/list',
	'diy.card.product.detail': '/diycard/bcl/product/detail'
}

/**
 * 获取请求参数
 */
const getParam = () => {
	return {
		scene: CONST.SCENE,
		channel: CONST.CHANNEL,
		orgNo: CONST.APP_ID
	}
}

/**
 * 对JSON对象按key排序
 */
const sortJSONObject = (obj) => {
	if (typeof obj !== 'object' || obj === null) {
		return obj
	}
	if (Array.isArray(obj)) {
		return obj.map(sortJSONObject)
	}
	const sortedKeys = Object.keys(obj).sort()
	const sorted = sortedKeys.reduce((sortedObj, key) => {
		sortedObj[key] = sortJSONObject(obj[key])
		return sortedObj
	}, {})
	return sorted
}

/**
 * 将排序后的JSON转换为字符串
 */
const jsonToStringSortedByKey = (obj) => {
	return JSON.stringify(sortJSONObject(obj))
}

/**
 * 获取发送数据
 */
const getSendDatas = (url, data, loginName = '') => {
	var proto = {
		...getParam(),
		appId: CONST.APP_ID,
		orgNo: CONST.APP_ID,
		method: url.replace(/(\/)/g, '.').toLowerCase(),
		format: 'JSON',
		charset: 'UTF-8',
		signType: 'MD5',
		timestamp: new Date().getTime(),
		version: CONST.VERSION,
		channel: CONST.CHANNEL,
		scene: CONST.SCENE,
		name: loginName,
		data: data
	}
	var str
	var sign

	if (CONST.VERSION == '1.0.1') {
		str = JSON.stringify(data) + "&pwd=" + CONST.PWD
		sign = md5(str)
		proto['sign'] = sign
	} else {
		const sortedJsonString = jsonToStringSortedByKey(data)
		str = sortedJsonString + "&pwd=" + CONST.PWD
		sign = md5(str)
		proto['sign'] = sign
	}
	return proto
}

/**
 * 显示错误提示
 */
const showErrToast = (title) => {
	uni.showToast({
		title: title,
		duration: 2000,
		mask: true,
		icon: 'none'
	})
}

/**
 * 显示错误信息
 */
const showErrTip = (code) => {
	if (code.substr(-6) == '050077') {
		showErrToast('该商户未授权！请联系管理员处理')
		return
	}
	if (code == undefined) {
		showErrToast('系统异常，请联系管理员处理')
		return
	}
	if (code.length < 6) {
		showErrToast('系统异常，请联系管理员处理')
		return
	}
	var errMsg = errCode.errorCodeMap.get(code.substring(code.length - 6))
	if (!errMsg) {
		showErrToast('系统异常，请联系管理员处理')
		return
	}
	showErrToast(errMsg.cnErrorMsg)
}

/**
 * 清除token
 */
const cleanToken = () => {
	uni.showToast({
		icon: 'none',
		duration: 2000,
		title: '账户信息已过期或已在别处登录，请重新登录'
	})
	setTimeout(() => {
		uni.removeStorageSync('accessToken')
		uni.removeStorageSync('userInfo')
		uni.navigateTo({
			url: '/pages/login/index'
		})
	}, 2000)
}

/**
 * 使用 unirequest 方式的请求函数
 */
const unirequestPost = (methodName, data = {}, callback = function () { }, options = {}) => {
	return new Promise((resolve, reject) => {
		// 获取URL
		let url = methodName
		if (methodName.startsWith('diy.card.')) {
			url = METHOD_URL_MAPPING[methodName]
			if (!url) {
				console.error(`未找到方法名 "${methodName}" 对应的URL映射`)
				reject(new Error(`未找到方法名 "${methodName}" 对应的URL映射`))
				return
			}
		}

		// 准备请求数据
		data = getSendDatas(url, {
			...data,
			'accessToken': 'Bearer ' + uni.getStorageSync('accessToken')
		})

		// 发送请求
		uni.request({
			url: CONST.BASE_URL,
			data: data,
			method: 'POST',
			header: {
				'Content-Type': 'application/json'
			},
			...options,
			success: response => {
				uni.hideLoading()

				if ('0' != response.data.status && response.data.status) {
					callback()
					showErrTip(response.data.status)
					return
				}

				if ('0' !== response.data.subStatus) {
					// 处理各种错误状态
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050010'
					) {
						cleanToken()
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '000004'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '000000'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050119'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050057'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050044'
					) {
						callback(
							response.data.subStatus.slice(-6),
							response.data.subErrorMsg
						)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '040002'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050137'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050095'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050125'
					) {
						resolve(response.data)
						return
					}
					if (
						response.data.subStatus.length >= 6 &&
						response.data.subStatus.substring(
							response.data.subStatus.length - 6
						) == '050135'
					) {
						resolve(response.data)
						return
					}

					showErrTip(response.data.subStatus)
					return resolve(response.data)
				}
				resolve(response.data)
			},
			fail: res => {
				console.log('失败', res)
				showErrToast('请检查网络')
				uni.hideLoading()
				reject(res)
			}
		})
	})
}

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
  create: (data, that) => unirequestPost('diy.card.order.create', data, that),

  /** diy.card.order.detail - 查询订单详情（通过 orderId） */
  detail: (data, that) => unirequestPost('diy.card.order.detail', data, that),

  /** diy.card.order.queryByUcode - 通过U码查询订单 */
  queryByUcode: (data, that) => unirequestPost('diy.card.order.queryByUcode', data, that),

  /** diy.card.order.cancel - 取消订单 */
  cancel: (data, that) => unirequestPost('diy.card.order.cancel', data, that),

  /** diy.card.order.submit - 提交订单 */
  submit: (data, that) => unirequestPost('diy.card.order.submit', data, that),
}

/**
 * 卡面设计（5）
 */
export const design = {
  /** diy.card.design.ai.generate - AI生成卡面（Mock） */
  aiGenerate: (data, that) => unirequestPost('diy.card.design.ai.generate', data, that),

  /** diy.card.design.ai.select - 选择AI生成的卡面 */
  aiSelect: (data, that) => unirequestPost('diy.card.design.ai.select', data, that),

  /** diy.card.design.diy.upload - 用户DIY上传卡面 */
  diyUpload: (data, that) => unirequestPost('diy.card.design.diy.upload', data, that),

  /** diy.card.design.review.submit - 提交审图（Mock） */
  reviewSubmit: (data, that) => unirequestPost('diy.card.design.review.submit', data, that),

  /** diy.card.design.review.result - 查询审图结果 */
  reviewResult: (data, that) => unirequestPost('diy.card.design.review.result', data, that),
}

/**
 * 客户信息（4）
 */
export const customer = {
  /** diy.card.customer.uploadIdCard - 上传身份证 */
  uploadIdCard: (data, that) => unirequestPost('diy.card.customer.uploadIdCard', data, that),

  /** diy.card.customer.faceRecognition - 人脸识别（Mock） */
  faceRecognition: (data, that) => unirequestPost('diy.card.customer.faceRecognition', data, that),

  /** diy.card.customer.save - 保存客户信息 */
  save: (data, that) => unirequestPost('diy.card.customer.save', data, that),

  /** diy.card.customer.info - 查询客户信息 */
  info: (data, that) => unirequestPost('diy.card.customer.info', data, that),
}

/**
 * U码管理（1）
 */
export const ucode = {
  /** diy.card.ucode.qrcode - 获取U码二维码 */
  qrcode: (data, that) => unirequestPost('diy.card.ucode.qrcode', data, that),
}

/**
 * 产品管理（2）
 */
export const product = {
  /** diy.card.product.list - 查询产品列表 */
  list: (data, that) => unirequestPost('diy.card.product.list', data, that),

  /** diy.card.product.detail - 查询产品详情 */
  detail: (data, that) => unirequestPost('diy.card.product.detail', data, that),
}

// 文件上传接口（不使用统一的方法名格式）
const uploadFile = (url, data = {}, options = {}) => {
	return new Promise((resolve, reject) => {
		// 文件上传可能需要不同的处理方式，这里保持原有的 http.post 方式
		// 如果需要使用 unirequest 方式，需要根据实际情况调整
		import('@/utils/http').then(http => {
			http.default.post(url, data, null, options)
				.then(resolve)
				.catch(reject)
		})
	})
}

export const file = {
  /** diy.card.file.imageUpload - 上传图片 */
  imageUpload: (data, that) => uploadFile(`/bal/fileUpload/img`, data, that),
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
  file
}

