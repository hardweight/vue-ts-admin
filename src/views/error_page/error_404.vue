<template>
  <div class="content">
    <img src="@/assets/img/error_page/dengpao.svg" class="error_icon" />
    <p class="error_title">404/页面不存在哦～</p>
    <br />
    <div class="btn_box">
    	<Button class="f_btn">返回上一页</Button>
    	<Button>返回首页</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error_404',
}
</script>

<style scoped lang="less">
@import './error.less';
</style>
