const mutations = {
    setUsersStateMutation: (state,usersList) => {
        // console.log("user state: ",state.users)
        state.users = usersList //mutated state
        // console.log("mutated state***")
        // console.log("user state: ",state.users)
    },
    addNewUserMutation: (state, newUser) => {
        console.log(' Add New User Mutation 1-------------------')
        console.log(state)
        console.log(state.user)
        console.log(newUser)
        state.users.push(newUser)
        console.log(' Add New User Mutation 2-------------------')
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
    changeLogStateMutation: (state, logState) => {
        console.log("Change log state mutation!")
        state.log = logState
    }
}

export default mutations