<template>
  <div class="line-chart">
    <line-chart
      :chart-data="line.data"
      :options="line.options"
      css-classes="chart-container"
    />
  </div>

</template> 

<script setup>
  import {getLineOptions} from '../hooks/useChart'
  import {getTheme} from '../hooks/useTheme'
  import { LineChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  import {watch, reactive, computed} from 'vue'

  Chart.register(...registerables)
  const props = defineProps(['line'])


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
