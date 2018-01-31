<template>
  <form @submit="seConnecter">
    <input type='email' v-model="email" placeholder="email">
    <input type='password' v-model="password" placeholder="password">
    <input type="submit" value="Connexion">
    <router-link to="/membre-creation">Créer un compte</router-link>
  </form>
</template>

<script>
export default {
	name: 'Connexion',
	data () {
	    return {
	    	email: '',
	    	password: ''
	    }
	},
	methods: {
		seConnecter(){
			window.axios.post('members/signin', {
		        email : this.email,
		        password: this.password
		    }).then((response) => {
		        //this.$store.state.member = response.data;
		        this.$store.commit('setMember', response.data);
		        this.$store.commit('setToken', response.data.token);

		        window.axios.defaults.params.token = response.data.token;

		        this.$router.push({ path: '/conversation' });
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
  margin-top: 250px;
  width: 50%;
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
input:nth-child(3){
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
