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
import { Component, Vue, Watch } from 'vue-property-decorator';
import r from '@/router/router.ts';
import { authorityControl } from '@/lib/util';
@Component
export default class sider extends Vue {
  access: any = null;
  userAccess: any = localStorage.getItem('access') ? localStorage.getItem('access') : '';
  siderTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
  /**
   * 路由列表过滤
   */
  get siderList() {
    //这里必须把list克隆一份, 否则会修改掉r, 从而导致路由列表计算属性返回异常
    let list: any = r.slice();
    for(let i: any = 0; i < list.length; i ++){
      if(list[i].meta){
        let o = list[i].meta
        if(o.hideInMenu){
          list.splice(i,1);
          i --;
        } else {}
        //这里一定要是null, 因为在util的方法中只判断access是否存在,空数组也是一个Object
        this.access = o.access ? o.access : null
        if(authorityControl(this.userAccess, this.access) === false) {
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
  created() {
    console.log(this.siderList)
  }
}
</script>

<style scoped lang="less">
@import './sider.less';
</style>


