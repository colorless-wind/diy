<template>
  <!-- 图生图3 -->
  <view class="ai-draw">
    <uni-nav-bar left-icon="back" left-text="返回" title="AIGC" backgroundColor="#f59a23" :border="false" color="#FFFFFF"
      @clickLeft="goIndex"></uni-nav-bar>
    <!-- 画面描述 -->
    <view class="sub-title">详细描述</view>
    <view class="desc-wrap">
      <textarea :placeholder="defaultDesc"
        :value="scemetype" :maxlength="300" @input="textAreaInput" />
      <view class="text-num">
        {{ scemetype.length }}/300
        <template v-if="scemetype.length">
          <view style="margin: 0 10rpx;">|</view> <uni-icons @click="reset" type="clear" size="20"
            color="#666666"></uni-icons>
        </template>
      </view>
    </view>
    <!-- 开始生成 -->
    <view class="button" @click="submit" :class="{ disabled: isLoading }">
      开始生成
      <svg t="1724940965670" class="icon loading-icon" v-if="false" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="4297" width="35" height="35">
        <path
          d="M393.664871 495.52477c0 11.307533-9.168824 20.466124-20.466124 20.466124l-103.671151 0c-11.307533 0-20.466124-9.15859-20.466124-20.466124 0-11.2973 9.15859-20.466124 20.466124-20.466124l103.671151 0C384.496048 475.058646 393.664871 484.22747 393.664871 495.52477z"
          p-id="4298" fill="#dbdbdb"></path>
        <path
          d="M805.207925 495.52477c0 11.307533-9.15859 20.466124-20.466124 20.466124l-103.671151 0c-11.2973 0-20.466124-9.15859-20.466124-20.466124 0-11.2973 9.168824-20.466124 20.466124-20.466124l103.671151 0C796.049335 475.058646 805.207925 484.22747 805.207925 495.52477z"
          p-id="4299" fill="#dbdbdb"></path>
        <path
          d="M547.600823 237.917668l0 103.671151c0 11.307533-9.15859 20.466124-20.466124 20.466124s-20.466124-9.15859-20.466124-20.466124l0-103.671151c0-11.307533 9.15859-20.466124 20.466124-20.466124C538.442232 217.451544 547.600823 226.610134 547.600823 237.917668z"
          p-id="4300" fill="#dbdbdb"></path>
        <path
          d="M547.600823 649.460722l0 103.681384c0 11.2973-9.15859 20.466124-20.466124 20.466124s-20.466124-9.168824-20.466124-20.466124l0-103.681384c0-11.2973 9.15859-20.466124 20.466124-20.466124C538.442232 628.994598 547.600823 638.163421 547.600823 649.460722z"
          p-id="4301" fill="#dbdbdb"></path>
        <path
          d="M411.562497 428.754041c-3.786233 6.569626-10.673084 10.233062-17.733896 10.233062-3.479241 0-6.999414-0.880043-10.222829-2.742461l-89.774653-51.861158c-9.782807-5.658883-13.129019-18.173918-7.480368-27.956725 5.658883-9.79304 18.173918-13.139252 27.956725-7.490601l89.774653 51.861158C413.864936 406.456199 417.22138 418.971234 411.562497 428.754041z"
          p-id="4302" fill="#dbdbdb"></path>
        <path
          d="M767.918647 634.633015c-3.796466 6.559393-10.673084 10.233062-17.744129 10.233062-3.469008 0-6.989181-0.890276-10.212596-2.752694l-89.774653-51.861158c-9.782807-5.64865-13.139252-18.173918-7.480368-27.956725 5.64865-9.79304 18.173918-13.139252 27.956725-7.480368l89.774653 51.861158C770.221086 612.32494 773.567297 624.850208 767.918647 634.633015z"
          p-id="4303" fill="#dbdbdb"></path>
        <path
          d="M673.723312 282.70778l-51.861158 89.76442c-3.786233 6.559393-10.673084 10.233062-17.744129 10.233062-3.469008 0-6.989181-0.890276-10.212596-2.752694-9.79304-5.64865-13.139252-18.163685-7.480368-27.956725l51.861158-89.76442c5.64865-9.79304 18.163685-13.139252 27.956725-7.490601C676.025751 260.399705 679.382195 272.91474 673.723312 282.70778z"
          p-id="4304" fill="#dbdbdb"></path>
        <path
          d="M467.854571 639.053698l-51.861158 89.774653c-3.796466 6.559393-10.673084 10.233062-17.744129 10.233062-3.479241 0-6.999414-0.890276-10.222829-2.752694-9.782807-5.658883-13.139252-18.173918-7.480368-27.956725l51.861158-89.774653c5.658883-9.782807 18.173918-13.129019 27.956725-7.480368C470.15701 616.755856 473.503221 629.27089 467.854571 639.053698z"
          p-id="4305" fill="#dbdbdb"></path>
        <path
          d="M460.435601 379.911636c-3.213181 1.862417-6.733355 2.742461-10.202363 2.742461-7.081279 0-13.957897-3.673669-17.744129-10.243295l-51.809993-89.795119c-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725 9.79304-5.64865 22.308075-2.292206 27.956725 7.500834l51.79976 89.795119C473.585085 361.747951 470.228641 374.262986 460.435601 379.911636z"
          p-id="4306" fill="#dbdbdb"></path>
        <path
          d="M666.089447 736.400816c-3.223415 1.852184-6.743588 2.742461-10.212596 2.742461-7.071046 0-13.957897-3.673669-17.744129-10.243295l-51.79976-89.805352c-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725 9.782807-5.64865 22.297842-2.281973 27.946492 7.500834l51.809993 89.805352C679.238932 718.237131 675.882488 730.752166 666.089447 736.400816z"
          p-id="4307" fill="#dbdbdb"></path>
        <path
          d="M760.499677 384.526747l-89.795119 51.809993c-3.223415 1.852184-6.743588 2.742461-10.212596 2.742461-7.071046 0-13.957897-3.673669-17.744129-10.243295-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725l89.805352-51.809993c9.782807-5.638417 22.297842-2.281973 27.946492 7.500834C773.649162 366.363062 770.292718 378.878097 760.499677 384.526747z"
          p-id="4308" fill="#dbdbdb"></path>
        <path
          d="M404.02073 590.180594l-89.805352 51.79976c-3.213181 1.862417-6.733355 2.742461-10.202363 2.742461-7.081279 0-13.957897-3.673669-17.744129-10.243295-5.64865-9.79304-2.292206-22.308075 7.500834-27.956725l89.795119-51.79976c9.79304-5.64865 22.308075-2.292206 27.956725 7.500834S413.81377 584.531943 404.02073 590.180594z"
          p-id="4309" fill="#dbdbdb"></path>
      </svg>
    </view>
    <uni-toast data-duration="2000" v-if="isLoading"><!---->
      <div class="uni-toast"><i class="uni-icon_toast uni-loading"></i>
        <p class="uni-toast__content"> 加载中 </p>
      </div>
    </uni-toast>
  </view>
