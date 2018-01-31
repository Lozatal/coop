<template>
  <form @submit="creerMembre">
    <input type='text' v-model="fullname" placeholder="fullname">
    <input type='email' v-model="email" placeholder="email">
    <input type='password' v-model="password" placeholder="password">
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
        alert(error.response.data.error);
      });
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width:50%;
  box-sizing: border-box;
  padding: 2em;
  background-color: black;
  border-radius: 20px;
}
input{
  width: 100%;
  box-sizing: border-box;
  margin: auto;
  text-align: center;
}
input:nth-child(4){
  margin-top: 1em;
}
a{
  width: 100%;
  text-align: center;
  color: white;
  text-decoration: none;
  margin-top: 1em;
}
</style>
