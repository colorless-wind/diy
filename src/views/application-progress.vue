<style scoped lang="less">
.application-progress-page {
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding-bottom: 24px;
}

.header {
  background: #fff;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 100;

  .back-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 12px;
    border-radius: 50%;
    transition: background 0.2s;
    position: absolute;
    left: 16px;

    &:active {
      background: rgba(0, 0, 0, 0.05);
    }

    svg {
      width: 20px;
      height: 20px;
      fill: #333;
    }
  }

  .header-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    flex: 1;
  }
}

.panel {
  margin: 16px;
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.info-card {
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 12px 0;
    border-bottom: 1px solid #f0f0f0;

    &:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    &:first-child {
      padding-top: 0;
    }
  }

  .left {
    flex: 1;
    min-width: 0;
    font-size: 14px;
    color: #1a1a1a;
    line-height: 1.4;
    word-break: break-all;
  }

  .right {
    flex-shrink: 0;
    font-size: 14px;
    color: #1a1a1a;
    white-space: nowrap;
  }

  .muted {
    color: #666;
  }

  .strong {
    font-weight: 600;
  }

  .status-text {
    font-weight: 600;
    color: #52c41a;
  }
}

.form {
  .label {
    font-size: 14px;
    color: #333;
    font-weight: 600;
    margin-bottom: 8px;
  }

  .input {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 14px;
    color: #333;
    outline: none;
    box-sizing: border-box;
    background: #fff;

    &:focus {
      border-color: #409eff;
    }
  }

  .hint {
    font-size: 12px;
    color: #999;
    line-height: 1.6;
    margin-top: 10px;
  }

  .btn {
    margin-top: 14px;
    width: 100%;
    height: 44px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, #ff9f2f 0%, #fb8c00 100%);

    &:active {
      transform: scale(0.99);
    }

    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
}

.status {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  .title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
  }
  .badge {
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
    background: #f0f7ff;
    color: #1677ff;
  }
}

.timeline {
  margin-top: 14px;
  padding-left: 6px;

  .item {
    position: relative;
    padding-left: 18px;
    padding-bottom: 14px;

    &:last-child {
      padding-bottom: 0;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #d9d9d9;
    }

    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 16px;
      bottom: 0;
      width: 2px;
      background: #f0f0f0;
    }

    &:last-child::after {
      display: none;
    }

    &.active::before {
      background: #ff9f2f;
    }

    .line1 {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 12px;
    }

    .name {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }

    .time {
      font-size: 12px;
      color: #999;
      white-space: nowrap;
    }

    .desc {
      margin-top: 4px;
      font-size: 12px;
      color: #666;
      line-height: 1.6;
    }
  }
}

.error {
  margin-top: 10px;
  font-size: 12px;
  color: #ff4d4f;
}

