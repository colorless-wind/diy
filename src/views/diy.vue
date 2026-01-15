<style scoped lang="less">
.faDiv {
  width: 100%;
  min-height: 100vh;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  /* 防止ios 出现点击div 出现选中效果*/
  position: relative;
  overflow: auto;
  background: #0362AA;
}

.content {
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;

  .content_box {
    background: #fff;
    width: 100%;
    box-shadow: 4px 4px 2px 0px rgba(0, 0, 0, 0.36);
    padding: 20px 0px;
    box-sizing: border-box;
    padding-bottom: 0;
  }
}

[v-clock] {
  display: none;
}

.Template_box {
  .uploadbox {
    position: absolute;
    width: 100%;
    height: 206px;
    top: 0;
    left: 0;
    z-index: 10;

    .uploadimg {
      display: block;
      width: 65px;
      height: 65px;
      margin: 45px auto;
      margin-bottom: 5px;
    }

    .text1 {
      font-size: 16px;
      text-align: center;
    }

    .imgbox {
      margin: 0 auto;
      width: 70%;
      display: flex;
      justify-content: space-around;
      margin-top: 20px;

      img {
        width: 30px;
        max-height: 32px;
      }
    }
  }
}

.textbox {
  padding: 20px 16px;

  .text {
    white-space: pre-line;
    color: #999999;
    line-height: 23px;
    font-size: 12px;
  }
}

// 背景
.backimg_box {
  position: absolute;
  z-index: 40;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  // // 裁剪区域
  #cardCover {}

  #cardCover .container {
    z-index: 9;
    position: fixed;
    left: 0;
    top: 0px;
    right: 0;
    bottom: 0;
    background: #f3f5f9;
    overflow: hidden;
  }

  #cardCover #image {
    max-width: 100%;
  }

  .cover {
    color: #f00;
    position: fixed;
    top: 40px;
    width: 100%;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: #fff;
  }

  .backimg_box_btn {
    position: fixed;
    width: 100%;
    height: 40px;
    background: #fff;
    top: 0;
    z-index: 10;
    left: 0;

    svg {
      width: 22px;
      height: 22px;
      fill: #787878;
    }

    .file_svg_back {
      position: absolute;
      left: 20px;
      top: 10px;
    }

    .file_svg_get {
      position: absolute;
      right: 20px;
      top: 10px;
    }
  }
}

@keyframes with1 {
  0% {
    width: 56px;
  }

  50% {
    width: 126px;
  }

  100% {
    width: 56px;
  }
}

@keyframes with2 {
  0% {
    width: 56px;
  }

  50% {
    width: 126px;
  }

  100% {
    width: 56px;
  }
}

@keyframes with3 {
  0% {
    width: 56px;
  }

  50% {
    width: 126px;
  }

  100% {
    width: 56px;
  }
}

// 贴纸
.Sticker_box {
  .header {
    background: #fff;
    width: 100%;
    position: relative;
    display: flex;
    height: 50px;
    justify-content: space-around;

    .text {
      font-size: 16px;
      color: #333333;
      line-height: 50px;
      text-align: center;
      transition: all .2s ease-in-out;
    }

    .text.active1,
    .text.active2,
    .text.active3 {
      color: #FF8D05;
    }

    .anmation_line {
      position: absolute;
      bottom: 0;
      transform: translateX(-50%);
      width: 56px;
      height: 3px;
      background: #FF8D05;
      transition: all .4s;
    }

    .anmation_line.active1 {
      left: 16.5%;
      animation: with1 .4s 1;
    }

    .anmation_line.active2 {
      left: 50.5%;
      animation: with2 .4s 1;
    }

    .anmation_line.active3 {
      left: 84.5%;
      animation: with3 .4s 1;
    }

  }
}

.sticker_list {
  overflow: auto;
  white-space: nowrap;
  padding: 15px 7px;

  .list {
    display: inline-block;
    width: 90px;
    height: 90px;
    margin-right: 7px;

    img {
      width: 100%;
    }
  }

  .list:last-child {
    margin-right: 0;
  }
}

.btn_box {
  display: block;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  background: #fff;
  padding-top: 20px;
  margin-bottom: 0;
  padding-bottom: 0;
  box-sizing: border-box;

  .btn_a {
    width: 160px;
    height: 40px;
    background: #FFF8F0;
    border: 1px solid #FFA02D;
    border-radius: 20px;
    box-shadow: none;
    color: #FFA031;
    border: 1px solid #FFA031;
    font-size: 20px;
    outline: none;
    margin-right: 15px;
  }

  .btn_b {
    width: 160px;
    height: 40px;
    border-radius: 20px;
    background: linear-gradient(-72deg, #FF9F2F 0%, #FFB053 100%);
    color: #fff;
    box-shadow: none;
    border: 0;
    font-size: 20px;
    outline: none;
  }

  .bottomdiv {
    margin-top: 20px;
    width: 100%;
    min-height: 20px;
    height: calc(env(safe-area-inset-bottom)+20px); //兼容iphoneX;
    background: #FFF8F0;
  }
}

//    编辑模板
.Template_box {
  background: #E0F2FF;
  margin: 0 0px;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  .template {
    position: relative;
    width: 100%;
    height: auto;

    .img_box {
      position: relative;
      width: 100%;
      margin: 0px 0;
      box-sizing: border-box;
      overflow: hidden;

      p {
        position: absolute;
        white-space: pre-line;
      }

      img {
        position: absolute;
        display: block;
      }
    }

    .othercard_btn {
      position: absolute;
      bottom: 5px;
      right: 5px;
      width: 48px;
      height: 48px;
      padding-top: 9px;
      border-radius: 50%;
      font-size: 14px;
      color: #333333;
      background: #DDDDDD;
      line-height: 16px;
      box-sizing: border-box;
      text-align: center;
    }
  }

  .linebox {
    position: absolute;
    width: 60%;
    top: 60%;
    left: 10%;
    padding: 10px 0;

    .lineboxs {
      width: 100%;
      height: 1px;
      background: #343C4D;
    }
  }
}

// 文字选择框
.choosebox {
  position: absolute;
  border: 1px solid #fff;
  /*no*/
  z-index: 25;
  pointer-events: none;

  .close svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: -12px;
    left: -12px;
    font-size: 26px;
    z-index: 2;
    pointer-events: auto !important;
  }

  .route svg {
    width: 28px;
    height: 28px;
    top: -14px;
    right: -14px;
    position: absolute;
    font-size: 26px;
    z-index: 2;
    pointer-events: auto !important;
  }

  .scale svg {
    width: 28px;
    height: 28px;
    position: absolute;
    bottom: -14px;
    right: -14px;
    font-size: 26px;
    z-index: 2;
    pointer-events: auto !important;
  }

  .detale svg {
    width: 28px;
    height: 28px;
    position: absolute;
    left: -14px;
    bottom: -14px;
    font-size: 26px;
    z-index: 2;
    pointer-events: auto !important;
  }
}

