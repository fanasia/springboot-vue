<template>
  <div class="container">
    <h1>Table Customer</h1>
    <button class="btn btn-primary"><router-link :to="'/add-customer'" target="_blank">Add Customers</router-link></button>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>ID</th>
          <th>Name</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getCustomer" :key="item.id">
          <td>{{index+1}}</td>
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td><button class="btn btn-default">Detail</button></td>
          <td><button class="btn btn-info">Update</button></td>
          <td><button class="btn btn-danger" @click="deleteCustomer(item.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>






<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Dashboard',
    data() {
      return {
        name: ''
      }
    },
    computed: {
      ...mapGetters(['getCustomer'])
    },
    mounted () {
      this.getAllCustomers()
    },
    methods: {
      getAllCustomers() {
        this.$store.dispatch('doGetAll')
      },
      deleteCustomer(id) {
        this.$store.dispatch('delete', id)
        this.$store.dispatch('doGetAll')
      }
    }
  }
</script>
