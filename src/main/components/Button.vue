<template>
	<button @click="showMessage">{{label}}</button>
</template>
<script>
export default {
	props: ['label'],
	methods: {
		showMessage() {
			alert('Hello!');
		}
	}
}
</script>