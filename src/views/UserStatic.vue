<template>
  <div class="inner-content">

    <views-header :label="'Статистика пользователя'"></views-header>

    <!-- <my-line-chart :line="line"></my-line-chart> -->

    <line-chart :line="line"></line-chart>

    <h2 class="mb40">Занятия пользователя</h2>

    <my-table v-if="table.data.length !== 0" :table="table"></my-table>
    <p class="mb40" v-else>Заданий не найдено</p>
    <!-- <div class="loader-container" v-if="loader">
      <my-loader></my-loader>
    </div> -->

    <div class="d-flex">
      <my-button-router :path="'/'">Изменить план</my-button-router>
      <my-button-router :path="'/all'">Общая статистика</my-button-router>
    </div>



  </div>
</template>

<script setup>
  import {
    reactive,
    ref,
    onBeforeMount,
    computed ,
    onMounted,
    watchEffect,
    watch,
    readonly
  } from 'vue'

  import {useStore} from 'vuex'

  import {dateSubtract, dateAddition, dashDate, dMDate, mondayDay} from '../hooks/useDate'
  import {getUser} from '../hooks/useUser'
  import {mapTableTasks} from '../hooks/useTable'
  import {getTheme} from '../hooks/useTheme'
  import {getChartTask, comingWeekData} from '../hooks/useTasks'
  import {
    getLineOptions,
    getLineDatasets,
    createWeekData,
    parseLineData,
    parseLineLabels
  } from '../hooks/useChart'

  import ViewsHeader from '../components/ViewsHeader.vue'

  import LineChart from '../components/LineChart.vue'

  import MyLoader from '../UI/MyLoader.vue'

  const loader = ref(false)

  const store = useStore()

  const userData = computed(() => {
    return store.state.user
  })

  const tasks = reactive(store.state.tasks)

  const getTasks = computed(() => {
    return store.getters['tasks/tasks']
  })

  const beginWeek = computed(() => store.getters['tasks/beginWeek'])

  const line = computed(() => store.getters['chart/line'])

  const table = reactive({
    labels: ['Задача', 'Время', 'Дата', 'Выполнено'],
    data: []
  })

  const theme = computed(() => store.getters['user/theme'])

  // Обновление таблицы и графика
  const updateTableAndChart = () => {
    table.data = mapTableTasks(getTasks.value)
    store.dispatch('chart/renderLineChart', [getChartTask(getTasks.value), theme.value, beginWeek.value])

  }

  onMounted(() => updateTableAndChart())

  // При первой загрузке данных в tasks
  watch(
    () => getTasks.value.length,
    (newVal, oldVal) => updateTableAndChart()
  )

  // При изменении времени
  watch(
    () => tasks.firstTime,
    (newVal, oldVal) => {
      updateTableAndChart()
    }
  )

  watch(
    () => beginWeek.value,
    () => {
      updateTableAndChart()
    }
  )


  watch(
    () => theme.value,
    () => {
      updateTableAndChart()
    }
  )

</script>

<style lang="scss" scoped>

</style>
