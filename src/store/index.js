import { createStore } from 'vuex'
import users_module from './modules/users_module'

export default createStore({
  modules: {
    users_module,
  }
})