</template>

<script>
import type14b from "../../static/img/aiDraw/type14b.png";
import type15b from "../../static/img/aiDraw/type15b.png"; // 美化
import xcdm from '../../static/img/aiDraw/xcdm.jpg'
import xcch from '../../static/img/aiDraw/xcch.jpg'

import monhy from '../../static/img/aiDraw/monhy.png'
import jingzmm from '../../static/img/aiDraw/jingzmm.png'
import langmgy from '../../static/img/aiDraw/langmgy.png'
import saibpk from '../../static/img/aiDraw/saibpk.png'
import rimf from '../../static/img/aiDraw/rimf.png'
import dongmf from '../../static/img/aiDraw/dongmf.png'
import img3dz from '../../static/img/aiDraw/3dz.png'
import saveAIMixins from '@/utils/saveAI'
export default {
  mixins: [saveAIMixins],
  data() {
    return {
      textword: '',
      scemetype: '',
      defaultDesc: '大师作品，最好的质量，高品质，高层，超详细，逼真，1个甜美的女孩，长发，叶发饰品，尖耳朵，精灵，绿色的眼睛，苍白的皮肤，裸露的肩膀，白色长裙',
      isLoading: false,
      referenceImage: '',
      referenceImageFiles: [],
      referenceImageFileObj: '',
      imgList: [],
      imgsrc: '',
      styleListNew: [
        // { url: type13b, id: 13, title: '平面插画' },
        { url: type14b, id: 14, title: '皮卡斯' },
        { url: type15b, id: 15, title: '动漫纪元' },
        { url: xcch, id: 19, title: '幻彩插画' },
        { url: xcdm, id: 18, title: '幻彩动漫' },
      ], // 风格List
      styleList1: [
        { id: 1001, url: monhy, req_key: 'img2img_comic_style_usage', title: '莫奈花园', sub_req_key: 'img2img_comic_style_monet' }, // 平面插画
        { id: 1002, url: jingzmm, req_key: 'img2img_comic_style_usage', title: '精致美漫', sub_req_key: 'img2img_comic_style_marvel' }, // 平面插画
        { id: 1003, url: langmgy, req_key: 'img2img_pretty_style_usage', title: '浪漫光影', sub_req_key: 'img2img_pretty_style_light' }, // 平面插画
        { id: 1004, url: saibpk, req_key: 'img2img_comic_style_usage', title: '赛博朋克', sub_req_key: 'img2img_comic_style_future' }, // 平面插画
      ],
      styleList2: [
        { id: 1005, url: rimf, req_key: 'img2img_makoto_style_usage', title: '日漫风', sub_req_key: '' }, // 平面插画
        { id: 1006, url: dongmf, req_key: 'img2img_cartoon_style_usage', title: '动漫风', sub_req_key: '' }, // 平面插画
        { id: 1007, url: img3dz, req_key: 'img2img_3d_style_usage', title: '3D游戏Z时代', sub_req_key: 'img2img_3d_style_era' }, // 平面插画
      ],
      styleList3: [
      ],
      styleList4: [
      ],
      styleList: [
      ], // 风格List
      styleIndex: 14, // 风格索引
      // 尺寸
      sizeList: [
        { title: '1:1', width: 48, height: 48, id: '' },
        { title: '横版', width: 46, height: 30, id: '0' },
        { title: '竖版', width: 30, height: 46, id: '1' },
      ],
      sizeIndex: '',

    }
  },
  onShow() {
    console.log('SCENE', 'AIGC');
    commonUtil.setApiConfig({
      SCENE: 'DIY',
    })
  },
  methods: {
    // 画面描述 textarea修改
    textAreaInput(e) {
      this.scemetype = e.detail.value
    },
    // 重置正面描述词
    reset() {
      this.scemetype = ''
      this.descItemIndex = null
    },
    goIndex() {
      console.log('goIndex')
      console.log('window', window)
      console.log('window.postMessage', window.postMessage)
      console.log('window.parent', window.parent)
      console.log('uni', uni)
      sessionStorage.setItem('webviewgoback', 1)
      if (window?.parent?.postMessage) {
        window?.parent?.postMessage('back1')
      }
      if (window?.postMessage) {
        window?.postMessage('back2')
      }
    },
    // 修改提示的索引
    changeIndex(attrName, index) {
      this[attrName] = index

      this.imgList = []
    },

    // 点击生成图片
    async submit() {
      console.log('styleIndex', this.styleIndex);
      // 判断画面描述
      if (this.scemetype == '') {
        // return uni.showToast({
        //   icon: 'none',
        //   duration: 2000,
        //   title: '请填写描述信息',
        // })
        this.scemetype = this.defaultDesc
      }

      uni.showLoading({
        duration: 2000,
        title: '加载中...',
      })
      this.isLoading = true;

      this.selfAIGCImgHuoshan().then((res) => {
        if (res) {
          uni.navigateTo({
            url: `/pages/resultSave/index?mode=${this.sizeIndex}`,
          })
          this.isLoading = false;
        }
      }).catch((err) => {
        this.isLoading = false;
      })
    },
    // AIGC生成图
    selfAIGCImgHuoshan(item) {
      return new Promise(async (resolve, reject) => {
        this.loading = true
        let param = {
          "bizNo": "volcengine",
          "method": 2,
          excuteMode: 'direct',
          "aigcContent": {
            "req_key": 'high_aes_general_v20_L',
            "prompt": this.scemetype,
            // "width": 600,
            // "height": 600,
            "return_url": true,
            // "use_sr": true,
          }
        }
        const res = await commonUtil.post(
          'v2AiAigc',
          param,
          (errorCode, errorMsg) => {
            console.log('v2AiAigc', errorCode);
            uni.showToast({
              icon: 'none',
              duration: 2000,
              title: '生成图片失败，请重新填写描述信息',
            })
            this.isLoading = false;
            resolve(false)
          }
        )
        const imgs = JSON.parse(res.data).image_urls
        sessionStorage.setItem('resultImg', imgs[0])
        this.collectSaveAiImgs([{
          pictureUrl: imgs[0]
        }], 9)
        resolve(res)
      })
    },
     
  },
}
</script>

