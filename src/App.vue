<template>
  <div class="app-container" v-if="user.userID">
    <Header></Header>
    <div class="container">
      <div class="content">
        <Sidebar></Sidebar>
        <router-view></router-view>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
  <div class="main-container" v-else>
    <h1>UNAUTH PAGE</h1>
    <Bottom></Bottom>
  </div>


</template>


<script setup>
  import Header from './components/Header.vue'
  import Bottom from './components/Bottom.vue'
  import Sidebar from './components/Sidebar.vue'

  import {checkTheme, getTheme} from './hooks/useTheme'
  import {mondayDay, dayTime, dashDate} from './hooks/useDate'
  import {getUser} from './hooks/useUser'



  import {onBeforeMount, computed, watch} from 'vue'
  import {useStore} from 'vuex'

  const store = useStore()

  const user = computed(() => store.state.user)
  const tasks = computed(() => store.state.tasks)

  const beginWeek = computed(() => store.getters['tasks/beginWeek'])



  onBeforeMount(async () => {
    checkTheme()
    const user = await getUser()
    store.commit('tasks/setTime', dashDate(Date.now()))
    store.dispatch('user/updateUserInfo')
    store.commit('user/setTheme', getTheme())

    store.dispatch('tasks/uploadTasks', user.userID)

    store.dispatch('all/getFriendInf', {
      userID: user.userID,
      firstTime: tasks.value.firstTimeRequest,
      secondTime: tasks.value.secondTimeRequest,
    })
  })

  const updateInf = () => {
    store.dispatch('tasks/getTasksForThePeriod', {
      userID: user.value.userID
    })
    store.dispatch('all/uploadFriendInf', {
      userID: user.value.userID,
      firstTime: tasks.value.firstTimeRequest,
      secondTime: tasks.value.secondTimeRequest,
    })
  }

  watch(
    () => beginWeek.value,
    (newVal, oldVal) => {
      if(newVal) store.commit('tasks/setBeginWeekDate')
      else store.commit('tasks/setLastDaysDate')
    }
  )

  watch(
    () => tasks.value.firstTime,
    () => {
      updateInf()
    }
  )

</script>

<style lang="scss">
  @import './styles/App.scss';

  .content {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: calc(100vh - 100px);
    height: auto;
    padding-top: 150px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: $ff;

    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: $cyan;
      border-radius: 3px;
    }

  }

  .main-container {
    h1{
      color: #000 !important;
    }
  }

  #app {
    &.dark {
      .app-container{
        background-image: url('https://steamuserimages-a.akamaihd.net/ugc/1636486531393362894/0B209945C327DB77548028D1690FC41FF94BFD16/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false%27%20');
      }
    }
  }
</style>
