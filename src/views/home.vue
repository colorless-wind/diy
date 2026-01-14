<style scoped lang="less">
.faDiv {
  width: 100%;
  min-height: 100vh;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent; /* 防止ios 出现点击div 出现选中效果*/
  position: relative;
  overflow: auto;
}
.backimg{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.content {
  padding-top: 36px;
  .logo{
    width: 117px;
    object-fit: cover;
    margin: 0 auto;
    display: block;
  }
  .title{
    font-size: 26px;
    margin-top: 41px;
    text-align: center;
    color: #fff;
    span{
      display: inline-block;
      width: 15px;
    }
  }
  .title_2{
    color: #fff;
    font-size: 18px;
    text-align: center;
    margin-top: 24px;
  }
  .photo{
    width: 85%;
    object-fit: cover;
    margin: 20px auto;
    display: block;
  }
  .banner{
    width: 85%;
    object-fit: cover;
    margin: 20px auto;
    display: block;
  }
  .btn{
    width: 160px;
    margin:18px auto;
    display: block;
  }
  .language-switch{
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
  }
  .dropdown-btn{
    background: rgba(255,255,255,0.8);
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
  }
  .dropdown-menu{
    position: absolute;
    top: 100%;
    right: 0;
    background: rgba(255,255,255,0.9);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    min-width: 120px;
    margin-top: 5px;
  }
  .dropdown-menu div{
    padding: 8px 15px;
    cursor: pointer;
    font-size: 14px;
  }
  .dropdown-menu div.active{
    background: #409EFF;
    color: white;
  }
}
[v-clock]{
  display:none;
}
</style>
<template>
  <div class="faDiv">
    <img src="../assets/images/img/backimg.png" class="backimg" alt="">
    <div class="content">
      <img :src="logoImage" class="logo" alt="">
      <p class="title">{{ $t('home.title') }}</p>
      <p class="title_2">{{ $t('home.title_2') }}</p>
      <!-- <div class="language-switch" ref="languageSwitch">
        <button @click="toggleDropdown" class="dropdown-btn">{{ currentLanguage }} ▼</button>
        <div v-show="dropdownOpen" class="dropdown-menu">
          <div @click="switchLanguage('zh-CN')" :class="{ active: $i18n.locale === 'zh-CN' }">中文</div>
          <div @click="switchLanguage('en-US')" :class="{ active: $i18n.locale === 'en-US' }">En</div>
        </div>
      </div> -->
      <!-- <img src="../assets/images/img/banner3.png" class="banner" alt=""> -->
      <img src="../assets/images/img/photo.png" class="photo" alt="">
      <img @click="openpage()" :src="buttonImage" class="btn" alt="">
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
import hideOptionMenu from "../assets/js/hidemenu";
import http from "../utils/http";
import { imgPath } from "../utils/config";
import { edition } from "../utils/config";
import Load from "../components/loading.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    Load,
    swiper,
    swiperSlide
  },
  data() {
    return {
      dropdownOpen: false
    };
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale === 'zh-CN' ? '中文' : 'En';
    },
    logoImage() {
      return this.$i18n.locale === 'zh-CN' 
        ? require('../assets/images/img/logo.png') 
        : require('../assets/images/img/logo1.png');
    },
    buttonImage() {
      return this.$i18n.locale === 'zh-CN'
        ? require('../assets/images/img/btn.png')
        : require('../assets/images/img/btn1.png');
    }
  },
  watch: {},
  beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    },
    created() {},
    mounted() {
    var channelName = this.$route.query.channelName?this.$route.query.channelName:''
    var openid = this.$route.query.openid?this.$route.query.openid:''
    var cardId = this.$route.query.id?this.$route.query.id:''
    localStorage.setItem('channelName',channelName)
    localStorage.setItem('openid',openid)
    if(cardId) {
      localStorage.setItem('diyCardId', cardId)
    }
    document.addEventListener('click', this.handleClickOutside);
  },
  methods: {
     // 回退
    backpage(){
      this.$router.back(-1)
    },
    //匹配不同屏幕的样式
    setdiv() {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      var wh = w / h;
      if (wh > 0.61) {
      }
    },
    openpage(){
      this.$router.push({
        path:'DIY'
      })
    },
    toggleDropdown(){
      this.dropdownOpen = !this.dropdownOpen;
    },
    handleClickOutside(e) {
      if (this.dropdownOpen && !this.$refs.languageSwitch.contains(e.target)) {
        this.dropdownOpen = false;
      }
    },
    switchLanguage(lang){
      this.$i18n.locale = lang;
      localStorage.setItem('locale', lang);
      this.dropdownOpen = false;
    }
  },
};
</script>