<style lang="less" scoped>
@media screen and (min-width: 600px) {
  .desc-wrap {
    // transform: scale(2);
    margin-top: 100rpx !important;
  }

  .ai-draw .button {
    // transform: scale(2);
    margin-top: 200rpx !important;
  }

  .sub-title {
    padding-left: 0 !important;
    // transform: scale(2);
    margin: 0 auto !important;
    margin-top: 148px !important;
    width: 682rpx !important;
  }
}

.desc-wrap {
  width: 682rpx;
  height: 247rpx;
  background: #2C2C2C;
  border-radius: 10rpx;
  padding: 30rpx 20rpx;
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;

  uni-textarea {
    width: 100%;
    height: 150rpx;
    color: #AAAAAA;
    font-size: 28rpx;
  }

  .text-num {
    position: absolute;
    right: 25rpx;
    bottom: 24rpx;
    color: #666666;
    font-size: 28rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.ai-draw {
  width: 750rpx;
  height: 100vh;
  // overflow: hidden;
  background: url('../../static/img/homePage/bg.jpg') 0 0 no-repeat;
  background-size: cover;
  position: relative;
  margin: 0 auto;

  .logo-box {
    text-align: center;
    padding: 20rpx 0;
    //margin-bottom: 250rpx;
  }

  .logo-image {
    height: 90rpx;
  }

  .page-title {
    text-align: center;
    font-size: 32rpx;
    color: #f9f9f9;
    // margin-top: 110rpx;
    // position: fixed;
    // left: 0;
    // top: 0;
    width: 100%;
    height: 140rpx;
    line-height: 140rpx;
  }

  .sub-title {
    margin-bottom: 35rpx;
    margin-top: 96rpx;
    padding-left: 10rpx;
    padding-left: 40rpx;
    width: 682rpx;
    font-size: 32rpx;
    color: #f9f9f9;
  }

  .sub-title.top {
    padding-left: 34rpx;
    margin-top: 150rpx;
  }

  .sub-title:first-child {
    margin-top: 0;
  }

  // 参考图
  .upload-image {
    margin-left: 34rpx;
    width: 120rpx;
    height: 120rpx;
    background: #2c2c2c;
    border: 2rpx solid;
    background: #2c2c2c;
    border-color: #514e60;
    border-radius: 10rpx;
    position: relative;
    overflow: hidden;

    .upload-icon {
      width: 200rpx;
      height: 200rpx;
    }

    .upload-icon::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      width: 24rpx;
      transform: translate(-50%, -50%);
      border-top: 2rpx solid;
      color: #ffffff;
    }

    .upload-icon::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      height: 24rpx;
      transform: translate(-50%, -50%);
      border-left: 2rpx solid;
      color: #ffffff;
    }

    .upload-img {
      width: 116rpx;
      height: 116rpx;
      margin: 2rpx;
      border-radius: 8rpx;
    }
  }

  // 风格样式
  .style-wrap {
    width: 716rpx;
    padding-left: 34rpx;
    box-sizing: border-box;
  }

  .scroll-view_H {
    white-space: nowrap;
    width: 716rpx;
  }

  .scroll-view-item {
    display: inline-block;
    width: 150rpx;
    height: 150rpx;
    background-color: linear-gradient(#514e5f, #131314);
    border-radius: 10rpx;
    margin-right: 16rpx;
    position: relative;

    .style-icon {
      width: 142rpx;
      height: 142rpx;
      margin: 4rpx;
      border-radius: 10rpx;
    }

    .style-title {
      position: absolute;
      bottom: 4rpx;
      left: 4rpx;
      width: 142rpx;
      height: 96rpx;
      background-color: linear-gradient(0deg, #151417 0%, rgba(21, 20, 23, 0) 100%);
      opacity: 0.9;
      border-radius: 4px;
      font-size: 22rpx;
      color: #ffffff;
      text-align: center;
      padding-top: 45rpx;
      box-sizing: border-box;
    }
  }

  .scroll-view-item.active {
    //background: linear-gradient(to right, #ba60ff, #7869e9);
    background-color: #F59A23;
  }

  ::v-deep ::-webkit-scrollbar {
    //滚动条整体样式
    display: none;
  }

  // 开始生成
  .button {
    width: 682rpx;
    height: 80rpx;
    //background: linear-gradient(90deg, #b762ee 0%, #7968f2 100%);
    background-color: #F59A23;
    border-radius: 10rpx;
    font-size: 32rpx;
    color: #ffffff;
    text-align: center;
    line-height: 80rpx;
    margin: 96rpx auto 0;
  }
}
</style>
