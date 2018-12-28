<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      caon: 'caonValue'
    }
  },
  methods: {
    pageReady() {

    }
  }
})
export default class Home extends Vue {}
</script>

