<template>
  <h2>User List</h2>
  <div class="grid-container">
      <div v-for="user in getUsersState" class="grid-item" :key="user.id">
          <p>Name: {{user.name}}</p>
          <p>Email: {{user.email}}</p>
          <p>Address: {{user.address}}</p>
          <p>Gender: {{user.gender}}</p>
          <div class="button-container">
            <router-link :to="'/update-user/'+user._id" class="button">Update</router-link>
            <button @click="deleteUserAction(user._id)" class="button">Delete</button>
          </div>
      </div>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'UsersList',
    methods:{
            ...mapActions(["setUsersStateAction","deleteUserAction"]),
        },
    computed: mapGetters(["getUsersState"]),
    created(){
      this.setUsersStateAction()
    },
  }
</script>

<style scoped>
  .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      gap: 50px;
      margin: 30px;
  }
  .grid-item{
      background-color: rgb(220, 220, 220);
  }
  .button-container{
    display: grid;
    grid-template-columns: auto auto;
  }
  .button-container .button{
    background: rgb(43, 43, 43);
    color: white;
    border: none;
    border-radius: 20px;
    text-decoration: none;
    font-size: 15px;
    margin: 10px;
  }
</style>
