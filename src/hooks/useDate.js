
const pad = (s) => ('00' + s).slice(-2)

// Возвращает дату в виде 01.01.2022
export const dotsDate = (date) => {
  const d = new Date(date)
  return  `${pad(d.getDate())}.${pad(d.getMonth() + 1)}.${d.getFullYear()}`
}

// Возвращает дату в виде 2022-01-01
export const dashDate = (date) => {
  const d = new Date(date)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

// Возвращает дату в виде 01.01
export const dMDate = (date) => {
  const d = new Date(date)
  return `${pad(d.getDate())}.${pad(d.getMonth() + 1)}`
}

export const dayTime = 1000 * 60 * 60 * 24
export const weekTime = 1000 * 60 * 60 * 24 * 7
export const faultTime = 60 * 60 * 1000 * 3


export const dateSubtract = (date, days) => {
  const d = new Date(Date.now() - (dayTime * days))
  return d
}


export const dateAddition = (date, days) => {
  const d = new Date(Date.now() + (dayTime * days))
  return d
}

// Высчитывает кол-во дней, которые необходимо добавить до конца недели
export const mondayDay = time => {
  const date = new Date(time)
  return date.getDay() !== 0 ? (6 - date.getDay() + 1) : 0
}

export const timeAtZero = date => {
  const d = new Date(dashDate(date))
  return d.getTime()
}


export const dateWeekLabels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
