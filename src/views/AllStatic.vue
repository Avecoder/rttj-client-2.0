<template>
  <div class="inner-content">

    <views-header :label="'Статистика пользователя'"></views-header>

    <radar-chart :radar="radar"></radar-chart>

    <div class="week-legend">
      <span class="prev">Прошлая неделя</span>
      <span class="current">Текущая неделя</span>
    </div>

    <my-table :table="table"></my-table>

    <div class="d-flex">
      <my-button-router :path="'/'">Изменить план</my-button-router>
      <my-button-router :path="'/all'">Общая статистика</my-button-router>
    </div>
  </div>
</template>

<script setup>
  import ViewsHeader from '../components/ViewsHeader.vue'
  import RadarChart from '../components/RadarChart.vue'

  import {useStore} from 'vuex'
  import {reactive, watch, computed, onMounted} from 'vue'

  import {
    getRadarOptions,
    getRadarDatasets
  } from '../hooks/useChart'

  import {
    getAllStatic,
    createParams
  } from '../hooks/useAll'

  import {mapTableAll} from '../hooks/useTable'
  import {parseAllData} from '../hooks/useAll'

  const store = useStore()

  const tasks = computed(() => store.state.tasks)
  const user = computed(() => store.state.user)
  const all = computed(() => store.state.all)
  const timeRequest = computed(() => store.getters['tasks/timeRequest'])

  

  const allData = computed(() => store.getters['all/friendInf'](timeRequest.value))


  const radar = computed(() => store.getters['chart/radar'])


  const table = reactive({
    labels: ['Пользователь', 'Статус', 'Часы', 'Суммарное время'],
    data: []
  })
   
  const updateChartandTable = () => {
    table.data = allData.value.map(item => [
        item.username,
        item.activity,
        item.userTaskInfo[0].toFixed(1),
        item.hours
      ])
      store.dispatch('chart/renderRadarChart', [allData.value, user.value.theme])
  }
  

  watch(
    () => allData.value,
    (to, from) => {
      updateChartandTable()
      console.log('ALL DATA CHANGED')
      console.log(radar.value.data)
    }
  )

  watch(
    () => radar.value,
    (to, from) => {
      console.log('GOOD')
    }
  )

  watch(
    () => tasks.value.firstTime,
    () => {
      updateChartandTable()
      console.log('FIRSTTIME CHANGED')
    }
  )

  onMounted(() => {
    updateChartandTable()
    console.log('MOUNTED')
  })


</script>

<style lang="scss" scoped>
  @import '../styles/variables.scss';
  .week-legend {
    margin: 50px 0 120px;
    span {
      margin-right: 40px;
      color: #000;
      position: relative;
      padding-left: 20px;
      font-size: 14px;
      &:before{
        position: absolute;
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 10px;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      &.prev {
        &:before {
          background: $red;
        }
      }
      &.current {
        &:before {
          background: $blue;
        }
      }
    }
  }

  #app {
    &.dark {
      .week-legend {
        span {
          color: #fff ;
          &.current  {
            &:before {
              background: $cyan;
            }
          }
        }
      }
    }
  }
</style>
