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
        // margin: 0 16px 10px;
        background: #fff;
        padding: 16px;

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

            .info-icon {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-left: 4px;
                border-radius: 50%;
                background: #e0e0e0;
                color: #666;
                font-size: 12px;
                text-align: center;
                line-height: 16px;
                cursor: help;
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
            color: #e53935;
            font-size: 12px;
            margin-top: 4px;
        }

        .date-input-wrapper {
            position: relative;
            display: flex;
            align-items: center;

            input {
                padding-right: 40px;
            }

            .arrow-icon {
                position: absolute;
                right: 16px;
                width: 20px;
                height: 20px;
                pointer-events: none;
                color: #999;
            }
        }

        .verify-code-wrapper {
            display: flex;
            gap: 12px;
            align-items: flex-start;

            input {
                flex: 1;
            }

            .get-code-btn {
                padding: 12px 20px;
                background: #fff;
                border: 1px solid #e53935;
                border-radius: 8px;
                color: #e53935;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.3s;
                flex-shrink: 0;

                &:active {
                    background: #e53935;
                    color: #fff;
                }

                &:disabled {
                    background: #f5f5f5;
                    border-color: #ddd;
                    color: #999;
                    cursor: not-allowed;
                }
            }
        }
    }

    .info-section {
        // margin: 20px 16px;
        background: #fff;
        border-radius: 16px;
        padding: 16px;

        .info-title {
            font-size: 14px;
            color: #666;
            margin-bottom: 12px;
            line-height: 1.5;
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
                color: #e53935;
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
            color: #e53935;
            font-size: 12px;
            margin-top: 8px;
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
        <div class="header-title">申请信用卡</div>
    </div>

    <!-- 证件图片上传 -->
    <div class="id-upload-section">
        <label class="upload-label">
            <span class="required">*</span>
            请拍摄申请人的证件照片
        </label>
        <div class="upload-area" :class="{ 'has-images': idPhotos.length > 0 }">
            <div v-if="idPhotos.length === 0" class="upload-placeholder" @click="triggerFileInput">
                <div class="upload-icon">📷</div>
                <div class="upload-text">点击上传</div>
                <div class="upload-hint">支持 JPG、PNG 格式，最大 5MB</div>
            </div>
            <div v-else class="images-grid">
                <div v-for="(photo, index) in idPhotos" :key="index" class="image-item">
                    <img :src="photo.url" :alt="`ID Photo ${index + 1}`">
                    <div class="remove-btn" @click.stop="removeIdPhoto(index)">
                        <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M512 512m-255.737 0a 255.737 255.737 0 1 0 511.475 0 a 255.737 255.737 0 1 0 -511.475 0 Z"
                                fill="#ffffff" />
                            <path
                                d="M 637.311 422.492 L 419.935 639.868 c -10.2294 10.2294 -25.5737 10.2294 -35.8032 0 c -10.2294 -10.2294 -10.2294 -25.5737 0 -35.8032 l 217.378 -217.378 c 10.2294 -10.2294 25.5737 -10.2294 35.8032 0 c 10.2294 7.67216 10.2294 25.5737 0 35.8032 Z"
                                fill="#3e424b" />
                            <path
                                d="M 386.689 422.492 l 217.378 217.378 c 10.2294 10.2294 25.5737 10.2294 35.8032 0 c 10.2294 -10.2294 10.2294 -25.5737 0 -35.8032 L 422.492 386.689 c -10.2294 -10.2294 -25.5737 -10.2294 -35.8032 0 c -10.2294 7.67216 -10.2294 25.5737 0 35.8032 Z"
                                fill="#3e424b" />
                        </svg>
                    </div>
                </div>
                <div class="add-more-btn" @click="triggerFileInput" v-if="idPhotos.length < 4">
                    <div class="add-icon">+</div>
                </div>
            </div>
        </div>
        <input type="file" ref="fileInput" accept="image/*" multiple style="display: none" @change="handleFileUpload">
        <div v-if="errors.idPhoto" class="error-message">{{ errors.idPhoto }}</div>
    </div>

    <!-- 身份信息表单（上传证件照后显示） -->
    <div v-if="idPhotos.length > 0" class="info-section">
        <div class="info-title">请核对身份信息，若有误请手动修改</div>
    </div>

    <div v-if="idPhotos.length > 0" class="form-group">
        <label>
            <span class="required">*</span>
            姓名
        </label>
        <input type="text" v-model="formData.fullName" placeholder="请输入姓名"
            @blur="validateField('fullName')">
        <div v-if="errors.fullName" class="error-message">{{ errors.fullName }}</div>
    </div>

    <div v-if="idPhotos.length > 0" class="form-group">
        <label>
            <span class="required">*</span>
            证件号码
        </label>
        <input type="text" v-model="formData.idNumber" placeholder="请输入证件号码"
            @blur="validateField('idNumber')">
        <div v-if="errors.idNumber" class="error-message">{{ errors.idNumber }}</div>
    </div>

    <div v-if="idPhotos.length > 0" class="form-group">
        <label>
            <span class="required">*</span>
            是否长期有效
        </label>
        <select v-model="formData.isLongTerm" @change="handleLongTermChange">
            <option :value="false">否</option>
            <option :value="true">是</option>
        </select>
    </div>

    <div v-if="idPhotos.length > 0 && !formData.isLongTerm" class="form-group">
        <label>
            <span class="required">*</span>
            证件起始日期
        </label>
        <div class="date-input-wrapper">
            <input type="date" v-model="formData.idStartDate" @blur="validateField('idStartDate')">
            <svg class="arrow-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M716.8 409.6L512 614.4 307.2 409.6z" fill="currentColor"/>
            </svg>
        </div>
        <div v-if="errors.idStartDate" class="error-message">{{ errors.idStartDate }}</div>
    </div>

    <div v-if="idPhotos.length > 0 && !formData.isLongTerm" class="form-group">
        <label>
            <span class="required">*</span>
            证件截止日期
        </label>
        <div class="date-input-wrapper">
            <input type="date" v-model="formData.idEndDate" @blur="validateField('idEndDate')">
            <svg class="arrow-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M716.8 409.6L512 614.4 307.2 409.6z" fill="currentColor"/>
            </svg>
        </div>
        <div v-if="errors.idEndDate" class="error-message">{{ errors.idEndDate }}</div>
    </div>

    <!-- 联系方式 -->
    <div v-if="idPhotos.length > 0" class="form-group">
        <label>
            <span class="required">*</span>
            手机号
        </label>
        <input type="tel" v-model="formData.phone" placeholder="请输入手机号"
            @blur="validateField('phone')">
        <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
    </div>

    <div v-if="idPhotos.length > 0" class="form-group">
        <label>
            <span class="required">*</span>
            短信验证码
        </label>
        <div class="verify-code-wrapper">
            <input type="text" v-model="formData.verifyCode" placeholder="请输入6位数字" maxlength="6"
                @blur="validateField('verifyCode')">
            <button class="get-code-btn" @click="getVerifyCode" :disabled="!canGetCode || countdown > 0">
                {{ countdown > 0 ? `${countdown}秒后重新获取` : '获取' }}
            </button>
        </div>
        <div v-if="errors.verifyCode" class="error-message">{{ errors.verifyCode }}</div>
    </div>

    <button v-if="idPhotos.length > 0" class="submit-btn" @click="submitApplication" :disabled="!isFormValid || isSubmitting">
        {{ isSubmitting ? '提交中...' : '下一步' }}
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
                address: '',
                idStartDate: '',
                idEndDate: '',
                isLongTerm: false,
                verifyCode: ''
            },
            errors: {},
            isSubmitting: false,
            cardId: null,
            idPhotos: [], // 存储多张图片 { url: string, file: File }
            maxPhotos: 9, // 最多上传9张
            countdown: 0, // 验证码倒计时
            verifyCodeTimer: null, // 验证码定时器
            // 模拟OCR识别数据组
            mockOcrData: [
                {
                    fullName: '张三',
                    idNumber: '110101199001011234',
                    idStartDate: '2010-01-01',
                    idEndDate: '2030-01-01'
                },
                {
                    fullName: '李四',
                    idNumber: '320101199205152345',
                    idStartDate: '2012-05-15',
                    idEndDate: '2032-05-15'
                },
                {
                    fullName: '王五',
                    idNumber: '440101198803203456',
                    idStartDate: '2008-03-20',
                    idEndDate: '2028-03-20'
                },
                {
                    fullName: '赵六',
                    idNumber: '510101199512254567',
                    idStartDate: '2015-12-25',
                    idEndDate: '2035-12-25'
                }
            ]
        };
    },
    computed: {
        isFormValid() {
            const baseValid = this.formData.fullName &&
                this.formData.phone &&
                this.formData.idNumber &&
                this.idPhotos.length > 0 &&
                !this.errors.fullName &&
                !this.errors.phone &&
                !this.errors.idNumber &&
                !this.errors.idPhoto;

            // 验证码验证
            const verifyCodeValid = this.formData.verifyCode &&
                !this.errors.verifyCode;

            // 日期验证（如果不是长期有效）
            let dateValid = true;
            if (!this.formData.isLongTerm) {
                dateValid = this.formData.idStartDate &&
                    this.formData.idEndDate &&
                    !this.errors.idStartDate &&
                    !this.errors.idEndDate;
            }

            return baseValid && verifyCodeValid && dateValid;
        },
        canGetCode() {
            return this.formData.phone && /^1[3-9]\d{9}$/.test(this.formData.phone);
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
    beforeDestroy() {
        // 清理验证码倒计时定时器
        if (this.verifyCodeTimer) {
            clearInterval(this.verifyCodeTimer);
            this.verifyCodeTimer = null;
        }
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
                        // 如果是第一次上传证件照，模拟OCR识别并填充数据
                        if (this.idPhotos.length === validFiles.length && !this.formData.fullName) {
                            this.simulateOcrRecognition();
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        },
        // 模拟OCR识别，随机选择一组模拟数据填充
        simulateOcrRecognition() {
            // 模拟识别延迟
            setTimeout(() => {
                const randomData = this.mockOcrData[Math.floor(Math.random() * this.mockOcrData.length)];
                this.formData.fullName = randomData.fullName;
                this.formData.idNumber = randomData.idNumber;
                this.formData.idStartDate = randomData.idStartDate;
                this.formData.idEndDate = randomData.idEndDate;
                this.formData.isLongTerm = false;
                
                // 清除相关错误
                this.errors.fullName = '';
                this.errors.idNumber = '';
                this.errors.idStartDate = '';
                this.errors.idEndDate = '';
            }, 800); // 模拟识别延迟800ms
        },
        removeIdPhoto(index) {
            this.idPhotos.splice(index, 1);
            this.errors.idPhoto = '';
            if (this.$refs.fileInput) {
                this.$refs.fileInput.value = '';
            }
            // 如果删除所有照片，清空表单数据
            if (this.idPhotos.length === 0) {
                this.formData.fullName = '';
                this.formData.idNumber = '';
                this.formData.idStartDate = '';
                this.formData.idEndDate = '';
                this.formData.isLongTerm = false;
            }
        },
        handleLongTermChange() {
            if (this.formData.isLongTerm) {
                this.formData.idStartDate = '';
                this.formData.idEndDate = '';
                this.errors.idStartDate = '';
                this.errors.idEndDate = '';
            }
        },
        // 获取验证码
        async getVerifyCode() {
            if (!this.canGetCode || this.countdown > 0) {
                return;
            }

            // 验证手机号格式
            if (!/^1[3-9]\d{9}$/.test(this.formData.phone)) {
                this.errors.phone = '请输入正确的手机号';
                return;
            }

            // 模拟发送验证码
            try {
                // 这里可以调用实际的API
                // await http.post('/api/send-verify-code', { phone: this.formData.phone });
                
                // 模拟API调用
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // 开始倒计时
                this.countdown = 60;
                this.verifyCodeTimer = setInterval(() => {
                    this.countdown--;
                    if (this.countdown <= 0) {
                        clearInterval(this.verifyCodeTimer);
                        this.verifyCodeTimer = null;
                    }
                }, 1000);

                // 在demo中，可以直接设置验证码为123456方便测试
                this.formData.verifyCode = '123456';
                
                // alert('验证码已发送，请查收短信（demo模式：验证码为123456）');
            } catch (error) {
                console.error('发送验证码失败:', error);
                alert('发送验证码失败，请稍后重试');
            }
        },
        validateField(fieldName) {
            this.errors[fieldName] = '';

            switch (fieldName) {
                case 'fullName':
                    if (!this.formData.fullName.trim()) {
                        this.errors.fullName = '请输入姓名';
                    }
                    break;
                case 'phone':
                    if (!this.formData.phone.trim()) {
                        this.errors.phone = '请输入手机号';
                    } else if (!/^1[3-9]\d{9}$/.test(this.formData.phone)) {
                        this.errors.phone = '请输入正确的手机号';
                    }
                    break;
                case 'idNumber':
                    if (!this.formData.idNumber.trim()) {
                        this.errors.idNumber = '请输入证件号码';
                    } else if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(this.formData.idNumber)) {
                        // 简单的身份证号格式验证
                        if (this.formData.idNumber.length < 15) {
                            this.errors.idNumber = '证件号码格式不正确';
                        }
                    }
                    break;
                case 'idStartDate':
                    if (!this.formData.isLongTerm && !this.formData.idStartDate) {
                        this.errors.idStartDate = '请选择证件起始日期';
                    }
                    break;
                case 'idEndDate':
                    if (!this.formData.isLongTerm && !this.formData.idEndDate) {
                        this.errors.idEndDate = '请选择证件截止日期';
                    } else if (this.formData.idStartDate && this.formData.idEndDate) {
                        if (new Date(this.formData.idEndDate) <= new Date(this.formData.idStartDate)) {
                            this.errors.idEndDate = '截止日期必须晚于起始日期';
                        }
                    }
                    break;
                case 'verifyCode':
                    if (!this.formData.verifyCode.trim()) {
                        this.errors.verifyCode = '请输入验证码';
                    } else if (!/^\d{6}$/.test(this.formData.verifyCode)) {
                        this.errors.verifyCode = '请输入6位数字验证码';
                    }
                    break;
            }
        },
        async submitApplication() {
            // 验证所有字段
            ['fullName', 'phone', 'idNumber', 'verifyCode'].forEach(field => {
                this.validateField(field);
            });

            // 如果不是长期有效，验证日期字段
            if (!this.formData.isLongTerm) {
                this.validateField('idStartDate');
                this.validateField('idEndDate');
            }

            // 验证证件照片
            if (this.idPhotos.length === 0) {
                this.errors.idPhoto = '请上传证件照片';
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
                        cardId: this.cardId
                    }
                });
            } catch (error) {
                console.error('提交申请失败:', error);
                alert('提交失败，请稍后重试');
            } finally {
                this.isSubmitting = false;
            }
        }
    }
};
</script>