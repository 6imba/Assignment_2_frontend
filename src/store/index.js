import { createStore } from 'vuex'
import users_module from './modules/user/user_module'

export default createStore({
  modules: {
    users_module,
  }
})
