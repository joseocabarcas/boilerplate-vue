<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: 'app',
	}
</script>

<style lang="scss">
	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		p {
			font-size: 30px;
		}
	}
</style>