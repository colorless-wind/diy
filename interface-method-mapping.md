# 接口方法名映射表

本文档记录了 `common_interface_method` 表中的接口方法名与实际 API 接口的对应关系。

## 映射关系

| 序号 | 接口方法名 (common_interface_method_name) | 接口URL (common_interface_method_url) | 接口描述 (common_interface_method_desc) | 模块 |
|-----|-------------------------------------------|---------------------------------------|----------------------------------------|------|
| 1 | diy.card.order.create | /diycard/bcl/order/create | 创建订单 | 订单管理 |
| 2 | diy.card.order.detail | /diycard/bcl/order/detail | 查询订单详情 | 订单管理 |
| 3 | diy.card.order.queryByUcode | /diycard/bcl/order/queryByUcode | 通过U码查询订单 | 订单管理 |
| 4 | diy.card.order.cancel | /diycard/bcl/order/cancel | 取消订单 | 订单管理 |
| 5 | diy.card.order.submit | /diycard/bcl/order/submit | 提交订单 | 订单管理 |
| 6 | diy.card.design.ai.generate | /diycard/bcl/design/ai/generate | AI生成卡面 | 卡面设计 |
| 7 | diy.card.design.ai.select | /diycard/bcl/design/ai/select | 选择AI生成的卡面 | 卡面设计 |
| 8 | diy.card.design.diy.upload | /diycard/bcl/design/diy/upload | 用户DIY上传卡面 | 卡面设计 |
| 9 | diy.card.design.review.submit | /diycard/bcl/design/review/submit | 提交审图 | 卡面设计 |
| 10 | diy.card.design.review.result | /diycard/bcl/design/review/result | 查询审图结果 | 卡面设计 |
| 11 | diy.card.customer.uploadIdCard | /diycard/bcl/customer/uploadIdCard | 上传身份证 | 客户信息 |
| 12 | diy.card.customer.faceRecognition | /diycard/bcl/customer/faceRecognition | 人脸识别 | 客户信息 |
| 13 | diy.card.customer.save | /diycard/bcl/customer/save | 保存客户信息 | 客户信息 |
| 14 | diy.card.customer.info | /diycard/bcl/customer/info | 查询客户信息 | 客户信息 |
| 15 | diy.card.ucode.qrcode | /diycard/bcl/ucode/qrcode | 获取U码二维码 | U码管理 |
| 16 | diy.card.product.list | /diycard/bcl/product/list | 查询产品列表 | 产品管理 |
| 17 | diy.card.product.detail | /diycard/bcl/product/detail | 查询产品详情 | 产品管理 |

## 按模块分类

### 订单管理 (5个)

| 接口方法名 | URL | 描述 |
|-----------|-----|------|
| diy.card.order.create | /diycard/bcl/order/create | 创建订单 |
| diy.card.order.detail | /diycard/bcl/order/detail | 查询订单详情 |
| diy.card.order.queryByUcode | /diycard/bcl/order/queryByUcode | 通过U码查询订单 |
| diy.card.order.cancel | /diycard/bcl/order/cancel | 取消订单 |
| diy.card.order.submit | /diycard/bcl/order/submit | 提交订单 |

### 卡面设计 (5个)

| 接口方法名 | URL | 描述 |
|-----------|-----|------|
| diy.card.design.ai.generate | /diycard/bcl/design/ai/generate | AI生成卡面 |
| diy.card.design.ai.select | /diycard/bcl/design/ai/select | 选择AI生成的卡面 |
| diy.card.design.diy.upload | /diycard/bcl/design/diy/upload | 用户DIY上传卡面 |
| diy.card.design.review.submit | /diycard/bcl/design/review/submit | 提交审图 |
| diy.card.design.review.result | /diycard/bcl/design/review/result | 查询审图结果 |

### 客户信息 (4个)

| 接口方法名 | URL | 描述 |
|-----------|-----|------|
| diy.card.customer.uploadIdCard | /diycard/bcl/customer/uploadIdCard | 上传身份证 |
| diy.card.customer.faceRecognition | /diycard/bcl/customer/faceRecognition | 人脸识别 |
| diy.card.customer.save | /diycard/bcl/customer/save | 保存客户信息 |
| diy.card.customer.info | /diycard/bcl/customer/info | 查询客户信息 |

### U码管理 (1个)

| 接口方法名 | URL | 描述 |
|-----------|-----|------|
| diy.card.ucode.qrcode | /diycard/bcl/ucode/qrcode | 获取U码二维码 |

### 产品管理 (2个)

| 接口方法名 | URL | 描述 |
|-----------|-----|------|
| diy.card.product.list | /diycard/bcl/product/list | 查询产品列表 |
| diy.card.product.detail | /diycard/bcl/product/detail | 查询产品详情 |

## 使用说明

### 接口方法名规范

格式：`diy.card.{module}.{action}`

- **diy.card**: 项目前缀
- **{module}**: 模块名（order/design/customer/ucode/product）
- **{action}**: 操作名（create/detail/submit等）

### 在代码中使用

接口方法名通常用于：
1. 接口权限控制
2. 接口调用统计
3. 接口限流配置
4. 日志追踪

### 查询示例

```sql
-- 查询订单管理相关接口
SELECT 
    common_interface_method_name,
    common_interface_method_url,
    common_interface_method_desc
FROM common_interface_method
WHERE common_interface_method_name LIKE 'diy.card.order.%';

-- 查询特定接口详情
SELECT * FROM common_interface_method
WHERE common_interface_method_name = 'diy.card.order.create';
```

## 相关文档

- **method-sql.md**: 接口注册SQL说明文档
- **method-sql-generator.sql**: 完整的接口注册SQL脚本
- **api-design.md**: 接口设计详细文档

## 更新日志

| 日期 | 版本 | 说明 | 作者 |
|-----|------|------|------|
| 2025-01-15 | 1.0 | 初始版本，包含17个接口映射 | system |
