<template>
	<div>
		<Card 
			style='width: 640px;margin: auto;margin-top: 180px;' 
			bordered 
			:shadow='true'
		>
			<p>欢迎登陆xx管理系统</p>
			<Input class='inputStyle' placeholder='请输入账号' />
			<Button @click='changeTheme'>更改主题</Button>
		</Card>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class login extends Vue {
	mounted() {
		console.log('please login')
	}
	changeTheme = () => {
		if(this.$store.state.theme === 'light') {
			this.$store.commit('handleChangeTheme', 'dark')
		} else {
			this.$store.commit('handleChangeTheme', 'light')
		}
	}
}
</script>

<style scoped>
@import './login.less';
</style>