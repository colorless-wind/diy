<template>
    <div class="face-recognition-page">
        <!-- 顶部控制栏 -->
        <div class="top-controls">
            <div class="close-btn" @click="handleClose">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3.1-3.6-7.6-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3.1 3.6 7.6 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" fill="#666"/>
                </svg>
            </div>
            <div class="sound-btn" @click="toggleSound">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M625.2 64H308.8c-19.2 0-34.8 15.6-34.8 34.8v850.4c0 19.2 15.6 34.8 34.8 34.8h316.4c19.2 0 34.8-15.6 34.8-34.8V98.8c0-19.2-15.6-34.8-34.8-34.8zM580 896H444V128h136v768z" fill="#666"/>
                </svg>
            </div>
        </div>

        <!-- 摄像头权限请求弹窗 -->
        <div v-if="showPermissionModal" class="permission-modal">
            <div class="permission-content">
                <div class="permission-title">允许使用摄像头?</div>
                <div class="permission-desc">用于拍照、拍视频、扫描二维码等</div>
                <div class="permission-buttons">
                    <button class="permission-btn primary" @click="allowCamera">使用时允许</button>
                    <button class="permission-btn text" @click="allowCameraOnce">仅本次使用时允许</button>
                    <button class="permission-btn text" @click="denyCamera">不允许</button>
                </div>
            </div>
        </div>

        <!-- 准备中状态 -->
        <div v-if="status === 'preparing'" class="preparing-state">
            <div class="camera-frame preparing">
                <div class="preparing-text">准备中...</div>
                <div class="face-placeholder"></div>
            </div>
        </div>

        <!-- 人脸识别主界面 -->
        <div v-else-if="status === 'recognizing'" class="recognition-state">
            <div class="camera-frame" :class="frameClass">
                <!-- 倒计时显示 -->
                <div class="countdown">{{ countdown }}秒</div>
                
                <!-- 状态提示 -->
                <div class="status-message" :class="messageClass">{{ currentMessage }}</div>
                
                <!-- 模拟人脸区域 -->
                <div class="face-detection-area">
                    <div v-if="faceDetected" class="detected-face"></div>
                </div>
            </div>

            <!-- 底部示例图标 -->
            <div class="face-guide">
                <div class="guide-icon">
                    <div class="guide-face">
                        <div class="guide-frame"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 验证中状态 -->
        <div v-else-if="status === 'verifying'" class="verifying-state">
            <div class="camera-frame verifying">
                <div class="verifying-text">验证中，请保持姿势不变</div>
                <div class="face-placeholder verifying-face"></div>
            </div>
        </div>

        <!-- 成功状态 -->
        <div v-else-if="status === 'success'" class="success-state">
            <div class="success-content">
                <div class="success-icon">✓</div>
                <div class="success-text">人脸识别成功</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FaceRecognition',
    data() {
        return {
            status: 'permission', // permission, preparing, recognizing, verifying, success
            showPermissionModal: true,
            countdown: 8,
            faceDetected: false,
            currentMessage: '请靠近一点',
            messageClass: 'warning',
            frameClass: 'warning',
            soundEnabled: true,
            recognitionTimer: null,
            countdownTimer: null
        };
    },
    mounted() {
        // 页面加载时显示权限请求
    },
    beforeDestroy() {
        this.clearTimers();
    },
    methods: {
        clearTimers() {
            if (this.recognitionTimer) {
                clearInterval(this.recognitionTimer);
            }
            if (this.countdownTimer) {
                clearInterval(this.countdownTimer);
            }
        },
        allowCamera() {
            this.showPermissionModal = false;
            this.startRecognition();
        },
        allowCameraOnce() {
            this.showPermissionModal = false;
            this.startRecognition();
        },
        denyCamera() {
            alert('需要摄像头权限才能进行人脸识别');
            this.handleClose();
        },
        startRecognition() {
            // 进入准备状态
            this.status = 'preparing';
            
            // 2秒后进入识别状态
            setTimeout(() => {
                this.status = 'recognizing';
                this.startCountdown();
                this.simulateFaceDetection();
            }, 2000);
        },
        startCountdown() {
            this.countdown = 8;
            this.countdownTimer = setInterval(() => {
                this.countdown--;
                if (this.countdown <= 0) {
                    clearInterval(this.countdownTimer);
                    // 倒计时结束，进入验证状态
                    this.status = 'verifying';
                    setTimeout(() => {
                        this.status = 'success';
                        setTimeout(() => {
                            this.completeRecognition();
                        }, 1500);
                    }, 2000);
                }
            }, 1000);
        },
        simulateFaceDetection() {
            // 模拟人脸检测过程
            let step = 0;
            const steps = [
                { message: '没有检测到人脸', class: 'error', frame: 'error', detected: false, delay: 2000 },
                { message: '请靠近一点', class: 'warning', frame: 'warning', detected: false, delay: 2000 },
                { message: '请点点头', class: 'info', frame: 'info', detected: true, delay: 3000 }
            ];

            const processStep = () => {
                if (step < steps.length) {
                    const currentStep = steps[step];
                    this.currentMessage = currentStep.message;
                    this.messageClass = currentStep.class;
                    this.frameClass = currentStep.frame;
                    this.faceDetected = currentStep.detected;

                    step++;
                    if (step < steps.length) {
                        this.recognitionTimer = setTimeout(processStep, currentStep.delay);
                    } else {
                        // 最后一步完成后，等待倒计时结束
                        // 倒计时结束后会进入验证状态
                    }
                }
            };

            processStep();
        },
        completeRecognition() {
            // 完成识别，跳转到完成页面
            const queryType = this.$route.query.type === 'diy' ? 'diy' : 'preset';
            this.$router.push({
                path: '/application-complete',
                query: {
                    type: queryType,
                    cardId: this.$route.query.cardId
                }
            });
        },
        handleClose() {
            if (confirm('确定要退出人脸识别吗？')) {
                this.clearTimers();
                this.$router.back();
            }
        },
        toggleSound() {
            this.soundEnabled = !this.soundEnabled;
        }
    }
};
</script>

