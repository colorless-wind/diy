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
    // margin: 20px 16px;
    // border-radius: 16px;
    // padding: 24px;
    // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
background: #f5f7fa;
    .form-title {
        font-size: 18px;
        font-weight: 600;
        color: #1a1a1a;
        margin-bottom: 20px;
    }

    .form-group {
        margin: 0 16px 10px;
        // background: #fff;
        // padding: 16px;
        border-radius: 12px;
        // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);

        label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            margin-bottom: 8px;

            .required {
                color: #ff9f2f;
                margin-left: 4px;
            }
        }

        input,
        select,
        textarea {
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
            min-height: 60px;
            resize: vertical;
        }

        .error-message {
            color: #ff9f2f;
            font-size: 12px;
            margin-top: 4px;
        }
    }

    .id-upload-section {
        margin: 20px 16px;
        background: #fff;
        border-radius: 16px;
        padding: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

        .upload-label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #333;
            margin-bottom: 12px;

            .required {
                color: #ff9f2f;
                margin-left: 4px;
            }

            .upload-tip {
                font-size: 12px;
                color: #999;
                font-weight: normal;
                margin-left: 8px;
            }
        }

        .upload-area {
            position: relative;
            width: 100%;
            min-height: 170px;
            border: 2px dashed #ddd;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #fafafa;
            transition: all 0.3s;
            cursor: pointer;

            &:active {
                border-color: #409EFF;
                background: #f0f7ff;
            }

            &.has-images {
                border: none;
                background: transparent;
                min-height: auto;
                padding: 0;
            }

            .upload-placeholder {
                text-align: center;
                color: #999;

                .upload-icon {
                    width: 48px;
                    height: 48px;
                    margin: 0 auto 12px;
                    background: #e8e8e8;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                }

                .upload-text {
                    font-size: 14px;
                    margin-bottom: 4px;
                }

                .upload-hint {
                    font-size: 12px;
                    color: #999;
                }
            }

            .images-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 12px;
                margin-bottom: 12px;
                width: 300px;

                .image-item {
                    position: relative;
                    width: 100%;
                    padding-top: 100%; // 保持正方形
                    border-radius: 8px;
                    overflow: hidden;
                    background: #f5f5f5;

                    img {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }

                    .remove-btn {
                        position: absolute;
                        top: 4px;
                        right: 4px;
                        width: 24px;
                        height: 24px;
                        background: rgba(0, 0, 0, 0.6);
                        border-radius: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                        transition: background 0.3s;

                        &:active {
                            background: rgba(0, 0, 0, 0.8);
                        }

                        svg {
                            width: 14px;
                            height: 14px;
                            fill: #fff;
                        }
                    }
                }

                .add-more-btn {
                    width: 100%;
                    padding-top: 100%; // 保持正方形
                    border: 2px dashed #ddd;
                    border-radius: 8px;
                    background: #fafafa;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s;
                    position: relative;

                    &:active {
                        border-color: #409EFF;
                        background: #f0f7ff;
                    }

                    .add-icon {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        font-size: 24px;
                        color: #999;
                    }
                }
            }
        }

        .error-message {
            color: #ff9f2f;
            font-size: 12px;
            margin-top: 8px;
        }
    }

}

