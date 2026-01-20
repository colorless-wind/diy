
export default {
  languages: {
    zhCN: '中文',
    enUS: 'English',
    koKR: '한국어',
    esES: 'Español'
  },
  common: {
    back: '返回',
    nextStep: '下一步',
    submit: '提交',
    submitting: '提交中...',
    agree: '同意',
    disagree: '不同意'
  },
  home: {
    title: '上传彩照留住回忆',
    title_2: 'DIY个性卡定制',
    startCreating: '开始制作',
    language: '语言'
  },
  cardSelection: {
    diyBannerTitle: 'DIY个性定制',
    diyBannerDesc: '上传您的照片，创建独一无二的信用卡',
    presetCardsTitle: '精选信用卡',
    apply: '申请'
  },
  presetCard: {
    title: '卡片详情',
    benefits: '卡片权益',
    applicationForm: '申请表单',
    fullName: '姓名',
    fullNamePlaceholder: '请输入您的全名',
    email: '邮箱',
    emailPlaceholder: '请输入您的邮箱地址',
    phone: '电话',
    phonePlaceholder: '请输入您的电话号码',
    idNumber: '证件号码',
    idNumberPlaceholder: '请输入您的证件号码',
    address: '地址',
    addressPlaceholder: '请输入您的地址',
    submit: '提交申请',
    submitting: '提交中...',
    submitError: '提交失败，请稍后重试',
    agreementText: '我已阅读并同意',
    termsLink: '《服务条款》',
    and: '和',
    privacyLink: '《隐私政策》',
    agreementError: '请先同意服务条款和隐私政策',
    errors: {
      fullNameRequired: '请输入您的姓名',
      emailRequired: '请输入您的邮箱',
      emailInvalid: '请输入有效的邮箱地址',
      phoneRequired: '请输入您的电话号码',
      phoneInvalid: '请输入有效的电话号码',
      idNumberRequired: '请输入您的证件号码',
      addressRequired: '请输入您的地址'
    }
  },
  userApply: {
    idPhoto: '证件照片',
    idPhotoTip: '请上传清晰的证件照片（最多9张）',
    clickToUpload: '点击上传证件照片',
    uploadFormat: '支持 JPG、PNG 格式，每张最大 5MB',
    job: '职业',
    jobPlaceholder: '请输入职业',
    company: '工作单位',
    companyPlaceholder: '请输入工作单位',
    mailingAddress: '邮寄地址',
    errors: {
      idPhotoRequired: '请至少上传一张证件照片',
      invalidFormat: '图片格式不支持，请上传 JPG 或 PNG 格式',
      fileTooLarge: '图片大小超过 5MB，请重新选择',
      tooManyPhotos: '最多只能上传 {max} 张照片，当前已有 {current} 张，还可上传 {remaining} 张',
      jobRequired: '请输入职业',
      companyRequired: '请输入工作单位'
    }
  },
  applicationComplete: {
    title: '申请信用卡',
    success: '成功',
    successMessage: '尊敬的客户，您的申请已成功提交，请您耐心等待审核通知！您可通过手机银行“信用卡-申请进度”查询办卡进度。',
    applicationNumber: '申请单号',
    cardProduct: '信用卡产品',
    mailingAddress: '邮寄地址',
    defaultAddress: '北京市北京市朝阳区北京阳光上东双子座西塔*层北京当当科文电子商务有限公司',
    qrcodeTitle: '卡面信息二维码',
    qrcodeTip: '扫描二维码查看卡面信息',
    qrcodeFailed: '二维码生成失败',
    returnHome: '返回首页',
    checkProgress: '查询申请进度',
    progressTip: '您可通过手机银行"信用卡-申请进度"查询办卡进度',
    customerServiceTip: '客服功能开发中',
    diyCardProduct: 'DIY定制信用卡',
    presetCardProduct: '欧洲旅行信用卡'
  },
  applicationProgress: {
    title: '申请进度',
    applicationNumber: '申请单号',
    applicationSheet: '申请单号',
    productName: '产品名称',
    applyDate: '申请日期',
    applyType: '申办类型',
    applicationNumberPlaceholder: '请输入申请单号',
    query: '查询',
    loading: '查询中...',
    currentStatus: '当前状态',
    statusReceived: '收到申请',
    statusSubmitted: '审核中',
    defaultCardProduct: '欧洲旅行卡剪影系列',
    defaultApplyType: '主卡办卡',
    mailingAddress: '邮寄地址',
    stepSubmitted: '已提交',
    stepSubmittedDesc: '已成功提交申请，请耐心等待审核。',
    stepReviewing: '审核中',
    stepReviewingDesc: '系统正在审核您的资料。',
    stepResult: '审核结果',
    stepResultDesc: '审核完成后将通知您结果。',
    tip: '提示：当前为页面内演示进度；如需真实办卡进度，请以手机银行“信用卡-申请进度”为准。',
    queryFailed: '查询失败，请稍后重试'
  },
  cardProducts: {
    travelEurope: {
      category: '畅行欧洲',
      title: '欧洲旅行信用卡',
      description: '欧洲消费1.5%返现无上限',
      benefits: [
        '欧洲消费1.5%返现，无上限',
        '机场贵宾厅免费使用',
        '旅行保险保障'
      ]
    },
    zodiac: {
      category: '十二生肖',
      title: '生肖卡',
      description: '铭刻文化,彰显自信',
      benefits: [
        '独特生肖设计',
        '文化纪念价值',
        '专属权益'
      ]
    },
    peonyDragon: {
      category: '普惠让利',
      title: '牡丹超惠龙',
      description: '硬核超惠,真情回馈',
      benefits: [
        '超值返现优惠',
        '消费积分翻倍',
        '专属商户折扣'
      ]
    }
  },
  idUpload: {
    title: '申请信用卡',
    uploadLabel: '请拍摄申请人的证件照片（正反面共计2张）',
    clickToUpload: '点击上传',
    uploadHint: '支持 JPG、PNG 格式，最大 5MB',
    idPhotoAlt: '证件照片 {index}',
    infoTitle: '请核对身份信息，若有误请手动修改',
    fullName: '姓名',
    fullNamePlaceholder: '请输入姓名',
    idType: '证件类型',
    idTypePlaceholder: '请选择证件类型',
    idTypeOptions: {
      idCard: '身份证',
      passport: '护照',
      hkMacaoPermit: '港澳通行证',
      taiwanPermit: '台胞证',
      residencePermit: '永久居留身份证',
      tempId: '临时身份证',
      householdRegister: '户口簿',
      driverLicense: '驾驶证',
      militaryId: '军官证',
      officerId: '警官证',
      policeId: '人民警察证',
      soldierCard: '士兵证',
      seafarerId: '海员证',
      birthCertificate: '出生医学证明',
      studentId: '学生证',
      socialSecurityCard: '社会保障卡',
      foreignPassport: '外国护照',
      hkResidencePermit: '港澳居民居住证',
      macaoResidencePermit: '澳门居民居住证',
      taiwanResidencePermit: '台湾居民居住证',
      foreignResidencePermit: '外国人居留许可',
      foreignerPermanentResidence: '外国人永久居留身份证',
      travelDocument: '旅行证',
      returnHomePermit: '回乡证',
      tempTravelPermit: '临时通行证',
      maritalCertificate: '结婚证',
      housePropertyCert: '房产证',
      otherId: '其他有效身份证明',
      other: '其他'
    },
    idNumber: '证件号码',
    idNumberPlaceholder: '请输入证件号码',
    isLongTerm: '是否长期有效',
    yes: '是',
    no: '否',
    idStartDate: '证件起始日期',
    idEndDate: '证件截止日期',
    phone: '手机号',
    phonePlaceholder: '请输入手机号',
    faceModalTitle: '人脸识别身份验证授权',
    faceInstructions: {
      light: '保持光线充足',
      center: '人脸正对屏幕',
      frame: '面部位于取景框内'
    },
    faceDisclaimer: '本次申请需进行人脸识别,所收集的脸部影像信息仅用于核验是否您本人申请,如果您不同意,后续我行将采取电话或柜面等措施核验您的身份,谢谢!',
    faceFailTip: '如您人脸检测未通过,请前往网点申请办理。',
    errors: {
      fullNameRequired: '请输入姓名',
      phoneRequired: '请输入手机号',
      phoneInvalid: '请输入正确的手机号',
      idTypeRequired: '请选择证件类型',
      idNumberRequired: '请输入证件号码',
      idNumberInvalid: '证件号码格式不正确',
      idStartDateRequired: '请选择证件起始日期',
      idEndDateRequired: '请选择证件截止日期',
      idEndDateInvalid: '截止日期必须晚于起始日期',
      verifyCodeRequired: '请输入验证码',
      verifyCodeInvalid: '请输入6位数字验证码',
      idPhotoRequired: '请上传证件照片',
      sendCodeFailed: '发送验证码失败，请稍后重试'
    }
  },
  faceRecognition: {
    permissionTitle: '允许使用摄像头?',
    permissionDesc: '用于拍照、拍视频、扫描二维码等',
    allowCamera: '使用时允许',
    allowCameraOnce: '仅本次使用时允许',
    denyCamera: '不允许',
    preparing: '准备中...',
    countdown: '{count}秒',
    verifying: '验证中，请保持姿势不变',
    success: '人脸识别成功',
    failed: '人脸识别失败',
    similarity: '相似度：{value}',
    retry: '重新识别',
    confirmExit: '确定要退出人脸识别吗？',
    messages: {
      permissionRequired: '请允许摄像头权限',
      noCameraSimulated: '未检测到摄像头，已进入模拟流程',
      simulationStarted: '已进入模拟流程',
      simulatedRecognizing: '模拟识别中...',
      moveToCenter: '请将人脸移到中心位置',
      recognitionNetworkError: '人脸识别失败，请检查网络或稍后重试',
      noFaceDetected: '没有检测到人脸',
      faceDetectedKeepStill: '检测到人脸，请保持不动',
      faceDetectedRegister: '检测到人脸，可点击注册',
      detectionFailedBrowser: '人脸检测失败，请换用 Chrome/Edge 重试',
      openingCamera: '正在打开摄像头...',
      loadingModel: '正在加载人脸识别模型...',
      modelUnavailableSimulated: '当前环境无法加载人脸识别模型/检测能力不足，已进入模拟流程',
      placeFaceInFrame: '请将人脸置于圆形取景框内',
      placeFaceInFrameRegister: '请将人脸置于圆形取景框内，可点击注册',
      noClearFaceRetry: '未检测到清晰人脸，请重新对准后再试',
      registerSuccess: '人脸注册成功，可点击验证或等待倒计时自动验证',
      verifyNoFace: '未检测到人脸，验证失败',
      verifyFailedFacing: '验证失败，请正对摄像头重试',
      verifyPassed: '验证通过',
      verifyFailedNetwork: '验证失败，请检查网络或稍后重试',
      moveCloser: '请靠近一点',
      moveFarther: '请远离一点',
      imageUploadFailed: '图片上传失败，请重试',
      verifyFailed: '人脸识别失败',
      apiFailed: '接口调用失败，请重试'
    },
    errors: {
      permissionRequired: '需要摄像头权限才能进行人脸识别',
      cameraNotSupported: '当前浏览器不支持摄像头访问',
      cameraInitFailed: '摄像头预览初始化失败',
      cameraPreviewTimeout: '摄像头预览超时',
      faceApiBrowserOnly: 'Face API 仅支持浏览器环境',
      faceApiScriptLoadFailed: 'face-api 脚本加载失败',
      faceApiNotInitialized: 'face-api 未初始化',
      faceApiInitFailed: 'face-api 初始化失败',
      modelNotReady: '人脸识别模型尚未就绪',
      registerNoFace: '未检测到人脸，注册失败',
      registerFailed: '注册失败，请重试',
      faceApiNotLoaded: 'face-api 未加载'
    }
  },
  aiDraw: {
    descriptionTitle: '详细描述',
    startGenerate: '开始生成',
    loading: '加载中...',
    defaultDesc: '大师作品，最好的质量，高品质，高层，超详细，逼真，1个甜美的女孩，长发，叶发饰品，尖耳朵，精灵，绿色的眼睛，苍白的皮肤，裸露的肩膀，白色长裙',
    generateFail: '生成图片失败，请重新填写描述信息',
    sizeLandscape: '横版',
    sizePortrait: '竖版',
    styles: {
      picas: '皮卡斯',
      animeEra: '动漫纪元',
      colorfulIllustration: '幻彩插画',
      colorfulAnime: '幻彩动漫',
      monetGarden: '莫奈花园',
      delicateMarvel: '精致美漫',
      romanticLight: '浪漫光影',
      cyberpunk: '赛博朋克',
      japanAnime: '日漫风',
      animeStyle: '动漫风',
      game3dEra: '3D游戏Z时代'
    }
  },
    diy:{
      clickUpload:'点击上传',
      imageSize:'图片上传大小：不大于20M',
      imageDimensions:'图片上传尺寸：大于1051*673',
      contentGuidelines:'图片内容规范：请确定上传的内容不侵犯肖像权、版权、合法合规',
      emojiSticker:'表情贴纸',
      textSticker:'文字贴纸',
      moodSticker:'心情贴纸',
      reUpload: '重新上传',
      nextStep: '下一步',
      imageNotFull: '图片未铺满!',
      pleaseAddCardImage: '请先添加卡面图片',
      elementLimit: '元素数量最大不能超过4个',
      zombieTip:'提示：图片缩放过高，清晰度会受到影响',
      cropperTip:'裁剪区域内不能留有空白区域，请重新调整图片位置',
      loading: '上传中',
      uploadWithTip:'图片宽度小于1051像素，请重新上传',
      uploadHeightTip: '图片高度小于673像素，请重新上传',
      uploadSizeTip: '图片大小超过20M，请重新上传',
      uploadSuccess: '上传成功！',
      uploadFail: '上传失败！',
      pleaseContactStaff: '请联系现场工作人员领取卡片',
      backToHome: '返回首页',
      work:'作品',
      enterWork:'请填写作品名称',
      author:'作者',
      enterAuthor:'请填写作者名字',
      copyright:'版权提示',
      copyrightTips:'请确保您对上传的图片拥有知识产权，对于图片上的内容，已取得 其合法有效的授权，允许在本产品范围内使用。',
      uploadSubmit: '确认上传',
      clickReUpload: '点击重新上传',
      imageFormatNotSupport:'图片格式不支持',
      aiReviewFailed: '图片审核不通过，请重新上传图片',
      reviewDialogTitle: '提示',
      reviewDialogConfirm: '继续使用',
      reviewDialogCancel: '重新选择'
  },
  terms: {
    title: '服务条款',
    content: `
      <h2>1. 服务概述</h2>
      <p>本服务由相关机构提供。本服务包括但不限于信用卡申请、个性化卡片定制等功能。</p>

      <h2>2. 用户资格</h2>
      <p>您确认，在您开始使用本服务前，您应当具备中华人民共和国法律规定的与您行为相适应的民事行为能力。若您不具备前述与您行为相适应的民事行为能力，则您及您的监护人应依照法律规定承担因此而导致的一切后果。</p>

      <h2>3. 服务条款的确认和接受</h2>
      <p>本服务条款是您与本服务之间关于使用本服务的法律协议。您在使用本服务前应当仔细阅读本服务条款。</p>
      <p>您在申请页面点击"同意"按钮即视为您已仔细阅读本服务条款，理解并同意接受本服务条款的所有内容，并承诺遵守各项条款的约束。</p>

      <h2>4. 服务内容</h2>
      <p>本服务主要提供以下服务：</p>
      <ul>
        <li>信用卡产品信息展示</li>
        <li>信用卡申请服务</li>
        <li>个性化卡片定制服务</li>
        <li>相关资讯信息</li>
      </ul>

      <h2>5. 用户义务</h2>
      <p>在使用本服务时，您承诺：</p>
      <ol>
        <li>遵守中华人民共和国相关法律法规</li>
        <li>提供真实、准确、完整的个人信息</li>
        <li>不利用本服务从事任何违法或不正当活动</li>
        <li>保护好自己的账户信息和密码安全</li>
      </ol>

      <h2>6. 信息收集与使用</h2>
      <p>我们可能会收集您的个人信息，包括但不限于姓名、联系方式、身份证信息等。我们承诺仅将这些信息用于提供服务、改善服务质量和客户支持目的。</p>

      <h2>7. 服务变更、中断或终止</h2>
      <p>我们有权根据业务发展需要，随时对服务内容进行调整、变更或终止。我们将在网站上公布相关变更信息。</p>

      <h2>8. 免责声明</h2>
      <p>对于因不可抗力或其他非本服务原因导致的服务中断或数据丢失，本服务不承担责任。本服务对服务不作任何明示或暗示的保证。</p>

      <h2>9. 条款修改</h2>
      <p>我们保留随时修改本服务条款的权利。修改后的条款将在网站上公布，视为已通知用户。</p>

      <h2>10. 法律适用</h2>
      <p>本服务条款的解释、效力及争议的解决，适用中华人民共和国法律。如发生争议，应协商解决；协商不成的，任何一方均有权向有管辖权的人民法院提起诉讼。</p>

      <h2>11. 联系我们</h2>
      <p>如果您对本服务条款有任何疑问或建议，请通过相关渠道联系我们。</p>
    `
  },
  privacy: {
    title: '隐私政策',
    content: `
      <h2>1. 信息收集</h2>
      <p>我们重视您的隐私保护。在您使用我们的服务时，我们可能会收集以下信息：</p>
      <ul>
        <li>基本个人信息：姓名、性别、出生日期等</li>
        <li>联系信息：手机号码、电子邮箱地址等</li>
        <li>身份信息：身份证号码、照片等</li>
        <li>设备信息：设备型号、操作系统版本等</li>
        <li>使用信息：访问记录、使用偏好等</li>
      </ul>

      <h2>2. 信息使用</h2>
      <p>我们收集的信息将用于：</p>
      <ul>
        <li>提供信用卡申请服务</li>
        <li>验证用户身份</li>
        <li>改善服务质量</li>
        <li>发送服务通知</li>
        <li>法律合规要求</li>
      </ul>

      <h2>3. 信息保护</h2>
      <p>我们采用行业标准的安全措施保护您的个人信息：</p>
      <ul>
        <li>数据加密传输和存储</li>
        <li>访问权限控制</li>
        <li>定期安全审计</li>
        <li>员工保密协议</li>
      </ul>

      <h2>4. 信息共享</h2>
      <p>我们承诺不会出售、出租或以其他方式披露您的个人信息，除非：</p>
      <ul>
        <li>获得您的明确同意</li>
        <li>法律要求或政府部门要求</li>
        <li>保护我们的合法权益</li>
        <li>涉及合并、收购或资产转让</li>
      </ul>

      <h2>5. Cookie使用</h2>
      <p>我们使用Cookie来改善用户体验，包括记住您的偏好设置、分析网站流量等。您可以随时在浏览器设置中禁用Cookie。</p>

      <h2>6. 用户权利</h2>
      <p>根据相关法律法规，您享有以下权利：</p>
      <ul>
        <li>访问您的个人信息</li>
        <li>更正不准确的信息</li>
        <li>删除您的个人信息</li>
        <li>限制或反对信息处理</li>
        <li>数据可移植性</li>
      </ul>

      <h2>7. 未成年人保护</h2>
      <p>我们非常重视未成年人的个人信息保护。如果您是18周岁以下的未成年人，请在监护人的陪同下阅读本政策，并在监护人的指导下使用我们的服务。</p>

      <h2>8. 政策更新</h2>
      <p>我们可能会不定期更新本隐私政策。重大变更时，我们会通过网站公告、邮件等方式通知您。继续使用我们的服务即表示您同意更新后的政策。</p>

      <h2>9. 联系我们</h2>
      <p>如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式联系我们：</p>
      <ul>
        <li>电子邮箱：privacy@diy-promotion.com</li>
        <li>客服热线：400-123-4567</li>
        <li>办公地址：广东省珠海市香洲区某某路某某大厦</li>
      </ul>

      <h2>10. 生效日期</h2>
      <p>本隐私政策于2024年1月1日生效。</p>
    `
  }
}