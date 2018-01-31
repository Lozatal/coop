<template>
	<div>
      <label>Email :</label>
      <span>{{ membre.email }}</span>
      <br>
      <label>Nom complet :</label>
      <span>{{ membre.fullname }}</span>
      <hr>
	</div>
</template>

<script>

export default {
  name: 'Membre',
  props : ['membre'],
  data () {
  	return {

  	}
  }
}
</script>

<style scoped>
</style>