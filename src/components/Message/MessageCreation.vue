<template>
	<div>
		<form @submit="Enregistrer">
		    <textarea v-model="message" placeholder="message"></textarea>
		    <br>
		    <input type="submit" value="Enregistrer">
  		</form>
	</div>
</template>

<script>

export default {
	name: 'MessageCreation',
	data () {
	    return {
	    	message :''
	    }
	},
	methods : {
		Enregistrer(){
			if(this.message != '') {
				window.axios.post('channels/' + this.$route.params.id + '/posts', {
			        message : this.message
			    }).then((response) => {
			    	this.message = '';
			    }).catch((error) => {
			        alert(error.response.data.error);
			    });

				window.bus.$emit('chargeMessage');
			}
  		}
	}
}

</script

<style scoped>
</style>