// 加载层
.loadbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, .5);
  box-sizing: border-box;
  bottom: 0;
  z-index: 10;

  .loadboxs {
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    border-radius: 20px;
    overflow: hidden;
    transform: translateX(-50%) translateY(-50%);

    img {
      display: block;
      width: 100%;
    }
  }
}

/deep/.line-e {
  width: 1px;
  height: calc(100% - 20px);
  display: inline-block;
  border-right: 1px dashed red;
  /*no*/
  position: absolute;
  top: 5%;
  right: 3.27%;
  cursor: e-resize;
}

/deep/.line-n {
  width: calc(100% - 20px);
  height: 1px;
  display: inline-block;
  border-top: 1px dashed red;
  /*no*/
  position: absolute;
  top: 5%;
  left: 3.27%;
  cursor: n-resize;
}

/deep/.line-w {
  width: 1px;
  height: calc(100% - 20px);
  display: inline-block;
  border-left: 1px dashed red;
  /*no*/
  position: absolute;
  top: 5%;
  left: 3.27%;
  cursor: w-resize;
}

/deep/.line-s {
  width: calc(100% - 20px);
  height: 1px;
  display: inline-block;
  border-bottom: 1px dashed red;
  /*no*/
  position: absolute;
  bottom: 5%;
  left: 3.27%;
  cursor: s-resize;
}

