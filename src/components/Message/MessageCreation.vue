<template>
		<form @submit="Enregistrer">
		    <input type="text" v-model="message" placeholder="message">
		    <input type="submit" value="Enregistrer">
  		</form>
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
			window.axios.post('channels/' + this.$route.params.id + '/posts', {
		        message : this.message
		    }).catch((error) => {
		        alert(error.response.data.error);
		    });

			window.bus.$emit('chargeMessage');
  		}
	}
}

</script>

<style scoped>
form{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  box-sizing: border-box;
}
input{
  width: 90%;
  box-sizing: border-box;
  margin: auto;
  text-align: left;
}
input:nth-child(2){
  width: 10%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
</style>