@media (min-width: 768px) {
  .application-progress-page {
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="application-progress-page">
    <div class="header">
      <div class="back-btn" @click="goBack">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M631.7 256l-256 256 256 256-60.3 60.3-316.3-316.3 316.3-316.3z" />
        </svg>
      </div>
      <div class="header-title">{{ $t('applicationProgress.title') }}</div>
    </div>

    <div v-if="detail" class="panel info-card">
      <div class="row">
        <div class="left">
          {{ $t('applicationProgress.applicationSheet') }}：{{ detail.ucode || '-' }}
        </div>
        <div class="right status-text">
          {{ detail.orderStatusDesc || '-' }}
        </div>
      </div>

      <div class="row">
        <div class="left strong">
          {{ $t('applicationComplete.cardProduct') }}：{{ cardProduct || '-' }}</div>
        <!-- <div class="right muted">{{ detail.city || '-' }}</div> -->
      </div>

      <div class="row">
        <div class="left">
          {{ $t('applicationProgress.applyDate') }}：{{ detail.addTime || '-' }}
        </div>
      </div>

      <!-- <div class="row">
        <div class="left">
          {{ $t('applicationProgress.applyType') }}：{{ detail.applyType || '-' }}
        </div>
      </div> -->
      <div class="row">
        <div class="left">
          {{ $t('userApply.mailingAddress') }}：{{ $route.query.address || '-' }}
        </div>
      </div>
    </div>

    <div v-else class="panel">
      <div class="form">
        <div class="label">{{ $t('applicationProgress.applicationNumber') }}</div>
        <input
          class="input"
          type="text"
          v-model.trim="applicationNumber"
          :placeholder="$t('applicationProgress.applicationNumberPlaceholder')"
          maxlength="32"
        />
        <button class="btn" :disabled="isLoading || !applicationNumber" @click="loadProgress">
          {{ isLoading ? $t('applicationProgress.loading') : $t('applicationProgress.query') }}
        </button>
        <div class="hint">{{ $t('applicationProgress.tip') }}</div>
        <div v-if="errorMsg" class="error">{{ errorMsg }}</div>
      </div>
    </div>

  </div>
</template>

<script>
const STORAGE_PREFIX = 'applicationProgress:';
const STORAGE_LAST_NO = 'lastApplicationNumber';

function formatTime(ts) {
  if (!ts) return '';
  try {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${y}-${m}-${day} ${hh}:${mm}`;
  } catch (e) {
    return '';
  }
}

function formatDateYMD(ts) {
  if (!ts) return '';
  try {
    const d = new Date(ts);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  } catch (e) {
    return '';
  }
}

function guessCityFromAddress(address) {
  if (!address) return '';
  // 兼容 “北京市...”/“广东省...”/“内蒙古自治区...”
  const m = String(address).match(/^(.{2,8}?)(市|省|自治区)/);
  if (m && m[1]) return m[1];
  // fallback: 取前2-3个字
  return String(address).slice(0, 3).replace(/(市|省)$/, '');
}
import diyCardApi from '@/api/diycard';
export default {
  name: 'ApplicationProgress',
  data() {
    return {
      applicationNumber: '',
      cardProduct: '',
      isLoading: false,
      errorMsg: '',
      progress: null,
      detail: null
    };
  },
  mounted() {
    this.applicationNumber = this.$route.query.ucode;
    this.queryOrderReq();
    this.queryProductDetailReq();
    // this.detail = this.makeDetailFromQuery(q);
    // if (this.applicationNumber) this.loadProgress();
  },
  methods: {
    // 查询订单详情
    queryOrderReq() {
      diyCardApi.order.queryByUcode({
        ucode: this.$route.query.ucode
      }).then(res => {
        console.log(res, 'res')
        this.detail = res.data;
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"orderId":"9c2f6caaf666423abdfe2e80e75a7d39","orderNo":"DIY20260119000006","ucode":"UC20260119000006","orderStatus":"PROCESSING","orderStatusDesc":"办理中","imageUrl":"/images/products/credit_coop_001_std.jpg","qrcodeUrl":null,"customerName":"李*","addTime":"2026-01-19 16:14:51"},"datas":null}
    },
    // 查询产品详情
    queryProductDetailReq() {
      diyCardApi.product.detail({
        productId: this.$route.query.cid
      }).then(res => {
        console.log(res, 'res')
        this.cardProduct = res.data.productName;
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"productId":"8","productCode":"CREDIT_COOP_001","productName":"迪士尼联名信用卡","cardType":"CREDIT","cardLevel":"STANDARD","cardOrg":"UNIONPAY","bankName":"中国农业银行","imageUrl":"/images/products/credit_coop_001.jpg","templateUrl":null,"annualFee":150,"annualFeeFree":"首年免年费，刷卡6次免次年年费","features":["迪士尼主题卡面","乐园门票优惠","周边商品折扣","专属积分兑换"],"benefits":["迪士尼乐园门票9折","快速通道优惠","周边商品8折","积分兑换迪士尼礼品"],"applyCondition":"年满18周岁，迪士尼粉丝优先","isDiy":false,"standardImageUrl":"/images/products/credit_coop_001_std.jpg","supportAiGenerate":false,"needAiReview":false,"needPay":false,"payAmount":0,"needFaceVerify":false,"faceVerifyRequired":false},"datas":null}
    },
    goBack() {
      this.$router.back();
    },
    makeDetailFromQuery(q) {
      if (!q) return null;
      const applicationNumber = q.applicationNumber || '';
      const cardProduct = q.cardProduct || q.productName || '';
      const address = q.address || '';
      const city = q.city || guessCityFromAddress(address) || '';
      const applyDate = q.applyDate || q.applicationDate || formatDateYMD(Date.now());
      const applyType = q.applyType || this.$t('applicationProgress.defaultApplyType');
      const statusText = q.statusText || this.$t('applicationProgress.statusReceived');

      // 有任何有效字段就渲染卡片（避免空对象）
      const hasAny =
        applicationNumber || cardProduct || city || applyDate || applyType || statusText;
      if (!hasAny) return null;

      return {
        applicationNumber,
        cardProduct,
        city,
        applyDate,
        applyType,
        statusText
      };
    },
    makeDefaultProgress(applicationNumber) {
      const now = Date.now();
      return {
        applicationNumber,
        status: 'RECEIVED',
        statusText: this.$t('applicationProgress.statusReceived'),
        activeIndex: 1,
        updatedAt: now,
        cardProduct: (this.detail && this.detail.cardProduct) || this.$t('applicationProgress.defaultCardProduct'),
        city: (this.detail && this.detail.city) || '',
        applyDate: (this.detail && this.detail.applyDate) || formatDateYMD(now),
        applyType: (this.detail && this.detail.applyType) || this.$t('applicationProgress.defaultApplyType'),
        timeline: [
          {
            name: this.$t('applicationProgress.stepSubmitted'),
            time: formatTime(now - 2 * 60 * 1000),
            desc: this.$t('applicationProgress.stepSubmittedDesc')
          },
          {
            name: this.$t('applicationProgress.stepReviewing'),
            time: formatTime(now),
            desc: this.$t('applicationProgress.stepReviewingDesc')
          },
          {
            name: this.$t('applicationProgress.stepResult'),
            time: '',
            desc: this.$t('applicationProgress.stepResultDesc')
          }
        ]
      };
    },
    readLocalProgress(applicationNumber) {
      const raw = localStorage.getItem(`${STORAGE_PREFIX}${applicationNumber}`);
      if (!raw) return null;
      try {
        return JSON.parse(raw);
      } catch (e) {
        return null;
      }
    },
    saveLocalProgress(progress) {
      try {
        localStorage.setItem(STORAGE_LAST_NO, progress.applicationNumber);
        localStorage.setItem(`${STORAGE_PREFIX}${progress.applicationNumber}`, JSON.stringify(progress));
      } catch (e) {
        // ignore storage errors
      }
    },
    async loadProgress() {
      this.errorMsg = '';
      if (!this.applicationNumber) return;

      this.isLoading = true;
      try {
        // 当前项目暂无后端“进度查询”接口，这里先用 localStorage 兜底展示。
        // 后续如有接口，只需要在这里调用并把返回结果映射到 progress 结构即可。
        const local = this.readLocalProgress(this.applicationNumber);
        const progress = local || this.makeDefaultProgress(this.applicationNumber);
        this.progress = progress;
        // 同步详情卡片：优先 query，其次 localStorage/progress
        if (!this.detail) {
          this.detail = {
            applicationNumber: progress.applicationNumber,
            statusText: progress.statusText,
            cardProduct: progress.cardProduct,
            city: progress.city,
            applyDate: progress.applyDate,
            applyType: progress.applyType
          };
        } else {
          // 若 query 缺字段，用 progress 补齐
          this.detail = {
            ...this.detail,
            applicationNumber: this.detail.applicationNumber || progress.applicationNumber,
            statusText: this.detail.statusText || progress.statusText,
            cardProduct: this.detail.cardProduct || progress.cardProduct,
            city: this.detail.city || progress.city,
            applyDate: this.detail.applyDate || progress.applyDate,
            applyType: this.detail.applyType || progress.applyType
          };
        }
        if (!local) this.saveLocalProgress(progress);
      } catch (e) {
        this.errorMsg = this.$t('applicationProgress.queryFailed');
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>

