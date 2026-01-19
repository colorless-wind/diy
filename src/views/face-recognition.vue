<template>
    <div class="face-recognition-page">
        <!-- 顶部控制栏 -->
        <div class="top-controls">
            <div class="close-btn" @click="handleClose">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3.1-3.6-7.6-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3.1 3.6 7.6 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" fill="#666"/>
                </svg>
            </div>
            <!-- <div class="sound-btn" @click="toggleSound">
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M625.2 64H308.8c-19.2 0-34.8 15.6-34.8 34.8v850.4c0 19.2 15.6 34.8 34.8 34.8h316.4c19.2 0 34.8-15.6 34.8-34.8V98.8c0-19.2-15.6-34.8-34.8-34.8zM580 896H444V128h136v768z" fill="#666"/>
                </svg>
            </div> -->
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
                <div class="camera-preview mirror">
                    <video ref="video" class="camera-video" autoplay playsinline muted></video>
                    <div class="camera-overlay">
                        <div class="preparing-text">准备中...</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 人脸识别主界面 -->
        <div v-else-if="status === 'recognizing'" class="recognition-state">
            <div class="camera-frame" :class="frameClass">
                <!-- 倒计时显示 -->
                <div class="countdown">{{ countdown }}秒</div>
                
                <!-- 状态提示 -->
                <div class="status-message" :class="messageClass">{{ currentMessage }}</div>
                
                <div class="camera-preview mirror">
                    <video ref="video" class="camera-video" autoplay playsinline muted></video>
                    <div class="camera-overlay">
                        <div
                            v-if="faceBox"
                            class="face-box"
                            :style="{
                                left: faceBox.left + '%',
                                top: faceBox.top + '%',
                                width: faceBox.width + '%',
                                height: faceBox.height + '%'
                            }"
                        ></div>
                    </div>
                </div>
            </div>

            <!-- <div class="recognition-actions">
                <button class="action-btn" :disabled="!faceApiReady" @click="registerFace">
                    注册人脸
                </button>
                <button class="action-btn primary" :disabled="!faceApiReady || !hasRegisteredFace" @click="verifyFaceAndProceed(false)">
                    验证人脸
                </button>
            </div>
            <div v-if="faceApiReady && hasRegisteredFace && lastVerifyDistance !== null" class="recognition-result">
                相似度：{{ (1 - lastVerifyDistance).toFixed(2) }}（阈值：{{ (1 - verifyThreshold).toFixed(2) }}）
            </div> -->

            <!-- 底部示例图标 -->
            <!-- <div class="face-guide">
                <div class="guide-icon">
                    <div class="guide-face">
                        <div class="guide-frame"></div>
                    </div>
                </div>
            </div> -->
        </div>

        <!-- 验证中状态 -->
        <div v-else-if="status === 'verifying'" class="verifying-state">
            <div class="camera-frame verifying">
                <div class="camera-preview mirror">
                    <video ref="video" class="camera-video" autoplay playsinline muted></video>
                    <div class="camera-overlay">
                        <div class="verifying-text">验证中，请保持姿势不变</div>
                    </div>
                </div>
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
            faceBox: null, // { left, top, width, height } percentage relative to video
            faceOk: false,
            lastFaceSeenAt: 0,
            currentMessage: '请允许摄像头权限',
            messageClass: 'warning',
            frameClass: 'warning',
            soundEnabled: true,
            recognitionTimer: null,
            countdownTimer: null,
            stream: null,
            detector: null,
            detectRafId: null,
            detectThrottleMs: 120,
            lastDetectAt: 0,

            // face-api（人脸“识别/比对”）
            engine: 'auto', // auto | faceapi | facedetector | simulate
            faceApiLoading: false,
            faceApiReady: false,
            faceApiError: '',
            faceApiInFlight: false,
            modelUrl: 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/model/',
            scriptUrl: 'https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.12/dist/face-api.min.js',
            lastDescriptor: null, // Float32Array
            registeredDescriptor: null, // Float32Array
            lastVerifyDistance: null,
            verifyThreshold: 0.6
        };
    },
    computed: {
        descriptorStorageKey() {
            const cardId = this.$route && this.$route.query ? this.$route.query.cardId : '';
            return `faceDescriptor:${cardId || 'default'}`;
        },
        hasRegisteredFace() {
            return !!this.registeredDescriptor;
        }
    },
    mounted() {
        // 页面加载时显示权限请求
        this.loadRegisteredDescriptor();
    },
    watch: {
        status() {
            // 状态切换会导致 video 节点被重新渲染（v-if/v-else-if），需要重新绑定 stream
            this.$nextTick(() => {
                this.attachStreamToVideo();
            });
        }
    },
    beforeDestroy() {
        this.cleanupResources();
    },
    methods: {
        clearTimers() {
            if (this.recognitionTimer) {
                clearTimeout(this.recognitionTimer);
                this.recognitionTimer = null;
            }
            if (this.countdownTimer) {
                clearInterval(this.countdownTimer);
                this.countdownTimer = null;
            }
        },
        attachStreamToVideo() {
            const video = this.$refs.video;
            if (!video || !this.stream) return;
            if (video.srcObject !== this.stream) {
                video.srcObject = this.stream;
            }
            // 尝试播放（某些浏览器会抛异常，但不影响渲染）
            try {
                const p = video.play();
                if (p && typeof p.catch === 'function') p.catch(() => {});
            } catch (e) {
                // ignore
            }
        },
        stopDetectLoop() {
            if (this.detectRafId) {
                cancelAnimationFrame(this.detectRafId);
                this.detectRafId = null;
            }
        },
        stopCamera() {
            try {
                if (this.stream) {
                    this.stream.getTracks().forEach(t => t.stop());
                }
            } catch (e) {
                // ignore
            }
            this.stream = null;
            const video = this.$refs.video;
            if (video && video.srcObject) {
                video.srcObject = null;
            }
        },
        cleanupResources() {
            this.clearTimers();
            this.stopDetectLoop();
            this.detector = null;
            this.faceApiInFlight = false;
            this.stopCamera();
        },
        loadRegisteredDescriptor() {
            try {
                const raw = localStorage.getItem(this.descriptorStorageKey);
                if (!raw) {
                    this.registeredDescriptor = null;
                    return;
                }
                const arr = JSON.parse(raw);
                if (!Array.isArray(arr) || arr.length === 0) {
                    this.registeredDescriptor = null;
                    return;
                }
                this.registeredDescriptor = new Float32Array(arr);
            } catch (e) {
                this.registeredDescriptor = null;
            }
        },
        saveRegisteredDescriptor(descriptor) {
            try {
                const arr = Array.from(descriptor);
                localStorage.setItem(this.descriptorStorageKey, JSON.stringify(arr));
            } catch (e) {
                // ignore
            }
        },
        getFaceApi() {
            if (typeof window === 'undefined') return null;
            return window.faceapi || null;
        },
        async ensureFaceApiReady() {
            if (this.faceApiReady) return true;
            if (this.faceApiLoading) {
                // 等待全局 promise
                try {
                    if (window.__faceApiModelsPromise) await window.__faceApiModelsPromise;
                    this.faceApiReady = !!this.getFaceApi();
                    return this.faceApiReady;
                } catch (e) {
                    return false;
                }
            }

            this.faceApiLoading = true;
            this.faceApiError = '';

            try {
                if (typeof window === 'undefined') throw new Error('Face API 仅支持浏览器环境');

                if (!window.__faceApiScriptPromise) {
                    window.__faceApiScriptPromise = new Promise((resolve, reject) => {
                        const existing = document.querySelector(`script[data-faceapi="1"]`);
                        if (existing) {
                            existing.addEventListener('load', () => resolve());
                            existing.addEventListener('error', () => reject(new Error('face-api 脚本加载失败')));
                            return;
                        }

                        const s = document.createElement('script');
                        s.src = this.scriptUrl;
                        s.async = true;
                        s.defer = true;
                        s.setAttribute('data-faceapi', '1');
                        s.onload = () => resolve();
                        s.onerror = () => reject(new Error('face-api 脚本加载失败'));
                        document.head.appendChild(s);
                    });
                }
                await window.__faceApiScriptPromise;

                const faceapi = this.getFaceApi();
                if (!faceapi) throw new Error('face-api 未初始化');

                if (!window.__faceApiModelsPromise) {
                    window.__faceApiModelsPromise = (async () => {
                        await faceapi.nets.tinyFaceDetector.loadFromUri(this.modelUrl);
                        await faceapi.nets.faceLandmark68Net.loadFromUri(this.modelUrl);
                        await faceapi.nets.faceRecognitionNet.loadFromUri(this.modelUrl);
                    })();
                }
                await window.__faceApiModelsPromise;

                this.faceApiReady = true;
                return true;
            } catch (e) {
                this.faceApiReady = false;
                this.faceApiError = (e && e.message) ? e.message : 'face-api 初始化失败';
                return false;
            } finally {
                this.faceApiLoading = false;
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
        async initCamera() {
            if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
                throw new Error('当前浏览器不支持摄像头访问');
            }

            const constraints = {
                audio: false,
                video: {
                    facingMode: 'user',
                    width: { ideal: 720 },
                    height: { ideal: 720 }
                }
            };

            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.stream = stream;

            await this.$nextTick();
            this.attachStreamToVideo();

            // 等待 video 元数据就绪（用于拿到 videoWidth / videoHeight）
            const video = this.$refs.video;
            if (!video) throw new Error('摄像头预览初始化失败');

            await new Promise((resolve, reject) => {
                if (video.videoWidth && video.videoHeight) {
                    resolve();
                    return;
                }
                const onLoaded = () => {
                    video.removeEventListener('loadedmetadata', onLoaded);
                    resolve();
                };
                video.addEventListener('loadedmetadata', onLoaded);
                setTimeout(() => reject(new Error('摄像头预览超时')), 8000);
            });
        },
        // face-api：检测单张人脸并返回 descriptor + box
        async detectWithFaceApi() {
            const faceapi = this.getFaceApi();
            const video = this.$refs.video;
            if (!faceapi || !video || !video.videoWidth || !video.videoHeight) return null;

            const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.5 });
            const det = await faceapi.detectSingleFace(video, options).withFaceLandmarks().withFaceDescriptor();
            if (!det) return null;

            const box = det.detection.box; // { x, y, width, height }
            return {
                box,
                descriptor: det.descriptor
            };
        },
        // face-api：循环检测（用于实时框 + 质量提示）
        startFaceApiLoop() {
            this.stopDetectLoop();
            this.faceApiInFlight = false;

            const tick = async () => {
                if (this.status !== 'recognizing') return;

                const now = Date.now();
                if (now - this.lastDetectAt < this.detectThrottleMs) {
                    this.detectRafId = requestAnimationFrame(tick);
                    return;
                }
                if (this.faceApiInFlight) {
                    this.detectRafId = requestAnimationFrame(tick);
                    return;
                }

                this.lastDetectAt = now;
                this.faceApiInFlight = true;

                try {
                    const result = await this.detectWithFaceApi();
                    const video = this.$refs.video;
                    if (!result || !video) {
                        this.lastDescriptor = null;
                        this.faceDetected = false;
                        this.faceOk = false;
                        this.faceBox = null;
                        this.currentMessage = this.faceApiLoading ? '正在加载人脸识别模型...' : '没有检测到人脸';
                        this.messageClass = 'error';
                        this.frameClass = 'error';
                    } else {
                        const { box, descriptor } = result;
                        this.lastDescriptor = descriptor;

                        const vw = video.videoWidth;
                        const vh = video.videoHeight;
                        const left = (box.x / vw) * 100;
                        const top = (box.y / vh) * 100;
                        const width = (box.width / vw) * 100;
                        const height = (box.height / vh) * 100;
                        this.faceBox = {
                            left: Math.max(0, Math.min(100, left)),
                            top: Math.max(0, Math.min(100, top)),
                            width: Math.max(0, Math.min(100, width)),
                            height: Math.max(0, Math.min(100, height))
                        };

                        this.faceDetected = true;
                        this.lastFaceSeenAt = now;

                        // 简单质量判断：大小 + 居中
                        const areaRatio = (box.width * box.height) / (vw * vh);
                        const cx = (box.x + box.width / 2) / vw;
                        const cy = (box.y + box.height / 2) / vh;
                        const centered = Math.abs(cx - 0.5) < 0.18 && Math.abs(cy - 0.5) < 0.18;
                        const sizeOk = areaRatio > 0.08 && areaRatio < 0.35;

                        if (!sizeOk) {
                            this.faceOk = false;
                            this.currentMessage = areaRatio <= 0.08 ? '请靠近一点' : '请远离一点';
                            this.messageClass = 'warning';
                            this.frameClass = 'warning';
                        } else if (!centered) {
                            this.faceOk = false;
                            this.currentMessage = '请将人脸移到中心位置';
                            this.messageClass = 'warning';
                            this.frameClass = 'warning';
                        } else {
                            this.faceOk = true;
                            this.currentMessage = this.hasRegisteredFace ? '检测到人脸，请保持不动' : '检测到人脸，可点击注册';
                            this.messageClass = 'info';
                            this.frameClass = 'info';
                        }
                    }
                } catch (e) {
                    this.lastDescriptor = null;
                    this.faceDetected = false;
                    this.faceOk = false;
                    this.faceBox = null;
                    this.currentMessage = '人脸识别失败，请检查网络或稍后重试';
                    this.messageClass = 'error';
                    this.frameClass = 'error';
                } finally {
                    this.faceApiInFlight = false;
                    this.detectRafId = requestAnimationFrame(tick);
                }
            };

            this.detectRafId = requestAnimationFrame(tick);
        },
        setupDetector() {
            if (typeof window !== 'undefined' && 'FaceDetector' in window) {
                try {
                    this.detector = new window.FaceDetector({ fastMode: true, maxDetectedFaces: 1 });
                    return true;
                } catch (e) {
                    this.detector = null;
                    return false;
                }
            }
            this.detector = null;
            return false;
        },
        startDetectLoop() {
            this.stopDetectLoop();

            const tick = async () => {
                if (this.status !== 'recognizing') return;

                const video = this.$refs.video;
                if (!video || !this.detector || !video.videoWidth || !video.videoHeight) {
                    this.detectRafId = requestAnimationFrame(tick);
                    return;
                }

                const now = Date.now();
                if (now - this.lastDetectAt < this.detectThrottleMs) {
                    this.detectRafId = requestAnimationFrame(tick);
                    return;
                }
                this.lastDetectAt = now;

                try {
                    const faces = await this.detector.detect(video);
                    if (!faces || faces.length === 0) {
                        this.faceDetected = false;
                        this.faceOk = false;
                        this.faceBox = null;
                        this.currentMessage = '没有检测到人脸';
                        this.messageClass = 'error';
                        this.frameClass = 'error';
                    } else {
                        const box = faces[0].boundingBox;
                        const vw = video.videoWidth;
                        const vh = video.videoHeight;

                        const left = (box.x / vw) * 100;
                        const top = (box.y / vh) * 100;
                        const width = (box.width / vw) * 100;
                        const height = (box.height / vh) * 100;
                        this.faceBox = {
                            left: Math.max(0, Math.min(100, left)),
                            top: Math.max(0, Math.min(100, top)),
                            width: Math.max(0, Math.min(100, width)),
                            height: Math.max(0, Math.min(100, height))
                        };

                        this.faceDetected = true;
                        this.lastFaceSeenAt = now;

                        // 简单质量判断：大小 + 居中
                        const areaRatio = (box.width * box.height) / (vw * vh);
                        const cx = (box.x + box.width / 2) / vw;
                        const cy = (box.y + box.height / 2) / vh;
                        const centered = Math.abs(cx - 0.5) < 0.18 && Math.abs(cy - 0.5) < 0.18;
                        const sizeOk = areaRatio > 0.08 && areaRatio < 0.35;

                        if (!sizeOk) {
                            this.faceOk = false;
                            this.currentMessage = areaRatio <= 0.08 ? '请靠近一点' : '请远离一点';
                            this.messageClass = 'warning';
                            this.frameClass = 'warning';
                        } else if (!centered) {
                            this.faceOk = false;
                            this.currentMessage = '请将人脸移到中心位置';
                            this.messageClass = 'warning';
                            this.frameClass = 'warning';
                        } else {
                            this.faceOk = true;
                            this.currentMessage = '检测到人脸，请保持不动';
                            this.messageClass = 'info';
                            this.frameClass = 'info';
                        }
                    }
                } catch (e) {
                    this.faceDetected = false;
                    this.faceOk = false;
                    this.faceBox = null;
                    this.currentMessage = '人脸检测失败，请换用 Chrome/Edge 重试';
                    this.messageClass = 'error';
                    this.frameClass = 'error';
                }

                this.detectRafId = requestAnimationFrame(tick);
            };

            this.detectRafId = requestAnimationFrame(tick);
        },
        async startRecognition() {
            this.cleanupResources();

            this.faceDetected = false;
            this.faceOk = false;
            this.faceBox = null;
            this.lastFaceSeenAt = 0;
            this.currentMessage = '正在打开摄像头...';
            this.messageClass = 'warning';
            this.frameClass = 'warning';

            // 进入准备状态（渲染 video 节点）
            this.status = 'preparing';

            try {
                await this.initCamera();
            } catch (e) {
                this.cleanupResources();
                // alert((e && e.message) ? e.message : '无法打开摄像头，请检查权限设置');
                this.status = 'permission'; // permission, preparing, recognizing, verifying, success
                this.showPermissionModal = true;
                return;
            }

            // 2秒后进入识别状态
            this.recognitionTimer = setTimeout(() => {
                this.startRecognizingPhase();
            }, 2000);
        },
        async startRecognizingPhase() {
            this.status = 'recognizing';
            this.loadRegisteredDescriptor();
            this.lastVerifyDistance = null;

            this.currentMessage = '正在加载人脸识别模型...';
            this.messageClass = 'warning';
            this.frameClass = 'warning';

            const faceApiOk = await this.ensureFaceApiReady();
            if (faceApiOk) {
                this.engine = 'faceapi';
                this.currentMessage = this.hasRegisteredFace ? '请将人脸置于圆形取景框内' : '请将人脸置于圆形取景框内，可点击注册';
                this.messageClass = 'warning';
                this.frameClass = 'warning';
                this.startCountdown();
                this.startFaceApiLoop();
                return;
            }

            // face-api 不可用时：回退到原生 FaceDetector，再不行就模拟
            const supported = this.setupDetector();
            if (!supported) {
                this.engine = 'simulate';
                this.currentMessage = '当前环境无法加载人脸识别模型/检测能力不足，已进入模拟流程';
                this.messageClass = 'warning';
                this.frameClass = 'warning';
                this.startCountdown();
                this.simulateFaceDetection();
                return;
            }

            this.engine = 'facedetector';
            this.currentMessage = '请将人脸置于圆形取景框内';
            this.messageClass = 'warning';
            this.frameClass = 'warning';
            this.startCountdown();
            this.startDetectLoop();
        },
        startCountdown() {
            this.countdown = 8;
            this.countdownTimer = setInterval(() => {
                this.countdown--;
                if (this.countdown <= 0) {
                    clearInterval(this.countdownTimer);
                    this.countdownTimer = null;
                    this.onCountdownFinished();
                }
            }, 1000);
        },
        async onCountdownFinished() {
            // face-api 模式：如果已有注册人脸，则进行验证；否则先注册一次（演示效果）
            if (this.engine === 'faceapi' && this.faceApiReady) {
                await this.verifyFaceAndProceed(true);
                return;
            }

            // 其他模式：仅依赖“检测到清晰人脸”
            const freshFace = this.detector
                ? (this.faceOk && (Date.now() - this.lastFaceSeenAt < 1500))
                : this.faceDetected;

            if (!freshFace) {
                this.currentMessage = '未检测到清晰人脸，请重新对准后再试';
                this.messageClass = 'error';
                this.frameClass = 'error';
                setTimeout(() => {
                    if (this.status === 'recognizing') this.startCountdown();
                }, 800);
                return;
            }

            this.status = 'verifying';
            this.stopDetectLoop();

            setTimeout(() => {
                this.status = 'success';
                setTimeout(() => {
                    this.completeRecognition();
                }, 1500);
            }, 1200);
        },
        async registerFace() {
            if (!this.faceApiReady) {
                alert(this.faceApiError || '人脸识别模型尚未就绪');
                return;
            }

            try {
                const result = await this.detectWithFaceApi();
                if (!result || !result.descriptor) {
                    alert('未检测到人脸，注册失败');
                    return;
                }
                this.registeredDescriptor = result.descriptor;
                this.saveRegisteredDescriptor(result.descriptor);
                this.currentMessage = '人脸注册成功，可点击验证或等待倒计时自动验证';
                this.messageClass = 'info';
                this.frameClass = 'info';
            } catch (e) {
                alert('注册失败，请重试');
            }
        },
        async verifyFaceAndProceed(shouldProceed) {
            if (!this.faceApiReady) {
                if (!shouldProceed) alert(this.faceApiError || '人脸识别模型尚未就绪');
                return;
            }

            const faceapi = this.getFaceApi();
            if (!faceapi) {
                if (!shouldProceed) alert('face-api 未加载');
                return;
            }

            // 没有注册人脸时：自动注册一次（演示用）
            if (!this.registeredDescriptor) {
                await this.registerFace();
                if (!this.registeredDescriptor) {
                    if (shouldProceed) this.startCountdown();
                    return;
                }
            }

            try {
                const result = await this.detectWithFaceApi();
                if (!result || !result.descriptor) {
                    this.currentMessage = '未检测到人脸，验证失败';
                    this.messageClass = 'error';
                    this.frameClass = 'error';
                    if (shouldProceed) this.startCountdown();
                    return;
                }

                const distance = faceapi.euclideanDistance(this.registeredDescriptor, result.descriptor);
                this.lastVerifyDistance = distance;

                const ok = distance < this.verifyThreshold;
                if (!ok) {
                    this.currentMessage = '验证失败，请正对摄像头重试';
                    this.messageClass = 'error';
                    this.frameClass = 'error';
                    if (shouldProceed) this.startCountdown();
                    return;
                }

                this.currentMessage = '验证通过';
                this.messageClass = 'info';
                this.frameClass = 'info';

                if (shouldProceed) {
                    this.status = 'verifying';
                    this.stopDetectLoop();
                    setTimeout(() => {
                        this.status = 'success';
                        setTimeout(() => {
                            this.completeRecognition();
                        }, 1500);
                    }, 800);
                }
            } catch (e) {
                this.currentMessage = '验证失败，请检查网络或稍后重试';
                this.messageClass = 'error';
                this.frameClass = 'error';
                if (shouldProceed) this.startCountdown();
            }
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
                    this.faceOk = currentStep.detected;
                    this.faceBox = null;
                    if (currentStep.detected) this.lastFaceSeenAt = Date.now();

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
                path: '/user-apply',
                query: {
                    type: queryType,
                    cardId: this.$route.query.cardId
                }
            });
        },
        handleClose() {
            if (confirm('确定要退出人脸识别吗？')) {
                this.cleanupResources();
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
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    padding: 120px 20px 200px;

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
        overflow: hidden;

        &.preparing {
            .preparing-text {
                color: #fff;
                font-size: 18px;
            }
        }
    }
}

