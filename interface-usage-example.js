// 使用示例 - 如何在项目中使用修改后的 unirequest.js

import apiMethods from '@/utils/unirequest.js'

// 在Vue组件中使用
export default {
  mixins: [apiMethods],
  methods: {
    // 示例1: 使用方法名调用接口 (推荐)
    async createOrder(orderData) {
      try {
        const response = await this.post('diy.card.order.create', orderData)
        console.log('订单创建成功:', response)
        return response
      } catch (error) {
        console.error('订单创建失败:', error)
      }
    },

    // 示例2: 查询订单详情
    async getOrderDetail(orderId) {
      try {
        const response = await this.post('diy.card.order.detail', { orderId })
        return response
      } catch (error) {
        console.error('查询订单详情失败:', error)
      }
    },

    // 示例3: AI生成卡面
    async generateCardDesign(prompt) {
      try {
        const response = await this.post('diy.card.design.ai.generate', { prompt })
        return response
      } catch (error) {
        console.error('AI生成卡面失败:', error)
      }
    },

    // 示例4: 上传身份证
    async uploadIdCard(fileData) {
      try {
        const response = await this.post('diy.card.customer.uploadIdCard', { file: fileData })
        return response
      } catch (error) {
        console.error('上传身份证失败:', error)
      }
    },

    // 示例5: 获取产品列表
    async getProductList() {
      try {
        const response = await this.post('diy.card.product.list', {})
        return response
      } catch (error) {
        console.error('获取产品列表失败:', error)
      }
    },

    // 调试辅助方法
    debugMethods() {
      console.log('所有可用方法名:', this.getAvailableMethods())
      console.log('订单管理方法:', this.getMethodsByModule('order'))
      console.log('设计相关方法:', this.getMethodsByModule('design'))

      // 验证方法名是否存在
      console.log('验证方法:', this.isValidMethod('diy.card.order.create')) // true
      console.log('验证方法:', this.isValidMethod('invalid.method')) // false
    }
  }
}

// 接口方法名对照表：
// 订单管理:
// - diy.card.order.create        创建订单
// - diy.card.order.detail        查询订单详情
// - diy.card.order.queryByUcode  通过U码查询订单
// - diy.card.order.cancel        取消订单
// - diy.card.order.submit        提交订单
//
// 卡面设计:
// - diy.card.design.ai.generate    AI生成卡面
// - diy.card.design.ai.select      选择AI生成的卡面
// - diy.card.design.diy.upload     用户DIY上传卡面
// - diy.card.design.review.submit  提交审图
// - diy.card.design.review.result  查询审图结果
//
// 客户信息:
// - diy.card.customer.uploadIdCard     上传身份证
// - diy.card.customer.faceRecognition  人脸识别
// - diy.card.customer.save             保存客户信息
// - diy.card.customer.info             查询客户信息
//
// U码管理:
// - diy.card.ucode.qrcode  获取U码二维码
//
// 产品管理:
// - diy.card.product.list   查询产品列表
// - diy.card.product.detail 查询产品详情