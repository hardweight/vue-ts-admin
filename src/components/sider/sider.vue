<template>
  <i-menu :theme="siderTheme" :open-names="['1']" accordion>
    <Submenu name="1">
      <template slot="title">
        <Icon type="ios-paper" />
        内容管理
      </template>
      <menu-item name="1-1">登陆</menu-item>
    </Submenu>
  </i-menu>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class sider extends Vue {
  siderTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
}
</script>

