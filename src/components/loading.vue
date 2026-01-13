<style lang="less" scoped>
@import "../less/config";
.tc_box{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  background: rgba(255, 255, 255, .2);
  animation: in .5s;
  z-index: 999;
}
.loading-box {
  position: fixed;
  z-index: 99;
  width: 60px;
  top: 50%;
  left: 50%;
  z-index: 1;
  height: 60px;
  text-align: center;
  transform: translateX(-50%) translateY(-50%);
  background: #fff;
  border-radius: 4px;
  // box-shadow: 1px 1px 1px 5px rgba(0, 0, 0, .1);
  .textbox {
    width: 50px;
    display: block;
    margin-top: 7px;
    margin-left: 5px;
    font-size: 14px;
  }
  .msg {
    line-height: 70px;
    text-align: center;
    font-size: 30px;
  }
}
.loading-start {
  animation: rotate-forever 1s infinite linear;
  height: 15px;
  width: 15px;
  border: 2px solid @main;
  border-right-color: transparent;
  border-radius: 50%;
  margin-top: 10px;
  margin-left: 21px;
}
.msg {
  display: none;
}
@keyframes rotate-forever {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
<div class="tc_box" :class="tc_show? '' : 'msg'"  @touchmove.prevent>
 <div class="loading-box" >
    <div class="loading-start"></div>
    <div class="textbox">
      <slot></slot>
    </div>
  </div>
</div>
</template>
<script>
//import isSeeing from 'is-seeing'
export default {
  props: {
    tc_show: {
      // 是否加载完成
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // state: this.loading
    };
  },
  mounted() {
    // this.timer = setInterval(() => {
    // 	  this.state = true
    // }, 300)
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  watch: {},
  methods: {
  }
};
</script>
