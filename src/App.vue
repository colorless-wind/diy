<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
import http from "./utils/http";
import { imgPath } from "./utils/config";
export default {
  data() {
    return {
      shareUrl: ""
    };
  },
  mounted() {
    //var isWeiXin = ua.match(/MicroMessenger/i) == "micromessenger";
    //判断微信首页是否禁用所有按钮
    setTimeout(() => {
      var isWeiXin = this.$store.state.isWeiXin;
      if (isWeiXin) {
        if(this.$route.path=="/home"||this.$route.path=="/")return
        wx.hideOptionMenu();
      }
    }, 100);
  },
  methods: {
    WXCONFIG() {
      var _this = this;
      http
        .get(
          "weixin/jsinfo?page=" +
            encodeURIComponent(location.href.split("#")[0])
        )
        .then(res => {
          if (res.data.code == 0) {
            wx.config({
              debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
              appId: res.data.data.appId, // 必填，公众号的唯一标识
              timestamp: res.data.data.timestamp, // 必填，生成签名的时间戳
              nonceStr: res.data.data.nonceStr, // 必填，生成签名的随机串
              signature: res.data.data.signature, // 必填，签名
              jsApiList: [
                "checkJsApi",
                "chooseImage",
                "uploadImage",
                "chooseWXPay",
                "updateAppMessageShareData",
                "updateTimelineShareData",
                "hideAllNonBaseMenuItem",
                "hideMenuItems"
              ] // 必填，需要使用的JS接口列表
            });

            wx.ready(function() {
              wx.hideMenuItems({
                menuList: [
                  "menuItem:share:timeline", //分享到朋友圈 2期再做
                  "menuItem:share:appMessage",
                  "menuItem:share:qq",
                  "menuItem:share:weiboApp",
                  "menuItem:favorite",
                  "menuItem:share:facebook",
                  "menuItem:share:QZone",
                  "menuItem:copyUrl",
                  "menuItem:originPage",
                  "menuItem:openWithQQBrowser",
                  "menuItem:openWithSafari",
                  "menuItem:share:email",
                  "menuItem:share:brand"
                ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
              });
              // wx.checkJsApi({
              //   jsApiList: ["updateTimelineShareData"], // 需要检测的JS接口列表，所有JS接口列表见附录2,
              //   success: function(res) {
              //     let clock = window.setInterval(() => {
              //       wx.updateTimelineShareData({
              //         title: "测试一下，谁是你的最佳情侣？", // 分享标题
              //         link: "http://activity5.umvcard.com/home?tag=1", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              //         imgUrl: "http://activity1.umvcard.com/20190802170858.jpg", // 分享图标
              //         success: function() {
              //           // 设置成功
              //         }
              //       });
              //       window.setInterval(clock);
              //     }, 400);
              //   }
              // });
            });
          }
        });
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.toasted-container {
  min-width: 30% !important;
  .toasted {
    &:first-child {
      text-align: center !important;
    }
  }
}
</style>
