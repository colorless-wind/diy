<style scoped lang="less">
.application-complete-page {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  padding-bottom: 120px;
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
  
  .header-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
    flex: 1;
  }
  
  .header-icons {
    position: absolute;
    right: 16px;
    display: flex;
    gap: 12px;
    align-items: center;
    
    .icon {
      width: 24px;
      height: 24px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
        width: 20px;
        height: 20px;
        fill: #666;
      }
    }
  }
}

.success-section {
  padding: 20px 16px 10px;
  text-align: center;
  
  .success-icon-wrapper {
    position: relative;
    display: inline-block;
    margin-bottom: 10px;
    
    .elephant-icon {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 auto;
      
      .elephant-emoji {
        font-size: 80px;
        line-height: 1;
      }
      
      .checkmark {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 32px;
        height: 32px;
        background: #4caf50;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #fff;
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
        
        svg {
          width: 18px;
          height: 18px;
          fill: #fff;
        }
      }
    }
  }
  
  .success-text {
    font-size: 24px;
    font-weight: 600;
    color: #4caf50;
    margin-bottom: 10px;
  }
  
  .success-message {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
    text-align: left;
    padding: 0 20px;
    // margin-bottom: 30px;
  }
}

.application-details {
  margin: 0 16px 10px;
  background: #fff;
  border-radius: 12px;
  padding: 0 20px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  .detail-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 5px 0;
    border-bottom: 1px solid #f0f0f0;
    
    &:last-child {
      border-bottom: none;
    }
    
    .label {
      font-size: 14px;
      color: #666;
      width: 80px;
      flex-shrink: 0;
    }
    
    .value {
      font-size: 14px;
      color: #1a1a1a;
      font-weight: 500;
      flex: 1;
      text-align: right;
      word-break: break-all;
    }
  }
}

.qrcode-section {
  margin: 0 16px 30px;
  background: #fff;
  border-radius: 12px;
  padding: 4px;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  text-align: center;
  
  .qrcode-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
  }
  
  .qrcode-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12px;
    
    #qrcode {
      padding: 12px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .qrcode-tip {
    font-size: 12px;
    color: #999;
    margin-top: 8px;
  }
}

.action-buttons {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f5f5f5;
  padding: 20px 16px;
  padding-bottom: calc(20px + env(safe-area-inset-bottom));
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  .btn {
    width: 100%;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:active {
      transform: scale(0.98);
    }
    
    &.btn-primary {
      background: #ff9f2f;
      color: #fff;
      box-shadow: 0 4px 12px rgba(229, 57, 53, 0.3);
    }
    
    &.btn-secondary {
      background: #fff;
      color: #ff9f2f;
      border: 1px solid #ff9f2f;
    }
  }
}

