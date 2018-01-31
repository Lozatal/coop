<template>
	<div>
		<item v-for="item in items" :item="item" :key="item._id"></item>
	</div>
</template>

<script>

import Item from '@/components/Message/Item.vue'

export default {
	name: 'MessageListe',
	components: {
		Item
	},
	data () {
	    return {
	    	items: []
	    }
	},
	methods: {
		chargeMessage(){
			window.axios.get('channels/' + this.$route.params.id + '/posts').then((response) => {
		      //alert(response.data);
		      this.items = response.data
		    }).catch((error) => {
		        alert(error.response.data.error);
		    });
		}
	},
	mounted () {
		this.chargeMessage();

		window.bus.$on('chargeMessage', () => {
		  	this.chargeMessage();
	    })
	}
}

</script

<style scoped>
</style>