<style scoped lang="less">
.preset-card-page {
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 40px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
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
    flex: 1;
  }
}

.card-detail-section {
  margin: 20px 16px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  .category-tag {
    display: inline-block;
    background: linear-gradient(135deg, #ffa726 0%, #fb8c00 100%);
    color: #fff;
    font-size: 12px;
    padding: 6px 14px;
    border-radius: 12px;
    font-weight: 500;
    margin-bottom: 16px;
  }
  
  .card-image-large {
    width: 100%;
    max-width: 400px;
    height: auto;
    border-radius: 12px;
    margin: 0 auto 24px;
    display: block;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
  
  .card-title {
    font-size: 22px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 12px;
  }
  
  .card-description {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 24px;
  }
  
  .benefits-section {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
    
    .section-title {
      font-size: 16px;
      font-weight: 600;
      color: #1a1a1a;
      margin-bottom: 16px;
    }
    
    .benefits-list {
      list-style: none;
      padding: 0;
      margin: 0;
      
      li {
        padding: 12px 0;
        padding-left: 28px;
        position: relative;
        font-size: 14px;
        color: #333;
        line-height: 1.6;
        
        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 12px;
          width: 20px;
          height: 20px;
          background: #4caf50;
          color: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
  }
}

.application-form {
  margin: 20px 16px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  
  .form-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
    
    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: #333;
      margin-bottom: 8px;
      
      .required {
        color: #e53935;
        margin-left: 4px;
      }
    }
    
    input, select, textarea {
      width: 100%;
      padding: 12px 16px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
      color: #333;
      background: #fff;
      box-sizing: border-box;
      transition: border-color 0.3s;
      
      &:focus {
        outline: none;
        border-color: #409EFF;
      }
      
      &::placeholder {
        color: #999;
      }
    }
    
    textarea {
      min-height: 100px;
      resize: vertical;
    }
    
    .error-message {
      color: #e53935;
      font-size: 12px;
      margin-top: 4px;
    }
  }
  

}

    .submit-btn {
      width: 90%;
      padding: 14px;
      background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s;
      margin-top: 8px;
      margin-left: 5%;
      box-shadow: 0 4px 12px rgba(229, 57, 53, 0.3);
  
      &:active {
        transform: scale(0.98);
      }
  
      &:disabled {
        background: #ccc;
        cursor: not-allowed;
        box-shadow: none;
      }
    }

@media (min-width: 768px) {
  .preset-card-page {
    max-width: 768px;
    margin: 0 auto;
  }
  
  .card-detail-section {
    .card-image-large {
      max-width: 500px;
    }
  }
}
</style>

<template>
  <div class="preset-card-page">
    <div class="header">
      <div class="back-btn" @click="goBack">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M631.7 256l-256 256 256 256-60.3 60.3-316.3-316.3 316.3-316.3z"/>
        </svg>
      </div>
      <div class="header-title">{{ $t('presetCard.title') }}</div>
    </div>

    <div v-if="cardData" class="card-detail-section">
      <span class="category-tag">{{ cardData.category }}</span>
      <img :src="cardData.image" :alt="cardData.title" class="card-image-large">
      <h1 class="card-title">{{ cardData.title }}</h1>
      <p class="card-description">{{ cardData.description }}</p>
      
      <div class="benefits-section">
        <div class="section-title">{{ $t('presetCard.benefits') }}</div>
        <ul class="benefits-list">
          <li v-for="(benefit, index) in cardData.details.benefits" :key="index">
            {{ benefit }}
          </li>
        </ul>
      </div>
    </div>
<button class="submit-btn" @click="submitApplication" :disabled="isSubmitting">
  {{ isSubmitting ? $t('presetCard.submitting') : $t('presetCard.submit') }}
</button>
 
  </div>
</template>

<script>
export default {
  name: 'PresetCard',
  data() {
    return {
      cardData: null,
      formData: {
        fullName: '',
        email: '',
        phone: '',
        idNumber: '',
        address: ''
      },
      errors: {},
      isSubmitting: false,
      cardId: null
    };
  },
  computed: {
    isFormValid() {
      return this.formData.fullName && 
             this.formData.email && 
             this.formData.phone && 
             this.formData.idNumber &&
             !this.errors.fullName &&
             !this.errors.email &&
             !this.errors.phone &&
             !this.errors.idNumber;
    }
  },
  watch: {
    '$i18n.locale'() {
      if (this.cardId) {
        this.loadCardData();
      }
    }
  },
  mounted() {
    this.cardId = parseInt(this.$route.query.id);
    this.loadCardData();
  },
  methods: {
    getPresetCardsData() {
      const locale = this.$i18n.locale;
      const isZh = locale === 'zh-CN';
      
      return [
        {
          id: 1,
          category: isZh ? '畅行欧洲' : 'Travel Europe',
          title: isZh ? '欧洲旅行信用卡' : 'Europe Travel Credit Card',
          description: isZh ? '欧洲消费1.5%返现无上限' : '1.5% cashback on European spending, no upper limit',
          image: require('../assets/images/img/banner.png'),
          details: {
            benefits: isZh ? [
              '欧洲消费1.5%返现，无上限',
              '机场贵宾厅免费使用',
              '旅行保险保障'
            ] : [
              '1.5% cashback on European spending, no limit',
              'Free airport lounge access',
              'Travel insurance coverage'
            ]
          }
        },
        {
          id: 2,
          category: isZh ? '十二生肖' : 'Chinese Zodiac',
          title: isZh ? '生肖卡' : 'Zodiac Card',
          description: isZh ? '铭刻文化,彰显自信' : 'Engrave culture, show confidence',
          image: require('../assets/images/img/banner1.png'),
          details: {
            benefits: isZh ? [
              '独特生肖设计',
              '文化纪念价值',
              '专属权益'
            ] : [
              'Unique zodiac design',
              'Cultural commemorative value',
              'Exclusive benefits'
            ]
          }
        },
        {
          id: 3,
          category: isZh ? '普惠让利' : 'Inclusive Benefits',
          title: isZh ? '牡丹超惠龙' : 'Peony Super Benefit Dragon Card',
          description: isZh ? '硬核超惠,真情回馈' : 'Hardcore super benefits, genuine rewards',
          image: require('../assets/images/img/banner2.png'),
          details: {
            benefits: isZh ? [
              '超值返现优惠',
              '消费积分翻倍',
              '专属商户折扣'
            ] : [
              'Super value cashback',
              'Double points on spending',
              'Exclusive merchant discounts'
            ]
          }
        }
      ];
    },
    loadCardData() {
      const presetCardsData = this.getPresetCardsData();
      this.cardData = presetCardsData.find(card => card.id === this.cardId);
      
      if (!this.cardData) {
        this.$router.push('/card-selection');
      }
    },
    goBack() {
      this.$router.back();
    },
    validateField(fieldName) {
      this.errors[fieldName] = '';
      
      switch (fieldName) {
        case 'fullName':
          if (!this.formData.fullName.trim()) {
            this.errors.fullName = this.$t('presetCard.errors.fullNameRequired');
          }
          break;
        case 'email':
          if (!this.formData.email.trim()) {
            this.errors.email = this.$t('presetCard.errors.emailRequired');
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
            this.errors.email = this.$t('presetCard.errors.emailInvalid');
          }
          break;
        case 'phone':
          if (!this.formData.phone.trim()) {
            this.errors.phone = this.$t('presetCard.errors.phoneRequired');
          } else if (!/^[\d\s\-\+\(\)]+$/.test(this.formData.phone)) {
            this.errors.phone = this.$t('presetCard.errors.phoneInvalid');
          }
          break;
        case 'idNumber':
          if (!this.formData.idNumber.trim()) {
            this.errors.idNumber = this.$t('presetCard.errors.idNumberRequired');
          }
          break;
      }
    },
    async submitApplication() {
      
      this.isSubmitting = true;
      
      try {
        // 这里可以调用实际的API
        // await http.post('/api/card-application', this.formData);
        
        // 模拟API调用
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 跳转到结果页面
        this.$router.push({
          path: '/user-apply',
          query: {
            type: 'preset',
            cardId: this.cardData.id
          }
        });
      } catch (error) {
        console.error('提交申请失败:', error);
        alert(this.$t('presetCard.submitError'));
      } finally {
        this.isSubmitting = false;
      }
    }
  }
};
</script>