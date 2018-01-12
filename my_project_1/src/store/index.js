import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		count: 0,
    customerList: []
	},
	mutations: {
		increment (state) {
			state.count++
		},
		setCustomer(state, value) {
		  state.customerList = value
    }
	},
	getters: {
		getCount: (state) => {
		  return state.count
	  },
    getCustomer: (state) => {
		  return state.customerList
    }
  },
  actions: {
    doGetAll: ({commit}) => {
      const URL = 'api/customers'

      axios.get(URL)
        .then(response => {
          console.log(response)
          commit('setCustomer', response.data)
        })
      .catch(error => {
        console.log(error)
      })
    },
    delete: ({commit}, param) => {
      const URL = 'api/customers/' + param

      axios.delete(URL)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    addCustomer: ({commit}, param) => {
      const URL = 'api/customers'

      axios.post(URL, {name: param[0], address: {country: param[1], province: param[2], city: param[3], street: param[4]}})
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})

export default store
