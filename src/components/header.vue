<style lang="less" scoped>
@import "../less/config";
.header {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1050000;
  height: 88px;
  line-height: 88px;
  background: rgba(243, 245, 249, 1);
  padding: 0 46px;
  top: 0;
  top: env(safe-area-inset-top);
  //box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.04);
  .item {
    width: 50px;
  }
  .title {
    overflow: hidden;
    padding: 0;
    margin: 0;
    text-align: center;
    font-size: 34px;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #1a1a1a;
    margin-right: 22px;
    font-weight: 400;
  }
}
</style>
<template>
  <header class="header" flex="box:justify">
    <slot name="left">
      <div class="item" flex="main:center cross:center"></div>
    </slot>
    <h2 class="title">{{ title }}</h2>
    <slot name="right">
      <div class="item" flex="main:center cross:center"></div>
    </slot>
  </header>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>
