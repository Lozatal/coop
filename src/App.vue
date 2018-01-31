<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>

import MembreCreation from './components/Membre/MembreCreation.vue'
import Connexion from './components/Identification/Connexion.vue'

export default {
  name: 'app',
  components:{
    MembreCreation,
    Connexion
  },
  mounted(){
    if( this.$store.state.member){
      //this.$router.push({path: '/conversation'});
      window.axios.defaults.params.token = this.$store.state.token;
    }else{
      this.$router.push({path: '/connexion'});
    }

    window.bus.$on('logout', () => {
      window.axios.delete('members/signout');
      this.$store.commit('setMember', false);
      this.$store.commit('setToken', false);
      this.$router.push({ path:'/connexion'});
    })
  }
}
</script>

<style>
</style>
