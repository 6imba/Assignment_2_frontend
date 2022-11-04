import { createApp } from 'vue'
import VueCookies from 'vue-cookies';

import App from './App.vue'
import store from './store'
import router from './routes/router'

const app = createApp(App)
app.use(VueCookies);
app.use(router)
app.use(store)
app.mount('#app')