<style scoped lang="less">
.face-recognition-page {
    width: 100%;
    min-height: 100vh;
    background: #fff;
    position: relative;
    overflow: hidden;
}

.top-controls {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    padding: 16px 20px;
    z-index: 100;
    background: transparent;

    .close-btn,
    .sound-btn {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
        transition: background 0.3s;

        &:active {
            background: rgba(0, 0, 0, 0.1);
        }

        svg {
            width: 24px;
            height: 24px;
        }
    }
}

// 权限请求弹窗
.permission-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-end;
    z-index: 1000;

    .permission-content {
        width: 100%;
        background: #fff;
        border-radius: 16px 16px 0 0;
        padding: 24px 20px 40px;
        animation: slideUp 0.3s ease-out;

        .permission-title {
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 12px;
        }

        .permission-desc {
            font-size: 14px;
            color: #666;
            margin-bottom: 24px;
        }

        .permission-buttons {
            display: flex;
            flex-direction: column;
            gap: 12px;

            .permission-btn {
                width: 100%;
                padding: 14px;
                border: none;
                border-radius: 8px;
                font-size: 16px;
                cursor: pointer;
                transition: all 0.3s;

                &.primary {
                    background: #409EFF;
                    color: #fff;

                    &:active {
                        background: #337ecc;
                    }
                }

                &.text {
                    background: transparent;
                    color: #409EFF;
                    padding: 12px;

                    &:active {
                        background: rgba(64, 158, 255, 0.1);
                    }
                }
            }
        }
    }
}

@keyframes slideUp {
    from {
        transform: translateY(100%);
    }
    to {
        transform: translateY(0);
    }
}

// 准备中状态
.preparing-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 80px 20px 200px;

    .camera-frame {
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #2a2a2a;
        border: 4px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &.preparing {
            .preparing-text {
                color: #fff;
                font-size: 18px;
                margin-bottom: 20px;
            }

            .face-placeholder {
                width: 60%;
                height: 60%;
                background: #3a3a3a;
                border-radius: 50%;
            }
        }
    }
}

