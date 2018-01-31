<template>
	<div>
		<navBar></navBar>
		<br>
		<membre v-for="membre in membres" :membre="membre" :key="membre._id"></membre>
	</div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Membre from '@/components/Membre/Membre.vue'

export default {
	name: 'MembreListe',
	components : {
		NavBar,
		Membre
	},
	data () {
	    return {
	    	membres: []
	    }
	},
  	mounted () {
	    window.axios.get('members').then((response) => {
	              this.membres = response.data
	            }).catch((error) => {
	                alert(error.response.data.error);
	            });
  	}
}
</script>

<style scoped>
</style>