.submit-btn {
    width: 90%;
    padding: 14px;
    background: linear-gradient(135deg, #ff9f2f 0%, #fb8c00 100%);
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 8px;
    margin-left: 5%;
    margin-bottom: 20px;
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
<div class="application-form">
    <div class="header">
        <div class="back-btn" @click="goBack">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M631.7 256l-256 256 256 256-60.3 60.3-316.3-316.3 316.3-316.3z" />
            </svg>
        </div>
        <div class="header-title">{{ $t('presetCard.applicationForm') }}</div>
    </div>

    <div class="form-group" style="margin-top: 50px;">
        <label>
            <span class="required">*</span>
            {{ $t('presetCard.fullName') }}
        </label>
        <input type="text" v-model="formData.fullName" :placeholder="$t('presetCard.fullNamePlaceholder')"
            @blur="validateField('fullName')">
        <div v-if="errors.fullName" class="error-message">{{ errors.fullName }}</div>
    </div>
    <div class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('presetCard.idNumber') }}
        </label>
        <input type="text" v-model="formData.idNumber" :placeholder="$t('presetCard.idNumberPlaceholder')"
            @blur="validateField('idNumber')">
        <div v-if="errors.idNumber" class="error-message">{{ errors.idNumber }}</div>
    </div>


    <div class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('presetCard.phone') }}
        </label>
        <input type="tel" v-model="formData.phone" :placeholder="$t('presetCard.phonePlaceholder')"
            @blur="validateField('phone')">
        <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
    </div>

    <div class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('presetCard.email') }}
        </label>
        <input type="email" v-model="formData.email" :placeholder="$t('presetCard.emailPlaceholder')"
            @blur="validateField('email')">
        <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
    </div>

    <div class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('presetCard.address') }}
        </label>
        <textarea v-model="formData.address" :placeholder="$t('presetCard.addressPlaceholder')"></textarea>
        <div v-if="errors.address" class="error-message">{{ errors.address }}</div>
    </div>

    <button class="submit-btn" @click="submitApplication" :disabled="!isFormValid || isSubmitting">
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
            cardId: null,
            idPhotos: [], // 存储多张图片 { url: string, file: File }
            maxPhotos: 9 // 最多上传9张
        };
    },
    computed: {
        isFormValid() {
            return this.formData.fullName &&
                this.formData.email &&
                this.formData.phone &&
                this.formData.idNumber &&
                this.formData.address &&
                !this.errors.fullName &&
                !this.errors.email &&
                !this.errors.phone &&
                !this.errors.idNumber &&
                !this.errors.address;
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
        this.cardId = this.$route.query.id;
        // this.loadCardData();
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
        triggerFileInput() {
            this.$refs.fileInput.click();
        },
        handleFileUpload(event) {
            const files = Array.from(event.target.files || []);
            if (files.length === 0) return;

            // 检查是否超过最大数量
            const remainingSlots = this.maxPhotos - this.idPhotos.length;
            if (files.length > remainingSlots) {
                this.errors.idPhoto = this.$t('userApply.errors.tooManyPhotos', { max: this.maxPhotos, current: this.idPhotos.length, remaining: remainingSlots });
                this.$refs.fileInput.value = '';
                return;
            }

            // 清除错误
            this.errors.idPhoto = '';

            // 处理每个文件
            const validFiles = [];
            files.forEach((file, index) => {
                // 验证文件类型
                if (!/^image\/(jpeg|jpg|png|webp)$/i.test(file.type)) {
                    if (files.length === 1) {
                        this.errors.idPhoto = this.$t('userApply.errors.invalidFormat');
                    }
                    return;
                }

                // 验证文件大小 (最大5MB)
                const maxSize = 5 * 1024 * 1024; // 5MB
                if (file.size > maxSize) {
                    if (files.length === 1) {
                        this.errors.idPhoto = this.$t('userApply.errors.fileTooLarge');
                    }
                    return;
                }

                validFiles.push(file);
            });

            if (validFiles.length === 0) {
                this.$refs.fileInput.value = '';
                return;
            }

            // 读取所有有效文件并显示预览
            let loadedCount = 0;
            validFiles.forEach((file) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.idPhotos.push({
                        url: e.target.result,
                        file: file
                    });
                    loadedCount++;

                    // 所有文件加载完成后清除input
                    if (loadedCount === validFiles.length) {
                        this.$refs.fileInput.value = '';
                    }
                };
                reader.readAsDataURL(file);
            });
        },
        removeIdPhoto(index) {
            this.idPhotos.splice(index, 1);
            this.errors.idPhoto = '';
            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = '';
            }
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
                    }
                    // else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email)) {
                    //     this.errors.email = this.$t('presetCard.errors.emailInvalid');
                    // }
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
                case 'address':
                    if (!this.formData.address.trim()) {
                        this.errors.address = this.$t('presetCard.errors.addressRequired');
                    }
                    break;
            }
        },
        async submitApplication() {
            // 验证所有字段
            ['fullName', 'email', 'phone', 'idNumber', 'address'].forEach(field => {
                this.validateField(field);
            });

            // 验证证件照片
            if (this.idPhotos.length === 0) {
                this.errors.idPhoto = this.$t('userApply.errors.idPhotoRequired');
            } else {
                this.errors.idPhoto = '';
            }

            if (!this.isFormValid) {
                return;
            }

            this.isSubmitting = true;

            try {
                // 这里可以调用实际的API
                // await http.post('/api/card-application', this.formData);

                // 保存表单数据到localStorage，供完成页面使用
                localStorage.setItem('applicationFormData', JSON.stringify(this.formData));

                // 模拟API调用
                await new Promise(resolve => setTimeout(resolve, 1500));

                // 跳转到完成页面
                const queryType = this.$route.query.type === 'diy' ? 'diy' : 'preset';
                this.$router.push({
                    path: '/application-complete',
                    query: {
                        type: queryType,
                        cardId: this.cardId,
                        address: this.formData.address
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