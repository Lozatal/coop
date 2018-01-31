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
ul {
  width : 100%;
  padding:0;
  background-color: blue;
}
li{
  display: inline-block;
}
li:nth-child(1), li:nth-child(2) {
  text-align: center;
  width: 20%;
}
li:nth-child(3) {
  text-align: right;
  width:59%;
  box-sizing: border-box;
}
</style>