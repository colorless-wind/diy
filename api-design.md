# DIY卡面业务 API 接口设计

## 概述

基于业务流程设计的 BCL 层业务接口，提供给前端（小程序/H5）调用。

**Base URL**: `/diycard/bcl`

**业务特点**:
- **无需登录**：全程无用户登录，匿名访问
- **U码凭证**：审图通过后生成 U码，用户凭 U码 查询订单状态/详情
- **订单ID**：设计阶段使用 orderId 操作，审图通过后使用 U码

**通用规则**:
- 所有 BCL 层接口使用 POST 请求
- 所有请求参数使用 `@RequestBody` 接收
- 所有 ReqVO 继承 `DiyCommonInfo`（携带渠道、商户等公共信息，无需 accessToken）
- 响应统一使用 `Status<T>` 包装

---

## 接口访问凭证说明

| 阶段 | 凭证 | 说明 |
|-----|------|------|
| 设计阶段 | orderId | 创建订单后返回，用于设计、审图操作 |
| 审图通过后 | ucode | U码，用于查询订单状态、详情、下载二维码 |

**流程**：
```
创建订单 → 获得 orderId → 设计/审图 → 审图通过 → 获得 U码 → 凭 U码 查询
```

---

## VO 类设计

### 基类说明

```java
// DiyCommonInfo - 所有 ReqVO 的基类（无需 accessToken）
public class DiyCommonInfo extends CommonInfo {
    // 本业务无需 accessToken，但保留字段兼容性
}

// CommonInfo 包含的公共字段
public class CommonInfo {
    private String merchantId;      // 商户ID
    private String merchantName;    // 商户名称
    private String channel;         // 渠道
    private String scene;           // 场景
}
```

---

## 1. 订单管理接口

### 1.1 创建订单（开始设计）

**接口方法名**: `diy.card.order.create`

**POST** `/order/create`

选择产品后创建新订单。根据产品配置决定初始状态：
- **isdiy=1**：进入设计阶段（DESIGNING）
- **isdiy=0**：使用标准卡面，跳过设计阶段，直接进入待填写信息（PENDING_INFO）

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "创建订单请求")
public class OrderCreateReqVO extends DiyCommonInfo {
    @NotBlank(message = "产品ID不能为空")
    @Schema(description = "产品ID")
    private String productId;
    
    @Schema(description = "是否使用标准卡面（仅当产品isdiy=1时有效，用户可选择不DIY）")
    private Boolean useStandardImage;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "创建订单响应")
public class OrderCreateResVO implements Serializable {
    @Schema(description = "订单ID（设计阶段凭证）")
    private String orderId;
    
    @Schema(description = "订单号")
    private String orderNo;
    
    @Schema(description = "订单状态")
    private String orderStatus;  // DESIGNING 或 PENDING_INFO
    
    @Schema(description = "是否支持DIY卡面")
    private Boolean isDiy;
    
    @Schema(description = "标准卡面图片URL（不DIY时使用）")
    private String standardImageUrl;
    
    @Schema(description = "是否支持AI生图")
    private Boolean supportAiGenerate;
    
    @Schema(description = "是否需要AI审图")
    private Boolean needAiReview;
    
    @Schema(description = "是否需要支付")
    private Boolean needPay;
}
```

#### 业务逻辑

1. 校验产品是否存在、是否启用
2. 判断是否使用标准卡面：
   - **isdiy=0**：强制使用标准卡面
   - **isdiy=1 且 useStandardImage=true**：用户选择使用标准卡面
   - **isdiy=1 且 useStandardImage=false/null**：进入DIY设计流程
3. 生成订单号（格式：DIY + yyyyMMdd + 6位序号）
4. 创建订单主表记录，关联产品ID
5. **使用标准卡面时**：
   - 初始状态为 `PENDING_INFO`
   - 自动创建设计记录，设置标准卡面图片
   - 生成 U码
6. **DIY设计时**：
   - 初始状态为 `DESIGNING`
   - 设计记录在首次 AI生图/DIY上传 时创建
7. **返回产品开关信息，前端根据开关控制UI展示**

#### 请求示例（DIY设计）

```json
{
  "merchantId": "M001",
  "channel": "WECHAT_MINI",
  "productId": "PROD001"
}
```

#### 响应示例（DIY设计）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "orderId": "ORD202601130001",
    "orderNo": "DIY20260113000001",
    "orderStatus": "DESIGNING",
    "isDiy": true,
    "standardImageUrl": "https://example.com/standard/card001.png",
    "supportAiGenerate": true,
    "needAiReview": true,
    "needPay": false
  }
}
```

#### 请求示例（使用标准卡面）

