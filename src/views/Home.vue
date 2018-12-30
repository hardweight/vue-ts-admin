<template>
  <div class="home">
    <Button @click="logout">tuichu</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'; // @ is an alias to /src
import { test } from '@/api/test';
import { Action } from 'vuex-class';
@Component
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
  mounted() {
  }
}
</script>
