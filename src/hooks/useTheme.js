import {onBeforeMount} from 'vue'

// Получение значения темы
export const getTheme = () => {
  return localStorage.getItem('theme')
}

// Смена темы
export const changeTheme = () => {
  const el = document.querySelector('#app')
  el.classList.toggle('dark')
  localStorage.setItem('theme', getTheme() === 'dark' ? 'light' : 'dark')
}

// Проверка темы и добавление необходимого класса app
export const checkTheme = () => {
  const theme = getTheme()
  const el = document.querySelector('#app')
  el.classList.add(theme === 'dark' ? 'dark' : 'light')
}