```json
{
  "merchantId": "M001",
  "channel": "WECHAT_MINI",
  "productId": "PROD002",
  "useStandardImage": true
}
```

#### 响应示例（使用标准卡面）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "orderId": "ORD202601130002",
    "orderNo": "DIY20260113000002",
    "orderStatus": "PENDING_INFO",
    "isDiy": false,
    "standardImageUrl": "https://example.com/standard/card002.png",
    "supportAiGenerate": false,
    "needAiReview": false,
    "needPay": true
  }
}
```

---

### 1.2 查询订单详情（通过 orderId）

**接口方法名**: `diy.card.order.detail`

**POST** `/order/detail`

设计阶段通过 orderId 查询订单详情。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "订单详情请求")
public class OrderDetailReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "订单详情响应")
public class OrderDetailResVO implements Serializable {
    @Schema(description = "订单ID")
    private String orderId;
    
    @Schema(description = "订单号")
    private String orderNo;
    
    @Schema(description = "U码（审图通过后有值）")
    private String ucode;
    
    @Schema(description = "订单状态")
    private String orderStatus;
    
    @Schema(description = "推送状态")
    private String pushStatus;
    
    @Schema(description = "设计信息")
    private DesignInfoVO design;
    
    @Schema(description = "客户信息")
    private CustomerInfoVO customer;
    
    @Schema(description = "创建时间")
    private String addTime;
}
```

---

### 1.3 通过U码查询订单

**接口方法名**: `diy.card.order.queryByUcode`

**POST** `/order/queryByUcode`

审图通过后，用户凭 U码 查询订单状态和详情。**这是用户后续访问的主要入口**。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "U码查询订单请求")
public class OrderQueryByUcodeReqVO extends DiyCommonInfo {
    @NotBlank(message = "U码不能为空")
    @Schema(description = "U码")
    private String ucode;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "U码查询订单响应")
public class OrderQueryByUcodeResVO implements Serializable {
    @Schema(description = "订单ID")
    private String orderId;
    
    @Schema(description = "订单号")
    private String orderNo;
    
    @Schema(description = "U码")
    private String ucode;
    
    @Schema(description = "订单状态")
    private String orderStatus;
    
    @Schema(description = "订单状态描述")
    private String orderStatusDesc;
    
    @Schema(description = "卡面图片URL")
    private String imageUrl;
    
    @Schema(description = "U码二维码URL")
    private String qrcodeUrl;
    
    @Schema(description = "客户姓名（脱敏）")
    private String customerName;
    
    @Schema(description = "创建时间")
    private String addTime;
}
```

#### 业务逻辑

1. 根据 U码 查询订单
2. 返回订单状态、卡面图片、二维码等信息
3. 客户姓名脱敏显示（如：张*）

#### 请求示例

```json
{
  "ucode": "UC20260113000001"
}
```

---

### 1.4 取消订单

**接口方法名**: `diy.card.order.cancel`

**POST** `/order/cancel`

仅 `PENDING_INFO` 状态可取消。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "取消订单请求")
public class OrderCancelReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### 状态校验

| 当前状态 | 是否可取消 |
|---------|-----------|
| DESIGNING | ❌ |
| REVIEWING | ❌ |
| REVIEW_FAILED | ❌ |
| PENDING_INFO | ✅ |
| PROCESSING | ❌ |
| SUCCESS/FAILED | ❌ |

---

## 2. 卡面设计接口

> ⚠️ **Mock 模式说明**：AI生图和AI审图接口目前未确定对接方，暂时使用 Mock 返回。
> 通过配置 `diy.ai.mock.enabled=true` 开启 Mock 模式。

### 2.1 AI生成卡面 🔶 Mock

**接口方法名**: `diy.card.design.ai.generate`

**POST** `/design/ai/generate`

根据描述词调用AI生成多张候选卡面图片。

> **Mock 模式**：返回4张预设的示例图片，不调用真实AI服务。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "AI生成卡面请求")
public class AiGenerateReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @NotBlank(message = "描述词不能为空")
    @Size(max = 500, message = "描述词不能超过500字")
    @Schema(description = "AI生图描述词", example = "蓝色科技风格，简约大气")
    private String prompt;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "AI生成卡面响应")
public class AiGenerateResVO implements Serializable {
    @Schema(description = "设计ID")
    private String designId;
    
    @Schema(description = "候选图片列表")
    private List<CandidateImageVO> candidates;
}

@Data
@Schema(description = "候选图片")
public class CandidateImageVO implements Serializable {
    @Schema(description = "候选图片ID")
    private String candidateId;
    
    @Schema(description = "图片URL")
    private String imageUrl;
}
```

#### 业务逻辑

