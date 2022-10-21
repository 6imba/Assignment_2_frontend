import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '';
import router from '../../router'

const state = {
    users: null,
    log: false
}

const getters = {
    getUsersState: state => state.users,
    getLogState: state => state.log
}

const mutations = {
    setUsersStateMutation: (state,usersList) => {
        console.log(' setUsersStateMutation -----------------------------------------------------------------------------------------')
        console.log("user state: ",state.users)
        state.users = usersList //mutated state
        console.log("mutated state***")
        console.log("user state: ",state.users)
        console.log(' setUsersStateMutation -----------------------------------------------------------------------------------------')
    },
    addNewUserMutation: (state, newUser) => {
        console.log(' addNewUserMutation -----------------------------------------------------------------------------------------')
        console.log(state.users) // here why is state having initial value?
        console.log(state.log)
        console.log(newUser)
        // state.users.unshift(newUser)
        console.log(' addNewUserMutation -----------------------------------------------------------------------------------------')
    },
    removeUserMutation: (state, userId) => {
        state.users =  state.users.filter( user => user._id != userId )
    },
    updateUserMutation: (state, updateUser) => {
        state.users =  state.users.map(user => {
            if(user.id == updateUser.id){
                return updateUser
            }
            return user
        })
    },
    changeLogStateMutation: (state) => {
        state.log = !state.log
    },
}

const actions = {
    async setUsersStateAction({commit}){
        // check if user state exists or not
        let response = await axios.get("http://localhost:8000/users")
        commit("setUsersStateMutation", response.data)
    },
    async addUserAction({commit},newUser){
        let response = await axios.post("http://localhost:8000/create-user",newUser)
        commit("addNewUserMutation", response.data)
        router.push({ name: 'UsersList' })
    },
    async updateUserAction({commit}, params){
        let response = await axios.patch(`http://localhost:8000/update-user/${params[0]}`,params[1])
        commit("updateUserMutation", response.data)
        router.push({ name: 'UsersList' })
    },
    async deleteUserAction({commit},userId){
        await axios.delete(`http://localhost:8000/delete-user/${userId}`)
        commit("removeUserMutation", userId)
    },
    async logInAction({commit}, credential){
        try{
            // let response = await axios.post("http://localhost:8000/login-user/",credential)
            let response = await axios.post("http://localhost:8007/api/auth/login",credential)
            console.log("Login API called ==> ",response.data)
            if(response.data.logged == true){
                commit("changeLogStateMutation")
                router.push({ name: 'ProfilePage' })
            }
        }catch(error){
            // console.log("Error ==> ",error)
            console.log( JSON.stringify(error))
        }
    },
    logOutAction({commit}){
        commit("changeLogStateMutation")
        router.push({ name: 'HomeComponent' })
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}