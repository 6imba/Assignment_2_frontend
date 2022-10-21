import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// import cors from "cors"

const app = createApp(App)
app.use(router)
app.use(store)
// app.use(cors())
app.mount('#app')
