<template>
  <div class="radar-chart">
    <radar-chart
      :chart-data="radar.data"
      :options="radar.options"
      css-classes="chart-container"
    />
  </div>
</template>
<script>
  import { RadarChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'

  export default {
    name: 'my-radar-chart',
    components: {
      RadarChart
    },
    props: ['radar'],
    created() {
      Chart.register(...registerables)
    }
  }
</script>

<style lang="scss" scoped>
  .radar-chart{
    max-width: 800px;
    max-height: 800px;
    position: relative;
    z-index: 5;
    background: #fff;
    border-radius: 20px;
    padding: 56px 20px;
    box-shadow: 0px 0px 12px #7774;
  }

  #app {
    &.dark {
      .radar-chart{
        box-shadow: none;
        background: rgba(24, 24, 24, 0.6);
        backdrop-filter: blur(3px);
      }
    }
  }
</style>
