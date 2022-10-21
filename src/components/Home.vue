<template>
  <h1>Welcome to User Management</h1>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'HomeComponent',
    computed: mapGetters(["getLogState"]),
  }
</script>

<style scoped>
h1{
  margin-top: 150px;
}
</style>
