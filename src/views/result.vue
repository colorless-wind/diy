<style scoped lang="less">
.faDiv {
  position: relative;
  min-height: 100vh;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent; /* 防止ios 出现点击div 出现选中效果*/
  background: #F9F9F9;
  -webkit-overflow-scrolling:touch;
  padding-top: 100px;
  box-sizing: border-box;
  .result{
    padding-top: 90px;
    .icon{
      width: 90px;
      height: 90px;
      display: block;
      margin: 0 auto;
    }
    .text{
      margin-top: 20px;
      font-size: 16px;
      color: #333333;
      text-align: center;
    }
    .text2{
      color: #0362AA;
      font-size: 16px;
      margin-top: 70px;
      text-align: center;
    }
  .text1{
    margin-top: 50px;
    font-size: 16px;
    text-align: center;
    }
  }
}
</style>
<template>
  <div class="faDiv">
     <div v-show="type==0" class="result">
       <img class="icon"  src="../assets/images/img/success.png" alt="">
       <p class="text">{{ $t('diy.uploadSuccess') }}</p>
       <p class="text1">{{ $t('diy.pleaseContactStaff') }}</p>
       <p @click="backtohome()" class="text2">{{ $t('diy.backToHome') }}</p>
     </div>
     <div v-show="type==1" class="result">
       <img class="icon"  src="../assets/images/img/err.png" alt="">
       <p class="text">{{ $t('diy.uploadFail') }}</p>
       <p @click="openpage()" class="text2">{{ $t('diy.clickReUpload') }}</p>
     </div>
  </div>
</template>
<script>
import http from "../utils/http";
import config from "../utils/config";
import Load from "../components/loading.vue";
export default {
  name: "",
  components: {
    Load
  },
  data() {
    return {
      tc_show: false,
      type:0,
      config,
    };
  },
  created() {},
  destroyed() {
  },
  mounted() {
    this.type=this.$route.query.type?this.$route.query.type:0
  },
  methods: {
    openpage(){
      this.$router.push({
        path:'/DIY'
      })
    },
    backtohome(){
      this.$router.push({
        path:'/home'
      })
    }
  }    
};
</script>