import {createStore} from 'vuex'
import {userModule} from './userModule'
import {taskModule} from './taskModule'
import {chartModule} from './chartModule'
import {allModule} from './allModule'

export default createStore({
  modules: {
    user: userModule,
    tasks: taskModule,
    chart: chartModule,
    all: allModule
  }
})
