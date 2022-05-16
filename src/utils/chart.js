
export const mainLineOptions = {
  plugins: {
    legend: {
        labels: false
    }
  }
}

export const lineMainDatasets = {
  borderWidth: 1,
  tension: .3,
  cursor: 'pointer',
  backgroundColor: 'rgba(134, 118, 254, 0.18)',
  label: 'Прозанимался',
  data: []
}

export const lineLightOptions = {
  x: {
    grid: {
      color: '#F0F3FF',
      borderColor: '#F0F3FF',
      tickColor: 'transparent',
    },
    ticks: {
      color: '#8676FE',
      padding: 12,
    }
  },
  y: {
    beginAtZero: true,
    grid: {
      color: 'transparent',
      borderColor: '#8676FE',
      tickColor: 'transparent'
    },
    ticks: {
      color: '#8676FE',
      stepSize: 1,
      padding: 8
    }
  }
}

export const lineDarkOptions = {
  x: {

    grid: {
      color: '#323232',
      borderColor: '#323232',
      tickColor: 'transparent',
    },
    ticks: {
      color: '#01F1E3',
      padding: 12,
    }
  },
  y: {
    beginAtZero: true,
    grid: {
      color: 'transparent',
      borderColor: '#323232',
      tickColor: 'transparent'
    },
    ticks: {
      color: '#01F1E3',
      stepSize: 1,
      padding: 8
    }
  }
}

export const radarMainDatasets = {
  datasets: [
    {
      label: 'Текущая неделя',
      backgroundColor: 'rgba(134, 118, 254, 0.18)',
      borderColor: '#8676FE',
      borderWidth: 1,
      tension: .1
    },
    {
      label: 'Прошлая неделя',
      backgroundColor: 'rgba(255, 112, 139, 0.18)',
      borderColor: '#FF708B',
      borderWidth: 1,
      tension: .1
    }
  ]
}

export const radarLigthOptions = {
  scales: {
    r: {
      beginAtZero: true,
      grid: {
        color: 'rgba(1, 1, 1, 0)',
        borderWidth: .5,
      },
      ticks: {
        display: false
      },
      angleLines: {
        color: '#F0F3FF'
      },
      pointLabels: {
        color: '#000',
        font: {
          size: 14,
          family: 'Raleway',
          color: '#000'
        },
        padding: 28
      }
    },
  },
  plugins: {
    legend: {
      labels: false
    }
  }
}

export const radarDarkOptions = {
  scales: {
    r: {
      beginAtZero: true,
      grid: {
        color: 'rgba(1, 1, 1, 0)',
        borderWidth: .5,
      },
      ticks: {
        display: false
      },
      angleLines: {
        color: '#343434'
      },
      pointLabels: {
        color: '#fff',
        font: {
          size: 14,
          family: 'Raleway',
          color: '#fff'
        },
        padding: 28
      }
    }
  },
  plugins: {
    legend: {
      labels: false
    }
  }
}
