<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
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

  test = async () => {
    const res = await test('zzz')
    console.log(res)
  }
  beforeCreate() {
    console.log('www')
  }
  mounted() {
    this.test()
    this.doSomeThing()
    this.doOtherThing()
  }
}
</script>
