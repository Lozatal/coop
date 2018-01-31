<template>
  <div>
    <navBar></navBar>
    <h2>Conversation</h2>
    <label>Titre :</label>
    <span>{{ conversation.label }}</span>
    <br>
    <label>Description :</label>
    <span>{{ conversation.topic }}</span>
    <hr>
    <h2>liste des messages</h2>
    <messageListe></messageListe>
    <hr>
    <h2>Ajouter un message</h2>
    <messageCreation></messageCreation>
  </div>
</template>

<script>

import MessageListe from '@/components/Message/MessageListe.vue'
import MessageCreation from '@/components/Message/MessageCreation.vue'
import NavBar from '@/components/NavBar.vue'

export default {
	name: 'ConversationDetail',
  components : {
    MessageListe,
    MessageCreation,
    NavBar
  },
	data () {
	    return {
        conversation : ''
	    }
	},
  mounted(){
    window.axios.get('channels/' + this.$route.params.id).then((response) => {
      //alert('toto');
      this.conversation = response.data
    }).catch((error) => {
        alert(error.response.data.error);
    });

  }
}
</script>

<style scoped>
h2 {
  font-weight: bold;
}
</style>