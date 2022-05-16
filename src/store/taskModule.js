import {getTaskWeek, comingWeekData} from '../hooks/useTasks'
import {dashDate, dayTime, weekTime, mondayDay, timeAtZero} from '../hooks/useDate'
import {createWeekData} from '../hooks/useChart'

export const taskModule = {
  state: () => ({
    tasks: [],
    firstTime: 0,
    secondTime: 0,
    firstTimeRequest: 0, // Время для запросов к серверу, иначе пизда
    secondTimeRequest: 0, // Время для запросов к серверу, иначе пизда
    beginWeek: false,
    addDays: 0
  }),
  getters: {
    tasks: state => {
      return state.tasks.filter(task => {
        if(task.date >= state.firstTime && task.date <= state.secondTime) return task
      })
    },
    beginWeek: state => state.beginWeek,
    addDays: state => state.addDays,
    timeRequest: state => {return {firstTime: state.firstTimeRequest, secondTime: state.secondTimeRequest}}
  },
  mutations: {
    setTime(state, time) {
      const d = new Date(time)
      state.firstTime = state.firstTimeRequest = d.getTime() - weekTime + dayTime
      state.secondTime = state.secondTimeRequest = d.getTime()
    },
    setTasks(state, tasks) {
      state.tasks.push(...tasks)
    },
    prevWeek(state) {
      state.secondTime -= weekTime
      state.firstTime -= weekTime
      state.secondTimeRequest -= weekTime
      state.firstTimeRequest -= weekTime
    },
    nextWeek(state) {
      if((state.secondTimeRequest + weekTime) <= timeAtZero(Date.now() + dayTime)) {
        state.firstTime += weekTime
        state.secondTime += weekTime
        state.secondTimeRequest += weekTime
        state.firstTimeRequest += weekTime
      }
    },
    setBeginWeek(state, value) {
      state.beginWeek = value
    },
    setBeginWeekDate(state) {
      state.secondTime += state.addDays * dayTime
      state.firstTime += state.addDays * dayTime
    },
    setLastDaysDate(state) {
      state.secondTime -= state.addDays * dayTime
      state.firstTime -= state.addDays * dayTime
    },
    setAddDays(state, days) {
      state.addDays = days
    },
  },
  actions: {
    async uploadTasks({state, commit}, userID) {
      let tasks = await getTaskWeek({
        userID,
        firstDate: dashDate(state.firstTimeRequest),
        secondDate: dashDate(state.secondTimeRequest + dayTime)
      })
      commit('setAddDays', mondayDay(state.secondTimeRequest))
      if(state.tasks.length === 0) {
        state.tasks.unshift(...comingWeekData(state.secondTimeRequest, state.addDays))
      }

      commit('setTasks', tasks.sort((a, b) => b.date - a.date))

    },
    async getTasksForThePeriod({state, commit, dispatch}, {userID}) {
      if(state.tasks[state.tasks.length - 1].date > state.secondTimeRequest) await dispatch('uploadTasks', userID)
    },
  },
  namespaced: true
}
