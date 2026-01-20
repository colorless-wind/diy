const DEMO_PRODUCTS = [
  {
    productId: '1',
    productCode: 'DEBIT_STANDARD_001',
    productName: 'Gold Debit Card',
    cardType: 'DEBIT',
    cardLevel: 'STANDARD',
    cardOrg: 'UNIONPAY',
    bankName: 'Agricultural Bank of China',
    imageUrl: 'https://placehold.co/640x400/png?text=Debit+Card',
    templateUrl: 'https://placehold.co/640x400/png?text=Debit+Template',
    annualFee: 0.0,
    annualFeeFree: 'No annual fee',
    features: ['No annual fee', 'Nationwide ATM', 'Online banking'],
    benefits: ['Free account management', 'Free small-balance fee'],
    applyCondition: '18+ with valid ID',
    isDiy: true,
    standardImageUrl: 'https://placehold.co/640x400/png?text=Debit+Std',
    supportAiGenerate: true,
    needAiReview: true,
    needPay: false,
    payAmount: 0.0,
    needFaceVerify: false,
    faceVerifyRequired: false
  },
  {
    productId: '8',
    productCode: 'CREDIT_COOP_001',
    productName: 'Disney Co-branded Credit Card',
    cardType: 'CREDIT',
    cardLevel: 'STANDARD',
    cardOrg: 'UNIONPAY',
    bankName: 'Agricultural Bank of China',
    imageUrl: 'https://placehold.co/640x400/png?text=Credit+Card',
    templateUrl: null,
    annualFee: 150,
    annualFeeFree: 'First year free, 6 swipes waive next year',
    features: ['Theme design', 'Park discount', 'Merch discount', 'Points'],
    benefits: ['Park 10% off', 'Fast pass discount', 'Merch 20% off', 'Points gifts'],
    applyCondition: '18+',
    isDiy: false,
    standardImageUrl: 'https://placehold.co/640x400/png?text=Credit+Std',
    supportAiGenerate: false,
    needAiReview: false,
    needPay: false,
    payAmount: 0,
    needFaceVerify: false,
    faceVerifyRequired: false
  }
];

const BASE = '/diycard/bcl';

const nowId = () => `${Date.now()}${Math.floor(Math.random() * 900 + 100)}`;
const nowUcode = () => `UC${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 9000 + 1000)}`;
const nowOrderNo = () => `DIY${new Date().toISOString().slice(0, 10).replace(/-/g, '')}${Math.floor(Math.random() * 900000 + 100000)}`;

const ok = (data) => ({
  status: null,
  errorMsg: null,
  subStatus: '0',
  subErrorMsg: '',
  data: data || null,
  datas: null
});

const getProductDetail = (productId) => {
  if (!productId) return DEMO_PRODUCTS[0];
  const hit = DEMO_PRODUCTS.find((item) => String(item.productId) === String(productId));
  return hit || DEMO_PRODUCTS[0];
};

export const getDemoResponse = (url, data = {}) => {
  switch (url) {
    case `${BASE}/product/list`:
      return ok({
        curPage: 1,
        totalPage: 1,
        amount: DEMO_PRODUCTS.length,
        total: null,
        records: DEMO_PRODUCTS
      });
    case `${BASE}/product/detail`:
      return ok(getProductDetail(data.productId));
    case `${BASE}/order/create`: {
      const product = getProductDetail(data.productId);
      return ok({
        orderId: nowId(),
        orderNo: nowOrderNo(),
        orderStatus: 'DESIGNING',
        isDiy: product.isDiy,
        standardImageUrl: product.standardImageUrl,
        supportAiGenerate: product.supportAiGenerate,
        needAiReview: product.needAiReview,
        needPay: product.needPay,
        needFaceVerify: product.needFaceVerify,
        faceVerifyRequired: product.faceVerifyRequired
      });
    }
    case `${BASE}/order/submit`:
      return ok({
        orderStatus: 'PROCESSING',
        ucode: nowUcode(),
        needPay: false,
        payAmount: 0
      });
    case `${BASE}/order/queryByUcode`:
      return ok({
        orderId: nowId(),
        orderNo: nowOrderNo(),
        ucode: data.ucode || nowUcode(),
        orderStatus: 'PROCESSING',
        orderStatusDesc: 'Processing',
        imageUrl: 'https://placehold.co/640x400/png?text=Order+Std',
        qrcodeUrl: null,
        customerName: 'Li*',
        addTime: '2026-01-19 16:14:51'
      });
    case `${BASE}/design/diy/upload`:
      return ok({
        designId: nowId(),
        imageUrl: 'https://placehold.co/640x400/png?text=DIY+Upload'
      });
    case `${BASE}/design/review/submit`:
      return ok({
        reviewResult: 'PASS',
        reviewReason: null,
        ucode: nowUcode(),
        qrcodeUrl: null,
        skippedReview: null
      });
    case `${BASE}/design/review/result`:
      return ok({
        reviewResult: 'PASS',
        reviewReason: null
      });
    case `${BASE}/design/ai/generate`:
      return ok({
        designId: nowId(),
        candidates: [
          { candidateId: nowId(), imageUrl: 'https://placehold.co/640x400/png?text=AI+Card+1' },
          { candidateId: nowId(), imageUrl: 'https://placehold.co/640x400/png?text=AI+Card+2' },
          { candidateId: nowId(), imageUrl: 'https://placehold.co/640x400/png?text=AI+Card+3' },
          { candidateId: nowId(), imageUrl: 'https://placehold.co/640x400/png?text=AI+Card+4' }
        ]
      });
    case `${BASE}/design/ai/select`:
      return ok({
        designId: nowId(),
        imageUrl: 'https://placehold.co/640x400/png?text=AI+Selected'
      });
    case `${BASE}/customer/uploadIdCard`:
      return ok(null);
    case `${BASE}/customer/save`:
      return ok(null);
    case `${BASE}/customer/faceRecognition`:
      return ok({
        passed: true,
        similarity: 85,
        message: 'Face verification passed'
      });
    case `${BASE}/customer/info`:
      return ok({
        idCardFront: 'demo/id_front.png',
        idCardBack: 'demo/id_back.png',
        name: 'Li Si',
        gender: 'FEMALE',
        idType: 'PASSPORT',
        idNumber: '320***2345'
      });
    case `${BASE}/ucode/qrcode`:
      return ok({
        qrcodeBase64: null
      });
    case '/bal/fileUpload/img':
      return ok(`demo/upload_${nowId()}.png`);
    default:
      return null;
  }
};