1. 校验订单状态为 `DESIGNING` 或 `REVIEW_FAILED`
2. 查询设计记录，不存在则创建（设计类型自动设为 `AI_GENERATE`）
3. **Mock模式**：返回预设的4张示例图片URL
4. **正式模式**：调用AI生图服务，生成4张候选图片
5. 上传图片到文件服务器（FastDFS）
6. 保存候选图片记录
7. 返回候选图片列表

#### Mock 返回示例

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "designId": "DES20260113000001",
    "candidates": [
      {"candidateId": "CAN001", "imageUrl": "https://mock.example.com/card_template_1.png"},
      {"candidateId": "CAN002", "imageUrl": "https://mock.example.com/card_template_2.png"},
      {"candidateId": "CAN003", "imageUrl": "https://mock.example.com/card_template_3.png"},
      {"candidateId": "CAN004", "imageUrl": "https://mock.example.com/card_template_4.png"}
    ]
  }
}
```

---

### 2.2 选择AI生成的卡面

**接口方法名**: `diy.card.design.ai.select`

**POST** `/design/ai/select`

从候选图片中选择一张作为最终卡面。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "选择卡面请求")
public class AiSelectReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @NotBlank(message = "候选图片ID不能为空")
    @Schema(description = "选中的候选图片ID")
    private String candidateId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "选择卡面响应")
public class AiSelectResVO implements Serializable {
    @Schema(description = "设计ID")
    private String designId;
    
    @Schema(description = "最终卡面图片URL")
    private String imageUrl;
}
```

---

### 2.3 用户DIY上传卡面

**接口方法名**: `diy.card.design.diy.upload`

**POST** `/design/diy/upload`

用户自行上传设计好的卡面图片。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "DIY上传卡面请求")
public class DiyUploadReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @NotBlank(message = "图片不能为空")
    @Schema(description = "图片Base64编码")
    private String imageBase64;
    
    @Schema(description = "图片格式", example = "png")
    private String imageFormat = "png";
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "DIY上传卡面响应")
public class DiyUploadResVO implements Serializable {
    @Schema(description = "设计ID")
    private String designId;
    
    @Schema(description = "上传后的图片URL")
    private String imageUrl;
}
```

#### 图片要求

| 项目 | 要求 |
|-----|------|
| 格式 | JPG/PNG/JPEG |
| 大小 | ≤ 5MB |
| 尺寸 | 建议 1080×680 px |

---

### 2.4 提交审图 🔶 Mock

**接口方法名**: `diy.card.design.review.submit`

**POST** `/design/review/submit`

提交卡面进行AI审图。**审图通过后生成 U码，这是用户后续查询的唯一凭证**。

> **Mock 模式**：默认返回审图通过（PASS），可通过配置控制通过率。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "提交审图请求")
public class ReviewSubmitReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "提交审图响应")
public class ReviewSubmitResVO implements Serializable {
    @Schema(description = "审图结果：PASS-通过, REJECT-拒绝")
    private String reviewResult;
    
    @Schema(description = "拒绝原因（审图不通过时返回）")
    private String reviewReason;
    
    @Schema(description = "U码（审图通过时返回，用户需保存！）")
    private String ucode;
    
    @Schema(description = "U码二维码图片URL")
    private String qrcodeUrl;
}
```

#### 业务逻辑

1. 校验订单状态为 `DESIGNING`
2. 校验卡面图片已上传
3. 更新订单状态为 `REVIEWING`
4. **Mock模式**：直接返回通过（可配置通过率）
5. **正式模式**：调用AI审图服务
6. 根据审图结果：
   - **通过**：生成 U码 → 生成二维码 → 更新状态为 `PENDING_INFO`
   - **拒绝**：记录拒绝原因 → 更新状态为 `REVIEW_FAILED`
7. **审图通过后，用户需保存 U码，后续凭此查询订单**

#### Mock 配置

```yaml
diy:
  ai:
    mock:
      enabled: true           # 是否开启Mock模式
      review-pass-rate: 100   # 审图通过率（0-100），100表示全部通过
      review-reject-reason: "图片包含敏感内容，请重新设计"  # 拒绝时的原因
```

#### Mock 返回示例（通过）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "reviewResult": "PASS",
    "reviewReason": null,
    "ucode": "UC20260113000001",
    "qrcodeUrl": "https://example.com/qrcode/UC20260113000001.png"
  }
}
```

#### Mock 返回示例（拒绝）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "reviewResult": "REJECT",
    "reviewReason": "图片包含敏感内容，请重新设计",
    "ucode": null,
    "qrcodeUrl": null
  }
}
```

#### U码生成规则

格式：`UC` + `yyyyMMdd` + 6位序号
示例：`UC20260113000001`

#### 重要提示

