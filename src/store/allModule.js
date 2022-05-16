
import {getAllStatic, parseAllData} from '../hooks/useAll'
import {comingWeekData} from '../hooks/useTasks'
import {dayTime, weekTime} from '../hooks/useDate'



export const allModule = {
  namespaced: true,
  state: () => ({
    friendInf: []
  }),
  getters: {
    friendInf: (state) => timeRequest => {
      return parseAllData(state.friendInf, timeRequest)
    }
  },
  mutations: {
    setFriendInf(state, friendData) {
      state.friendInf.push(...friendData)
      
    },
    addFriendInf(state, friendData) {
      state.friendInf.forEach((item, i) => {
        console.log()
        item.userTaskInfo.push(...friendData[i].userTaskInfo.reverse())
      })
    }
  },
  actions: {
    async getFriendInf({state, commit, rootGetters}, {userID, firstTime, secondTime}) {
      const allUsers = await getAllStatic(userID, firstTime - weekTime, secondTime)

      const addDays = rootGetters['tasks/addDays']
      if(state.friendInf.length === 0) {
        allUsers.forEach(item => {
          item.userTaskInfo.unshift(...comingWeekData(secondTime, addDays))
          item.userTaskInfo.reverse()
        })
      }
      commit('setFriendInf', allUsers)
    },

    async uploadFriendInf({state, commit}, {userID, firstTime, secondTime}) {
      const userInfo = state.friendInf[0]?.userTaskInfo
      if(userInfo[userInfo.length - 1].date > secondTime) {
        const allUsers = await getAllStatic(userID, firstTime - weekTime, secondTime - weekTime)
        await commit('addFriendInf', allUsers)
      }
      
    }
  },
  namespaced: true
}
