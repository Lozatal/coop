<template>
	<div>
      <label>{{ member.fullname }} :</label>
      <span>{{ item.message }}</span>
      <button v-if= "messageUtil === 1" @click="supprimerMessage">Supprimer</button>
      <br><br>
	</div>
</template>

<script>

export default {
  name: 'Item',
  props : ['item'],
  data () {
  	return {
      members : [],
      member : '',
      messageUtil : 0
  	}
  },
  methods : {
    trouveMembre() {
      let membreTrouve = '';
      let id = this.item.member_id
      this.members.forEach(function(membre){
        if(membre._id == id){
          membreTrouve = membre;
        }
      });
      this.member = membreTrouve;
    }
  },
  mounted () {
    window.axios.get('members').then((response) => {
      this.members = response.data;
      this.trouveMembre();
      if(this.member.token === this.$store.state.token){
        this.messageUtil = 1;
      }
    }).catch((error) => {
      alert(error.response.data.error);
    });
  }
}
</script>

<style scoped>
</style>