> ⚠️ **U码是用户后续访问订单的唯一凭证**，审图通过后需提示用户保存 U码或截图二维码。

---

### 2.5 查询审图结果

**接口方法名**: `diy.card.design.review.result`

**POST** `/design/review/result`

查询审图结果，用于审图失败后查看原因。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "查询审图结果请求")
public class ReviewResultReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "查询审图结果响应")
public class ReviewResultResVO implements Serializable {
    @Schema(description = "审图结果")
    private String reviewResult;
    
    @Schema(description = "拒绝原因")
    private String reviewReason;
}
```

---

## 3. 客户信息接口

### 3.1 上传身份证

**接口方法名**: `diy.card.customer.uploadIdCard`

**POST** `/customer/uploadIdCard`

上传身份证正反面图片，作为独立接口，在填写客户信息之前调用。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "身份证上传请求")
public class IdCardUploadReqVO extends DiyCommonInfo implements Serializable {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @NotBlank(message = "身份证正面不能为空")
    @Schema(description = "身份证正面图片URL")
    private String idCardFront;
    
    @NotBlank(message = "身份证反面不能为空")
    @Schema(description = "身份证反面图片URL")
    private String idCardBack;
}
```

#### 业务逻辑

1. 校验订单状态为 `PENDING_INFO`
2. 保存或更新客户信息中的身份证图片URL
3. 如果客户信息不存在，创建新记录（仅包含身份证图片）

#### 请求示例

```json
{
  "merchantId": "M001",
  "channel": "WECHAT_MINI",
  "orderId": "ORD202601130001",
  "idCardFront": "https://example.com/idcard/front_123.jpg",
  "idCardBack": "https://example.com/idcard/back_123.jpg"
}
```

---

### 3.2 人脸识别 🔶 Mock

**接口方法名**: `diy.card.customer.faceRecognition`

**POST** `/customer/faceRecognition`

进行人脸识别验证，对比身份证照片和用户自拍照片。

> **Mock 模式**：目前未确定对接对象，暂时使用 Mock 实现。随机生成相似度（80-99），相似度≥85认为通过。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "人脸识别请求")
public class FaceRecognitionReqVO extends DiyCommonInfo implements Serializable {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @NotBlank(message = "人脸照片不能为空")
    @Schema(description = "人脸照片URL")
    private String faceImage;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "人脸识别响应")
public class FaceRecognitionResVO implements Serializable {
    @Schema(description = "是否通过")
    private Boolean passed;
    
    @Schema(description = "相似度（0-100）")
    private Double similarity;
    
    @Schema(description = "识别结果描述")
    private String message;
}
```

#### 业务逻辑

1. 校验订单状态为 `PENDING_INFO`
2. 查询客户信息，获取身份证正面照片
3. 校验身份证照片是否已上传
4. **Mock模式**：随机生成相似度（80-99），相似度≥85认为通过
5. **正式模式**：调用真实人脸识别服务
6. 返回识别结果

#### Mock 配置

```yaml
diy:
  face:
    mock:
      enabled: true           # 是否开启Mock模式
```

#### Mock 返回示例（通过）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "passed": true,
    "similarity": 92.5,
    "message": "人脸识别通过"
  }
}
```

#### Mock 返回示例（失败）

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "passed": false,
    "similarity": 82.3,
    "message": "人脸识别失败，相似度过低"
  }
}
```

---

### 3.3 保存客户信息

**接口方法名**: `diy.card.customer.save`

**POST** `/customer/save`

填写并保存客户信息，用于后续办卡。建议先调用 `/customer/uploadIdCard` 上传身份证，再调用 `/customer/faceRecognition` 进行人脸识别，最后调用此接口保存完整信息。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "保存客户信息请求")
public class CustomerSaveReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
    
    @Size(max = 500, message = "身份证正面图片URL不能超过500字")
    @Schema(description = "身份证正面图片URL")
    private String idCardFront;
    
    @Size(max = 500, message = "身份证反面图片URL不能超过500字")
    @Schema(description = "身份证反面图片URL")
    private String idCardBack;
    
    @NotBlank(message = "姓名不能为空")
    @Size(max = 50, message = "姓名不能超过50字")
    @Schema(description = "姓名")
    private String name;
    
    @NotBlank(message = "性别不能为空")
    @Schema(description = "性别：MALE-男, FEMALE-女")
    private String gender;
    
    @NotBlank(message = "证件类型不能为空")
    @Schema(description = "证件类型：ID_CARD-身份证, PASSPORT-护照")
    private String idType;
    
    @NotBlank(message = "证件号码不能为空")
    @Size(max = 50, message = "证件号码不能超过50字")
    @Schema(description = "证件号码")
    private String idNumber;
}
```

