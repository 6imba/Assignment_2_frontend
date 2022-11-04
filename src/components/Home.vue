<template>
  <h2>Welcome to User Management</h2>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'HomeComponent',
    computed: mapGetters(["getLogState"]),
  }
</script>

<style scoped>
h2{
  margin-top: 150px;
}
</style>
