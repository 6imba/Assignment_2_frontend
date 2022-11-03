<template>
    <h1>Update User</h1>
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
        <button type="submit">Update</button>
      </form>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import axios from 'axios'

  export default {
    name: 'UpdateUser',
    data(){
      return{
        id: '',
        name: '',
        email: '',
        password: '',
        address: '',
        gender: ''
      }
    },
    methods:{
      ...mapActions(["addUserAction","updateUserAction"]),
      onSubmit(){
        const updateUser = { name: this.name, email: this.email, password: this.password, address: this.address, gender: this.gender}
        this.updateUserAction([this.id,updateUser])
      }
    },
    async mounted(){
      const config = {
          method: 'get',
          url: `http://localhost:8010/api/user/${this.$route.params.id}`,
      }
      const res = await axios(config)
      this.id = res.data._id
      this.name = res.data.name
      this.email = res.data.email
      this.password = res.data.password
      this.address = res.data.address
      this.gender = res.data.gender
      // console.log('----------------------------------------------------------------------------------------')
      // console.log("User current info: ",res)
      // console.log('----------------------------------------------------------------------------------------')
    }

  }
</script>

<style scoped>
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