#### 业务逻辑

1. 校验订单状态为 `PENDING_INFO`
2. 校验证件号码格式
3. 保存或更新客户信息记录（包含身份证图片URL）

---

### 3.4 查询客户信息

**接口方法名**: `diy.card.customer.info`

**POST** `/customer/info`

查询已保存的客户信息。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "查询客户信息请求")
public class CustomerInfoReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "查询客户信息响应")
public class CustomerInfoResVO implements Serializable {
    @Schema(description = "身份证正面图片URL")
    private String idCardFront;
    
    @Schema(description = "身份证反面图片URL")
    private String idCardBack;
    
    @Schema(description = "姓名")
    private String name;
    
    @Schema(description = "性别")
    private String gender;
    
    @Schema(description = "证件类型")
    private String idType;
    
    @Schema(description = "证件号码（脱敏）")
    private String idNumber;  // 显示：440***1234
}
```

---

## 4. 订单提交接口

### 4.1 提交订单

**接口方法名**: `diy.card.order.submit`

**POST** `/order/submit`

提交订单，开始办理流程。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "提交订单请求")
public class OrderSubmitReqVO extends DiyCommonInfo {
    @NotBlank(message = "订单ID不能为空")
    @Schema(description = "订单ID")
    private String orderId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "提交订单响应")
public class OrderSubmitResVO implements Serializable {
    @Schema(description = "订单状态")
    private String orderStatus;
    
    @Schema(description = "U码（提醒用户保存）")
    private String ucode;
}
```

#### 业务逻辑

1. 校验订单状态为 `PENDING_INFO`
2. 校验客户信息已填写完整
3. 更新订单状态为 `PROCESSING`
4. 异步推送到核心系统
5. **返回 U码，提醒用户保存用于后续查询**

---

## 5. U码相关接口

### 5.1 获取U码二维码

**接口方法名**: `diy.card.ucode.qrcode`

**POST** `/ucode/qrcode`

通过 orderId 或 ucode 获取二维码信息。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "获取U码二维码请求")
public class UcodeQrcodeReqVO extends DiyCommonInfo {
    @Schema(description = "订单ID（二选一）")
    private String orderId;
    
    @Schema(description = "U码（二选一）")
    private String ucode;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "获取U码二维码响应")
public class UcodeQrcodeResVO implements Serializable {
    @Schema(description = "U码")
    private String ucode;
    
    @Schema(description = "二维码图片URL")
    private String qrcodeUrl;
    
    @Schema(description = "二维码Base64")
    private String qrcodeBase64;
}
```

---

### 5.2 下载U码二维码

**POST** `/ucode/download`

下载U码二维码图片。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "下载U码二维码请求")
public class UcodeDownloadReqVO extends DiyCommonInfo {
    @Schema(description = "U码")
    private String ucode;
}
```

#### 响应

返回图片文件流（Content-Type: image/png）

---

## 6. 回调接口（内部）

### 6.1 核心系统回调

**POST** `/callback/core`

核心系统处理完成后的回调接口。

#### ReqVO 定义

```java
@Data
@Schema(description = "核心系统回调请求")
public class CoreCallbackReqVO implements Serializable {
    @NotBlank(message = "订单号不能为空")
    @Schema(description = "订单号")
    private String orderNo;
    
    @NotBlank(message = "处理结果不能为空")
    @Schema(description = "处理结果：SUCCESS-成功, FAILED-失败")
    private String result;
    
    @Schema(description = "结果描述")
    private String message;
    
    @Schema(description = "回调时间")
    private String timestamp;
    
    @Schema(description = "签名")
    private String sign;
}
```

#### 业务逻辑

1. 验证签名
2. 根据订单号查询订单
3. 更新订单状态（SUCCESS/FAILED）
4. 记录回调日志

---

## 7. 产品接口

### 7.1 查询产品列表

**接口方法名**: `diy.card.product.list`

**POST** `/product/list`

查询可用的DIY卡产品列表。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "产品列表请求")
public class ProductListReqVO extends DiyCommonInfo {
    @Schema(description = "卡类型：DEBIT-借记卡,CREDIT-信用卡")
    private String cardType;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "产品列表响应")
public class ProductListResVO implements Serializable {
    @Schema(description = "产品列表")
    private List<ProductVO> products;
}

@Data
@Schema(description = "产品信息")
public class ProductVO implements Serializable {
    @Schema(description = "产品ID")
    private String productId;
    
    @Schema(description = "产品编码")
    private String productCode;
    
    @Schema(description = "产品名称")
    private String productName;
    
    @Schema(description = "卡类型")
    private String cardType;
    
    @Schema(description = "卡等级")
    private String cardLevel;
    
