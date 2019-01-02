<template>
  <div class="home">
    <s_sider></s_sider>
    <Button @click="logout" type="primary">推出登陆</Button>
    <Button @click='changeTheme'>切换主题</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; // @ is an alias to /src
import { test } from '@/api/test';
import { Action } from 'vuex-class';
import sider from '_c/sider/sider.vue';
@Component({
  components: {
    's_sider': sider
  }
})
export default class Home extends Vue {
  @Action doSomeThing: any
  @Action doOtherThing: any
  beforeCreate() {
    
  }
  logout() {
    window.localStorage.setItem('hasLogin', 'false')
    window.localStorage.setItem('access', '')
    this.$router.push('/login')
  }
  changeTheme() {
    if(this.$store.state.theme === 'light') {
      this.$store.commit('handleChangeTheme', 'dark')
    } else {
      this.$store.commit('handleChangeTheme', 'light')
    }
  }
  mounted() {
    console.log(this.$store.state.user)
    console.log(this.$store.state.username)
  }
}
</script>
