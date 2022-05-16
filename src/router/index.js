import { createWebHistory, createRouter } from 'vue-router';

import {getUser, getToken, setToken} from '../hooks/useUser'


import {useStore} from 'vuex'



import AllStatic from '../views/AllStatic.vue'
import Friends from '../views/Friends.vue'
import Tasks from '../views/Tasks.vue'
import UserStatic from '../views/UserStatic.vue'
import History from '../views/History.vue'
import Admin from '../views/Admin.vue'
import Profile from '../views/Profile.vue'
import Banned from '../views/Banned.vue'
import MainPage from '../views/MainPage.vue'
import Achievements from '../views/Achievements.vue'

const adminRoutes = [
  {
    path: '/',
    name: 'Статистика пользователя',
    component: UserStatic
  },
  {
    path: '/all',
    name: 'Общая статистика',
    component: AllStatic
  },
  {
    path: '/tasks',
    name: 'Ожидаемые задачи',
    component: Tasks
  },
  {
    path: '/friend',
    name: 'Список друзей',
    component: Friends
  },
  {
    path: '/history',
    name: 'История',
    component: History
  },
  {
    path: '/profile',
    name: 'Профиль',
    component: Profile
  },
  {
    path: '/achievements',
    name: 'Ачивки',
    component: Achievements
  },
  {
    path: '/admin',
    name: 'Панель администратора',
    component: Admin
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/'
  },
]

const userRoutes = [
  {
    path: '/',
    name: 'Статистика пользователя',
    component: UserStatic
  },
  {
    path: '/all',
    name: 'Общая статистика',
    component: AllStatic
  },
  {
    path: '/tasks',
    name: 'Ожидаемые задачи',
    component: Tasks
  },
  {
    path: '/friend',
    name: 'Список друзей',
    component: Friends
  },
  {
    path: '/history',
    name: 'История',
    component: History
  },
  {
    path: '/profile',
    name: 'Профиль',
    component: Profile
  },
  {
    path: '/achievements',
    name: 'Ачивки',
    component: Achievements
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/'
  },
]


const bannedRoutes = [
  {
    path: '/banned',
    name: 'Banned',
    component: Banned
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/banned'
  },
]


const publicRoutes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/'
  },
]


const validateRouter = async () => {
  const store = useStore()
  let routes = []
  let router

  const urlParams = new URLSearchParams(window.location.search)
  const queryName = 'user'
  let userInfo = ''



  if(urlParams.get(queryName)) setToken(urlParams)

  if(getToken()) userInfo = await getUser(getToken())



  switch(userInfo.status) {
    case 'ADMIN':
      routes = adminRoutes
      break
    case 'USER':
      routes = userRoutes
      break
    case 'BANNED':
      routes = bannedRoutes
      break
    default:
      routes = publicRoutes
  }

  router = await createRouter({
    history: createWebHistory(),
    routes
  })


  return router
}



export default await validateRouter()
