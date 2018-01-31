<template>
    <nav>
      <ul>
        <li><router-link to="/conversation">Liste des conversations</router-link></li>
        <li><router-link to="/membre">Liste des membres</router-link></li>
        <li><deconnexion></deconnexion></li>
      </ul>
    </nav>
</template>

<script>

import Deconnexion from '@/components/Identification/Deconnexion.vue'

export default {
	name: 'NavBar',
	components:{
	    Deconnexion
  	},
	data () {
	    return {
	    }
	}
}
</script>

<style scoped>
a{
  color: white;
  text-decoration: none;
  -webkit-transition-property: color;
	-webkit-transition-duration: 1s;
	-moz-transition-property: color;
	-moz-transition-duration: 1s;
	transition-property: color;
	transition-duration: 1s;
}
a:hover{
  color: red;
}
nav{
  display: flex;
  flex-wrap: wrap;
  background-color: black;
  box-sizing: border-box;
  width:100%;
  height:50px;
}
ul{
  display: flex;
  flex-wrap: wrap;
  width:100%;
  margin: auto;
  padding:0;
}
li{
  box-sizing: border-box;
  text-align: center;
  list-style-type: none;
}
li:nth-child(1){
  width: 10%;
  margin: auto;
}
li:nth-child(2){
  width: 10%;
  margin: auto;
}
li:nth-child(3){
  width: 10%;
  margin: auto;
  margin-left: 70%;
  text-align: right;
}
</style>
