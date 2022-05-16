import {getUser} from '../hooks/useUser'

export const userModule = {
  state: () => ({
    userID: '',
    username: '',
    userAvatar: '',
    hours: 0,
    status: '',
    activity: 'Чиллит',
    theme: '',
    friendsList: [],
  }),
  getters: {
    theme(state) {return state.theme}
  },
  mutations: {
    setUserID(state, userID) {
      state.userID = userID
    },
    setUsername(state, username) {
      state.username = username
    },
    setUserAvatar(state, userAvatar) {
      state.userAvatar = userAvatar
    },
    setHours(state, hours) {
      state.hours = hours.toFixed(2)
    },
    setStatus(state, status) {
      state.status = status
    },
    setActivity(state, activity) {
      state.activity = activity
    },
    setFriendsList(state, friendsList) {
      state.friendsList = friendsList
    },
    setTheme(state, theme) {
      state.theme = theme
    }
  },
  actions: {
    async updateUserInfo(context) {
      const user = await getUser()

      context.commit('setUserID', user.userID)
      context.commit('setUsername', user.username)
      context.commit('setUserAvatar', user.avatarURL)
      context.commit('setHours', user.hours)
      context.commit('setStatus', user.status)
      context.commit('setActivity', user.activity)
      context.commit('setFriendsList', user.friendsList)
    }
  },
  namespaced: true
}
