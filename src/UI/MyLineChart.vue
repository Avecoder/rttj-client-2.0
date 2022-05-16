<template>
  <div class="line-chart">
    <line-chart
      :chart-data="lineData"
      :options="lineOptions"
      css-classes="chart-container"
    />
  </div>


</template>

<script>
  import { defineComponent, h, reactive, onMounted } from 'vue'
  import { LineChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'

  Chart.register(...registerables)

  export default defineComponent({
    name: 'my-line-chart',
    components: {LineChart},
    setup(props) {
      // const lineData = reactive(line.data)
      //
      // const lineOptions = reactive(line.options)
      onMounted(() => console.log(line))
      return {

      }
    }
  })
</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';

  .line-chart {
    background: #FFFFFF;
    box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
    border-radius: 12px;
    padding: 16px 28px 42px;
    width: auto;
    margin-bottom: 54px;
  }

  .check_color{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    margin: 10px;
  }

  #app {
    &.dark {
      .line-chart {
        background: rgba(24, 24, 24, 0.6);
        backdrop-filter: blur(3px);
        box-shadow: none;
      }
    }
  }
</style>
