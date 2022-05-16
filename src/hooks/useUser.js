import axios from 'redaxios'
import {serverUrl} from '../utils/const'
import { useCookies } from 'vue3-cookies'
import {useStore} from 'vuex'
const {cookies} = useCookies()

import {weekTime} from './useDate'

// Получаем информацию о пользователе
export const getUser = async () => {
  const {data} = await axios.post(`${serverUrl}find-by-token`, {
    token: cookies.get('userToken')
  })
  return data
}

// Получаем токен из куки
export const getToken = () => {
  return cookies.get('userToken')
}

// Сохраняем токен к куки
export const setToken = urlParams => {
  cookies.set('userToken', urlParams.get('user'), weekTime * 8)
}