// 识别状态
.recognition-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 80px 20px 200px;

    .camera-frame {
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #2a2a2a;
        border: 3px solid #ddd;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        &.error {
            border-color: #e53935;
            box-shadow: 0 4px 20px rgba(229, 57, 53, 0.4);
        }

        &.warning {
            border-color: #ff9800;
            box-shadow: 0 4px 20px rgba(255, 152, 0, 0.4);
        }

        &.info {
            border-color: #409EFF;
            box-shadow: 0 4px 20px rgba(64, 158, 255, 0.4);
        }

        &.verifying {
            border-color: #4caf50;
            box-shadow: 0 4px 20px rgba(76, 175, 80, 0.4);
        }

        .countdown {
            position: absolute;
            top: 20px;
            color: #fff;
            font-size: 16px;
            font-weight: 600;
        }

        .status-message {
            position: absolute;
            top: 50px;
            font-size: 16px;
            font-weight: 500;
            text-align: center;
            padding: 0 20px;

            &.error {
                color: #e53935;
            }

            &.warning {
                color: #ff9800;
            }

            &.info {
                color: #409EFF;
            }

            &.verifying {
                color: #4caf50;
            }
        }

        .face-detection-area {
            width: 80%;
            height: 60%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            .detected-face {
                width: 100%;
                height: 100%;
                background: #000;
                border-radius: 50%;
                position: relative;
                animation: faceAppear 0.5s ease-out;
                overflow: hidden;

                // 模拟人脸轮廓
                &::before {
                    content: '';
                    position: absolute;
                    top: 15%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 30%;
                    height: 25%;
                    background: #3a3a3a;
                    border-radius: 50% 50% 0 0;
                }

                // 模拟眼睛
                &::after {
                    content: '';
                    position: absolute;
                    top: 35%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 60%;
                    height: 40%;
                    background: linear-gradient(to bottom, #3a3a3a 0%, #2a2a2a 100%);
                    border-radius: 50%;
                }
            }
        }
    }

    .face-guide {
        margin-top: 40px;
        display: flex;
        justify-content: center;

        .guide-icon {
            width: 140px;
            height: 140px;
            position: relative;

            .guide-face {
                width: 100%;
                height: 100%;
                background: #f5f5f5;
                border-radius: 50%;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                overflow: visible;

                // 使用emoji显示人脸
                &::before {
                    content: '😊';
                    font-size: 90px;
                    position: relative;
                    z-index: 1;
                    line-height: 1;
                    filter: grayscale(0%);
                }

                .guide-frame {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 80px;
                    height: 100px;
                    border: 3px solid #409EFF;
                    border-radius: 10px;
                    z-index: 2;
                    box-shadow: 0 0 8px rgba(64, 158, 255, 0.4);
                }
            }
        }
    }
}

@keyframes faceAppear {
    from {
        opacity: 0;
        transform: scale(0.8);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

// 验证中状态
.verifying-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 80px 20px 200px;

    .camera-frame {
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
        border-radius: 50%;
        background: #2a2a2a;
        border: 4px solid #4caf50;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;

        &.verifying {
            .verifying-text {
                position: absolute;
                top: 30px;
                color: #4caf50;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                padding: 0 20px;
            }

            .verifying-face {
                width: 70%;
                height: 70%;
                background: #000;
                border-radius: 50%;
                position: relative;
                overflow: hidden;

                &::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 30%;
                    background: #3a3a3a;
                }
            }
        }
    }
}

// 成功状态
.success-state {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    .success-content {
        text-align: center;

        .success-icon {
            width: 100px;
            height: 100px;
            background: #4caf50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 24px;
            font-size: 60px;
            color: #fff;
            animation: successScale 0.5s ease-out;
        }

        .success-text {
            font-size: 20px;
            font-weight: 600;
            color: #1a1a1a;
        }
    }
}

@keyframes successScale {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2);
    }
    100% {
        transform: scale(1);
    }
}
</style>
