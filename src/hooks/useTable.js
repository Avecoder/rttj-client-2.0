import {dMDate} from './useDate'

// Формируем массив для таблицы с заданиями пользователя
export const mapTableTasks = arr => {
  return arr.filter(item => item.hours > 0).map(item => [item.label, item.hours.toFixed(1), dMDate(item.date), item.isCompleted ? 'Да' : 'Нет'])
}

// Формируем массив для таблицы с информацией о друзьях
export const mapTableAll = arr => {
  return arr
  .sort((a, b) => b.data[0] - a.data[0])
  .map(item => [item.username, item.activity, item.data[0].toFixed(1), item.hours.toFixed(1)])
}
