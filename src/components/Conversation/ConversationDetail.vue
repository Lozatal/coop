<template>
  <div id="corps">
    <navBar></navBar>
    <div id="conversationDetail">
      <h2>{{ conversation.label }}</h2>
      <p>{{ conversation.topic }}</p>
      <div id="messages"><messageListe></messageListe></div>
      <messageCreation></messageCreation>
    </div>
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
#corps{
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  width: 100%;
}
#conversationDetail{
  width: 90%;
  padding: 1em;
  margin: auto;
  background-color: #ADD8E6;
  margin-top: 1em;
  border-radius: 0px 20px 0px 0px;
}

h2{
  width: 100%;
  text-align: center;
}

#messages{
  border: 1px solid black;
  padding: 1em;
}
</style>
