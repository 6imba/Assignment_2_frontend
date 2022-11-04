<template>
    <div class="navbar">
        <router-link to="/" class="nav-btn">Home</router-link>
        <router-link to="/users-list" class="nav-btn">Users List</router-link> <br><br>
        <router-link to="/add-user" class="nav-btn">Add New User</router-link> <br><br>
        <router-link to="/profile" v-if="getLogState" class="nav-btn">Profile</router-link>
        <!-- <span v-if="loggedIn" class="nav-btn" @click="logout">LogOut</span> -->
        <!-- <span class="nav-btn" @click="logoutAction(false)">LogOut</span> -->
        <span class="nav-btn" @click="logoutAction" v-if="getLogState">LogOut</span>
        <!-- <router-link to="/login" v-if="!loggedIn" class="nav-btn">LogIn</router-link> -->
        <router-link to="/login" class="nav-btn" v-if="!getLogState">LogIn</router-link>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    console.log(document.cookie)
    
    export default {
        name: 'NavBar',
        data(){
            return{
                userLoggedIn: false,
            }
        },
        methods:{
            ...mapActions(["logoutAction"]),
        },
        computed: mapGetters(["getLogState"]),
        // watch () {
        //     userLoggedIn {

        //     }
        //     this.loggedIn = true
        // },
        // beforeMount(){
        //     this.userLogIn = localStorage.userLogIn
        // },
        // created(){
        //     const authCookie = this.$cookies.get("Authorization")
        //     console.log(authCookie)    
        //     if (authCookie) {
        //         this.setLoggedIn()
        //     }
        //     else{
        //         this.setLoggedOut()
        //     }
        // }
    }
</script>

<style>
    .navbar{
        display: flex;
        list-style: none;
        background-color: rgb(220, 220, 220);
        justify-content: center;
        padding: 10px;
    }
    .navbar .nav-btn{
        margin-right: 20px;
        padding: 5px;
        text-shadow: 3px 1px 3px grey;
        text-decoration: none;
        color: black;
        font-size: 25px;
    }
    .navbar .nav-btn:hover{
        box-shadow: 0px 1px 4px 2px black;
        border-radius: 10px;
        text-shadow: none;
        background-color: black;
        color: white;
    }
</style>