<template>
  <my-card>
    {{radar.data}}
  </my-card>
  <div class="radar-chart">
    <radar-chart
      :chart-data="radarData.data"
      :options="radarData.options"
      css-classes="chart-container"
    />
  </div>
</template>
<script setup>
  import { RadarChart } from 'vue-chart-3'
  import { Chart, registerables } from 'chart.js'
  import {watch, ref, onBeforeMount, reactive, computed} from 'vue'

  const props = defineProps(['radar'])
  Chart.register(...registerables)

  const radarData = computed(() => props.radar)

  watch(
    () => radarData.value,
    (to, from) => {
      console.log(to)
    }
  )
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
    box-shadow: 0px 0px 12px rgba(209, 253, 250, 0.25);
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
