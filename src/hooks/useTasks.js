import axios from 'redaxios'
import {serverUrl} from '../utils/const'
import {dashDate, dayTime} from './useDate'
import {useStore} from 'vuex'

// Получаем данные пользователя для графика за неделю
export const getTaskWeek = async payload => {
  const response = await axios.post(`${serverUrl}get-task-during-period-full`, {
    firstDate: dashDate(payload.firstDate),
    secondDate: dashDate(payload.secondDate),
    userID: payload.userID
  })
  return response.data
}

// Получаем данные всех друзей
export const getTaskAll = async payload => {
  const response = await axios.post(`${serverUrl}data-all`, {
    firstDate: dashDate(payload.firstDate),
    secondDate: dashDate(payload.secondDate),
    userID: payload.userID
  })

  return response.data
}

// Обертка, чтобы убрать нахуй прокси
export const getChartTask = arr => {
  // item.isCompleted !== false необходима для того, чтобы дни, когда чел не занимался тоже проходили через фильтр(Да, я даун)


  return arr.filter(item => item.isCompleted !== false).map(item => {
    return {
      date: item.date,
      hours: item.hours
    }
  })
}




export const comingWeekData = (currTime, addDays) => {
  const arr = []
  for(let time = (currTime + dayTime); time < currTime + (addDays + 1)* dayTime; time += dayTime) {
    arr.push({
      date: time,
      hours: 0
    })
  }

  return arr.reverse()
}
