<template>
  <router-link :to="{ name : 'conversation', params : {id:conversation._id}}">
    <div>
      <h3>{{ conversation.label }}</h3>
      <span>{{ conversation.topic }}</span>
      <hr>
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
</style>