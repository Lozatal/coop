<template>
	<div id="corps">
    <navBar></navBar>
		<router-link to="/conversation-creation">Créer une conversation</router-link>
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
  methods: {
    chargeConversation(){
      window.axios.get('channels').then((response) => {
          this.conversations = response.data
        }).catch((error) => {
           // alert(error.response.data.error);
        });

    }
  },
  mounted () {
    this.chargeConversation();

    window.bus.$on('chargeConversation', () => {
        this.chargeConversation();
    })

  }
}
</script>

<style scoped>
	#corps{
		display: flex;
		flex-wrap: wrap;
		padding: 0;
		margin: 0;
		width: 100%;
	}
	a{
		width: 100%;
		text-align: center;
		text-decoration: none;
		color: black;
		padding: 0;
	}
</style>
