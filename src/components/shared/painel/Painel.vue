

<template>

	<div class="painel">
		<h2 class="painel-titulo" @dblclick="visible = !visible">{{titulo}}</h2>
		<transition name="painel-fade">
			<div class="painel-conteudo" v-show="visible">
				<slot ></slot>
			</div>
		</transition>
		
	</div>

</template>

<script>
export default {
	props: ['titulo'],

	data(){
		return {
			visible: true
		}
	}
}
</script>

<style scoped>

	/* Estilo Painel*/

	.painel{
		padding:0 auto;
		border: solid 2px grey;
		display: inline-block;
		margin: 5px;
		box-shadow: 5px 5px 10px grey;
		width: 200px;
		heigth: 100%;
		vertical-align: top;
		text-align: center;
	}

	.painel .painel-titulo{
		text-align: center;
		border: solid 2px;
		background: lightblue;
		margin: 0 0 15px o;
		padding: 10px;
		text-transform: uppercase;
	}

	* {
		box-shadow: 5px 5px 10px grey;
	}

	.painel-fade-enter, .painel-fade-leave-active{
		opacity: 0;
	}

	.painel-fade-enter-active, .painel-fade-leave-active{
		transition: opacity .4s;
	}

	.painel-conteudo{
		overflow: hidden;
	}

	/*painel-fade-enter // antes do elemento ser incluido ou removido, o estado atual
	painel-fade-enter-active // quando o elemento esta sendo incluido
	painel-fade-leave-active // quando o elemento esta sendo removido
	*/

</style>