/deep/.cropper_text {
  position: absolute;
  font-size: 14px;
  color: #fff;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
<template>
<div class="faDiv">
  <div class="content">
    <div class="content_box">
      <!-- 编辑区域 -->
      <div class="Template_box">
        <div class="uploadbox" v-if="!imgback_arr.photoUrl">
          <img @click="uploads()" src="../assets/images/img/upload.png" class="uploadimg" alt="">
          <p @click="uploads()" class="text1">{{ $t('diy.clickUpload') }}</p>
          <div class="imgbox">
            <img src="../assets/images/img/head1.png" alt="">
            <img src="../assets/images/img/head2.png" alt="">
            <img src="../assets/images/img/head3.png" alt="">
          </div>
        </div>
        <div class="template" @touchmove.prevent>
          <div @click="closebox" class="img_box" id="html2canvas" ref="imageWrapper">
            <img @mousedown="down" @touchstart="down" @mousemove="move" @touchmove.prevent="move" @mouseup="end"
              @touchend="end" @click.prevent="chooseclass" v-for="(item, index) in imgarr" :src="item.photoUrl"
              :class="item.classname" :style="item.style" :key="index">
            <img :src="imgback_arr.photoUrl" :class="imgback_arr.classname" :style="imgback_arr.style">
            <!-- 选择框 -->
            <div class="choosebox" v-show="isshow">
              <div class="detale" @click="removechild"><svg t="1603762355703" class="icon" viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1773" width="200" height="200">
                  <path
                    d="M 512 512 m -255.737 0 a 255.737 255.737 0 1 0 511.475 0 a 255.737 255.737 0 1 0 -511.475 0 Z"
                    fill="#ffffff" p-id="1774"></path>
                  <path
                    d="M 637.311 422.492 L 419.935 639.868 c -10.2294 10.2294 -25.5737 10.2294 -35.8032 0 c -10.2294 -10.2294 -10.2294 -25.5737 0 -35.8032 l 217.378 -217.378 c 10.2294 -10.2294 25.5737 -10.2294 35.8032 0 c 10.2294 7.67216 10.2294 25.5737 0 35.8032 Z"
                    fill="#3e424b" p-id="1775"></path>
                  <path
                    d="M 386.689 422.492 l 217.378 217.378 c 10.2294 10.2294 25.5737 10.2294 35.8032 0 c 10.2294 -10.2294 10.2294 -25.5737 0 -35.8032 L 422.492 386.689 c -10.2294 -10.2294 -25.5737 -10.2294 -35.8032 0 c -10.2294 7.67216 -10.2294 25.5737 0 35.8032 Z"
                    fill="#3e424b" p-id="1776"></path>
                </svg></div>
              <div class="close" @click="copy_element"><svg t="1603763457843" class="icon" viewBox="0 0 1024 1024"
                  version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2245" width="200" height="200">
                  <path
                    d="M 512 512 m -315.298 0 a 315.298 315.298 0 1 0 630.593 0 a 315.298 315.298 0 1 0 -630.593 0 Z"
                    fill="#ffffff" p-id="2246"></path>
                  <path
                    d="M 307.058 496.234 h 189.178 v 31.5298 h -189.178 Z M 600.283 401.647 h -37.8355 V 385.881 c 15.7648 0 25.2238 0 37.8355 -15.7648 v 31.5298 Z"
                    fill="#17191d" p-id="2247"></path>
                  <path
                    d="M 385.881 417.41 h 31.5298 v 189.178 H 385.881 Z M 600.283 370.117 H 638.119 v 283.768 h -37.8355 Z"
                    fill="#17191d" p-id="2248"></path>
                </svg></div>
              <div class="scale" @mousedown="s_down" @touchstart="s_down" @mousemove="s_move"
                @touchmove.prevent="s_move" @mouseup="s_end" @touchend="s_end"><svg t="1603762381784" class="icon"
                  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2056" width="200"
                  height="200">
                  <path
                    d="M 512 512 m -255.737 0 a 255.737 255.737 0 1 0 511.475 0 a 255.737 255.737 0 1 0 -511.475 0 Z"
                    fill="#ffffff" p-id="2057"></path>
                  <path
                    d="M 522.229 691.015 c -15.3441 0 -25.5737 -10.2294 -25.5737 -25.5737 s 10.2294 -25.5737 25.5737 -25.5737 c 71.6065 0 127.868 -56.2621 127.868 -127.868 s -56.2621 -127.868 -127.868 -127.868 s -127.868 56.2621 -127.868 127.868 c 0 15.3441 -10.2294 25.5737 -25.5737 25.5737 s -25.5737 -10.2294 -25.5737 -25.5737 c 0 -99.7362 79.2781 -179.015 179.015 -179.015 s 179.015 79.2781 179.015 179.015 s -79.2781 179.015 -179.015 179.015 Z"
                    fill="#41444d" p-id="2058"></path>
                  <path
                    d="M 384.132 583.607 l 56.2621 -94.6223 c 2.55737 -2.55737 0 -7.67216 -5.11474 -7.67216 l -132.984 15.3441 c -5.11474 0 -5.11474 5.11474 -2.55737 7.67216 l 76.7217 79.2781 c 2.55737 2.55737 5.11474 2.55737 7.67216 0 Z"
                    fill="#41444d" p-id="2059"></path>
                </svg></div>
            </div>
          </div>
        </div>
      </div>
      <div class="textbox">
        <p class="text">{{ $t('diy.imageSize') }}</p>
        <p class="text">{{ $t('diy.imageDimensions') }}</p>
        <p class="text">{{ $t('diy.contentGuidelines') }}</p>
      </div>
    </div>
  </div>
  <div class="Sticker_box">
    <div class="header">
      <p @click="change_sticker(0)" class="text" :class="{ 'active1': Sticker_type == 0 }">{{ $t('diy.emojiSticker') }}
      </p>
      <p @click="change_sticker(1)" class="text" :class="{ 'active2': Sticker_type == 1 }">{{ $t('diy.textSticker') }}
      </p>
      <p @click="change_sticker(2)" class="text" :class="{ 'active3': Sticker_type == 2 }">{{ $t('diy.moodSticker') }}
      </p>
      <div :class="{ 'active1': Sticker_type == 0, 'active2': Sticker_type == 1, 'active3': Sticker_type == 2 }"
        class="anmation_line"></div>
    </div>
    <div class="sticker_list">
      <div @click="geticon(items.type, index)" v-for="(items, index) in img_list" :key=index class="list">
        <img :src="items.thumbnailUrl" alt="">
      </div>
    </div>
  </div>
  <div v-show="imgback_arr.photoUrl" class="btn_box">
    <button class="btn_a" @click="reload_start">{{ $t('diy.reUpload') }}</button>
    <button class="btn_b" @click="nextStep">{{ $t('diy.nextStep') }}</button>
    <div class="bottomdiv"></div>
  </div>
  <!-- 背景蒙层 -->
  <div v-show='isbackimg' class="backimg_box">
    <!-- 图片裁剪区 -->
    <div id="cardCover">
      <!--* cropper遮罩层 *-->
      <div class="container">
        <div id="btnMarDiv">
          <img id="image" :src="url" alt="Picture" />
        </div>
        <p v-if="!iscover" class="cover">{{ $t('diy.imageNotFull') }}</p>
      </div>
      <div class="backimg_box_btn">
        <svg @click="backimg_back" t="1600855585333" class="icon file_svg_back" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="11995" width="200" height="200">
          <path d="M877.216 491.808" p-id="11996" fill="#515151"></path>
          <path
            d="M575.328 510.496 946.784 140.672c17.568-17.504 17.664-45.824 0.192-63.424-17.504-17.632-45.792-17.664-63.36-0.192L512.032 446.944 143.712 77.216C126.304 59.712 97.92 59.648 80.384 77.12 62.848 94.624 62.816 123.008 80.288 140.576l368.224 369.632L77.216 879.808c-17.568 17.504-17.664 45.824-0.192 63.424 8.736 8.8 20.256 13.216 31.776 13.216 11.424 0 22.848-4.352 31.584-13.056l371.36-369.696 371.68 373.088C892.192 955.616 903.68 960 915.168 960c11.456 0 22.912-4.384 31.648-13.088 17.504-17.504 17.568-45.824 0.096-63.392L575.328 510.496 575.328 510.496zM575.328 510.496"
            p-id="11997" fill="#515151"></path>
        </svg>
        <svg @click="backimg_get" t="1600855637259" class="icon file_svg_get" viewBox="0 0 1024 1024" version="1.1"
          xmlns="http://www.w3.org/2000/svg" p-id="13036" width="200" height="200">
          <path
            d="M349.372356 879.102519L1.047626 530.763339l61.30417-61.30417 287.02056 287.027785 607.47122-607.45677 61.296945 61.30417z"
            fill="#515151" p-id="13037"></path>
        </svg>
      </div>
    </div>
  </div>
  <input type="file" accept="image/*" class="file_ipt" ref="backimg_ipt" @change="upload($event)">
  <load :tc_show="tc_show">{{ $t('diy.loading') }}</load>
  <!-- loading -->
  <div v-if="isexamine" class="loadbox" @touchmove.prevent>
    <div class="loadboxs">
      <img src="../assets/images/img/loading-01.gif" class="loading" alt="">
    </div>
  </div>
</div>
</template>
<script>
var zoom = 1;
import wx from "weixin-js-sdk";
import hideOptionMenu from "../assets/js/hidemenu";
import http from "../utils/http";
// import html2canvas from "html2canvas";
import Load from "../components/loading.vue";
import vueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import Cropper from "cropperjs"; //裁剪插件
import "cropperjs/dist/cropper.css";
import AlloyFinger from "alloyfinger"; //手势插件
import { MessageBox } from 'mint-ui';  //弹框
import html2canvas from "../utils/html2canvas";
import diyCardApi from "../api/diycard";
import { resolve } from "core-js/fn/promise";
export default {
  components: {
    Load,
  },
  data() {
    return {
      isexamine: false,
      position: { x: 0, y: 0 },
      tc_show: false,
      imgback_arr: '',
      imgarr: [],
      isshow: false,
      classname: '',
      style: '',
      isbackimg: false,
      iscover: true,
      url: "",
      Sticker_type: 0,//贴纸类型
      img_list: [],
      img_list1: [
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_1.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_1.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_2.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_2.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_3.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_3.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_4.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_4.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_5.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_5.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_6.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_6.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_7.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_7.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_8.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_8.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_expression/s_9.png'),
          photoUrl: require('../assets/images/Sticker_expression/b_9.png'),
        }
      ],
      img_list2: [
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_1.png'),
          photoUrl: require('../assets/images/Sticker_text/b_1.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_2.png'),
          photoUrl: require('../assets/images/Sticker_text/b_2.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_3.png'),
          photoUrl: require('../assets/images/Sticker_text/b_3.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_4.png'),
          photoUrl: require('../assets/images/Sticker_text/b_4.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_5.png'),
          photoUrl: require('../assets/images/Sticker_text/b_5.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_6.png'),
          photoUrl: require('../assets/images/Sticker_text/b_6.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_7.png'),
          photoUrl: require('../assets/images/Sticker_text/b_7.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_8.png'),
          photoUrl: require('../assets/images/Sticker_text/b_8.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_9.png'),
          photoUrl: require('../assets/images/Sticker_text/b_9.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_text/s_10.png'),
          photoUrl: require('../assets/images/Sticker_text/b_10.png'),
        }
      ],
      img_list3: [
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_1.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_1.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_2.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_2.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_3.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_3.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_4.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_4.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_5.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_5.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_6.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_6.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_7.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_7.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_8.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_8.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_9.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_9.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_10.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_10.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_11.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_11.png'),
        },
        {
          type: 'img',
          thumbnailUrl: require('../assets/images/Sticker_mood/s_12.png'),
          photoUrl: require('../assets/images/Sticker_mood/b_12.png'),
        }
      ]
    };
  },
  watch: {},
  created() { },
  mounted() {
    this.setdiv()
    this.img_list = this.img_list1
    this.init()
  },
  methods: {
    // 下一步
    async nextStep() {
      this.aitest()
      console.log('this.$route.query', this.$route.query)
      // 1. 生成图片
      const imageBase64Data = await this.creatimg()
      if (!imageBase64Data) return console.error('图片生成失败imageBase64Data=', imageBase64Data)
      // 2. 上传卡面图片
      const designInfo = await this.userUploadCardFace(imageBase64Data)
      if (!designInfo.data) return console.error('上传卡面图片失败designInfo=', designInfo)
      // 3. 校验图审
      if (!this.$route.query.needAiReview || this.$route.query.needAiReview == 'false') return console.log('跳过AI图审 this.$route.query.needAiReview=', this.$route.query.needAiReview)
      // 4. 提交卡面进行图审
      const reviewInfo = await this.submitAIReview()
      console.debug('reviewInfo', reviewInfo)
      // 跳转下一页
      this.$router.push({
        path: '/card-detail',
        query: {
          ...this.$route.query
        }
      })
    },
    // 用户上传卡面
    userUploadCardFace(imageBase64) {
      return diyCardApi.design.diyUpload({
        orderId: this.$route.query.oid,
        imageBase64: imageBase64,
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"designId":"979841fd5a0f4c96954afe17d7747c68","imageUrl":"https://mock.example.com/diy_upload_1768470385967.png"},"datas":null}
    },
    // 提交卡面进行图审
    submitAIReview() {
      return diyCardApi.design.reviewSubmit({
        orderId: this.$route.query.oid,
        // imageBase64: imageBase64,
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"reviewResult":"PASS","reviewReason":null,"ucode":"UC20260115000001","qrcodeUrl":null,"skippedReview":null},"datas":null}
    },
    // 查询图审结果
    checkAIReview() {
      return diyCardApi.design.reviewResult({
        orderId: this.$route.query.oid,
        // imageBase64: imageBase64,
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"reviewResult":"PASS","reviewReason":null},"datas":null}
    },
    // 查询图审结果
    aitest() {
      return diyCardApi.design.aiGenerate({
        orderId: this.$route.query.oid,
        prompt: 'cat'
        // imageBase64: imageBase64,
      })
      // {"status":null,"errorMsg":null,"subStatus":"0","subErrorMsg":"","data":{"reviewResult":"PASS","reviewReason":null},"datas":null}
    },
    // 添加元素
    geticon(type, index) {
      if (!this.imgback_arr.photoUrl) {
        this.$toasted.show(this.$t("diy.pleaseAddCardImage"), {
          theme: "toasted-primary",
          position: "center",
          duration: 1000
        });
        return false
      }
      this.isshow = false
      var div = this.$refs.imageWrapper
      var arr = div.childNodes
      if (arr.length == 6 && type != "Template" && type != "backimg") {
        this.$toasted.show(this.$t("diy.elementLimit"), {
          theme: "toasted-primary",
          position: "center",
          duration: 1000
        });
        return false
      }
      this.tc_show = true
      //生成位置随机数
      var left = random(1, 60)
      var top = random(1, 40)
      function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      var that = this
      this.isshow = false
      if (type == "img") {
        var num = 1
        num = samename(num)
        var data = {
          classname: "img" + num,
          style: "top:" + top + "%;left:" + left + "%;width:20%;z-index:" + (num + 1),
          photoUrl: this.img_list[index].photoUrl,
        }
        // this.img_arr.push(data)
        this.imgarr.push(data)
        this.tc_show = false
        function samename(num) {
          var classname = "img" + num
          for (var i = 0; i < that.imgarr.length; i++) {
            if (classname == that.imgarr[i].classname) {
              num++
              return samename(num)
            }
          }
          return num
        }
      }
    },
    change_sticker(type) {
      this.Sticker_type = type
      switch (type) {
        case 0:
          this.img_list = this.img_list1
          break;
        case 1:
          this.img_list = this.img_list2
          break;
        case 2:
          this.img_list = this.img_list3
          break;
      }
    },
    // 组件初始化
    init() {
      zoom = 1
      var h = document.documentElement.clientHeight;
      var that = this;
      // this.menu_list2 = this.menu_list1[0].list
      //  动态变更编辑区域宽高
      var img_box = document.getElementsByClassName('img_box')[0]
      var height = (673 / 1051) * img_box.clientWidth
      img_box.style.height = height + "px"
      //备份文字数据库

      //*裁剪相关
      var image = document.getElementById("image");
      var minAspectRatio = 1.5;
      var maxAspectRatio = 1.5;
      this.cropper = new Cropper(image, {
        aspectRatio: 1051 / 673, //定义裁剪框的固定长宽比
        autoCropArea: 0.6, //设置裁剪区域占图片的大小
        cropBoxResizable: false, //启用以通过拖动来调整裁剪框的大小
        cropBoxMovable: false,
        viewMode: 1, //视图控制
        // - 0 无限制
        // - 1 限制裁剪框不能超出图片的范围
        // - 2 限制裁剪框不能超出图片的范围 且图片填充模式为 cover 最长边填充
        // - 3 限制裁剪框不能超出图片的范围 且图片填充模式为 contain 最短边填充
        background: true, //是否在容器内显示网格状的背景
        dragMode: "move", //图片可移动
        toggleDragModeOnDblclick: false, //是否可以通过双击切换拖拽图片模式
        movable: true, //是否可以移动图片
        zoomable: true, //是否可以缩放图片（改变焦距）
        rotatable: true, //启用旋转图像
        rotateOnTouch: true,
        zoomOnWheel: true, //是否可以通过鼠标滚轮缩放图片
        guides: false, //是否显示裁剪框的虚线
        center: true, //是否显示裁剪框中间的+
        scalable: true, //是否可以缩放图片
        minCropBoxWidth: 334, //裁剪框大小
        minCropBoxHeight: 210,
        minContainerHeight: h,
        zoomOnTouch: true, //是否可以通过拖拽触摸缩放图片
        crop(event) { },
        scale(x, y) {
        },
        ready: function (e) {
          document.getElementsByClassName("line-e")[0].classList.remove("cropper-line", "cropper-hidden")
          document.getElementsByClassName("line-w")[0].classList.remove("cropper-line", "cropper-hidden")
          document.getElementsByClassName("line-n")[0].classList.remove("cropper-line", "cropper-hidden")
          document.getElementsByClassName("line-s")[0].classList.remove("cropper-line", "cropper-hidden")
          var text1 = document.createElement("p");
          text1.setAttribute("class", "cropper_text");
          // text1.innerHTML='红框内为制卡区域';
          document.querySelector(".cropper-view-box").appendChild(text1);
          var cropper = this.cropper;
          var containerData = cropper.getContainerData();
          var cropBoxData = cropper.getCropBoxData();
          var aspectRatio = cropBoxData.width / cropBoxData.height;
          var newCropBoxWidth;

          if (aspectRatio < minAspectRatio || aspectRatio > maxAspectRatio) {
            newCropBoxWidth =
              cropBoxData.height * ((minAspectRatio + maxAspectRatio) / 2);
          }
          //设置裁剪框的位置（固定在页面上）
          let left =
            (cropper.getContainerData().width - cropper.getCropBoxData().width) /
            2;
          let top = (containerData.height - cropper.getCropBoxData().height) /
            2;
          cropper.setCropBoxData({
            left: left,
            top: top
          });
          that.croppable = true;
          //调用手势操作（暂只用到了双指旋转）
          that.fingerOperate();
        },
        cropend: function (e) {
          that.iscoved();
        },
        zoom: function () {
          if (zoom > 2) {
            if (!that.istips) {
              that.istips = true
              that.$toasted.show(this.$t("diy.zombieTip"), {
                theme: "toasted-primary",
                position: "center",
                duration: 2000
              });
              setTimeout(() => {
                that.istips = false
              }, 2000);
            }
          }
        },
        built: function () { }
      });
    },
    // 回退
    backpage() {
      this.$router.back(-1)
    },
    //匹配不同屏幕的样式
    setdiv() {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      var wh = w / h;
      console.log(wh)
      if (wh > 0.563) {
        document.getElementsByClassName('btn_box')[0].style.position = 'static'
      }
    },
    reload_start() {
      if (document.getElementsByClassName('cropper-container')[0]) {
        var croppers = document.getElementsByClassName('cropper-container')[0]
        croppers.remove();
      }
      this.isbackimg = false
      localStorage.removeItem('imgResult')
      this.imgback_arr = []
      this.imgarr = []
      this.isshow = false
    },
    // 关闭裁剪背景
    backimg_back() {
      if (document.getElementsByClassName('cropper-container')[0]) {
        var croppers = document.getElementsByClassName('cropper-container')[0]
        croppers.remove();
      }
      this.isbackimg = false
    },
    // 输出背景
    backimg_get() {
      if (!this.iscover) {
        this.$toasted.show(this.$t("diy.cropperTip"), {
          theme: "toasted-primary",
          position: "center",
          duration: 2000
        });
        return
      }
      this.cas = this.cropper.getCroppedCanvas({
        width: 1051,
        height: 673
      });
      this.ctx = this.cas.getContext("2d");
      var data = {
        classname: "backimage",
        style: "top:0%;left:0%;width:100%;z-index:1",
        photoUrl: this.cas.toDataURL("image/png"),
      }
      this.imgback_arr = data
      this.backimg_back()
    },
    // 选择元素
    chooseclass(e) {
      this.istextarea = false
      this.deg = 0
      var that = this
      this.isline = true
      e.stopPropagation();
      var classname = e.target.className;

      //判断点击元素的标签
      var tagName = e.target.tagName
      // console.log(tagName)
      // this.show_edit_text = false
      if (tagName == 'IMG' || tagName == 'PNG' || tagName == 'JEPG') {
        if (classname.indexOf('line') != '-1') this.isline = false
        if (this.classname != "") {
          this.closebox()
        }
      }
      if (classname != "") {
        this.isshow = true;
        this.classname = classname;
        this.route()
        var choosebox = document.getElementsByClassName("choosebox")[0];
        choosebox.style.left = e.target.offsetLeft - ((this.scale - 1) * e.target.clientWidth / 2) + "px";
        choosebox.style.top = e.target.offsetTop - ((this.scale - 1) * e.target.clientHeight / 2) + "px";
        choosebox.style.width = e.target.clientWidth * this.scale + "px";
        choosebox.style.height = e.target.clientHeight * this.scale + "px";
        // choosebox.style.zIndex = 4;
        choosebox.style.transform = "rotate(" + this.deg + "deg)"
      }
    },
    // 实现移动端拖拽
    down(e) {
      var classarr = e.target.className.split(" ")[0];
      if (classarr == this.classname) {
        this.flags = true;
      } else {
        return;
      }
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.route()
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = document.getElementsByClassName(this.classname)[0].offsetLeft;
      this.dy = document.getElementsByClassName(this.classname)[0].offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        var moveDiv = document.getElementsByClassName(this.classname)[0];
        var choosebox = document.getElementsByClassName("choosebox")[0];
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        moveDiv.style.left = this.xPum + "px";
        moveDiv.style.top = this.yPum + "px";
        choosebox.style.left = this.xPum - ((this.scale - 1) * moveDiv.clientWidth / 2) + "px";
        choosebox.style.top = this.yPum - ((this.scale - 1) * moveDiv.clientHeight / 2) + "px";
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
          "touchmove",
          function () {
            if (this.flags) {
              event.preventDefault();
            }
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
      // 保存位置到数据模型
      const element = document.getElementsByClassName(this.classname)[0];
      if (element && this.classname.startsWith('img')) {
        const index = this.imgarr.findIndex(item => item.classname === this.classname);
        if (index !== -1) {
          // 获取当前位置样式
          const top = element.style.top;
          const left = element.style.left;
          // 更新数据模型中的样式
          let style = this.imgarr[index].style;
          style = style.replace(/top:\s*[^;]+;/, `top:${top};`);
          style = style.replace(/left:\s*[^;]+;/, `left:${left};`);
          this.imgarr[index].style = style;
        }
      }
    },
    //旋转缩放  按下
    s_down(e) {
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.route()
      this.r_flags = true
      this.position.x = document.getElementsByClassName("Template_box")[0].offsetLeft;
      this.position.y = document.getElementsByClassName("Template_box")[0].offsetTop;
      this.dx = document.getElementsByClassName(this.classname)[0].offsetLeft;
      this.dy = document.getElementsByClassName(this.classname)[0].offsetTop;
    },
    //旋转缩放 移动
    s_move() {
      if (this.r_flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        var moveDiv = document.getElementsByClassName(this.classname)[0];
        var choosebox = document.getElementsByClassName("choosebox")[0];
        this.nx = Math.abs(touch.clientX - this.position.x); //鼠标相对于盒子坐标
        this.ny = Math.abs(touch.clientY - this.position.y);
        this.xPum = this.nx;
        this.yPum = this.ny;
        var cx = this.dx + (moveDiv.clientWidth / 2)
        var cy = this.dy + (moveDiv.clientHeight / 2)

        var ox = this.xPum - cx;//cx,cy为圆心
        var oy = this.yPum - cy;
        //旋转
        var to = Math.abs(ox / oy);
        var angle = (Math.atan(to) / (2 * Math.PI) * 360) - 90;//鼠标相对于旋转中心的角度
        var initdeg = (Math.atan(Math.abs((moveDiv.clientWidth / 2) / (moveDiv.clientHeight / 2))) / (2 * Math.PI) * 360) - 90;
        if (ox < 0 && oy < 0)//相对在左上角，第四象限，js中坐标系是从左上角开始的，这里的象限是正常坐标系
        {
          angle = -angle + 180
        } else if (ox < 0 && oy > 0)//左下角,3象限
        {
          angle = 180 + angle
        } else if (ox > 0 && oy < 0)//右上角，1象限
        {
          angle = angle;
        } else if (ox > 0 && oy > 0)//右下角，2象限
        {
          angle = - angle;
        }
        angle = angle - Math.abs(initdeg)
        if (angle > 360) angle = angle - 360
        //缩放
        var a1 = Math.sqrt((Math.pow(moveDiv.clientWidth / 2, 2)) + Math.pow(moveDiv.clientHeight / 2, 2))
        var a2 = Math.sqrt((ox * ox) + (oy * oy))
        var scale = a2 / a1
        if (scale < 0.3) {
          scale = 0.3
        } else if (scale > 3) {
          scale = 3
        }

        moveDiv.style.transform = "rotate(" + angle + "deg) scale(" + scale + ")"
        choosebox.style.transform = "rotate(" + angle + "deg)"
        choosebox.style.width = moveDiv.clientWidth * scale + "px"
        choosebox.style.height = moveDiv.clientHeight * scale + "px"
        choosebox.style.top = moveDiv.offsetTop - ((moveDiv.clientHeight / 2) * (scale - 1)) + "px"
        choosebox.style.left = moveDiv.offsetLeft - ((moveDiv.clientWidth / 2) * (scale - 1)) + "px"
        //阻止页面的滑动默认事件；如果碰到滑动问题，1.2 请注意是否获取到 touchmove
        document.addEventListener(
          "touchmove",
          function () {
            if (this.r_flags) {
              event.preventDefault();
            }
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    s_end() {
      this.r_flags = false;
    },
    //删除元素
    removechild() {
      if (this.classname.indexOf('img') != -1 || this.classname.indexOf('line') != -1) {
        for (var i = 0; i < this.imgarr.length; i++) {
          if (this.imgarr[i].classname == this.classname) {
            this.imgarr.splice(i, 1);
          }
        }
      } else {
        var div = document.getElementsByClassName(this.classname)[0];
        div.parentNode.removeChild(div);
      }
      this.classname = "";
      this.isshow = false;
    },
    // 获取元素transform属性
    route(div) {
      if (div) {
        var olddeg = window.getComputedStyle(div, null)["transform"];
        //获取字体属性
        var textAlign = window.getComputedStyle(div, null)["textAlign"];
        var weight = window.getComputedStyle(div, null)["fontWeight"];
        var fontstyle = window.getComputedStyle(div, null)["fontStyle"];
        var textDecoration = window.getComputedStyle(div, null)["textDecoration"];
        var lineheight = window.getComputedStyle(div, null)["lineHeight"];
        var letterspace = window.getComputedStyle(div, null)["letterSpacing"];
        var fontsize = window.getComputedStyle(div, null)["fontSize"];
        // console.log(div.getAttribute('derection'))
        if (lineheight == "normal") lineheight = 15
        if (letterspace == "normal") letterspace = 0
        this.text_style.letterspace = parseInt(letterspace)
        this.text_style.lineheight = parseInt(lineheight)
        this.text_style.fontsize = parseInt(fontsize)
        var color = window.getComputedStyle(div, null)["color"];
        this.color = color
        if (textAlign == "left" || textAlign == "start") this.style.left = true
        if (textAlign == "center") this.style.center = true
        if (textAlign == "right" || textAlign == "end") this.style.right = true
        if (weight == "700" || weight == 'bold') this.style.weight = true
        if (fontstyle == "italic") this.style.em = true
        if (textDecoration.indexOf("line-through") != '-1') this.style.line = true
        if (textDecoration.indexOf("underline") != '-1') this.style.unline = true
        if (div.getAttribute('derections') == 'row') {
          this.style.width = true
        } else if (div.getAttribute('derections') == 'vertical') {
          this.style.height = true
        }
        return
      } else {
        var divs = document.getElementsByClassName(this.classname)[0];
        var olddeg = window.getComputedStyle(divs, null)["transform"];
        if (olddeg != "none") {
          var values = olddeg.split('(')[1].split(')')[0].split(',');
          //获取deg
          this.deg = getmatrix(...values).deg
          this.scale = getmatrix(...values).scale
        } else {
          this.deg = 0,
            this.scale = 1
        }
      }
      //矩阵转算
      function getmatrix(a, b, c, d, e, f) {
        //获取缩放比例
        var scale = Math.sqrt(a * a + b * b).toFixed(2);
        //获取角度
        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        var data = {
          deg: angle,
          scale: scale,
        }
        return data
      }
    },
    // 关闭元素
    closebox() {
      if (this.classname == "") return
      // document.getElementsByClassName(this.classname)[0].style.zIndex = 3;
      // if(this.classname.indexOf('img')!="-1")document.getElementsByClassName(this.classname)[0].style.zIndex = 2;
      this.isshow = false;
      this.classname = "";
      this.style = {
        left: false,
        center: false,
        right: false,
        weight: false,
        em: false,
        line: false,
        height: false,
        unline: false,
        width: false,
      }
    },
    // 复制元素
    copy_element(e) {
      e.stopPropagation();
      var that = this
      var div = this.$refs.imageWrapper
      var arr = div.childNodes
      if (arr.length == 6) {
        this.$toasted.show(that.$t("diy.elementLimit"), {
          theme: "toasted-primary",
          position: "center",
          duration: 1000
        });
        return false
      }
      var tagname = document.getElementsByClassName(this.classname)[0].tagName
      var div = document.getElementsByClassName(this.classname)[0]
      // console.log(window.getComputedStyle(div, null)["zIndex"])
      this.route()
      if (tagname == "IMG" || tagname == "PNG" || tagname == "JEPG") {
        var zIndex = parseInt(window.getComputedStyle(div, null)["zIndex"]) + 1;
        var style = "z-index:" + zIndex + ";top:20%;left:20%;width:" + (div.clientWidth) + "px;transform:scale(" + this.scale + ") rotate(" + this.deg + "deg)"
        var num = samename(1, tagname)
        var data = {
          classname: "img" + num,
          style: style,
          photoUrl: div.src,
        }
        // this.img_arr.push(data)
        this.imgarr.push(data)
        this.classname = "img" + num;
        //选择
        setTimeout(() => {
          this.isshow = true;
          this.route()
          div = document.getElementsByClassName(this.classname)[0]
          var choosebox = document.getElementsByClassName("choosebox")[0];
          choosebox.style.left = parseInt(window.getComputedStyle(div, null)["left"]) - ((this.scale - 1) * (parseInt(window.getComputedStyle(div, null)["width"]) / 2)) + 'px';
          choosebox.style.top = parseInt(window.getComputedStyle(div, null)["top"]) - ((this.scale - 1) * (parseInt(window.getComputedStyle(div, null)["height"]) / 2)) + 'px';
          choosebox.style.width = window.getComputedStyle(div, null)["width"] * this.scale + "px";
          choosebox.style.height = window.getComputedStyle(div, null)["height"] * this.scale + "px";
          choosebox.style.transform = "rotate(" + this.deg + "deg)"
        }, 1);
      }

      // 创建一个不重名class
      function samename(num, tagname) {
        if (tagname == "IMG" || tagname == "PNG" || tagname == "JEPG") {
          var classname = "img" + num
          for (var i = 0; i < that.imgarr.length; i++) {
            if (classname == that.imgarr[i].classname) {
              num++
              return samename(num, tagname)
            }
          }
        }
        return num
      }
    },
    uploads() {
      this.init()
      this.$refs.backimg_ipt.click()
    },
    // 上传背景图片
    upload(e) {
      var that = this
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.tc_show = true
      if (file) {
        var index1 = file.name.indexOf("image");
        if (!/\/(?:jpeg|jpg|png)/i.test(file.type) && index1 == "-1") {
          this.tc_show = false
          this.$toasted.show(that.$t("diy.imageFormatNotSupport"), {
            theme: "toasted-primary",
            position: "center",
            duration: 2000
          });
          return;
        }
        var byteSize = file.size / 1024 / 1024;
        if (byteSize > 20) {
          that.$toasted.show(that.$t("diy.uploadSizeTip"), {
            theme: "toasted-primary",
            position: "center",
            duration: 2000
          });
          that.tc_show = false
          that.$refs.backimg_ipt.value = null;
          return;
        }
        console.log("文件大小", byteSize);
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
          let imgData = e.target.result;
          var image = new Image();
          image.src = imgData;
          image.onload = function () {
            let imgWidth = image.width;
            let imgHeight = image.height;
            if (imgWidth < 1051) {
              that.$toasted.show(that.$t("diy.uploadWithTip"), {
                theme: "toasted-primary",
                position: "center",
                duration: 2000
              });
              that.tc_show = false
              that.$refs.backimg_ipt.value = null;
              return;
            }
            if (imgHeight < 673) {
              that.$toasted.show(that.$t("diy.uploadHeightTip"), {
                theme: "toasted-primary",
                position: "center",
                duration: 2000
              });
              that.tc_show = false
              that.$refs.backimg_ipt.value = null;
              return;
            }
            let cvs = document.createElement("canvas");
            let ctx = cvs.getContext("2d");
            if (imgWidth > imgHeight) {
              if (imgWidth > 2000) {
                let bp = imgHeight / imgWidth
                imgWidth = 2000;
                imgHeight = bp * imgWidth;
              }
            } else {
              if (imgHeight > 2000) {
                let bp = imgWidth / imgHeight
                imgHeight = 2000;
                imgWidth = bp * imgHeight;
              }
            }
            cvs.width = imgWidth;
            cvs.height = imgHeight;
            ctx.drawImage(image, 0, 0, imgWidth, imgHeight);
            that.url = cvs.toDataURL("image/png");
            cvs.remove();
            that.isbackimg = true
            that.tc_show = false
            if (that.cropper) {
              that.cropper.replace(that.url);
            }
            that.$refs.backimg_ipt.value = null;
          };
        };
      } else {
        this.tc_show = false
      }
    },
    //调用手势旋转
    fingerOperate() {
      //* cropper插件
      var cropper = this.cropper;
      //* 手势操作目标对象
      var target = document.getElementById("btnMarDiv");
      //var target = document.getElementsByClassName('cropper-wrap-box')[0];
      var af = new AlloyFinger(target, {
        touchStart: function () { },
        touchMove: function () { },
        touchEnd: function () { },
        touchCancel: function () { },
        multipointStart: function () { },
        multipointEnd: function () { },
        tap: function () { },
        doubleTap: function () { },
        longTap: function () { },
        singleTap: function () { },
        rotate: function (evt) {
          // console.log(evt.angle);
          // * cropper旋转方法
          cropper.rotate(evt.angle);
        },
        pinch: function (evt) {
          zoom = evt.zoom
        },
        pressMove: function (evt) {
          // console.log(evt.deltaX);
          // console.log(evt.deltaY);
        },
        swipe: function (evt) {
          // console.log("swipe" + evt.direction);
        }
      });
    },
    //判断边界
    iscoved() {
      this.cas = this.cropper.getCroppedCanvas({
        width: 1051,
        height: 673
      });
      this.ctx = this.cas.getContext("2d");
      let l = this.ctx.getImageData(0, 0, 1, 1).data;
      let t = this.ctx.getImageData(0, 672, 1, 1).data;
      let r = this.ctx.getImageData(1050, 672, 1, 1).data;
      let b = this.ctx.getImageData(1050, 0, 1, 1).data;
      if (
        (l[0] == 0 && l[1] == 0 && l[2] == 0 && l[3] == 0) ||
        (t[0] == 0 && t[1] == 0 && t[2] == 0 && t[3] == 0) ||
        (r[0] == 0 && r[1] == 0 && r[2] == 0 && r[3] == 0) ||
        (b[0] == 0 && b[1] == 0 && b[2] == 0 && b[3] == 0)
      ) {
        this.iscover = false;
      } else {
        this.iscover = true;
      }
    },
    // 跳转 下一步
    creatimg() {
      return new Promise(resolve => {
        window.scrollTo(0, 0)
        var box = this.$refs.imageWrapper;
        this.tc_show = true;
        this.isshow = false
        this.iscreat = false
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // 获取滚动轴滚动的长度
        const rect = this.$refs.imageWrapper.getBoundingClientRect() // 获取元素相对于视口的
        setTimeout(() => {
          var box = this.$refs.imageWrapper;
          var width = 1051;
          var height = 673;
          this.canvas = document.createElement("canvas");
          this.canvas.width = width;
          this.canvas.height = height;
          var scalewidth = (1051 / box.clientWidth).toFixed(2);
          var clientHeight = (1051 / box.clientHeight).toFixed(2);
          this.ctx = this.canvas.getContext("2d");
          //然后将画布缩放，将图像放大两倍画到画布上
          this.ctx.scale(673 / box.clientHeight, 673 / box.clientHeight);
          (window.html2canvas || html2canvas)(this.$refs.imageWrapper, {
            x: rect.left, // 绘制的dom元素相对于视口的位置
            y: rect.top,
            scrollY: -scrollTop,
            useCORS: true,
            backgroundColor: null,
            width: width,
            height: height,
            scale: 1,
            canvas: this.canvas,
            logging: false,
          }).then(async (canvas) => {
            let dataURL = canvas.toDataURL("image/png");
            localStorage.setItem("imgResult", dataURL)
            this.iscreat = true
            this.tc_show = false;
            resolve(dataURL)
            // let a = document.createElement("a");
            // a.download = "invitation";
            // a.href = dataURL;
            // a.click();
            // this.examine(dataURL)

            // this.$router.push({
            //   path:"/submit"
            // })
          }).catch(() => {
            console.log("error")
            resolve()
          });
        }, 1);
      })
    },
    async examine(src) {
      var that = this
      // that.isexamine = true
      let fd1 = new FormData();
      var imgfile1 = src

      // 生成UUID
      const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0;
          const v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      };

      fd1.append("diyFile", that.getblob(imgfile1, "CardImages.png"));
      fd1.append("productId", window.config.productId);
      const uuid = generateUUID();
      fd1.append("uuid", uuid);

      // 获取当前时间作为键名
      const now = new Date();
      const timeKey = now.getFullYear() +
        String(now.getMonth() + 1).padStart(2, '0') +
        String(now.getDate()).padStart(2, '0') +
        String(now.getHours()).padStart(2, '0') +
        String(now.getMinutes()).padStart(2, '0');

      // 从localStorage获取现有的uuid列表或初始化为空数组
      let uuidList = JSON.parse(localStorage.getItem('uuidList')) || [];

      // 添加新的uuid记录
      uuidList.push({
        time: timeKey,
        uuid: uuid
      });
      // 保存回localStorage
      localStorage.setItem('uuidList', JSON.stringify(uuidList));

      localStorage.setItem('uuid', uuid);

      await http.post("/bcl/diy/mock/order", fd1, that).then(res => {
        console.log('上传成品卡formdata', res)
        // that.isexamine = false
        if (res.data.code == '200' || res.data.code == '120') {
          that.imgurl = res.data.code
          localStorage.setItem('imageUrl', res.data.data.imageUrl)
        } else if (res.data.code == '115') {
          that.imgurl = '-1'
          localStorage.setItem('imageUrl', res.data.data.imageUrl)
          that.meximg(res.data.msg) //违规提示框
        } else {
          that.imgurl = ''
          that.tc_show = false
          that.$toasted.show(res.data.msg, {
            theme: "toasted-primary",
            position: "center",
            duration: 2000,
          });
          return
        }
      });
      if (that.imgurl == '-1') return
      // if(that.imgurl==''){
      //   console.log('改走64位上传')
      //    //如果formdata上传失败改用64位上传 png格式截取22位  jpeg位23位
      //   let nums2 = imgfile1.indexOf(',')+1
      //   let number2 = imgfile1.slice(nums2, imgfile1.length)
      //   await http.post("/image-order/upload/imagebase64",{
      //     file:number2,
      //   }).then(res=>{
      //     console.log('上传成品卡64',res.data)
      //     that.isexamine = false
      //     if(res.data.code=='200'||res.data.code=='120'){
      //     localStorage.setItem('imageUrl',res.data.data.imageUrl)
      //     }else if(res.data.code=='115'){
      //       that.meximg(res.data.msg) //违规提示框
      //     }else{
      //       that.tc_show = false
      //       that.$toasted.show(res.data.msg, {
      //         theme: "toasted-primary",
      //         position: "center",
      //         duration: 2000,
      //       });
      //       setTimeout(() => {
      //         that.$router.push({
      //           path:'/result?type=1'
      //         })
      //       }, 1000);
      //       return
      //     }
      //   });
      // }

      this.$router.push({
        path: '/submit'
      })
    },
    // 图片base64转blob
    getblob(dataurl, filename) {
      var arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    //图片审核
    meximg(msg) {
      var that = this
      MessageBox({
        title: '提示',
        message: msg,
        // message:msg,
        showCancelButton: true,
        closeOnClickModal: false,
        cancelButtonClass: 'mint-btn1',
        confirmButtonText: "继续使用",
        cancelButtonText: "重新选择"
      }).then(action => {
        if (action != "cancel") {
          that.$router.push({
            path: '/submit'
          })
        } else {
          this.imgback_arr = []
          this.imgarr = []
          this.tc_show = false
          this.imgsrc = ''
          this.url = ''
          this.isbackimg = false
          if (document.getElementsByClassName('cropper-container')[0]) {
            var croppers = document.getElementsByClassName('cropper-container')[0]
            croppers.remove();
          }
        }
      });
    },
  },
};
</script>
