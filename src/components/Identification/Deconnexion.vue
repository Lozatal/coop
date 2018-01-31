<template>
	<div>
		<button @click="seDeconnecter">Deconnexion</button>
	</div>
</template>

<script>
export default {
	name: 'Deconnexion',
	data () {
	    return {
	    }
	},
	methods: {
		seDeconnecter(){
			window.bus.$emit('logout');
		}
	}
}
</script>

<style scoped>
</style>