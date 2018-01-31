<template>
		<form @submit="Enregistrer">
		    <input type='text' v-model="label" placeholder="titre">
		    <input type="text" v-model="topic" placeholder="description">
		    <input type="submit" value="Enregistrer">
    		<router-link to="/conversation">Retour</router-link>
  		</form>
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
form{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width:50%;
  box-sizing: border-box;
  padding: 2em;
  background-color: black;
  border-radius: 20px;
  margin-top: 250px;
}
input{
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
input:nth-child(3){
  margin-top: 1em;
}
a{
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: none;
  margin-top: 1em;
}
</style>
