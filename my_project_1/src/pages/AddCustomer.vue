<template>
  <div class="container">
    <h1>Add Customer</h1>
    <form>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="nameData">
      </div>
      <h2>Address : </h2>
      <div class="form-group">
        <label>Country:</label>
        <input type="text" class="form-control" v-model="countryData">
      </div>
      <div class="form-group">
        <label>Province:</label>
        <input type="text" class="form-control" v-model="provinceData">
      </div>
      <div class="form-group">
        <label>City:</label>
        <input type="text" class="form-control" v-model="cityData">
      </div>
      <div class="form-group">
        <label>Street:</label>
        <input type="text" class="form-control" v-model="streetData">
      </div>
      <button type="submit" class="btn btn-primary" @click="addCustomer">Submit</button>
    </form>
    <br>
    <br>
  </div>
</template>




<script>
  export default {
    name: 'AddCustomer',
    data() {
      return {
        nameData: '',
        countryData: '',
        provinceData: '',
        cityData: '',
        streetData: ''
      }
    },
    method: {
      addCustomer() {
        var param = [this.nameData, this.countryData, this.provinceData, this.cityData, this.streetData]
        this.$store.dispatch('addCustomer', param)
      }
    }
  }
</script>
