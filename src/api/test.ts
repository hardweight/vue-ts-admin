import axios from './index'

export const test = (name: string) => {
  return axios.request({
    url: '/api/101010100.html',
		methods: 'post'
  })
}