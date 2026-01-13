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
      background: #e53935;
      color: #fff;
      box-shadow: 0 4px 12px rgba(229, 57, 53, 0.3);
    }
    
    &.btn-secondary {
      background: #fff;
      color: #e53935;
      border: 1px solid #e53935;
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
      <div class="header-icons">
        <div class="icon" @click="showCustomerService">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"/>
            <path d="M464 336a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm272 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm-272 352c0-88.4 71.6-160 160-160s160 71.6 160 160H464z"/>
          </svg>
        </div>
        <div class="icon" @click="showMenu">
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M128 256h768v64H128zm0 192h768v64H128zm0 192h768v64H128z"/>
          </svg>
        </div>
      </div>
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
      <button class="btn btn-primary" @click="goBack">{{ $t('applicationComplete.return') }}</button>
      <button class="btn btn-secondary" @click="checkProgress">{{ $t('applicationComplete.checkProgress') }}</button>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';

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
    this.initData();
    // 延迟生成二维码，确保数据已加载
    this.$nextTick(() => {
      setTimeout(() => {
        this.generateQRCode();
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
    initData() {
      // 从路由参数或localStorage获取数据
      const query = this.$route.query;
      
      // 申请单号（生成一个示例单号）
      this.applicationNumber = query.applicationNumber || this.generateApplicationNumber();
      
      // 获取卡片信息
      const cardId = query.cardId;
      const isDIY = query.type === 'diy';
      
      if (isDIY) {
        this.cardImageUrl = localStorage.getItem('imgResult') || '';
        const diyCardId = localStorage.getItem('diyCardId') || cardId || '1';
        this.loadCardInfo(diyCardId, true);
      } else {
        this.loadCardInfo(cardId || '1', false);
      }
      
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
    generateQRCode() {
      // 生成包含卡面信息的二维码
      // 二维码内容可以是卡面图片的URL或卡面信息的JSON字符串
      const qrcodeData = {
        type: 'cardInfo',
        // cardImage: this.cardImageUrl,
        cardProduct: this.cardProduct,
        applicationNumber: this.applicationNumber,
        timestamp: Date.now()
      };
      
      const qrcodeContent = JSON.stringify(qrcodeData);
      
      // 如果卡面图片是base64或本地路径，可以转换为可访问的URL
      // 这里使用JSON字符串作为二维码内容
      // 实际应用中，可能需要将图片上传到服务器后获取URL
      
      this.$nextTick(() => {
        const qrcodeElement = document.getElementById('qrcode');
        if (qrcodeElement) {
          qrcodeElement.innerHTML = '';
          console.log(qrcodeContent,'qrcodeContent')
          console.log(this.qrcode,'this.qrcode')
          console.log(qrcodeElement,'qrcodeElement')
          try {
            this.qrcode = new QRCode(qrcodeElement, {
              text: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
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
    goBack() {
      this.$router.push('/card-selection');
    },
    checkProgress() {
      // 跳转到查询办卡进度页面
      // 这里可以跳转到一个新的进度查询页面，或者显示提示
      // this.$toasted.show(this.$t('applicationComplete.progressTip'), {
      //   theme: 'toasted-primary',
      //   position: 'center',
      //   duration: 2000
      // });
      // 或者跳转到进度查询页面
      // this.$router.push('/application-progress');
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