@media (min-width: 768px) {
  .application-complete-page {
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="application-complete-page">
    <div class="header">
      <div class="header-title">{{ $t('applicationComplete.title') }}</div>
    </div>

    <div class="success-section">
      <div class="success-icon-wrapper">
        <div class="elephant-icon">
          <span class="elephant-emoji">🐘</span>
          <div class="checkmark">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="success-text">{{ $t('applicationComplete.success') }}</div>
      <div class="success-message">{{ $t('applicationComplete.successMessage') }}</div>
    </div>

    <div class="application-details">
      <div class="detail-item">
        <span class="label">{{ $t('applicationComplete.applicationNumber') }}</span>
        <span class="value">{{ applicationNumber }}</span>
      </div>
      <div class="detail-item">
        <span class="label">{{ $t('applicationComplete.cardProduct') }}</span>
        <span class="value">{{ cardProduct }}</span>
      </div>
      <div class="detail-item">
        <span class="label">{{ $t('applicationComplete.mailingAddress') }}</span>
        <span class="value">{{ mailingAddress }}</span>
      </div>
    </div>

    <div class="qrcode-section">
      <!-- <div class="qrcode-title">{{ $t('applicationComplete.qrcodeTitle') }}</div> -->
      <div class="qrcode-wrapper">
        <div id="qrcode"></div>
      </div>
      <div class="qrcode-tip">{{ $t('applicationComplete.qrcodeTip') }}</div>
    </div>

    <div class="action-buttons">
      <button class="btn btn-primary" @click="goBack">{{ $t('applicationComplete.returnHome') }}</button>
      <button class="btn btn-secondary" @click="checkProgress">{{ $t('applicationComplete.checkProgress') }}</button>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import md5 from 'js-md5';
import diyCardApi from '@/api/diycard';
import Vue from 'vue';
import Toasted from 'vue-toasted';
export default {
  name: 'ApplicationComplete',
  data() {
    return {
      applicationNumber: '',
      cardProduct: '',
      mailingAddress: '',
      cardImageUrl: '',
      qrcode: null
    };
  },
  mounted() {
    // this.initData();
    // 延迟生成二维码，确保数据已加载
    this.$nextTick(() => {
      setTimeout(() => {
        this.generateQRCode();
        this.queryOrderReq();
        this.queryProductDetailReq();
        this.mailingAddress = this.$route.query.address || this.$t('applicationComplete.defaultAddress');
        this.queryCustomerInfo(); // 页面暂未用到
      }, 300);
    });
  },
  beforeDestroy() {
    if (this.qrcode) {
      // 清理二维码实例
      const qrcodeElement = document.getElementById('qrcode');
      if (qrcodeElement) {
        qrcodeElement.innerHTML = '';
      }
    }
  },
  methods: {
    // 查询订单详情
    queryOrderReq(){
      diyCardApi.order.queryByUcode({
        ucode: this.$route.query.ucode
      }).then(res => {
        console.log(res,'res')
        this.applicationNumber = res.data.orderNo;
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"orderId":"9c2f6caaf666423abdfe2e80e75a7d39","orderNo":"DIY20260119000006","ucode":"UC20260119000006","orderStatus":"PROCESSING","orderStatusDesc":"办理中","imageUrl":"/images/products/credit_coop_001_std.jpg","qrcodeUrl":null,"customerName":"李*","addTime":"2026-01-19 16:14:51"},"datas":null}
    },
    // 查询产品详情
    queryProductDetailReq(){
      diyCardApi.product.detail({
        productId: this.$route.query.cid
      }).then(res => {
        console.log(res,'res')
        this.cardProduct = res.data.productName;
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"productId":"8","productCode":"CREDIT_COOP_001","productName":"迪士尼联名信用卡","cardType":"CREDIT","cardLevel":"STANDARD","cardOrg":"UNIONPAY","bankName":"中国农业银行","imageUrl":"/images/products/credit_coop_001.jpg","templateUrl":null,"annualFee":150,"annualFeeFree":"首年免年费，刷卡6次免次年年费","features":["迪士尼主题卡面","乐园门票优惠","周边商品折扣","专属积分兑换"],"benefits":["迪士尼乐园门票9折","快速通道优惠","周边商品8折","积分兑换迪士尼礼品"],"applyCondition":"年满18周岁，迪士尼粉丝优先","isDiy":false,"standardImageUrl":"/images/products/credit_coop_001_std.jpg","supportAiGenerate":false,"needAiReview":false,"needPay":false,"payAmount":0,"needFaceVerify":false,"faceVerifyRequired":false},"datas":null}
    },
    // 查询客户信息
    queryCustomerInfo(){
      return diyCardApi.customer.info({
        orderId: this.$route.query.oid,
      }).then(res => {
        console.log(res, 'res')
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"idCardFront":"group1/M00/02/45/CqU8dGlt6AKAAM4gAATZ873SDXI394.jpg","idCardBack":"group1/M00/02/45/CqU8dGlt6AKAMuOeAAbJHUH85d0138.png","name":"李四","gender":"FEMALE","idType":"PASSPORT","idNumber":"320***2345"},"datas":null}
    },
    // 未调通 前端实现U码展示即可 已弃用
    getUcodeReq() {
      return diyCardApi.ucode.qrcode({
        orderId: this.$route.query.oid,
        // ucode: this.$route.query.ucode,
      }).then(res => {
        console.log(res,'res')
        this.qrcode = res.data.qrcodeBase64;
      })
    },
    generateQRCode() {
      // 生成包含卡面信息的二维码
      this.$nextTick(() => {
        const qrcodeElement = document.getElementById('qrcode');
        if (qrcodeElement) {
          qrcodeElement.innerHTML = '';
          console.log(qrcodeElement, 'qrcodeElement')
          console.log(this.$route.query.ucode, 'this.$route.query.ucode')
          try {
            this.qrcode = new QRCode(qrcodeElement, {
              text: this.$route.query.ucode,
              width: 200,
              height: 200,
              colorDark: '#000000',
              colorLight: '#ffffff',
              correctLevel: 2 // 错误纠正级别：L(1), M(0), Q(3), H(2)
            });
          } catch (error) {
            console.error('生成二维码失败:', error);
            // 如果生成失败，显示错误提示
            qrcodeElement.innerHTML = '<div style="padding: 20px; color: #999;">二维码生成失败</div>';
          }
        }
      });
    },
    initData() {
      // 从路由参数或localStorage获取数据
      const query = this.$route.query;
      
      // 申请单号（生成一个示例单号）
      this.applicationNumber = ''//query.applicationNumber || this.generateApplicationNumber();
      try {
        localStorage.setItem('lastApplicationNumber', this.applicationNumber);
      } catch (e) {}
      
      // 获取卡片信息
      const cardId = query.cardId;
      const isDIY = query.type === 'diy';
      
      // if (isDIY) {
      //   this.cardImageUrl = localStorage.getItem('imgResult') || '';
      //   const diyCardId = localStorage.getItem('diyCardId') || cardId || '1';
      //   this.loadCardInfo(diyCardId, true);
      // } else {
      //   this.loadCardInfo(cardId || '1', false);
      // }
      this.cardProduct = ''
      // 邮寄地址（从表单数据或localStorage获取）
      const formData = JSON.parse(localStorage.getItem('applicationFormData') || '{}');
      this.mailingAddress = formData.address || query.address || this.$t('applicationComplete.defaultAddress');
    },
    loadCardInfo(cardId, isDIY) {
      const presetCardsData = this.getPresetCardsData();
      const locale = this.$i18n.locale;
      const isZh = locale === 'zh-CN';
      
      if (isDIY) {
        const baseCard = presetCardsData.find(card => card.id === parseInt(cardId));
        if (baseCard) {
          this.cardProduct = baseCard.title;
          this.cardImageUrl = localStorage.getItem('imgResult') || baseCard.image;
        } else {
          this.cardProduct = isZh ? 'DIY定制信用卡' : 'DIY Custom Credit Card';
          this.cardImageUrl = localStorage.getItem('imgResult') || '';
        }
      } else {
        const card = presetCardsData.find(card => card.id === parseInt(cardId));
        if (card) {
          this.cardProduct = card.title;
          this.cardImageUrl = card.image;
        } else {
          this.cardProduct = isZh ? '欧洲旅行信用卡' : 'Europe Travel Credit Card';
        }
      }
    },
    getPresetCardsData() {
      const locale = this.$i18n.locale;
      const isZh = locale === 'zh-CN';
      
      return [
        {
          id: 1,
          title: isZh ? '欧洲旅行信用卡' : 'Europe Travel Credit Card',
          image: require('../assets/images/img/banner.png')
        },
        {
          id: 2,
          title: isZh ? '生肖卡' : 'Zodiac Card',
          image: require('../assets/images/img/banner1.png')
        },
        {
          id: 3,
          title: isZh ? '牡丹超惠龙' : 'Peony Super Benefit Dragon Card',
          image: require('../assets/images/img/banner2.png')
        }
      ];
    },
    generateApplicationNumber() {
      // 生成申请单号：格式为 02002026012700762
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const random = String(Math.floor(Math.random() * 100000)).padStart(5, '0');
      return `020020${year}${month}${day}${random}`;
    },
    
    goBack() {
      this.$router.push('/card-selection');
    },
    checkProgress() {
      // 跳转到查询办卡进度页面
      this.$router.push({
        path: '/application-progress',
        query: {
          ...this.$route.query,
          applicationNumber: this.applicationNumber
        }
      });
    },
    showCustomerService() {
      // 显示客服
      this.$toasted.show(this.$t('applicationComplete.customerServiceTip'), {
        theme: 'toasted-primary',
        position: 'center',
        duration: 2000
      });
    },
    showMenu() {
      // 显示菜单
      // 可以显示一个下拉菜单
    }
  }
};
</script>