<template>
	<div class='body'>
		<Row class='loginForm'>
			<i-col span="18" offset="4">
				<Row style="min-width: 640px; max-width: 640px;">
					<i-col span='5'>
						<div class='imgBorder' id='login'>
							<img class='headImg' src='@/assets/img/login/loginForm.png' />
						</div>
					</i-col>
					<i-col span='19'>
						<div class='formContext' id='login'>
							<h3 style='font-size: 24px;color: #fff;margin-left: 22px;margin-top: 11px;'>山泉云</h3>
							<Poptip trigger="focus" content="请输入账号">
								<i-input class="inputStyle" v-model="userName" @input="setUserName">
									<Button slot="prepend" icon="ios-contact"></Button>
								</i-input>
							</Poptip>
							<Poptip trigger="focus" content="请输入密码">
								<i-input type="password" class="inputStyle" v-model="password" @input="setPassword">
									<Button slot="prepend" icon="md-key"></Button>
									<Button @click="handleLogin" slot="append" icon="md-arrow-round-forward"></Button>
								</i-input>
							</Poptip>
						</div>
					</i-col>
				</Row>
			</i-col>
		</Row>
	</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { handleLogin } from '@/api/user';
@Component
export default class login extends Vue {
	userName = '';
	password = '';
	setUserName = (val: any) => {
		this.userName = val
	}
	setPassword = (val: any) => {
		this.password = val
	}
	@Mutation setUserToken: any
	async handleLogin() {
		try {
			//const res = await handleLogin(this.userName, this.password)
			//console.log(res)
			//这里拿到后台返回的token和登陆权限级别
			this.setUserToken({ hasLogin: 'true', access: 'admin' })
			this.$router.push('/')
		} catch(err) {
			console.log(err)
		}
	}
}
</script>

<style scoped>
@import './login.less';
</style>