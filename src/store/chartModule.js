import {
  createWeekData,
  parseLineData,
  parseLineLabels,
  getLineOptions,
  getLineDatasets,
  parseRadarData,
  getRadarOptions,
  getRadarDatasets,
} from '../hooks/useChart'

import {getTheme} from '../hooks/useTheme'

export const chartModule = {
  state: () => ({
    line: {},
    radar: {}
  }),
  getters: {
    line: (state) => state.line,
    radar: (state) => state.radar
  },
  mutations: {
    setLines(state, line) {
      state.line = line
    },
    setRadar(state, radar) {
      state.radar = radar
    }
  },
  actions: {
    renderLineChart({commit}, [data, theme, beginWeek]) {


      const weekData = createWeekData(data)

      const dataset = parseLineData(weekData)
      const labels = parseLineLabels(weekData, beginWeek)

      const line = {
        options: getLineOptions(theme),
        data: getLineDatasets(theme)
      }

      // console.log(line.options.scales)

      line.data.labels = labels.reverse()
      line.data.datasets[0].data = dataset.reverse()

      commit('setLines', line)
    },

    renderRadarChart({commit}, [data, theme]) {

      
      const radarData = parseRadarData(data)

      const radar = {
        options: getRadarOptions(theme),
        data: getRadarDatasets(theme)
      }

      radar.data.labels = radarData.labels 
      radar.data.datasets[0].data = radarData.data[0]
      radar.data.datasets[1].data = radarData.data[1]

      commit('setRadar', radar)
    }
  },
  namespaced: true
}
