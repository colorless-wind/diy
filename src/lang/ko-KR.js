export default {
  languages: {
    zhCN: '중국어',
    enUS: '영어',
    koKR: '한국어',
    esES: '스페인어'
  },
  common: {
    back: '뒤로',
    nextStep: '다음 단계',
    submit: '제출',
    submitting: '제출 중...',
    agree: '동의',
    disagree: '동의하지 않음'
  },
  home: {
    title: '컬러 사진을 업로드해 추억을 남기세요',
    title_2: 'DIY 맞춤 카드 제작',
    startCreating: '제작 시작',
    language: '언어'
  },
  cardSelection: {
    diyBannerTitle: 'DIY 맞춤 제작',
    diyBannerDesc: '사진을 업로드해 나만의 신용카드를 만들어 보세요',
    presetCardsTitle: '추천 신용카드',
    apply: '신청'
  },
  presetCard: {
    title: '카드 상세',
    benefits: '카드 혜택',
    applicationForm: '신청서',
    fullName: '이름',
    fullNamePlaceholder: '성명을 입력하세요',
    email: '이메일',
    emailPlaceholder: '이메일 주소를 입력하세요',
    phone: '전화번호',
    phonePlaceholder: '전화번호를 입력하세요',
    idNumber: '신분증 번호',
    idNumberPlaceholder: '신분증 번호를 입력하세요',
    address: '주소',
    addressPlaceholder: '주소를 입력하세요',
    submit: '신청 제출',
    submitting: '제출 중...',
    submitError: '제출에 실패했습니다. 잠시 후 다시 시도하세요',
    agreementText: '다음을 읽고 동의합니다:',
    termsLink: '서비스 약관',
    and: '및',
    privacyLink: '개인정보 처리방침',
    agreementError: '서비스 약관과 개인정보 처리방침에 동의해 주세요',
    errors: {
      fullNameRequired: '성명을 입력하세요',
      emailRequired: '이메일을 입력하세요',
      emailInvalid: '유효한 이메일 주소를 입력하세요',
      phoneRequired: '전화번호를 입력하세요',
      phoneInvalid: '유효한 전화번호를 입력하세요',
      idNumberRequired: '신분증 번호를 입력하세요',
      addressRequired: '주소를 입력하세요'
    }
  },
  userApply: {
    idPhoto: '신분증 사진',
    idPhotoTip: '선명한 신분증 사진을 업로드하세요(최대 9장)',
    clickToUpload: '신분증 사진 업로드',
    uploadFormat: 'JPG, PNG 형식 지원, 사진당 최대 5MB',
    job: '직업',
    jobPlaceholder: '직업을 입력하세요',
    company: '직장',
    companyPlaceholder: '직장을 입력하세요',
    mailingAddress: '우편 주소',
    errors: {
      idPhotoRequired: '최소 한 장의 신분증 사진을 업로드하세요',
      invalidFormat: '지원하지 않는 형식입니다. JPG 또는 PNG를 업로드하세요',
      fileTooLarge: '이미지 크기가 5MB를 초과했습니다. 다른 파일을 선택하세요',
      tooManyPhotos: '최대 {max}장까지 업로드할 수 있습니다. 현재 {current}장, 추가로 {remaining}장 업로드 가능',
      jobRequired: '직업을 입력하세요',
      companyRequired: '직장을 입력하세요'
    }
  },
  applicationComplete: {
    title: '신용카드 신청',
    success: '성공',
    successMessage: '고객님, 신청이 성공적으로 접수되었습니다. 심사 결과를 기다려 주세요! 모바일뱅킹의 "신용카드-신청 진행"에서 신청 진행 상황을 확인할 수 있습니다.',
    applicationNumber: '신청 번호',
    cardProduct: '신용카드 상품',
    mailingAddress: '우편 주소',
    defaultAddress: 'Beijing City, Beijing City, Chaoyang District, Beijing Sunshine Upper East Gemini Tower * Floor, Beijing Dangdang Culture and Education E-commerce Co., Ltd.',
    qrcodeTitle: '카드 정보 QR 코드',
    qrcodeTip: 'QR 코드를 스캔하여 카드 정보를 확인하세요',
    qrcodeFailed: 'QR 코드 생성 실패',
    returnHome: '홈으로 돌아가기',
    checkProgress: '신청 진행 조회',
    progressTip: '모바일뱅킹 "신용카드-신청 진행"에서 신청 진행 상황을 확인할 수 있습니다',
    customerServiceTip: '고객센터 기능은 개발 중입니다',
    diyCardProduct: 'DIY 맞춤 신용카드',
    presetCardProduct: '유럽 여행 신용카드'
  },
  applicationProgress: {
    title: '신청 진행',
    applicationNumber: '신청 번호',
    applicationSheet: '신청 번호',
    productName: '상품명',
    applyDate: '신청일',
    applyType: '신청 유형',
    applicationNumberPlaceholder: '신청 번호를 입력하세요',
    query: '조회',
    loading: '조회 중...',
    currentStatus: '현재 상태',
    statusReceived: '신청 접수',
    statusSubmitted: '심사 중',
    defaultCardProduct: '유럽 여행 카드 실루엣 시리즈',
    defaultApplyType: '본인 카드',
    mailingAddress: '우편 주소',
    stepSubmitted: '제출 완료',
    stepSubmittedDesc: '신청이 정상적으로 제출되었습니다. 심사를 기다려 주세요.',
    stepReviewing: '심사 중',
    stepReviewingDesc: '자료를 심사 중입니다.',
    stepResult: '심사 결과',
    stepResultDesc: '심사가 완료되면 결과를 안내합니다.',
    tip: '안내: 현재 페이지는 데모 진행 상태입니다. 실제 진행은 모바일뱅킹 "신용카드-신청 진행"을 확인하세요.',
    queryFailed: '조회 실패, 잠시 후 다시 시도하세요'
  },
  cardProducts: {
    travelEurope: {
      category: '유럽 여행',
      title: '유럽 여행 신용카드',
      description: '유럽 이용 1.5% 캐시백, 한도 없음',
      benefits: [
        '유럽 이용 1.5% 캐시백(한도 없음)',
        '공항 라운지 무료 이용',
        '여행 보험 보장'
      ]
    },
    zodiac: {
      category: '십이지',
      title: '띠 카드',
      description: '문화를 새기고 자신감을 드러내다',
      benefits: [
        '독특한 띠 디자인',
        '문화 기념 가치',
        '전용 혜택'
      ]
    },
    peonyDragon: {
      category: '혜택 환원',
      title: '모란 슈퍼 혜택 용 카드',
      description: '강력한 혜택, 진정한 보답',
      benefits: [
        '풍성한 캐시백 혜택',
        '소비 포인트 두 배 적립',
        '전용 가맹점 할인'
      ]
    }
  },
  idUpload: {
    title: '신용카드 신청',
    uploadLabel: '신청자의 신분증 사진을 촬영해 주세요(앞/뒷면 총 2장)',
    clickToUpload: '업로드하기',
    uploadHint: 'JPG, PNG 형식 지원, 최대 5MB',
    idPhotoAlt: '신분증 사진 {index}',
    infoTitle: '신분 정보를 확인하세요. 오류가 있으면 직접 수정해 주세요',
    fullName: '이름',
    fullNamePlaceholder: '이름을 입력하세요',
    idType: '신분증 종류',
    idTypePlaceholder: '신분증 종류를 선택하세요',
    idTypeOptions: {
      idCard: '주민등록증',
      passport: '여권',
      hkMacaoPermit: '홍콩·마카오 통행증',
      taiwanPermit: '대만 통행증',
      residencePermit: '영구 거주증',
      tempId: '임시 신분증',
      householdRegister: '호구부',
      driverLicense: '운전면허증',
      militaryId: '군인 신분증',
      officerId: '장교 신분증',
      policeId: '경찰 신분증',
      soldierCard: '병사증',
      seafarerId: '선원 신분증',
      birthCertificate: '출생증명서',
      studentId: '학생증',
      socialSecurityCard: '사회보장카드',
      foreignPassport: '외국 여권',
      hkResidencePermit: '홍콩 거주증',
      macaoResidencePermit: '마카오 거주증',
      taiwanResidencePermit: '대만 거주증',
      foreignResidencePermit: '외국인 체류허가증',
      foreignerPermanentResidence: '외국인 영구거주증',
      travelDocument: '여행증명서',
      returnHomePermit: '귀향증',
      tempTravelPermit: '임시 통행증',
      maritalCertificate: '결혼증명서',
      housePropertyCert: '부동산 소유증명서',
      otherId: '기타 유효 신분증',
      other: '기타'
    },
    idNumber: '신분증 번호',
    idNumberPlaceholder: '신분증 번호를 입력하세요',
    isLongTerm: '장기 유효 여부',
    yes: '예',
    no: '아니오',
    idStartDate: '신분증 시작일',
    idEndDate: '신분증 만료일',
    phone: '휴대전화',
    phonePlaceholder: '휴대전화 번호를 입력하세요',
    phoneCountryPlaceholder: '국가 코드 선택',
    phoneCountryOptions: {
      china: '중국 +86',
      us: '미국/캐나다 +1',
      uk: '영국 +44',
      australia: '호주 +61',
      newZealand: '뉴질랜드 +64',
      japan: '일본 +81',
      korea: '한국 +82',
      singapore: '싱가포르 +65',
      hongKong: '홍콩(중국) +852',
      macao: '마카오(중국) +853',
      taiwan: '대만(중국) +886',
      germany: '독일 +49',
      france: '프랑스 +33',
      italy: '이탈리아 +39',
      spain: '스페인 +34',
      netherlands: '네덜란드 +31',
      sweden: '스웨덴 +46',
      russia: '러시아 +7',
      india: '인도 +91',
      brazil: '브라질 +55',
      mexico: '멕시코 +52',
      uae: '아랍에미리트 +971',
      saudi: '사우디아라비아 +966',
      southAfrica: '남아프리카 +27'
    },
    faceModalTitle: '얼굴 인식 신원 확인 동의',
    faceInstructions: {
      light: '조명이 충분하도록 유지',
      center: '얼굴을 화면 정면에',
      frame: '얼굴이 프레임 안에 있도록'
    },
    faceDisclaimer: '본 신청은 얼굴 인식이 필요합니다. 수집된 얼굴 영상 정보는 본인 신청 여부 확인에만 사용됩니다. 동의하지 않으면 이후 전화 또는 지점 방문 등으로 신원을 확인합니다. 감사합니다.',
    faceFailTip: '얼굴 인식에 실패하면 지점에서 신청해 주세요.',
    errors: {
      fullNameRequired: '이름을 입력하세요',
      phoneRequired: '휴대전화 번호를 입력하세요',
      phoneInvalid: '유효한 전화번호를 입력하세요',
      countryCodeRequired: '국가 코드를 선택하세요',
      idTypeRequired: '신분증 종류를 선택하세요',
      idNumberRequired: '신분증 번호를 입력하세요',
      idNumberInvalid: '신분증 번호 형식이 올바르지 않습니다',
      idStartDateRequired: '신분증 시작일을 선택하세요',
      idEndDateRequired: '신분증 만료일을 선택하세요',
      idEndDateInvalid: '만료일은 시작일 이후여야 합니다',
      verifyCodeRequired: '인증번호를 입력하세요',
      verifyCodeInvalid: '6자리 숫자 인증번호를 입력하세요',
      idPhotoRequired: '신분증 사진을 업로드하세요',
      sendCodeFailed: '인증번호 전송에 실패했습니다. 잠시 후 다시 시도하세요'
    }
  },
  faceRecognition: {
    permissionTitle: '카메라 사용을 허용하시겠습니까?',
    permissionDesc: '사진/영상 촬영, QR 코드 스캔 등에 사용됩니다',
    allowCamera: '사용 중 허용',
    allowCameraOnce: '이번만 허용',
    denyCamera: '허용 안 함',
    preparing: '준비 중...',
    countdown: '{count}초',
    verifying: '검증 중입니다. 자세를 유지해 주세요',
    success: '얼굴 인식 성공',
    failed: '얼굴 인식 실패',
    similarity: '유사도: {value}',
    retry: '다시 인식',
    confirmExit: '얼굴 인식을 종료하시겠습니까?',
    messages: {
      permissionRequired: '카메라 권한을 허용해 주세요',
      noCameraSimulated: '카메라가 감지되지 않아 시뮬레이션 흐름으로 전환했습니다',
      simulationStarted: '시뮬레이션 흐름이 시작되었습니다',
      simulatedRecognizing: '시뮬레이션 인식 중...',
      moveToCenter: '얼굴을 중앙으로 이동해 주세요',
      recognitionNetworkError: '얼굴 인식에 실패했습니다. 네트워크를 확인하거나 잠시 후 다시 시도해 주세요',
      noFaceDetected: '얼굴이 감지되지 않았습니다',
      faceDetectedKeepStill: '얼굴이 감지되었습니다. 움직이지 말아 주세요',
      faceDetectedRegister: '얼굴이 감지되었습니다. 등록할 수 있습니다',
      detectionFailedBrowser: '얼굴 감지 실패. Chrome/Edge에서 다시 시도해 주세요',
      openingCamera: '카메라를 여는 중...',
      loadingModel: '얼굴 인식 모델을 불러오는 중...',
      modelUnavailableSimulated: '모델을 불러올 수 없거나 감지 능력이 부족하여 시뮬레이션 흐름으로 전환했습니다',
      placeFaceInFrame: '얼굴을 원형 프레임 안에 맞춰 주세요',
      placeFaceInFrameRegister: '얼굴을 원형 프레임 안에 맞춰 주세요. 등록할 수 있습니다',
      noClearFaceRetry: '선명한 얼굴이 감지되지 않았습니다. 다시 맞춰 주세요',
      registerSuccess: '얼굴 등록이 완료되었습니다. 지금 검증하거나 카운트다운 후 자동 검증됩니다',
      verifyNoFace: '얼굴이 감지되지 않아 검증에 실패했습니다',
      verifyFailedFacing: '검증 실패. 카메라를 정면으로 보고 다시 시도해 주세요',
      verifyPassed: '검증 통과',
      verifyFailedNetwork: '검증 실패. 네트워크를 확인하거나 잠시 후 다시 시도해 주세요',
      moveCloser: '조금 더 가까이 와 주세요',
      moveFarther: '조금 더 멀어져 주세요',
      imageUploadFailed: '이미지 업로드에 실패했습니다. 다시 시도해 주세요',
      verifyFailed: '얼굴 인식 실패',
      apiFailed: 'API 호출에 실패했습니다. 다시 시도해 주세요'
    },
    errors: {
      permissionRequired: '얼굴 인식을 위해 카메라 권한이 필요합니다',
      cameraNotSupported: '현재 브라우저는 카메라 접근을 지원하지 않습니다',
      cameraInitFailed: '카메라 미리보기 초기화에 실패했습니다',
      cameraPreviewTimeout: '카메라 미리보기 시간이 초과되었습니다',
      faceApiBrowserOnly: 'Face API는 브라우저 환경에서만 지원됩니다',
      faceApiScriptLoadFailed: 'face-api 스크립트 로드에 실패했습니다',
      faceApiNotInitialized: 'face-api가 초기화되지 않았습니다',
      faceApiInitFailed: 'face-api 초기화에 실패했습니다',
      modelNotReady: '얼굴 인식 모델이 준비되지 않았습니다',
      registerNoFace: '얼굴이 감지되지 않아 등록에 실패했습니다',
      registerFailed: '등록에 실패했습니다. 다시 시도해 주세요',
      faceApiNotLoaded: 'face-api가 로드되지 않았습니다'
    }
  },
  aiDraw: {
    descriptionTitle: '상세 설명',
    startGenerate: '생성 시작',
    loading: '로딩 중...',
    defaultDesc: '걸작, 최고 품질, 고품질, 고해상도, 초세밀, 사실적인, 달콤한 소녀 한 명, 긴 머리, 잎사귀 머리 장식, 뾰족한 귀, 요정, 녹색 눈, 창백한 피부, 드러난 어깨, 흰색 롱드레스',
    generateFail: '이미지 생성에 실패했습니다. 설명을 다시 입력해 주세요',
    sizeLandscape: '가로형',
    sizePortrait: '세로형',
    styles: {
      picas: '피카소',
      animeEra: '애니메이션 시대',
      colorfulIllustration: '컬러풀 일러스트',
      colorfulAnime: '컬러풀 애니메',
      monetGarden: '모네 정원',
      delicateMarvel: '정교한 미 만화',
      romanticLight: '로맨틱 라이트',
      cyberpunk: '사이버펑크',
      japanAnime: '일본 만화풍',
      animeStyle: '애니메이션 풍',
      game3dEra: '3D 게임 Z 시대'
    }
  },
  diy: {
    clickUpload: '업로드하기',
    imageSize: '이미지 업로드 크기: 20MB 이하',
    imageDimensions: '이미지 업로드 크기: 1051*673 이상',
    contentGuidelines: '업로드한 콘텐츠가 초상권/저작권을 침해하지 않고 법규를 준수하는지 확인하세요',
    emojiSticker: '이모지 스티커',
    textSticker: '텍스트 스티커',
    moodSticker: '감정 스티커',
    reUpload: '다시 업로드',
    nextStep: '다음 단계',
    imageNotFull: '이미지가 꽉 채워지지 않았습니다!',
    pleaseAddCardImage: '먼저 카드 이미지를 추가하세요',
    elementLimit: '요소는 최대 4개까지 가능합니다',
    zombieTip: '안내: 이미지 확대가 크면 선명도가 떨어질 수 있습니다',
    cropperTip: '자르기 영역에 빈 공간이 없도록 위치를 조정하세요',
    loading: '업로드 중',
    uploadWithTip: '이미지 너비가 1051픽셀보다 작습니다. 다시 업로드하세요',
    uploadHeightTip: '이미지 높이가 673픽셀보다 작습니다. 다시 업로드하세요',
    uploadSizeTip: '이미지 크기가 20MB를 초과했습니다. 다시 업로드하세요',
    uploadSuccess: '업로드 성공!',
    uploadFail: '업로드 실패!',
    pleaseContactStaff: '현장 직원에게 문의하여 카드를 수령하세요',
    backToHome: '홈으로 돌아가기',
    work: '작품',
    enterWork: '작품명을 입력하세요',
    author: '작가',
    enterAuthor: '작가명을 입력하세요',
    copyright: '저작권 안내',
    copyrightTips: '업로드한 이미지에 대한 지적 재산권을 보유하고 있으며, 이미지 내 콘텐츠에 대해 합법적이고 유효한 사용 허가를 받았음을 확인하세요.',
    uploadSubmit: '업로드 확인',
    clickReUpload: '다시 업로드 클릭',
    imageFormatNotSupport: '지원하지 않는 이미지 형식입니다',
    aiReviewFailed: '이미지 심사 실패, 다시 업로드해 주세요',
    reviewDialogTitle: '알림',
    reviewDialogConfirm: '계속 사용',
    reviewDialogCancel: '다시 선택'
  },
  terms: {
    title: '서비스 약관',
    content: `
      <h2>1. 서비스 개요</h2>
      <p>본 서비스는 관련 기관에서 제공합니다. 본 서비스에는 신용카드 신청, 맞춤형 카드 제작 등 기능이 포함되며 이에 국한되지 않습니다.</p>

      <h2>2. 사용자 자격</h2>
      <p>귀하는 본 서비스를 사용하기 전에 중화인민공화국 법률에서 규정한 행위능력을 갖추어야 합니다. 해당 행위능력이 없는 경우, 귀하와 보호자는 법률에 따라 발생하는 모든 결과를 부담합니다.</p>

      <h2>3. 약관의 확인 및 수락</h2>
      <p>본 약관은 본 서비스 사용에 관한 귀하와 본 서비스 간의 법적 합의입니다. 서비스를 사용하기 전에 약관을 주의 깊게 읽어야 합니다.</p>
      <p>신청 페이지에서 "동의" 버튼을 클릭하면 약관을 충분히 읽고 이해했으며 모든 내용을 수락하고 각 조항을 준수함에 동의한 것으로 간주됩니다.</p>

      <h2>4. 서비스 내용</h2>
      <p>본 서비스는 다음과 같은 서비스를 제공합니다:</p>
      <ul>
        <li>신용카드 상품 정보 제공</li>
        <li>신용카드 신청 서비스</li>
        <li>맞춤형 카드 제작 서비스</li>
        <li>관련 정보 및 소식</li>
      </ul>

      <h2>5. 사용자 의무</h2>
      <p>본 서비스를 이용함에 있어 귀하는 다음을 준수합니다:</p>
      <ol>
        <li>중화인민공화국 관련 법률 및 규정을 준수</li>
        <li>진실하고 정확하며 완전한 개인정보 제공</li>
        <li>불법 또는 부적절한 활동에 본 서비스를 사용하지 않음</li>
        <li>계정 정보 및 비밀번호 보안 유지</li>
      </ol>

      <h2>6. 정보 수집 및 이용</h2>
      <p>당사는 이름, 연락처, 신분증 정보 등을 포함한 개인정보를 수집할 수 있습니다. 수집한 정보는 서비스 제공, 서비스 품질 개선, 고객 지원 목적에 한해 사용됩니다.</p>

      <h2>7. 서비스 변경, 중단 또는 종료</h2>
      <p>당사는 사업 발전 필요에 따라 서비스 내용을 언제든지 조정, 변경 또는 종료할 권리가 있으며 관련 변경 사항을 웹사이트에 공지합니다.</p>

      <h2>8. 면책</h2>
      <p>불가항력 또는 본 서비스의 귀책 사유가 아닌 이유로 인한 서비스 중단 또는 데이터 손실에 대해 당사는 책임을 지지 않으며, 서비스에 대해 명시적 또는 묵시적 보증을 하지 않습니다.</p>

      <h2>9. 약관 변경</h2>
      <p>당사는 약관을 언제든지 수정할 권리가 있으며, 수정된 약관은 웹사이트에 게시되어 사용자에게 통지된 것으로 간주됩니다.</p>

      <h2>10. 준거법</h2>
      <p>본 약관의 해석, 효력 및 분쟁 해결에는 중화인민공화국 법률이 적용됩니다. 분쟁 발생 시 협의로 해결하며, 협의가 실패할 경우 관할 법원에 소송을 제기할 수 있습니다.</p>

      <h2>11. 문의</h2>
      <p>본 약관에 대한 문의나 의견이 있는 경우 관련 채널을 통해 연락해 주세요.</p>
    `
  },
  privacy: {
    title: '개인정보 처리방침',
    content: `
      <h2>1. 정보 수집</h2>
      <p>당사는 개인정보 보호를 중요하게 생각합니다. 서비스를 이용하는 과정에서 다음 정보를 수집할 수 있습니다:</p>
      <ul>
        <li>기본 개인정보: 이름, 성별, 생년월일 등</li>
        <li>연락처 정보: 휴대전화 번호, 이메일 주소 등</li>
        <li>신분 정보: 신분증 번호, 사진 등</li>
        <li>기기 정보: 기기 모델, 운영체제 버전 등</li>
        <li>이용 정보: 방문 기록, 이용 선호도 등</li>
      </ul>

      <h2>2. 정보 이용</h2>
      <p>수집한 정보는 다음 목적에 사용됩니다:</p>
      <ul>
        <li>신용카드 신청 서비스 제공</li>
        <li>사용자 신원 확인</li>
        <li>서비스 품질 개선</li>
        <li>서비스 알림 발송</li>
        <li>법적 준수 요구사항 충족</li>
      </ul>

      <h2>3. 정보 보호</h2>
      <p>당사는 업계 표준 보안 조치를 통해 개인정보를 보호합니다:</p>
      <ul>
        <li>데이터 전송 및 저장 암호화</li>
        <li>접근 권한 통제</li>
        <li>정기 보안 감사</li>
        <li>직원 비밀 유지 계약</li>
      </ul>

      <h2>4. 정보 공유</h2>
      <p>다음의 경우를 제외하고 개인정보를 판매, 임대 또는 공개하지 않습니다:</p>
      <ul>
        <li>귀하의 명시적 동의가 있는 경우</li>
        <li>법률 또는 정부 기관의 요구가 있는 경우</li>
        <li>당사의 정당한 권익 보호를 위해 필요한 경우</li>
        <li>합병, 인수 또는 자산 이전에 관련된 경우</li>
      </ul>

      <h2>5. 쿠키 사용</h2>
      <p>당사는 사용자 경험 개선을 위해 쿠키를 사용합니다. 여기에는 선호 설정 기억, 사이트 트래픽 분석 등이 포함됩니다. 브라우저 설정에서 언제든지 쿠키를 비활성화할 수 있습니다.</p>

      <h2>6. 사용자 권리</h2>
      <p>관련 법규에 따라 귀하는 다음 권리를 보유합니다:</p>
      <ul>
        <li>개인정보 열람</li>
        <li>부정확한 정보 수정</li>
        <li>개인정보 삭제</li>
        <li>정보 처리 제한 또는 이의 제기</li>
        <li>데이터 이동성</li>
      </ul>

      <h2>7. 미성년자 보호</h2>
      <p>당사는 미성년자의 개인정보 보호를 매우 중요하게 생각합니다. 18세 미만인 경우 보호자와 함께 본 정책을 읽고 보호자의 지도하에 서비스를 이용해 주세요.</p>

      <h2>8. 정책 업데이트</h2>
      <p>당사는 본 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 중요한 변경 사항은 웹사이트 공지, 이메일 등을 통해 안내합니다. 서비스를 계속 이용하면 업데이트된 정책에 동의하는 것으로 간주됩니다.</p>

      <h2>9. 문의</h2>
      <p>본 개인정보 처리방침에 대한 문의, 의견 또는 제안이 있는 경우 아래 방법으로 연락해 주세요:</p>
      <ul>
        <li>이메일: privacy@diy-promotion.com</li>
        <li>고객센터: 400-123-4567</li>
        <li>주소: 중국 광둥성 주하이시 샹저우구 모처 도로 모처 빌딩</li>
      </ul>

      <h2>10. 시행일</h2>
      <p>본 개인정보 처리방침은 2024년 1월 1일부터 시행됩니다.</p>
    `
  }
}
