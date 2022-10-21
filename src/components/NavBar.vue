<template>
    <div class="navbar">
        <router-link to="/" class="nav-btn">Home</router-link>
        <router-link to="/users-list" class="nav-btn">Users List</router-link> <br><br>
        <router-link to="/add-user" class="nav-btn">Add New User</router-link> <br><br>
        <router-link to="/profile" v-if="getLogState" class="nav-btn">Profile</router-link>
        <span v-if="getLogState" class="nav-btn" @click="logout">LogOut</span>
        <router-link to="/login" v-if="!getLogState" class="nav-btn">LogIn</router-link>
        
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex'
    export default {
        name: 'NavBar',
        data(){
            return{
                userLogIn: '',
            }
        },
        methods:{
            ...mapActions(["logOutAction"]),
            logout(){
                localStorage.clear()
                this.$router.push({name:'HomeComponent'})
                this.logOutAction()
            }
        },
        computed: mapGetters(["getLogState"]),
        beforeMount(){
            this.userLogIn = localStorage.userLogIn
        }
    }
</script>

<style>
    .navbar{
        display: flex;
        list-style: none;
        /* background-color: lightblue; */
        justify-content: center;
        padding: 10px;
    }
    .navbar .nav-btn{
        margin-right: 20px;
        padding: 5px;
        text-shadow: 4px 3px 3px grey;
        text-decoration: none;
        color: black;
        font-size: 20px;
    }
    .navbar .nav-btn:hover{
        box-shadow: 0px 1px 4px 2px black;
        border-radius: 10px;
        text-shadow: none;
        background-color: black;
        color: white;
    }
</style>