<template>
	<div id="ConversationCreation">
		<form @submit="Enregistrer">
		    <input type='text' v-model="label" placeholder="titre">
		    <br>
		    <textarea v-model="topic" placeholder="description"></textarea>
		    <br>
		    <input type="submit" value="Enregistrer">
    		<router-link to="/conversation">Retour</router-link>
  		</form>
	</div>
</template>

<script>

export default {
  name: 'ConversationCreation',
  components:{

  },
  data () {
  	return {
  		label :'',
  		topic:''
  	}
  },
  methods : {
  	Enregistrer(){
		window.axios.post('channels', {
				        label : this.label,
				        topic: this.topic
				    }).then((response) => {
				    	alert('Conversation enregistrée.');
						this.$router.push({ path: '/conversation' });
				    }).catch((error) => {
				        alert(error.response.data.error);
				    });
  	}
  }
}

</script>

<style scoped>

</style>
