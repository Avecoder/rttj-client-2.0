<template>
  <doughnut-chart
    :chart-data="doughnut.data"
    :options="doughnut.options"
    css-classes="chart-container"
  />
</template>

<script>
  import { DoughnutChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'

  export default {
    name: 'my-doughnut-chart',
    components: {
      DoughnutChart
    },
    props: {doughnut: [Object]},
    mounted() {
      Chart.register(...registerables)
    }
  }
</script>

<style lang="scss" scoped>
</style>
