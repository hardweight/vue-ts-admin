import axios from './index'
const URL = 'http://47.97.117.142:8089/sdq_1204/user/';

export const handleLogin = (userName: any, password: any) => {
  let params = new URLSearchParams()
  params.append('username', userName)
  params.append('password', password)
  return axios.request({
    url: URL + 'login.do',
    params,
		methods: 'post'
  })
}