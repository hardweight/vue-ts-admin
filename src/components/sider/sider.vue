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

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import r from '@/router/router.ts'
import { authorityControl } from '@/lib/util';
@Component
export default class sider extends Vue {
  siderTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  get siderList() {
    let list: any = r;
    let userAccess: any = localStorage.getItem('access') ? localStorage.getItem('access') : '';
    for(let i: any = 0; i < list.length; i ++){
      if(list[i].meta){
        let o = list[i].meta
        if(o.hideInMenu){
          list.splice(i,1);
          i --;
        } else {}
        let access: any = o.access ? o.access : null
        if(authorityControl(userAccess, access) === false) {
          list.splice(i,1);
          i --;
        } else {}
      } else {}
    }
    let n = 3;
    while(n > 0){
      list.pop()
      n -- 
    }
    return list
  }
  mounted() {
    console.log(this.siderList)
  }
}
</script>

<style scoped lang="less">
@import './sider.less';
</style>


