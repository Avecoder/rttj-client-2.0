<template>
  <h1>{{label}}</h1>
  <div class="d-flex jce mb20">
    <my-date-period :dates="datePeriod"></my-date-period>
  </div>
  <div class="d-flex jcb aic mb40">
    <my-select :options="['За последние 7 дней','С начала недели']" @changeCheckbox="setBeginWeek" :checked="beginWeek"></my-select>
    <my-arrows @arrowClick="changeWeek"></my-arrows>
  </div>
</template>

<script setup>
  const props = defineProps(['label'])

  import {useStore} from 'vuex'
  import {computed, reactive, watchEffect, watch} from 'vue'

  import {dashDate, dMDate, dayTime} from '../hooks/useDate'

  const store = useStore()

  // Данные о пользователе
  const userData = computed(() => store.state.user)

  // Данные о заданиях
  const tasks = computed(() => store.state.tasks)

  // Переменная, которая показывает, что нужно отсчитывать неделю с понедельника
  const beginWeek = computed(() => store.getters['tasks/beginWeek'])

  const datePeriod = reactive({
    firstDate: dMDate(tasks.value.firstTime),
    secondDate: dMDate(tasks.value.secondTime)
  })

  const changeWeek = data => {
    if(data === 'prev') {
      store.commit('tasks/prevWeek')
    }
    if(data === 'next' && userData.value.weekIndex !== 0) {
      store.commit('tasks/nextWeek')
    }
  }

  const setBeginWeek = data => {
    store.commit('tasks/setBeginWeek', data)
  }

  watch(
    () => tasks.value.firstTime,
    () => {
      datePeriod.firstDate = dMDate(tasks.value.firstTime)
      datePeriod.secondDate = dMDate(tasks.value.secondTime)
    }
  )
</script>

<style lang="scss" scoped>
</style>
