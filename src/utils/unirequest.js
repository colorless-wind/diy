import md5 from 'js-md5'
import errCode from './errorcode'
import CONST from './api.js'
import { a } from "@/utils/s"
// import {
// 	setTimeout
// } from 'core-js/es7'

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

const apiMethods = {
	data() {
		return {
			// loading: false,
			loadingMsg: '请等待，正在请求中',
			loadingWhiteList: ['ocs.umv.collect.action'],
			Image_API: CONST.Image_API
		}
	},
	methods: {
		getImageSize(url) {
			return new Promise(resolve => {
				uni.getImageInfo({
					src: url,
					success: function (image) {
						console.log('getImageInfo', image)
						let result = { width: image.width, height: image.height }
						// 若图片的方向属性为左右则宽高交换（实际为竖版图片） 参考：https://uniapp.dcloud.net.cn/api/media/image.html#getimageinfo
						if (image.orientation == 'left' || image.orientation == 'right') {
							result = { width: image.height, height: image.width }
						}
						resolve(result)
					}
				})
			})
		},
		showErrToast(title) {
			uni.showToast({
				title: title,
				duration: 2000,
				mask: true,
				icon: 'none'
			})
		},

		showErrTip(code) {
			if (code.substr(-6) == '050077') {
				this.showErrToast('该商户未授权！请联系管理员处理')
				return
			}
			if (code == undefined) {
				this.showErrToast('系统异常，请联系管理员处理')
				return
			}
			if (code.length < 6) {
				this.showErrToast('系统异常，请联系管理员处理')
				return
			}
			var errMsg = errCode.errorCodeMap.get(code.substring(code.length - 6))
			if (!errMsg) {
				this.showErrToast('系统异常，请联系管理员处理')
				return
			}
			// this.showErrToast('系统异常，请联系管理员处理');
			this.showErrToast(errMsg.cnErrorMsg)
		},
		getParam() {
			return {
				scene: CONST.SCENE,
				channel: CONST.CHANNEL,
				orgNo: CONST.APP_ID
			}
		},

		getFilters(arr, orders) {
			//* 模糊查询条件
			var filters = ''
			//* 条件内容
			var rules = []

			for (let i in arr) {
				if (arr[i]) {
					rules.push({
						//* 搜索的字段名
						field: arr[i].key,
						//* 搜索条件(默认为"包含")
						op: arr[i].op || 'cn',
						//* 搜索的字段值
						data: arr[i].type == 'number' ? Number(arr[i].value) : arr[i].value
					})
				}
			}
			var myFilter = {
				groupOp: 'AND',
				rules: rules
			}
			if (orders) {
				myFilter['orders'] = orders
			}

			//* 有搜索内容时才进行模糊查询
			if (rules.length > 0) {
				//* 组装模糊查询条件
				filters = JSON.stringify(myFilter)
			}

			return filters
		},
		changeData(methodOrUrl) {
			if (!methodOrUrl) {
				console.error('接口方法名或URL不能为空')
				return ''
			}

			// 如果传入的是以 "diy.card." 开头的完整方法名，则查找对应的URL
			if (methodOrUrl.startsWith('diy.card.')) {
				const url = METHOD_URL_MAPPING[methodOrUrl]
				if (!url) {
					console.error(`未找到方法名 "${methodOrUrl}" 对应的URL映射`)
					return ''
				}
				return url
			}

			// 如果传入的是URL格式，则直接返回（向后兼容）
			if (methodOrUrl.startsWith('/')) {
				return methodOrUrl
			}

			// 如果传入的是其他格式，尝试将其转换为URL格式
			console.warn(`未知的方法名或URL格式: "${methodOrUrl}"，将按URL处理`)
			return methodOrUrl
		},

		/**
		 * 获取所有可用的接口方法名
		 * @returns {string[]} 方法名数组
		 */
		getAvailableMethods() {
			return Object.keys(METHOD_URL_MAPPING)
		},

		/**
		 * 根据模块获取接口方法名
		 * @param {string} module 模块名 (order/design/customer/ucode/product)
		 * @returns {string[]} 该模块下的方法名数组
		 */
		getMethodsByModule(module) {
			const prefix = `diy.card.${module}.`
			return Object.keys(METHOD_URL_MAPPING).filter(method => method.startsWith(prefix))
		},

		/**
		 * 验证方法名是否存在
		 * @param {string} methodName 方法名
		 * @returns {boolean} 是否存在
		 */
		isValidMethod(methodName) {
			return methodName in METHOD_URL_MAPPING
		},

		getSendDatas(url, data, loginName = '') {
			var proto = {
				...this.getParam(),
				appId: CONST.APP_ID,
				orgNo: CONST.APP_ID,
				method: this.changeData(url),
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

			var pwdStr //验证签名最新的，等后端部署UAT后 放开，给上面的注释掉
			// if (CONST.VERSION == '1.0.1') {
			if (CONST.VERSION == '1.0.1') {
				str = JSON.stringify(data) + "&pwd=" + CONST.PWD
				sign = md5(str)
				proto['sign'] = sign
			} else {

				const sortedJsonString = this.jsonToStringSortedByKey(data)
				str = sortedJsonString + "&pwd=" + CONST.PWD
				sign = md5(str)
				proto['sign'] = sign

				/**====start==== 验证签名最新的，等后端部署UAT后 放开，给上面的注释掉 */
				// const str1 = CONST.PWD_TWO
				// pwdStr = a(sortedJsonString, str1)
				// proto['sign'] = pwdStr
				/**====end==== 验证签名最新的，等后端部署UAT后 放开，给上面的注释掉 */

			}
			return proto
		},
		sortJSONObject(obj) {
			if (typeof obj !== 'object' || obj === null) {
				// 非对象/数组，直接返回
				return obj
			}
			if (Array.isArray(obj)) {
				// 数组，遍历排序每个元素
				return obj.map(sortJSONObject)
			}
			// 对象，按key排序
			const sortedKeys = Object.keys(obj).sort()
			const sorted = sortedKeys.reduce((sortedObj, key) => {
				sortedObj[key] = this.sortJSONObject(obj[key])
				return sortedObj
			}, {})
			return sorted
		},

		jsonToStringSortedByKey(obj) {
			// 使用sortJSONObject排序JSON对象，然后转换为字符串
			return JSON.stringify(this.sortJSONObject(obj))
		},
		requestResult(url, data, callback, options) {
			var vueObj = this
			console.debug('post:', url)
			// if (this.loadingWhiteList.indexOf(url) == -1) {
			// 	let urlList = [
			// 		'ocs.umv.newsInfo.search',
			// 		'ocs.umv.favoriteinfo.add',
			// 		'ocs.umv.favoriteinfo.deletebycond',
			// 		'ocs.umv.favoriteinfo.selectbycond',
			// 		'ocs.umv.favoriteInfo.add',
			// 		'ocs.umv.favoriteInfo.deleteByCond',
			// 		'ocs.umv.newsInfo.selectComplex',
			// 		'ocs.umv.homepage.search'
			// 	]
			// 	if(!urlList.includes(url)) {
			// 		uni.showLoading({
			// 			title: '加载中...',
			// 			mask: true
			// 		});
			// 	}
			// }
			data = this.getSendDatas(url, {
				...data,
				'accessToken': 'Bearer ' + uni.getStorageSync('accessToken')
			})

			return new Promise(function (resolve, reject) {
				uni.request({
					url: CONST.BASE_URL,
					data: data,
					method: 'POST',
					header: {
						'Content-Type': 'application/json' //自定义请求头信息
					},
					...options,
					success: response => {
						uni.hideLoading()

						console.log(response, 'response')
						if ('0' != response.data.status && response.data.status) {
							callback()
							vueObj.showErrTip(response.data.status)
							return
						}

						if ('0' !== response.data.subStatus) {
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '050010'
							) {
								//用户登录过期
								vueObj.cleanToken()
								return
							}
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '000004'
							) {
								//数据库查询失败
								resolve(response.data)
								return
							}
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '000000'
							) {
								//数据为空
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
							// es查询空时处理
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '050057'
							) {
								resolve(response.data)
								return
							}

							// 订单失效
							// es查询空时处理
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '050044'
							) {
								// 查询数据库为空的情况单独处理
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

							// es数据处理中
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
								// 查询数据库为空的情况单独处理
								resolve(response.data)
								return
							}
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '050125'
							) {
								// 第三方系统调用失败
								resolve(response.data)
								return
							}
							if (
								response.data.subStatus.length >= 6 &&
								response.data.subStatus.substring(
									response.data.subStatus.length - 6
								) == '050135'
							) {
								// 第三方系统调用失败
								resolve(response.data)
								return
							}

							vueObj.showErrTip(response.data.subStatus)
							return resolve(response.data)
						}
						resolve(response.data)
					},
					fail: res => {
						console.log('失败', res)
						vueObj.showErrToast('请检查网络')
						uni.hideLoading()
						reject(res)
					}
				})
			})
		},

		/**
		 * 请求接口二次封装
		 * @param {string} methodName 请求的接口方法名 (如: 'diy.card.order.create') 或 URL路径
		 * @param {object} data 请求的参数
		 * @param {function} callback 状态为000004 查询数据库为空时的回调
		 * @param {object} options 请求体参数对象
		 */
		post(url, data = {}, callback = function () { }, options = {}) {
			// url = CONST.METHOD[url]
			// console.log(CONST.METHOD)
			return new Promise((resolve, reject) => {
				this.requestResult(url, data, callback, options)
					.then(response => {
						// if(0 === response.status && '050044' == response.subStatus.substring(response.subStatus.length - 6)) {
						// 	callback()
						// 	return;
						// }
						if ('0' != response.status) {
							this.showErrToast('系统异常，' + response.errorMsg)
							return
						}
						if ('0' !== response.subStatus) {
							if (
								'050137' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								//* 查询AIGC图片是否生成成功单独处理
								callback(
									response.subStatus.substring(response.subStatus.length - 6)
								)
								return
							}

							if (
								'040002' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								//*失效的卡产品做单独下架处理
								resolve(response)
								return
							}

							if (
								'000004' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								// 查询数据库为空的情况单独处理
								callback(
									response.subStatus.substring(response.subStatus.length - 6),
									response.subErrorMsg,
									response
								)
								return
							}

							console.log('response.subStatus', response.subStatus)
							if (
								'050119' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								resolve(response)
								return
							}

							if (
								'050095' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								// 查询数据库为空的情况单独处理
								callback(
									response.subStatus.substring(response.subStatus.length - 6),
									response.subErrorMsg,
									response
								)
								return
							}

							if (
								'050125' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								// 查询数据库为空的情况单独处理
								callback(
									response.subStatus.substring(response.subStatus.length - 6),
									response.subErrorMsg,
									response
								)
								return
							}

							if (
								'050135' ==
								response.subStatus.substring(response.subStatus.length - 6)
							) {
								// 查询数据库为空的情况单独处理
								callback(
									response.subStatus.substring(response.subStatus.length - 6),
									'银行业务处理失败:' + response.subErrorMsg,
									response
								)
								return
							}

							this.showErrToast('系统异常，' + response.subErrorMsg)
							callback(
								response.subStatus.substring(response.subStatus.length - 6),
								response.subErrorMsg,
								response
							)
							return
							// reject(false)
						}

						resolve(response)
					})
					.catch(err => {
						reject(false)
						console.log('%c信息错误', 'color:red;', err)
					})
			})
		},

		/**
		 * 功能 当返回token失效时，清除本地缓存的token的信息
		 * 参数1 returnCode 返回码 类型 String
		 * 返回 无
		 **/
		cleanToken() {
			uni.showToast({
				icon: 'none',
				duration: 2000,
				title: '账户信息已过期或已在别处登录，请重新登录'
			})
			//弹出提示框 您的账户信息已过期或已在别处登录，请重新登录
			setTimeout(() => {
				// uni.removeStorageSync('userId', response.data.userId);
				// uni.removeStorageSync('token', response.data.token);
				// uni.removeStorageSync('nickName', response.data.nickName);
				// uni.removeStorageSync('userPhone', response.data.userPhone);
				// uni.removeStorageSync('avatarUrl', response.data.avatarUrl);
				// uni.removeStorageSync('merchantId',response.data.merchantId);
				// uni.removeStorageSync('merchantName',response.data.merchantName);
				uni.removeStorageSync('accessToken')
				uni.removeStorageSync('userInfo')
				this.navToLogin()
			}, 2000)
			console.log('账户信息已过期或已在别处登录，请重新登录')
			// uni.$emit('updateUserInfo');
		},

		navToLogin() {
			uni.navigateTo({
				url: '/pages/login/index'
			})
		},

		/**
		 * 功能 将响应的错误信息转译为友好的提示
		 * 参数1 res 请求的响应对象 类型 Object
		 * 返回 错误提示
		 **/
		transCode(res) {
			var errTip = res.subErrorMsg
			//* 活动名称冲突 030019041000
			if (res.subStatus.substring(6, res.subStatus.length) == '041000') {
				errTip = '不能创建重复内容的折扣'
			}
			return errTip
		},
		/**
		 * 消息消失框
		 */
		toast(msg = '', time = 2000) {
			var toast = document.createElement('div')
			toast.className = 'common-toast common-toast-show'
			toast.innerHTML = msg
			document.body.appendChild(toast)
			toast.style.display = 'block'
			//toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
			var timer = setTimeout(() => {
				toast.className = 'common-toast common-toast-hide'
				clearTimeout(timer)
				var timer2 = setTimeout(() => {
					document.body.removeChild(toast)
					clearTimeout(timer2)
				}, 200)
			}, time)
		},
		handelResponse(res, cb, errCb) {
			//_g.closeGlobalLoading()
			//if (res.success == true) {
			if (res.code == 200) {
				console.log('ok')
				cb(res.data)
			} else {
				/*if (typeof errCb == 'function') {
					console.log("~~~~~typeof")
					errCb()
				}*/
				//接口调用返回失败的处理
				console.log('res.code = ' + res.code)
				this.handleError(res)
			}
		},
		handleError(res) {
			//if (res.success == 101) {
			console.log('Error')
		},
		/**
		 * 功能 获取左侧导航宽度并传递给父级
		 * 参数1 width 导航宽度 类型 Number
		 * 返回 无
		 **/
		getDrawerWidth(width) {
			this.$emit('getDrawerWidth', width)
		}
	}
}
export default apiMethods
