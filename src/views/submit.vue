<style scoped lang="less">
.faDiv {
  width: 100%;
  min-height: 100vh;
  user-select: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent; /* 防止ios 出现点击div 出现选中效果*/
  position: relative;
  overflow: auto;
  background: #0362AA;
}
[v-clock]{
  display:none;
}
.content{
  padding: 42px 16px;
  .cardimg{
    display: block;
    max-width: 100%;
    border-radius: 10px;
    max-height: 250px;
  }
  .messagebox{
  margin: 30px 0px;
  .iptlist{
    display: flex;
    height: 31px;
    line-height: 31px;
    margin-bottom: 13px;
    .text{
      font-size: 14px;
      width: 15%;
      color: #fff;
    }
    .ipt{
      width: 85%;
      background: #fff;
      border: 0;
      border-radius: 5px;
      height: 31px;
      padding: 0 20px;
      box-sizing: border-box;
      color:#333333;
      outline: none;
    }
    input::-webkit-input-placeholder { 
    /* WebKit browsers */ 
    color: #333333; 
    } 
    input:-moz-placeholder { 
    /* Mozilla Firefox 4 to 18 */ 
    color: #333333; 
    } 
    input::-moz-placeholder { 
    /* Mozilla Firefox 19+ */ 
    color: #333333; 
    } 
    input:-ms-input-placeholder { 
    /* Internet Explorer 10+ */ 
    color: #333333; 
    }
  }
}
}
.tipstext{
  white-space: pre-line;
  font-size: 14px;
  color: #fff;
  line-height: 25px;
  margin-top: 50px;
}
 .btn_box{
    display: block;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    z-index: 1;
    text-align: center;
    //background: #fff;
    padding-top: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
    box-sizing: border-box;
    .btn_b{
      width: 85%;
      height: 40px;
      border-radius: 20px;
      background: linear-gradient(-72deg, #FF9F2F 0%, #FFB053 100%);
      color: #fff;
      box-shadow: none;
      border: 0;
      font-size: 20px;
      outline: none;
    }
    .bottomdiv{
      margin-top: 20px;
      width: 100%;
      min-height: 20px;
      height: calc(env(safe-area-inset-bottom)+20px); //兼容iphoneX;
      // background: #FFF8F0;
    }
  }
</style>
<template>
  <div class="faDiv">
    <div class="content">
        <img :onerror="defaultImg" :src="src" class="cardimg" alt="">
        <div class="messagebox">
          <div class="iptlist">
            <p class="text">{{ $t('diy.work') }}</p>
            <input @focus="focusipt" maxlength="10" oninput="if(value.length>10)value=value.slice(0,10)"  type="text" v-model="works" class="ipt" :placeholder="$t('diy.enterWork')"/>
          </div>
          <div class="iptlist">
            <p class="text">{{ $t('diy.author') }}</p>
            <input @focus="focusipt" maxlength="10" type="text" oninput="if(value.length>10)value=value.slice(0,10)" v-model="author" class="ipt" :placeholder="$t('diy.enterAuthor')"/>
          </div>
        </div>
        <p class="tipstext">{{ $t('diy.copyright') }}</p>
        <p style="white-space: pre-line;font-size: 14px;color: #fff;line-height: 25px;">{{ $t('diy.copyrightTips') }}</p>
    </div>
    <div class="btn_box">
      <button class="btn_b" @click="submit()">{{ $t('diy.uploadSubmit') }}</button>
      <div class="bottomdiv"></div>
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
import hideOptionMenu from "../assets/js/hidemenu";
import http from "../utils/http";
import { antiShake } from "../utils/utils.js";
import { imgPath } from "../utils/config";
// import { edition } from "../utils/config";
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
      author:'',
      works:'',
      src:'',
      defaultImg:
        'this.src="' + require('../assets/images/img/photo.png') + '";this.onerror=null', // 默认图片
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.setdiv()
    if(localStorage.getItem('imgResult'))this.src = localStorage.getItem('imgResult')
  },
  methods: {
    focusipt(){
      window.scrollTo(0,2000)
    },
     // 回退
    backpage(){
      this.$router.back(-1)
    },
    //匹配不同屏幕的样式
   setdiv() {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      var wh = w / h;
      console.log(wh)
      if (wh > 0.563) {
        document.getElementsByClassName('btn_box')[0].style.position='static'
      }
    },
     // 下单
    submit: antiShake(function(i){
      var that = this
      if(this.works==''){
         this.$toasted.show(that.$t("diy.enterWork"), {
          theme: "toasted-primary",
          position: "center",
          duration: 2000
        });
        return
      }
      if(this.author==''){
         this.$toasted.show(that.$t("diy.enterAuthor"), {
          theme: "toasted-primary",
          position: "center",
          duration: 2000
        });
        return
      }
      this.tc_show = true
      http.post("/image-order/order/placeOrder",{
        fileWork:this.works,
        author:this.author,
        imageUrl:localStorage.getItem('imageUrl'),
        openid:localStorage.getItem('openid'),
        channelName:localStorage.getItem('channelName')
      }).then(res=>{
        console.log('申请结果',res)
        if(res.data.code=='200'){
          // DIY类型跳转到preset-card页面
          this.$router.push({
            path:'/preset-card',
            query: {
              type: 'diy',
              cardId: 'diy'
            }
          })
        }else{
          that.tc_show = false
          that.$toasted.show(res.data.msg, {
            theme: "toasted-primary",
            position: "center",
            duration: 2000,
          });
          return
        }
      });
      this.$router.push({
        path: '/preset-card',
        query: {
          type: 'diy',
          cardId: 'diy'
        }
      })
    },1000)
  },
};
</script>
