<style scoped lang="less">
.card-selection-page {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #f5f7fa 0%, #ffffff 100%);
  padding-bottom: 40px;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.header {
  background: #fff;
  padding: 20px 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  
  .logo {
    width: 120px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
  }
  
  .language-switch {
    position: absolute;
    top: 15px;
    right: 20px;
    z-index: 100;
  }
  
  .dropdown-btn {
    background: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: #333;
    transition: all 0.3s;
    
    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 120px;
    margin-top: 5px;
    overflow: hidden;
    
    div {
      padding: 10px 15px;
      cursor: pointer;
      font-size: 14px;
      transition: background 0.2s;
      
      &:hover {
        background: #f5f7fa;
      }
      
      &.active {
        background: #409EFF;
        color: white;
      }
    }
  }
}

.diy-banner {
  margin: 20px 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 24px 20px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
    transition: transform 0.5s;
  }
  
  &:active {
    transform: scale(0.98);
    
    &::before {
      transform: scale(1.1);
    }
  }
  
  .banner-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .banner-left {
    flex: 1;
    
    .banner-title {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .banner-desc {
      font-size: 14px;
      opacity: 0.9;
      line-height: 1.5;
    }
  }
  
  .banner-icon {
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    margin-left: 16px;
  }
}

.preset-cards-section {
  margin: 32px 16px 0;
  
  .section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
    padding-left: 4px;
  }
  
  .cards-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .card-item {
    background: #fff;
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s;
    cursor: pointer;
    
    &:active {
      transform: scale(0.98);
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
      
      .category-tag {
        background: linear-gradient(135deg, #ffa726 0%, #fb8c00 100%);
        color: #fff;
        font-size: 12px;
        padding: 4px 12px;
        border-radius: 12px;
        font-weight: 500;
        white-space: nowrap;
        margin-right: 12px;
      }
    }
    
    .card-content {
      display: flex;
      align-items: center;
      gap: 16px;
      
      .card-image {
        width: 80px;
        height: 76px;
        border-radius: 8px;
        object-fit: cover;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid #dfdfdf;
      }
      
      .card-info {
        flex: 1;
        min-width: 0;
        
        .card-title {
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          margin-bottom: 8px;
          line-height: 1.4;
        }
        
        .card-desc {
          font-size: 13px;
          color: #666;
          line-height: 1.5;
          margin-bottom: 12px;
        }
      }
      
      .apply-btn {
        background: #e53935;
        color: #fff;
        border: none;
        border-radius: 20px;
        padding: 10px 24px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s;
        white-space: nowrap;
        flex-shrink: 0;
        box-shadow: 0 2px 8px rgba(229, 57, 53, 0.3);
        
        &:active {
          transform: scale(0.95);
          box-shadow: 0 1px 4px rgba(229, 57, 53, 0.4);
        }
      }
    }
  }
}

@media (min-width: 768px) {
  .card-selection-page {
    max-width: 768px;
    margin: 0 auto;
  }
  
  .preset-cards-section .cards-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}
</style>

<template>
  <div class="card-selection-page">
    <div class="header">
      <img :src="logoImage" class="logo" alt="Logo">
      <div class="language-switch" ref="languageSwitch">
        <button @click="toggleDropdown" class="dropdown-btn">{{ currentLanguage }} ▼</button>
        <div v-show="dropdownOpen" class="dropdown-menu">
          <div @click="switchLanguage('zh-CN')" :class="{ active: $i18n.locale === 'zh-CN' }">中文</div>
          <div @click="switchLanguage('en-US')" :class="{ active: $i18n.locale === 'en-US' }">English</div>
        </div>
      </div>
    </div>

    <!-- DIY Banner -->
    <!-- <div class="diy-banner" @click="goToDIY">
      <div class="banner-content">
        <div class="banner-left">
          <div class="banner-title">{{ $t('cardSelection.diyBannerTitle') }}</div>
          <div class="banner-desc">{{ $t('cardSelection.diyBannerDesc') }}</div>
        </div>
        <div class="banner-icon">🎨</div>
      </div>
    </div> -->

    <!-- Preset Cards Section -->
    <div class="preset-cards-section">
      <!-- <div class="section-title">{{ $t('cardSelection.presetCardsTitle') }}</div> -->
      <div class="cards-list">
        <div 
          v-for="(card, index) in presetCards" 
          :key="index" 
          class="card-item"
        >
          <div class="card-header">
            <span class="category-tag" v-if="card.category">{{ card.category }}</span>
            <span class="category-tag" v-if="card.category2">{{ card.category2 }}</span>
          </div>
          <div class="card-content">
            <img :src="card.image" :alt="card.title" class="card-image">
            <div class="card-info">
              <div class="card-title">{{ card.title }}</div>
              <div class="card-desc">{{ card.description }}</div>
            </div>
            <button class="apply-btn" @click.stop="goToPresetCard(card)">
              {{ $t('cardSelection.apply') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardSelection',
  data() {
    return {
      dropdownOpen: false,
      presetCards: []
    };
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale === 'zh-CN' ? '中文' : 'English';
    },
    logoImage() {
      return this.$i18n.locale === 'zh-CN' 
        ? require('../assets/images/img/logo.png') 
        : require('../assets/images/img/logo1.png');
    }
  },
  watch: {
    '$i18n.locale'() {
      this.initCardData();
    }
  },
  mounted() {
    this.initCardData();
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(e) {
      if (this.dropdownOpen && !this.$refs.languageSwitch.contains(e.target)) {
        this.dropdownOpen = false;
      }
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem('locale', lang);
      this.dropdownOpen = false;
      this.initCardData();
    },
    initCardData() {
      const locale = this.$i18n.locale;
      const isZh = locale === 'zh-CN';
      
      this.presetCards = [
        {
          id: 1,
          category: isZh ? 'DIY' : 'DIY',
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
            ],
            requirements: isZh ? [
              '年满18周岁',
              '有稳定收入来源',
              '信用记录良好'
            ] : [
              'Age 18 or above',
              'Stable income source',
              'Good credit history'
            ]
          }
        },
        {
          id: 2,
          category: isZh ? '' : '',
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
            ],
            requirements: isZh ? [
              '年满18周岁',
              '有稳定收入来源',
              '信用记录良好'
            ] : [
              'Age 18 or above',
              'Stable income source',
              'Good credit history'
            ]
          }
        },
        {
          id: 3,
          category: isZh ? 'DIY' : 'DIY',
          category2: isZh ? 'AIGC' : 'AIGC',
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
            ],
            requirements: isZh ? [
              '年满18周岁',
              '有稳定收入来源',
              '信用记录良好'
            ] : [
              'Age 18 or above',
              'Stable income source',
              'Good credit history'
            ]
          }
        }
      ];
    },
    goToDIY() {
      this.$router.push({
        path: '/home'
      });
    },
    goToPresetCard(card) {
      this.$router.push({
        path: '/preset-card',
        query: {
          id: card.id
        }
      });
    }
  }
};
</script>