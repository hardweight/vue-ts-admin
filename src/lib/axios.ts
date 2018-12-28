import axios from 'axios'
const { baseURL } = require('@/config')

class HttpRequest {
	baseUrl: any;
	queue: any;
	constructor(baseUrl = baseURL) {
		this.baseUrl = baseUrl
		this.queue = {}
	}
	getInsideConfig() {
		const config = {
			baseUrl: this.baseUrl,
			headers: {
				//
			}
		}
		return config
	}
	interceptors(instance: any, url: any) {
		instance.interceptors.request.use((config: any) => {
			//添加全局的loading
			if(!Object.keys(this.queue).length) {
				//Spin.show()
			}
			this.queue[url] = true
			return config
		}, (error: any) => {
			return Promise.reject(error)
		})
		instance.interceptors.response.use((res: any) => {
			delete this.queue[url]
			const { data, status } = res
			return { data, status }
		}, (error: any) => {
			delete this.queue[url]
			return Promise.reject(error)
		})
	}
	request(options: any) {
		const instance = axios.create()
		options = Object.assign(this.getInsideConfig(), options)
		this.interceptors(instance, options.url)
		return instance(options)
	}
}

export default HttpRequest