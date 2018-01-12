<template>
	<div>
		<h1>Lets learning API</h1>

		<button @click="callApi">Click Me to Get API</button>

		<ul>
			<li v-for="film in films" :key="film.id">
				{{film.title}}
			</li> 
		</ul>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'LearnAPI',
		data() {
			return {
				films: []
			}
		},
		methods: {
			callApi() {
				//call api here
				const URL = 'https://ghibliapi.herokuapp.com/films'
				axios.get(URL)
				.then(response => {
					this.films = response.data
				})
				.catch(error => {
					console.log(error)
				})
				console.log('call api here with', axios)
			}
		}
	}
</script>

<style>
</style>