<template>
	<div>
      <label>Email :</label>
      <span>{{ membre.email }}</span>
      <br>
      <label>Nom complet :</label>
      <span>{{ membre.fullname }}</span>
      <button v-if= "differentUtil === 'yes'" @click="supprimerMembre">Supprimer</button>
      <hr>
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
</style>