<template>
  <div class="content">
    <img src="@/assets/img/error_page/suo.svg" class="error_icon_plus" />
    <p class="error_title">401/你没有权限哦～</p>
    <br />
    <div class="btn_box">
    	<Button class="f_btn">返回上一页</Button>
    	<Button >返回首页</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Mutation, Action, namespace } from 'vuex-class';
@Component
export default class error_401 extends Vue {
  mounted() {
    
  }
}
</script>

<style scoped lang="less">
@import './error.less';
</style>
