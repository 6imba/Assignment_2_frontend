import actions from './action.js'
import mutations from './mutation.js'

const state = {
    users: null,
    log: false
}

const getters = {
    getUsersState: state => state.users,
    getLogState: state => state.log
    // getLogState: state => if cookie has valid token set true else false
}

export default { state, getters, mutations, actions }