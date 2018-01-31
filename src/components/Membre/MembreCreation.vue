<template>
  <form @submit="creerMembre">
    <input type='text' v-model="fullname" placeholder="fullname">
    <input type='email' v-model="email" placeholder="email">
    <input type='text' v-model="password" placeholder="password">
    <input type="submit" value="Creer compte">
    <router-link to="/connexion">Annuler</router-link>
  </form>
</template>

<script>
export default {
  name: 'MembreCreation',
  data () {
    return {
      fullname: '',
      email: '',
      password: ''
    }
  },
  methods : {
    creerMembre(){
      window.axios.post('members', {
        fullname : this.fullname,
        email: this.email,
        password: this.password
      }).then((response) => {
        this.$router.push({path: '/connexion'});
      }).catch((error) => {
        alert(error);
      });
    }
  }
}
</script>

<style scoped>
</style>