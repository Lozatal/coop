<template>
    <div>
      <router-link :to="{ name : 'conversation', params : {id:conversation._id}}"><h3>{{ conversation.label }}</h3></router-link>
      <span>{{ conversation.topic }}</span>
      <button @click="supprimerConversation">Supprimer</button>
    </div>
</template>

<script>

export default {
  name: 'Conversation',
  props : ['conversation'],
  data () {
  	return {

  	}
  },
  methods : {
    supprimerConversation() {
      window.axios.delete('channels/' + this.conversation._id, {
      }).then((response) => {
        //this.$router.push({ path: '/conversation' });
        //location.reload();
        window.bus.$emit('chargeConversation');
      }).catch((error) => {
        alert(error);
      });
    }
  }
}
</script>

<style scoped>
  div{
    width: 100%;
    margin: auto;
    background-color: #ADD8E6;
    box-sizing: border-box;
    border-radius: 0px 20px 0px 0px;
    -webkit-transition-property: border-radius;
  	-webkit-transition-duration: 1s;
  	-moz-transition-property: border-radius;
  	-moz-transition-duration: 1s;
  	transition-property: border-radius;
  	transition-duration: 1s;
    margin-left: 2%;
    width: 22.5%;
    text-align: center;
  }
  div:hover{
    border-radius: 20px 20px 20px 20px;
  }
  a{
    color: black;
    text-decoration: none;
    box-sizing: border-box;
    text-align: center;
    -webkit-transition-property: color;
    -webkit-transition-duration: 1s;
    -moz-transition-property: color;
    -moz-transition-duration: 1s;
    transition-property: color;
    transition-duration: 1s;
  }
  a:hover{
    color:red;
  }
  button{
    width: 100%;
    margin-top: 1em;
  }
</style>
