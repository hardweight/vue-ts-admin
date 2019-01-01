<template>
  <div class="content">
    <img src="@/assets/img/error_page/ufo.svg" class="error_icon_plus" />
    <p class="error_title">500/服务器找不到了哦～</p>
    <br />
    <div class="btn_box">
    	<Button @click="goBack" class="f_btn">返回上一页</Button>
    	<Button @click="handleGoHome">返回首页</Button>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Mutation, Action, namespace } from 'vuex-class';
const errorModule = namespace('error_page')
@Component
export default class error_500 extends Vue {
  @errorModule.Action goBack: any
  @errorModule.Action goHome: any
  handleGoHome() {
    this.goHome(this.$router)
  }
}
</script>

<style scoped lang="less">
@import './error.less';
</style>
