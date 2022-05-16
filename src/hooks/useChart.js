import {dMDate, dashDate, dayTime, dateWeekLabels} from './useDate'
import {
  mainLineOptions,
  lineMainDatasets,
  lineLightOptions,
  lineDarkOptions,
  radarMainDatasets,
  radarLigthOptions,
  radarDarkOptions
} from '../utils/chart'

// Изменение массива для графика
export const createWeekData = data => {
  const mergeDataset = arr => {
    for(let [i, item] of arr.entries()) {
        if(item.date === arr[i - 1]?.date) {
          item.hours += arr[i - 1]?.hours
          arr.splice(i - 1, 1)
        }
    }
    return arr
  }

  if(data.length > 7) {

    while(data.length > 7) {
      data = mergeDataset(data)
    }
  }

  return data
}

// Парсинг данных для графика
export const parseLineData = arr => {

  return arr.map(item => item.hours.toFixed(1))
}

// Парсинг данных для оси x графика
export const parseLineLabels = (arr, beginWeek) => {
  return beginWeek ? dateWeekLabels.reverse() : arr.map(item => dMDate(item.date))
}

// Парсинг данных для графика radar
export const parseRadarData = arr => {
  const labels = arr.map(item => item.username)
  const data = []

  data[0] = arr.map(item => item.userTaskInfo[0])
  data[1] = arr.map(item => item.userTaskInfo[1])

  return {labels, data}
}

// Получение стилей для осей линейного графика
export const getLineOptions = mode => {
  if(mode === 'light') {
    mainLineOptions.scales = lineLightOptions
    mainLineOptions.scales.x.ticks.color = '#8676FE'
    mainLineOptions.scales.y.ticks.color = '#8676FE'
    return mainLineOptions
  }

  if(mode === 'dark') {
    mainLineOptions.scales = lineDarkOptions
    mainLineOptions.scales.x.ticks.color = '#01F1E3'
    mainLineOptions.scales.y.ticks.color = '#01F1E3'
    return mainLineOptions
  }
}

// Получение стилей для данных линейного графика
export const getLineDatasets = mode => {
  if(mode === 'light') {
    lineMainDatasets.borderColor = '#8676FE'
    return {
      labels: [],
      datasets: [
        lineMainDatasets
      ]
    }
  }

  if(mode === 'dark') {
    lineMainDatasets.borderColor = '#01F1E3'
    return {
      labels: [],
      datasets: [
        lineMainDatasets
      ]
    }
  }
}

// Получение стилей для осей графика радара
export const getRadarOptions = mode => {
  if(mode === 'light') return radarLigthOptions

  if(mode === 'dark') return radarDarkOptions
}

// Получение стилей для данных графика радара
export const getRadarDatasets = mode => {
  if(mode === 'light') {
    radarMainDatasets.datasets[0].borderColor = '#8676FE'
    return radarMainDatasets
  }

  if(mode === 'dark') {
    radarMainDatasets.datasets[0].borderColor = '#01F1E3'
    return radarMainDatasets
  }
}
