<style scoped lang="less">
.terms-page {
  width: 100%;
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 40px;
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

.content-section {
  margin: 20px 16px;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  .content-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 20px;
    text-align: center;
  }

  .content-body {
    font-size: 15px;
    line-height: 1.8;
    color: #333;

    h2 {
      font-size: 18px;
      font-weight: 600;
      color: #1a1a1a;
      margin: 24px 0 16px 0;
    }

    h3 {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin: 20px 0 12px 0;
    }

    p {
      margin-bottom: 16px;
    }

    ul, ol {
      margin-bottom: 16px;
      padding-left: 24px;
    }

    li {
      margin-bottom: 8px;
    }
  }
}

@media (min-width: 768px) {
  .terms-page {
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>

<template>
  <div class="terms-page">
    <div class="header">
      <div class="back-btn" @click="goBack">
        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path d="M631.7 256l-256 256 256 256-60.3 60.3-316.3-316.3 316.3-316.3z"/>
        </svg>
      </div>
      <div class="header-title">{{ $t('terms.title') }}</div>
    </div>

    <div class="content-section">
      <h1 class="content-title">{{ $t('terms.title') }}</h1>
      <div class="content-body" v-html="$t('terms.content')"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsOfService',
  methods: {
    goBack() {
      this.$router.back();
    }
  }
};
</script>