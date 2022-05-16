import {dashDate, weekTime} from './useDate'
import axios from 'redaxios'
import {serverUrl} from '../utils/const'

// Получаем данные о друзьях
export const getAllStatic = async (userID, firstTime, secondTime) => {

  const {data} = await axios.post(`${serverUrl}data-all-by-day`, {
    userID,
    firstDate: dashDate(firstTime),
    secondDate: dashDate(secondTime)
  })
  return data.reverse()
}

// Получаем имена друзей
export const getUsernameAll = (arr, userID) => {
  return arr.map(item => {
    if(item.userID == userID) return 'Ты'
    else return item.username
  })
}

export const createParams = (arr, userID) => {
  return [getUsernameAll(arr, userID), [arr.map(item => item.data[0]), arr.map(item => item.data[1])]]
}

// Обертка для того, чтобы удалить прокси нахуй
export const allUserWrapRemoveProxy = (arr) => {
  return arr.map(item => {
    return {
      userID: item.userID,
      username: item.username,
      userTaskInfo: item.userTaskInfo,
      activity: item.activity
    }
  })
}

// Формирование данных для геттера
export const parseAllData = (arr, timeRequest) => {
  const allUsers = allUserWrapRemoveProxy(arr)


  for(let user of allUsers) {
    user.userTaskInfo = user.userTaskInfo.filter(item => {
      if(item.date >= (timeRequest.firstTime - weekTime) && item.date <= timeRequest.secondTime) return item
    })
    user.userTaskInfo = [user.userTaskInfo.splice(7), user.userTaskInfo.splice(0, 7)].reverse()
  }



  for(let user of allUsers) {
    user.userTaskInfo[0] = user.userTaskInfo[0].reduce((acc, curr) => acc + curr.hours ,0)
    user.userTaskInfo[1] = user.userTaskInfo[1].reduce((acc, curr) => acc + curr.hours ,0)
  }


  return allUsers
}
