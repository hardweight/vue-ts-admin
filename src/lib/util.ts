import Cookies from 'js-cookie';
import config from '@/config';

export const TOKEN_KEY = 'token'

export const setToken = (token: any) => {
  Cookies.set(TOKEN_KEY, token, {
    expires: config.cookieExpires || 1
  })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}

export const authorityControl = (jurisdiction: any, access: any) => {
  if(access) {
    if(access.indexOf(jurisdiction) === -1) return false
    else return true
  } else {
    return true
  }
}