    @Schema(description = "产品图片URL")
    private String imageUrl;
    
    @Schema(description = "年费")
    private BigDecimal annualFee;
    
    @Schema(description = "是否支持DIY卡面")
    private Boolean isDiy;
    
    @Schema(description = "标准卡面图片URL（不支持DIY时使用）")
    private String standardImageUrl;
    
    @Schema(description = "是否支持AI生图")
    private Boolean supportAiGenerate;
    
    @Schema(description = "是否需要AI审图")
    private Boolean needAiReview;
    
    @Schema(description = "是否需要支付")
    private Boolean needPay;
    
    @Schema(description = "支付金额")
    private BigDecimal payAmount;
}
```

#### 业务逻辑

1. 查询已启用且支持DIY的产品
2. 按排序序号排序
3. 返回产品基本信息和开关配置

---

### 7.2 查询产品详情

**接口方法名**: `diy.card.product.detail`

**POST** `/product/detail`

查询单个产品的详细信息。

#### ReqVO 定义

```java
@Data
@EqualsAndHashCode(callSuper = true)
@Schema(description = "产品详情请求")
public class ProductDetailReqVO extends DiyCommonInfo {
    @NotBlank(message = "产品ID不能为空")
    @Schema(description = "产品ID")
    private String productId;
}
```

#### ResVO 定义

```java
@Data
@Schema(description = "产品详情响应")
public class ProductDetailResVO implements Serializable {
    @Schema(description = "产品ID")
    private String productId;
    
    @Schema(description = "产品编码")
    private String productCode;
    
    @Schema(description = "产品名称")
    private String productName;
    
    @Schema(description = "卡类型")
    private String cardType;
    
    @Schema(description = "卡等级")
    private String cardLevel;
    
    @Schema(description = "卡组织")
    private String cardOrg;
    
    @Schema(description = "发卡行名称")
    private String bankName;
    
    @Schema(description = "产品图片URL")
    private String imageUrl;
    
    @Schema(description = "卡面模板URL")
    private String templateUrl;
    
    @Schema(description = "年费")
    private BigDecimal annualFee;
    
    @Schema(description = "年费减免规则")
    private String annualFeeFree;
    
    @Schema(description = "产品特色")
    private List<String> features;
    
    @Schema(description = "权益说明")
    private List<String> benefits;
    
    @Schema(description = "申请条件")
    private String applyCondition;
    
    @Schema(description = "是否支持DIY卡面")
    private Boolean isDiy;
    
    @Schema(description = "标准卡面图片URL")
    private String standardImageUrl;
    
    @Schema(description = "是否支持AI生图")
    private Boolean supportAiGenerate;
    
    @Schema(description = "是否需要AI审图")
    private Boolean needAiReview;
    
    @Schema(description = "是否需要支付")
    private Boolean needPay;
    
    @Schema(description = "支付金额")
    private BigDecimal payAmount;
}
```

#### 业务逻辑

1. 根据产品ID查询产品信息
2. 校验产品是否存在且已启用
3. 解析JSON数组字段（features、benefits）
4. 返回完整的产品详情

#### 请求示例

```json
{
  "merchantId": "M001",
  "channel": "WECHAT_MINI",
  "productId": "PROD001"
}
```

#### 响应示例

```json
{
  "code": "0000",
  "msg": "success",
  "data": {
    "productId": "PROD001",
    "productCode": "CARD001",
    "productName": "DIY定制信用卡",
    "cardType": "CREDIT",
    "cardLevel": "GOLD",
    "cardOrg": "UNIONPAY",
    "bankName": "XX银行",
    "imageUrl": "https://example.com/product/card001.png",
    "templateUrl": "https://example.com/template/card001.png",
    "annualFee": 200.00,
    "annualFeeFree": "首年免年费，次年刷卡满6次免年费",
    "features": [
      "支持个性化DIY卡面设计",
      "AI智能生图",
      "全球支付无手续费"
    ],
    "benefits": [
      "机场贵宾厅服务",
      "酒店住宿优惠",
      "积分兑换礼品"
    ],
    "applyCondition": "年满18周岁，有稳定收入",
    "isDiy": true,
    "standardImageUrl": "https://example.com/standard/card001.png",
    "supportAiGenerate": true,
    "needAiReview": true,
    "needPay": false,
    "payAmount": null
  }
}
```

---

## 产品开关说明

产品表中有四个功能开关，影响订单流程：

| 开关字段 | 说明 | 影响 |
|---------|------|------|
| `isDiy` | 是否支持DIY卡面 | =0时使用标准卡面，跳过设计和审图阶段 |
| `supportAiGenerate` | 是否支持AI生图 | =0时只能DIY上传，不显示AI生图入口（仅isdiy=1时有效） |
| `needAiReview` | 是否需要AI审图 | =0时跳过审图，设计完成直接进入待填写信息（仅isdiy=1时有效） |
| `needPay` | 是否需要支付 | =0时跳过支付，提交订单直接进入办理中 |

### 状态流转路径

#### isdiy=0（使用标准卡面）

| needPay | 状态流转路径 |
|:-------:|-------------|
| 1 | 创建订单 → PENDING_INFO → PENDING_PAY → PROCESSING |
| 0 | 创建订单 → PENDING_INFO → PROCESSING |

#### isdiy=1（DIY设计）

根据开关组合，订单状态流转有以下几种路径：

| needAiReview | needPay | 状态流转路径 |
|:------------:|:-------:|-------------|
| 1 | 1 | DESIGNING → REVIEWING → PENDING_INFO → PENDING_PAY → PROCESSING |
| 1 | 0 | DESIGNING → REVIEWING → PENDING_INFO → PROCESSING |
| 0 | 1 | DESIGNING → PENDING_INFO → PENDING_PAY → PROCESSING |
| 0 | 0 | DESIGNING → PENDING_INFO → PROCESSING |

> 注：`supportAiGenerate` 不影响状态流转，仅影响设计阶段的可选方式

---

## 8. 回调接口（内部）

### 8.1 核心系统回调

**POST** `/bal/callback/core`

核心系统处理完成后的回调接口（BAL层）。

#### ReqVO 定义

```java
@Data
@Schema(description = "核心系统回调请求")
public class CoreCallbackReqVO implements Serializable {
    @NotBlank(message = "订单号不能为空")
    @Schema(description = "订单号")
    private String orderNo;
    
