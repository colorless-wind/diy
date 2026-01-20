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
                color: #ff9f2f;
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
            color: #ff9f2f;
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
                border: 1px solid #ff9f2f;
                border-radius: 8px;
                color: #ff9f2f;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                white-space: nowrap;
                transition: all 0.3s;
                flex-shrink: 0;

                &:active {
                    background: #ff9f2f;
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

// 人脸识别授权弹窗
.face-recognition-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 20px;

    .modal-content {
        background: #fff;
        border-radius: 16px;
        width: 100%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        padding: 24px;

        .modal-title {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
            text-align: center;
            margin-bottom: 24px;
        }

        .modal-illustration {
            width: 100%;
            max-width: 280px;
            margin: 0 auto 24px;
            display: flex;
            justify-content: center;
            align-items: center;

            .illustration-wrapper {
                position: relative;
                // width: 180px;
                // height: 220px;

                .phone-frame {
                    width: 100%;
                    height: 100%;
                    // background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
                    border-radius: 28px;
                    padding: 16px;
                    // box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
                    position: relative;

                    .phone-screen {
                        width: 100%;
                        height: 100%;
                        border-radius: 16px;
                        position: relative;
                        overflow: hidden;

                        .face-frame {
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            width: 75%;
                            height: 55%;
                            border: 4px solid #409EFF;
                            border-radius: 50%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 0 20px rgba(64, 158, 255, 0.5);

                            .face-icon {
                                width: 65%;
                                height: 65%;
                                background: linear-gradient(135deg, #409EFF 0%, #66b1ff 100%);
                                border-radius: 50%;
                                position: relative;
                                box-shadow: 0 0 15px rgba(64, 158, 255, 0.6);

                                // 左眼
                                &::before {
                                    content: '';
                                    position: absolute;
                                    top: 28%;
                                    left: 28%;
                                    width: 14px;
                                    height: 14px;
                                    background: #fff;
                                    border-radius: 50%;
                                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
                                }

                                // 右眼和嘴巴光晕
                                &::after {
                                    content: '';
                                    position: absolute;
                                    top: 28%;
                                    right: 28%;
                                    width: 14px;
                                    height: 14px;
                                    background: #fff;
                                    border-radius: 50%;
                                    box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
                                }
                            }

                            // 嘴巴区域的光晕效果（使用伪元素在face-frame上）
                            .mouth-glow {
                                position: absolute;
                                bottom: 20%;
                                left: 50%;
                                transform: translateX(-50%);
                                width: 30%;
                                height: 15%;
                                background: rgba(64, 158, 255, 0.4);
                                border-radius: 50%;
                                box-shadow: 0 0 10px rgba(64, 158, 255, 0.6);
                            }
                        }
                    }
                }
            }
        }

        .instructions-list {
            list-style: none;
            padding: 0;
            margin: 0 0 20px 0;

            li {
                display: flex;
                align-items: flex-start;
                margin-bottom: 12px;
                font-size: 14px;
                color: #333;
                line-height: 1.6;

                .bullet-point {
                    width: 6px;
                    height: 6px;
                    background: #ff9f2f;
                    border-radius: 50%;
                    margin-right: 12px;
                    margin-top: 6px;
                    flex-shrink: 0;
                }
            }
        }

        .disclaimer-text {
            font-size: 13px;
            color: #666;
            line-height: 1.8;
            margin-bottom: 12px;
            text-align: left;
        }

        .conditional-text {
            font-size: 13px;
            color: #999;
            line-height: 1.6;
            margin-bottom: 24px;
            text-align: left;
        }

        .modal-buttons {
            display: flex;
            gap: 12px;
            margin-top: 24px;

            .btn {
                flex: 1;
                padding: 14px;
                border: none;
                border-radius: 8px;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s;

                &.btn-disagree {
                    background: #f5f5f5;
                    color: #333;

                    &:active {
                        background: #e0e0e0;
                    }
                }

                &.btn-agree {
                    background: #ff9f2f;
                    color: #fff;

                    &:active {
                        background: #fb8c00;
                    }
                }
            }
        }
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

    .face-recognition-modal {
        .modal-content {
            max-width: 600px;
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
        <div class="header-title">{{ $t('idUpload.title') }}</div>
    </div>

    <!-- 证件图片上传 -->
    <div class="id-upload-section">
        <label class="upload-label">
            <span class="required">*</span>
            {{ $t('idUpload.uploadLabel') }}
        </label>
        <div class="upload-area" :class="{ 'has-images': idPhotos.length > 0 }">
            <div v-if="idPhotos.length === 0" class="upload-placeholder" @click="triggerFileInput">
                <div class="upload-icon">📷</div>
                <div class="upload-text">{{ $t('idUpload.clickToUpload') }}</div>
                <div class="upload-hint">{{ $t('idUpload.uploadHint') }}</div>
            </div>
            <div v-else class="images-grid">
                <div v-for="(photo, index) in idPhotos" :key="index" class="image-item">
                    <img :src="photo.url" :alt="$t('idUpload.idPhotoAlt', { index: index + 1 })">
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
    <div v-if="idPhotos.length > 1" class="info-section">
        <div class="info-title">{{ $t('idUpload.infoTitle') }}</div>
    </div>

    <div v-if="idPhotos.length > 1" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.fullName') }}
        </label>
        <input type="text" v-model="formData.fullName" :placeholder="$t('idUpload.fullNamePlaceholder')"
            @blur="validateField('fullName')">
        <div v-if="errors.fullName" class="error-message">{{ errors.fullName }}</div>
    </div>

    <div v-if="idPhotos.length > 1" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.idNumber') }}
        </label>
        <input type="text" v-model="formData.idNumber" :placeholder="$t('idUpload.idNumberPlaceholder')"
            @blur="validateField('idNumber')">
        <div v-if="errors.idNumber" class="error-message">{{ errors.idNumber }}</div>
    </div>

    <div v-if="idPhotos.length > 1" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.isLongTerm') }}
        </label>
        <select v-model="formData.isLongTerm" @change="handleLongTermChange">
            <option :value="false">{{ $t('idUpload.no') }}</option>
            <option :value="true">{{ $t('idUpload.yes') }}</option>
        </select>
    </div>

    <div v-if="idPhotos.length > 1 && !formData.isLongTerm" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.idStartDate') }}
        </label>
        <div class="date-input-wrapper">
            <input type="date" v-model="formData.idStartDate" @blur="validateField('idStartDate')">
            <svg class="arrow-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M716.8 409.6L512 614.4 307.2 409.6z" fill="currentColor" />
            </svg>
        </div>
        <div v-if="errors.idStartDate" class="error-message">{{ errors.idStartDate }}</div>
    </div>

    <div v-if="idPhotos.length > 1 && !formData.isLongTerm" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.idEndDate') }}
        </label>
        <div class="date-input-wrapper">
            <input type="date" v-model="formData.idEndDate" @blur="validateField('idEndDate')">
            <svg class="arrow-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M716.8 409.6L512 614.4 307.2 409.6z" fill="currentColor" />
            </svg>
        </div>
        <div v-if="errors.idEndDate" class="error-message">{{ errors.idEndDate }}</div>
    </div>

    <!-- 联系方式 -->
    <div v-if="idPhotos.length > 1" class="form-group">
        <label>
            <span class="required">*</span>
            {{ $t('idUpload.phone') }}
        </label>
        <input type="tel" v-model="formData.phone" :placeholder="$t('idUpload.phonePlaceholder')"
            @blur="validateField('phone')">
        <div v-if="errors.phone" class="error-message">{{ errors.phone }}</div>
    </div>
    <button v-if="idPhotos.length > 1" class="submit-btn" @click="handleNextStep"
        :disabled="!isFormValid || isSubmitting">
        {{ isSubmitting ? $t('common.submitting') : $t('common.nextStep') }}
    </button>

    <!-- 人脸识别授权弹窗 -->
    <div v-if="showFaceRecognitionModal" class="face-recognition-modal" @click.self="closeModal">
        <div class="modal-content">
            <div class="modal-title">{{ $t('idUpload.faceModalTitle') }}</div>

            <div class="modal-illustration">
                <div class="illustration-wrapper">
                    <div class="phone-frame">
                        <div class="phone-screen">
                            <svg t="1768384848122" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4710" width="200" height="200">
                                <path
                                    d="M297.3 457.3c0-4.2 3.2-7.6 7.3-8 67.1-5.6 96.4-73.5 96.6-74.2 1-2.5 3.3-4.3 5.9-4.8 2.6-0.5 5.4 0.4 7.2 2.3 122.9 128.7 300.2 77.4 302 76.9 2.4-0.7 5-0.3 7.1 1.2s3.2 3.9 3.2 6.4v53.6c10.2 1.6 19.4 6.3 26.6 13v-121c0-102.9-83.8-186.7-186.7-186.7H457.4c-102.9 0-186.7 83.8-186.7 186.7v121.2c7.2-6.8 16.4-11.4 26.6-13v-53.6zM310 654.8c-7.2-18-10.3-33.8-11.6-44.3-10.6-1.5-20.2-6.1-27.7-13.2V767c0 22.6 18.4 41 41 41h162c-125.9-59.3-153-126.5-163.7-153.2zM553.9 808h158.3c22.6 0 41-18.4 41-41V597.3c-7.2 6.8-16.4 11.4-26.6 13.1-0.7 105.8-111.4 170.1-172.7 197.6z"
                                    fill="#A0D3F8" p-id="4711"></path>
                                <path
                                    d="M288 896H128V736c0-8.8-7.2-16-16-16s-16 7.2-16 16v176c0 8.8 7.2 16 16 16h176c8.8 0 16-7.2 16-16s-7.2-16-16-16zM912 720c-8.8 0-16 7.2-16 16v160H736c-8.8 0-16 7.2-16 16s7.2 16 16 16h176c8.8 0 16-7.2 16-16V736c0-8.8-7.2-16-16-16zM912 96H736c-8.8 0-16 7.2-16 16s7.2 16 16 16h160v160c0 8.8 7.2 16 16 16s16-7.2 16-16V112c0-8.8-7.2-16-16-16zM112 304c8.8 0 16-7.2 16-16V128h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16zM769.3 767V402.7c0-111.8-90.9-202.7-202.7-202.7H457.4c-111.8 0-202.7 90.9-202.7 202.7V767c0 31.5 25.6 57 57 57h400.5c31.5 0 57.1-25.6 57.1-57zM270.7 402.7c0-102.9 83.8-186.7 186.7-186.7h109.2c102.9 0 186.7 83.8 186.7 186.7v121.2c-7.2-6.8-16.4-11.4-26.6-13v-53.6c0-2.5-1.2-4.9-3.2-6.4s-4.7-2-7.1-1.2c-1.8 0.5-179.1 51.8-302-76.9-1.9-2-4.6-2.9-7.2-2.3-2.6 0.5-4.9 2.3-5.9 4.8-0.3 0.7-29.5 68.6-96.6 74.2-4.1 0.3-7.3 3.8-7.3 8v53.6c-10.2 1.6-19.4 6.3-26.6 13V402.7z m482.6 157.9c0 16.3-11.4 29.9-26.6 33.5V527c15.2 3.7 26.6 17.4 26.6 33.6z m-456-33.5v67.1c-15.2-3.6-26.6-17.2-26.6-33.5s11.4-30 26.6-33.6zM311.8 808c-22.6 0-41-18.4-41-41V597.3c7.5 7 17 11.7 27.7 13.2 1.4 10.5 4.4 26.3 11.6 44.3 10.7 26.6 37.8 93.8 163.8 153.2H311.8z m13.1-159.1c-11.4-28.4-11.6-51.5-11.6-51.8V464.4c55.7-8 86.2-52.1 97.5-72.6 111.3 108.2 259.8 84.6 299.9 75.7V609.3c0 123.9-174.6 189.8-198.5 198.2-147.8-59.9-176.5-131.6-187.3-158.6zM712.2 808H553.9c61.3-27.5 172-91.8 172.8-197.6 10.2-1.6 19.4-6.3 26.6-13.1V767c0 22.6-18.4 41-41.1 41z"
                                    fill="#108EE9" p-id="4712"></path>
                                <path
                                    d="M435.9 490.8c-33-13.2-65.4-0.5-66.7 0-4.1 1.6-6.1 6.3-4.5 10.4 1.2 3.1 4.3 5 7.4 5 1 0 2-0.2 3-0.6 0.3-0.1 27.7-10.9 54.9 0 4.1 1.6 8.8-0.3 10.4-4.5 1.6-4-0.4-8.6-4.5-10.3zM648.7 490.8c-33-13.2-65.4-0.5-66.7 0-4.1 1.6-6.1 6.3-4.5 10.4 1.6 4.1 6.3 6.1 10.4 4.5 0.3-0.1 27.9-10.8 54.9 0 1 0.4 2 0.6 3 0.6 3.2 0 6.2-1.9 7.4-5 1.6-4.2-0.4-8.8-4.5-10.5zM408.6 522.2c-14.5 0-26.2 11.8-26.2 26.2s11.8 26.2 26.2 26.2 26.2-11.8 26.2-26.2-11.7-26.2-26.2-26.2z m0 36.5c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2c0.1 5.6-4.5 10.2-10.2 10.2zM612.3 525.3c-14.5 0-26.2 11.8-26.2 26.2s11.8 26.2 26.2 26.2 26.2-11.8 26.2-26.2-11.7-26.2-26.2-26.2z m0 36.5c-5.6 0-10.2-4.6-10.2-10.2s4.6-10.2 10.2-10.2 10.2 4.6 10.2 10.2c0.1 5.6-4.5 10.2-10.2 10.2zM498.4 636.7h26.3c4.4 0 8-3.6 8-8s-3.6-8-8-8h-26.3c-4.4 0-8 3.6-8 8s3.5 8 8 8zM568.2 675.7c-55.3 38.7-110.1 1.6-112.4 0-3.6-2.5-8.6-1.6-11.1 2s-1.6 8.6 2 11.1c0.4 0.3 29.5 20.2 68 20.2 19.4 0 41.1-5.1 62.8-20.2 3.6-2.5 4.5-7.5 2-11.1-2.7-3.7-7.7-4.5-11.3-2z"
                                    fill="#108EE9" p-id="4713"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="instructions-list">
                <li>
                    <span class="bullet-point"></span>
                    <span>{{ $t('idUpload.faceInstructions.light') }}</span>
                </li>
                <li>
                    <span class="bullet-point"></span>
                    <span>{{ $t('idUpload.faceInstructions.center') }}</span>
                </li>
                <li>
                    <span class="bullet-point"></span>
                    <span>{{ $t('idUpload.faceInstructions.frame') }}</span>
                </li>
            </ul>

            <div class="disclaimer-text">
                {{ $t('idUpload.faceDisclaimer') }}
            </div>

            <div class="conditional-text">
                {{ $t('idUpload.faceFailTip') }}
            </div>

            <div class="modal-buttons">
                <button class="btn btn-disagree" @click="handleDisagree">{{ $t('common.disagree') }}</button>
                <button class="btn btn-agree" @click="handleAgree">{{ $t('common.agree') }}</button>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { imageBaseUrl } from '@/utils/config'
import diyCardApi from '@/api/diycard';
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
            showFaceRecognitionModal: false, // 控制人脸识别授权弹窗显示
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
                this.idPhotos.length > 1 &&
                !this.errors.fullName &&
                !this.errors.phone &&
                !this.errors.idNumber &&
                !this.errors.idPhoto;

            // 日期验证（如果不是长期有效）
            let dateValid = true;
            if (!this.formData.isLongTerm) {
                dateValid = this.formData.idStartDate &&
                    this.formData.idEndDate &&
                    !this.errors.idStartDate &&
                    !this.errors.idEndDate;
            }

            return baseValid && dateValid;
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
        },
        // 监听证件上传
        idPhotos:{
            handler(newValue){
                if(newValue.length < 2) return
                const imageReqList = []
                newValue.forEach(async(item)=>{
                    imageReqList.push(this.uploadImageFile(item.url, item.file))
                })
                Promise.all(imageReqList).then(resList=>{
                    if (resList[0] && resList[1]) {
                        this.uploadPhoto(resList[0].data, resList[1].data)
                    }
                })
            },
            deep: true
        }
    },
    mounted() {
        this.cardId = this.$route.query.id;
    },
    beforeDestroy() {
        // 清理验证码倒计时定时器
        if (this.verifyCodeTimer) {
            clearInterval(this.verifyCodeTimer);
            this.verifyCodeTimer = null;
        }
    },
    methods: {
        // 上传图片文件 base64 ==> url
        uploadImageFile(imageBase64, fileObj){
            return diyCardApi.file.imageUpload({
                "base64": imageBase64,
                "fileName": fileObj.name
            })
            // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":"group1/M00/02/43/CqU8dGlp2PyAdqR7AAZRBV9237I672.png","datas":null}
        },
        // 上传证件信息
        uploadPhoto(idCardFront, idCardBack){
            // if(!idCardFront || !idCardBack) return false
            return diyCardApi.customer.uploadIdCard({
                idCardFront: idCardFront,
                idCardBack: idCardBack,
                orderId: this.$route.query.oid
            })
            // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":null,"datas":null}
        },
        // 保存客户信息
        saveCustomerInfo(){
            return diyCardApi.customer.save({
                orderId: this.$route.query.oid,
                name: this.formData.fullName,
                idNumber: this.formData.idNumber,
                idType: 'PASSPORT', // ID_CARD, PASSPORT 页面暂时没选择
                gender: 'FEMALE', // MALE, FEMALE 页面暂时没选择
            })
            // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":null,"datas":null}
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
                reader.onload = async(e) => {
                    // const imageRes = this.uploadImageFile(e.target.result, file)
                    this.idPhotos.push({
                        url: e.target.result,
                        file: file,
                        // onlineUrl: imageRes.data
                    });
                    loadedCount++;
                    // if(this.idPhotos[0] && this.idPhotos[1]){
                    //     this.uploadPhoto(this.idPhotos[0].onlineUrl, this.idPhotos[1].onlineUrl)
                    // }
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
        getPresetCardsData() {
            return [
                {
                    id: 1,
                    category: this.$t('cardProducts.travelEurope.category'),
                    title: this.$t('cardProducts.travelEurope.title'),
                    description: this.$t('cardProducts.travelEurope.description'),
                    image: require('../assets/images/img/banner.png'),
                    details: {
                        benefits: this.$t('cardProducts.travelEurope.benefits')
                    }
                },
                {
                    id: 2,
                    category: this.$t('cardProducts.zodiac.category'),
                    title: this.$t('cardProducts.zodiac.title'),
                    description: this.$t('cardProducts.zodiac.description'),
                    image: require('../assets/images/img/banner1.png'),
                    details: {
                        benefits: this.$t('cardProducts.zodiac.benefits')
                    }
                },
                {
                    id: 3,
                    category: this.$t('cardProducts.peonyDragon.category'),
                    title: this.$t('cardProducts.peonyDragon.title'),
                    description: this.$t('cardProducts.peonyDragon.description'),
                    image: require('../assets/images/img/banner2.png'),
                    details: {
                        benefits: this.$t('cardProducts.peonyDragon.benefits')
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
                this.errors.phone = this.$t('idUpload.errors.phoneInvalid');
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
                alert(this.$t('idUpload.errors.sendCodeFailed'));
            }
        },
        validateField(fieldName) {
            this.errors[fieldName] = '';

            switch (fieldName) {
                case 'fullName':
                    if (!this.formData.fullName.trim()) {
                        this.errors.fullName = this.$t('idUpload.errors.fullNameRequired');
                    }
                    break;
                case 'phone':
                    if (!this.formData.phone.trim()) {
                        this.errors.phone = this.$t('idUpload.errors.phoneRequired');
                    } else if (!/^1[3-9]\d{9}$/.test(this.formData.phone)) {
                        this.errors.phone = this.$t('idUpload.errors.phoneInvalid');
                    }
                    break;
                case 'idNumber':
                    if (!this.formData.idNumber.trim()) {
                        this.errors.idNumber = this.$t('idUpload.errors.idNumberRequired');
                    } else if (!/^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}[\dXx]$/.test(this.formData.idNumber)) {
                        // 简单的身份证号格式验证
                        if (this.formData.idNumber.length < 15) {
                            this.errors.idNumber = this.$t('idUpload.errors.idNumberInvalid');
                        }
                    }
                    break;
                case 'idStartDate':
                    if (!this.formData.isLongTerm && !this.formData.idStartDate) {
                        this.errors.idStartDate = this.$t('idUpload.errors.idStartDateRequired');
                    }
                    break;
                case 'idEndDate':
                    if (!this.formData.isLongTerm && !this.formData.idEndDate) {
                        this.errors.idEndDate = this.$t('idUpload.errors.idEndDateRequired');
                    } else if (this.formData.idStartDate && this.formData.idEndDate) {
                        if (new Date(this.formData.idEndDate) <= new Date(this.formData.idStartDate)) {
                            this.errors.idEndDate = this.$t('idUpload.errors.idEndDateInvalid');
                        }
                    }
                    break;
                case 'verifyCode':
                    if (!this.formData.verifyCode.trim()) {
                        this.errors.verifyCode = this.$t('idUpload.errors.verifyCodeRequired');
                    } else if (!/^\d{6}$/.test(this.formData.verifyCode)) {
                        this.errors.verifyCode = this.$t('idUpload.errors.verifyCodeInvalid');
                    }
                    break;
            }
        },
        // 点击下一步按钮
        handleNextStep() {
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
                this.errors.idPhoto = this.$t('idUpload.errors.idPhotoRequired');
            } else {
                this.errors.idPhoto = '';
            }

            if (!this.isFormValid) {
                return;
            }
            this.saveCustomerInfo()
            // 显示人脸识别授权弹窗
            this.showFaceRecognitionModal = true;
        },
        // 关闭弹窗
        closeModal() {
            this.showFaceRecognitionModal = false;
        },
        // 处理不同意
        handleDisagree() {
            this.closeModal();
            // 可以在这里添加不同意的处理逻辑
            // alert(this.$t('idUpload.disagreeTip'));
            this.$router.push({
                path: '/user-apply',
                query: {
                    ...this.$route.query,
                }
            });
        },
        // 处理同意
        handleAgree() {
            this.closeModal();

            // 保存表单数据到localStorage，供完成页面使用
            localStorage.setItem('applicationFormData', JSON.stringify(this.formData));

            // 跳转到人脸识别页面
            const queryType = this.$route.query.type === 'diy' ? 'diy' : 'preset';
            this.$router.push({
                path: '/face-recognition',
                query: {
                    ...this.$route.query,
                    type: queryType,
                    cardId: this.cardId
                }
            });
        }
    }
};
</script>