<template>
    <h1>Sign In</h1>
    <div class="signin-form">
        <form action="" @submit.prevent="onSubmit">
            <input type="email" id="email" placeholder="Email" v-model="email" required><br>
            <input type="password" id="password" placeholder="Password" v-model="password" required><br>
            <button>Log In</button>
        </form>
    </div>
    <p>
        Don't have an account?
        <router-link to="/add-user">SignUp</router-link>
    </p>


</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        name: 'LogIn',
        data(){
            return{
                email: '',
                password: '',
            }
        },
        methods:{
            ...mapActions(["changeLogAction","logInAction"]),
            async onSubmit(){
                this.logInAction({email: this.email, password: this.password})
            }
        },
        mounted(){
            if(localStorage.userInfo){
                this.$router.push({name:'ProfilePage'})
            }
        }
    }
</script>

<style scoped>
  h1{
      padding-top: 40px;
      text-shadow: 2px 2px 2px grey;
  }
  .signin-form input{
      padding: 8px;
      width: 250px;
      margin-bottom: 15px;
  }
  button{
      width: 270px;
      height: 33px;
      color: white;
      background-color: #0C0C0C;
  }
</style>