    @NotBlank(message = "处理结果不能为空")
    @Schema(description = "处理结果：SUCCESS-成功, FAILED-失败")
    private String result;
    
    @Schema(description = "结果描述")
    private String message;
    
    @Schema(description = "回调时间")
    private String timestamp;
    
    @Schema(description = "签名")
    private String sign;
}
```

#### 业务逻辑

1. 验证签名
2. 根据订单号查询订单
3. 更新订单状态（SUCCESS/FAILED）
4. 记录回调日志

---

## 状态码说明

| 状态码 | 说明 |
|--------|------|
| 0000 | 成功 |
| 1001 | 参数错误 |
| 1002 | 订单不存在 |
| 1003 | 订单状态不允许此操作 |
| 1004 | U码不存在 |
| 2001 | 审图失败 |
| 2002 | AI生成失败 |
| 3001 | 文件上传失败 |
| 3002 | 文件格式不支持 |
| 3003 | 文件大小超限 |
| 4001 | 证件号码格式错误 |
| 9999 | 系统错误 |

---

## 订单状态枚举

| 状态值 | 说明 | 可执行操作 |
|--------|------|-----------|
| DESIGNING | 设计中 | AI生图、选择卡面、DIY上传、提交审图 |
| REVIEWING | 审核中 | 等待审图结果 |
| REVIEW_FAILED | 审核不通过 | 重新设计 |
| PENDING_INFO | 待填写信息 | 填写客户信息、提交订单、取消订单 |
| PROCESSING | 办理中 | 等待回调 |
| SUCCESS | 办理成功 | 查看详情 |
| FAILED | 办理失败 | 查看详情 |
| CANCELLED | 已取消 | - |

---

## 用户访问流程

### 设计阶段（使用 orderId）

```
1. 创建订单 → 获得 orderId
2. AI生图/DIY上传（传 orderId）
3. 选择卡面（传 orderId）
4. 提交审图（传 orderId）
   ↓
   审图通过 → 获得 U码 ⭐ 用户需保存！
```

### 后续访问（使用 U码）

```
用户保存的 U码
   ↓
调用 /order/queryByUcode
   ↓
查看订单状态、卡面、二维码
```

### 完整时序

```
用户                    系统
 │                        │
 │──创建订单─────────────>│
 │<─────返回 orderId─────│  ← 保存 orderId
 │                        │
 │──AI生图(orderId)─────>│
 │<─────返回候选图片─────│
 │                        │
 │──选择卡面(orderId)───>│
 │<─────返回成功─────────│
 │                        │
 │──提交审图(orderId)───>│
 │<─────返回 U码 ⭐──────│  ← 保存 U码！
 │                        │
 │──填写信息(orderId)───>│
 │<─────返回成功─────────│
 │                        │
 │──提交订单(orderId)───>│
 │<─────返回成功─────────│
 │                        │
 │        ... 等待办理 ...│
 │                        │
 │──查询状态(U码)───────>│  ← 凭 U码 查询
 │<─────返回订单详情─────│
