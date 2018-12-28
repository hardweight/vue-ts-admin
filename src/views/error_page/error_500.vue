<template>
  <div class="content">
    <img src="@/assets/img/error_page/ufo.svg" class="error_icon_plus" />
    <p class="error_title">500/服务器找不到了哦～</p>
    <br />
    <div class="btn_box">
    	<Button class="f_btn">返回上一页</Button>
    	<Button>返回首页</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error_500',
}
</script>

<style scoped lang="less">
@import './error.less';
</style>
