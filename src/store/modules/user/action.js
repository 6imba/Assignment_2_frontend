import axios from 'axios'
axios.defaults.withCredentials = true;
import router from '../../../routes/router'

const actions = {
    async setUsersStateAction({commit}){
        // check if user state exists or not
        try{
            let config = {method: 'get', url: process.env.VUE_APP_API_URL+'/api/user'}
            let response = await axios(config)
            commit("setUsersStateMutation", response.data)
        }
        catch(error){
            console.log(error.response?.data.message)
            alert(error)
            commit("setUsersStateMutation", [])
        }
    },
    async addUserAction({commit},newUser){
        try{
            let config = {method: 'post', url: process.env.VUE_APP_API_URL+'/api/user', data: newUser}
            let response = await axios(config)
            if(response.data.success){
                alert("New user added successfully!")
            }
            commit("addNewUserMutation", response.data)
            // router.push({ name: 'UsersList' })
        }
        catch(err){
            console.log(err.response.data.message)
            alert("Sorry, You are not authorized to perform an action!")
        }
    },
    async updateUserAction({commit}, params){
        let config = {method: 'put', url: `${process.env.VUE_APP_API_URL}/api/user/${params[0]}`, data: params[1]}
        let response = await axios(config)
        commit("updateUserMutation", response.data)
        alert("User updated!")
        router.push({ name: 'UsersList' })
    },
    async deleteUserAction({commit},userId){
        try{
            let config = {method: 'delete', url: `${process.env.VUE_APP_API_URL}/api/user/${userId}`}
            await axios(config)
            commit("removeUserMutation", userId)
            alert("User deleted!")
        }
        catch(err){
            console.log(err)
            alert(err)
        }
    },
    async logInAction({commit}, credential){
        try{
            let config = {method: 'post', url: process.env.VUE_APP_API_URL+'/api/user/login', data: credential}
            let response = await axios(config)
            console.log(response.data)
            // commit("changeLogStateMutation")
            commit("changeLogStateMutation", true)
            alert("User logged in!")
            // router.push({ name: 'ProfilePage' })
        }catch(error){
            console.log(error.message)
            console.log(error.response.data)
            alert(error.response.data.message)
        }
    },
    async logoutAction({commit}){
        try{
            let config = {method: 'get', url: process.env.VUE_APP_API_URL+'/api/user/logout'}
            await axios(config)
            console.log("Logout action!")
            alert("Logout action!")
            commit("changeLogStateMutation", false)
            router.push({ name: 'HomeComponent' })
        }
        catch(error){
            alert(error)
            console.log(error)
        }
    },
    // async logoutAction({commit}, logState){
    //     console.log("Logout action ==> ", logState)
    //     alert("Logout action!")
    //     if(!logState){
    //         alert("logout")
    //         // send logot request
    //         // /user/logout -> expired cookie from API.
    //         document.cookie = "accessToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    //         document.cookie = "refreshToken = ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    //     }
    //     commit("changeLogStateMutation", logState)
    //     if(logState) {
    //         router.push({ name: 'UsersList' })
    //     }
    //     else{
    //         router.push({ name: 'HomeComponent' })
    //     }
    // },

}

export default actions