// 摄像头预览与覆盖层
.camera-preview {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;

    &.mirror {
        transform: scaleX(-1);
    }

    .camera-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background: #000;
    }

    .camera-overlay {
        position: absolute;
        inset: 0;
        pointer-events: none;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0 20px;
    }

    .face-box {
        position: absolute;
        border: 2px solid rgba(64, 158, 255, 0.9);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(64, 158, 255, 0.35);
        background: rgba(64, 158, 255, 0.06);
    }
}

// 识别状态
.recognition-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    padding: 120px 20px 200px;

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
            border-color: #ff9f2f;
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
            z-index: 5;

            &.error {
                color: #ff9f2f;
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

.recognition-actions {
    margin-top: 18px;
    display: flex;
    gap: 12px;
    justify-content: center;
    width: 100%;

    .action-btn {
        min-width: 120px;
        padding: 12px 14px;
        border: none;
        border-radius: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        background: rgba(255, 255, 255, 0.9);
        color: #333;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
        transition: transform 0.15s, opacity 0.15s;

        &:active {
            transform: scale(0.98);
        }

        &:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        &.primary {
            background: #409EFF;
            color: #fff;
        }
    }
}

.recognition-result {
    margin-top: 10px;
    font-size: 13px;
    color: #666;
    text-align: center;
}

// 验证中状态
.verifying-state {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    min-height: 100vh;
    padding: 120px 20px 200px;

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
        overflow: hidden;

        &.verifying {
            .verifying-text {
                position: absolute;
                top: 30px;
                color: #4caf50;
                font-size: 16px;
                font-weight: 500;
                text-align: center;
                padding: 0 20px;
                z-index: 5;
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
