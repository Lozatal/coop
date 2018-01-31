<template>
	<div>
    <navBar></navBar>
		<router-link to="/conversation-creation">Créer une conversation</router-link>
    <hr>
    <conversation v-for="conversation in conversations" :conversation="conversation" :key="conversation._id"></conversation>
	</div>
</template>

<script>

import Conversation from '@/components/Conversation/Conversation.vue'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ConversationListe',
  components:{
    Conversation,
    NavBar
  },
  data () {
  	return {
      conversations:[]
  	}
  },
  mounted () {
    window.axios.get('channels').then((response) => {
              //alert('toto');
              this.conversations = response.data
            }).catch((error) => {
               // alert(error.response.data.error);
            });
  }
}
</script>

<style scoped>
</style>