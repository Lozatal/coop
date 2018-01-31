<template>
  <router-link :to="{ name : 'conversation', params : {id:conversation._id}}">
    <div>
      <h3>{{ conversation.label }}</h3>
      <span>{{ conversation.topic }}</span>
      <button @click="supprimerConversation">Supprimer</button>
    </div>
  </router-link>
</template>

<script>

export default {
  name: 'Conversation',
  props : ['conversation'],
  data () {
  	return {

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
  }
  div:hover{
    border-radius: 20px 20px 20px 20px;
  }
  a{
    width: 22.5%;
    color: black;
    text-decoration: none;
    box-sizing: border-box;
    margin-left: 2%;

  }
</style>
