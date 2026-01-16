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

.panel {
  margin: 16px;
  background: #fff;
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
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

    <div class="panel">
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

    <div v-if="progress" class="panel">
      <div class="status">
        <div class="title">{{ $t('applicationProgress.currentStatus') }}</div>
        <div class="badge">{{ progress.statusText }}</div>
      </div>

      <div class="timeline">
        <div
          v-for="(item, idx) in progress.timeline"
          :key="idx"
          class="item"
          :class="{ active: idx === progress.activeIndex }"
        >
          <div class="line1">
            <div class="name">{{ item.name }}</div>
            <div class="time">{{ item.time || '-' }}</div>
          </div>
          <div v-if="item.desc" class="desc">{{ item.desc }}</div>
        </div>
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

export default {
  name: 'ApplicationProgress',
  data() {
    return {
      applicationNumber: '',
      isLoading: false,
      errorMsg: '',
      progress: null
    };
  },
  mounted() {
    const fromQuery = (this.$route.query && this.$route.query.applicationNumber) || '';
    const fromStorage = localStorage.getItem(STORAGE_LAST_NO) || '';
    this.applicationNumber = fromQuery || fromStorage || '';
    if (this.applicationNumber) {
      this.loadProgress();
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    makeDefaultProgress(applicationNumber) {
      const now = Date.now();
      return {
        applicationNumber,
        status: 'SUBMITTED',
        statusText: this.$t('applicationProgress.statusSubmitted'),
        activeIndex: 1,
        updatedAt: now,
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

