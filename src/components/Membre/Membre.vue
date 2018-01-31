<template>
	<div>
      <label>Email :</label>
      <span>{{ membre.email }}</span>
      <label>Nom complet :</label>
      <span>{{ membre.fullname }}</span>
      <button v-if= "differentUtil === 'yes'" @click="supprimerMembre">Supprimer</button>
	</div>
</template>

<script>

export default {
  name: 'Membre',
  props : ['membre'],
  data () {
  	return {
      differentUtil : 'yes'
  	}
  },
  methods : {
    supprimerMembre() {
      window.axios.delete('members/' + this.membre._id, {
      }).then((response) => {
        location.reload();
      }).catch((error) => {
        alert(error.response.data.error);
      });
    }
  },
  mounted(){
    if(this.$store.state.token === this.membre.token){
      this.differentUtil = 'no';
    }
  }
}
</script>

<style scoped>
	div{
		display: flex;
		flex-wrap: wrap;
		background-color: #ADD8E6;
		width: 22.5%;
		height: 60px;
		margin-left: 2%;
		margin-top: 1em;
		border-radius: 0px 20px 0px 0px;
	}
	button{
		width: 100%;
		margin: auto;
	}
	label{
		font-weight: bold;
	}
</style>
