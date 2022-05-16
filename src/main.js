import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import components from './UI'
import VCalendar from 'v-calendar'



const app = createApp(App)

components.forEach(component => app.component(component.name, component))
app.use(router)
app.use(store)



app.use(VCalendar, {})


app.mount('#app')
