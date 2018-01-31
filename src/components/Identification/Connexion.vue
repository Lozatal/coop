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
</style>