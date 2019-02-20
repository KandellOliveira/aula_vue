<template>
	<img class="imagem-responsive" :src="url" :alt="titulo">
</template>

<script>
	export default{
		props: ['url', 'titulo']
	}
</script>

<style scoped>
	.imagem-responsive{
		width: 100%;
	}
</style>