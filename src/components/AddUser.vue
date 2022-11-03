<template>
    <h1>Add User</h1>
    <div class="add-user">
      <form action="" @submit.prevent="onSubmit">
        <input type="text" id="name" class="field" placeholder="Enter Name" v-model="name"><br>
        <input type="email" id="email" class="field" placeholder="Enter Email" v-model="email"><br>
        <input type="password" id="password" class="field" placeholder="Enter Password" v-model="password"><br>
        <input type="text" id="address" class="field" placeholder="Enter Address" v-model="address"><br>
        <div>
          <span> <b>Gender</b> </span>
          <input type="radio" name="gender" value="male" v-model="gender">
          <label for="male">male</label>
          <input type="radio" name="gender" value="female" v-model="gender">
          <label for="female">female</label>
        </div>
        <br>
        <button type="submit">Add</button>
      </form>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'

  export default {
    name: 'AddUser',
    data(){
      return{
        name: '',
        email: '',
        password: '',
        address: '',
        gender: ''
      }
    },
    methods:{
      ...mapActions(["addUserAction"]),
      onSubmit(){
        const newUser = { name: this.name, email: this.email, password: this.password, address: this.address, gender: this.gender}
        this.addUserAction(newUser)
        // this.name = ''
        // this.email = ''
        // this.password = ''
        // this.address = ''
        // this.gender = ''
      },
    },
  }
</script>

<style scoped>
  h1{
      padding-top: 40px;
      text-shadow: 2px 2px 2px grey;
  }
  .add-user .field{
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