```

---

## VO 类文件清单

```
com.goldpac.umv.diy.bcl.vo/
├── order/
│   ├── OrderCreateReqVO.java
│   ├── OrderCreateResVO.java
│   ├── OrderDetailReqVO.java
│   ├── OrderDetailResVO.java
│   ├── OrderQueryByUcodeReqVO.java    # U码查询
│   ├── OrderQueryByUcodeResVO.java
│   ├── OrderCancelReqVO.java
│   ├── OrderSubmitReqVO.java
│   └── OrderSubmitResVO.java
├── design/
│   ├── AiGenerateReqVO.java
│   ├── AiGenerateResVO.java
│   ├── AiSelectReqVO.java
│   ├── AiSelectResVO.java
│   ├── DiyUploadReqVO.java
│   ├── DiyUploadResVO.java
│   ├── ReviewSubmitReqVO.java
│   ├── ReviewSubmitResVO.java
│   ├── ReviewResultReqVO.java
│   ├── ReviewResultResVO.java
│   └── CandidateImageVO.java
├── customer/
│   ├── IdCardUploadReqVO.java
│   ├── FaceRecognitionReqVO.java
│   ├── FaceRecognitionResVO.java
│   ├── CustomerSaveReqVO.java
│   ├── CustomerInfoReqVO.java
│   └── CustomerInfoResVO.java
├── ucode/
│   ├── UcodeQrcodeReqVO.java
│   ├── UcodeQrcodeResVO.java
│   └── UcodeDownloadReqVO.java
└── callback/
    └── CoreCallbackReqVO.java
├── product/
│   ├── ProductListReqVO.java
│   ├── ProductListResVO.java
│   ├── ProductVO.java
│   ├── ProductDetailReqVO.java
│   └── ProductDetailResVO.java
```

---

## 安全设计

### 无登录模式安全措施

1. **orderId 不可猜测**：使用 UUID 生成，防止遍历
2. **U码 有规则但不可预测**：包含日期+序号，但序号随机跳跃
3. **敏感信息脱敏**：证件号码、姓名返回时脱敏
4. **回调签名验证**：核心系统回调需签名校验
5. **接口限流**：AI生图等接口限制调用频率

### 数据脱敏规则

| 字段 | 脱敏规则 | 示例 |
|-----|---------|------|
| 证件号码 | 前3后4 | 440***1234 |
| 姓名 | 保留首字 | 张* |


---

## AI 服务 Mock 设计

### Mock 接口清单

| 接口 | Mock 行为 |
|-----|----------|
| `/design/ai/generate` | 返回4张预设模板图片 |
| `/design/review/submit` | 默认返回通过，可配置通过率 |
| `/customer/faceRecognition` | 随机生成相似度（80-99），≥85认为通过 |

### Mock 配置项

```yaml
diy:
  ai:
    mock:
      enabled: true                    # 是否开启Mock模式
      # AI生图配置
      generate-images:                 # Mock返回的图片URL列表
        - "https://mock.example.com/card_template_1.png"
        - "https://mock.example.com/card_template_2.png"
        - "https://mock.example.com/card_template_3.png"
        - "https://mock.example.com/card_template_4.png"
      generate-delay-ms: 2000          # 模拟生图延迟（毫秒）
      # AI审图配置
      review-pass-rate: 100            # 审图通过率（0-100）
      review-delay-ms: 1000            # 模拟审图延迟（毫秒）
      review-reject-reason: "图片包含敏感内容，请重新设计"
  face:
    mock:
      enabled: true                    # 是否开启人脸识别Mock模式
```

### Mock 服务实现

```java
@Service
@ConditionalOnProperty(name = "diy.ai.mock.enabled", havingValue = "true")
public class AiMockServiceImpl implements AiService {
    
    @Value("${diy.ai.mock.generate-delay-ms:2000}")
    private long generateDelayMs;
    
    @Value("${diy.ai.mock.review-pass-rate:100}")
    private int reviewPassRate;
    
    @Override
    public List<String> generateImages(String prompt) {
        // 模拟延迟
        Thread.sleep(generateDelayMs);
        // 返回预设图片
        return mockImageUrls;
    }
    
    @Override
    public ReviewResult reviewImage(String imageUrl) {
        // 模拟延迟
        Thread.sleep(reviewDelayMs);
        // 根据通过率决定结果
        boolean pass = new Random().nextInt(100) < reviewPassRate;
        return pass ? ReviewResult.pass() : ReviewResult.reject(rejectReason);
    }
}
```

### 切换到正式服务

1. 修改配置 `diy.ai.mock.enabled=false`
2. 实现 `AiService` 接口的正式版本
3. 配置真实 AI 服务的连接信息
