

<template>
	<div class="corpo">
		<meu-menu :rotas="routes"/>
		<transition name="pagina"> 
			<router-view></router-view>
		</transition>
	</div>

</template>

<script>

import { routes} from './routes';
import Menu from './components/shared/menu/Menu.vue';
export default {
	components:{
		'meu-menu' : Menu
	},

	 data(){
	 	return{
	 		routes
	 	}
	 }
}
</script>

<style>
	.corpo {
		font-family: Helvatica, sans-serif;
		widt: 96%;
		margin: 0 auto;
	}

	.pagina-enter, .pagina-leave-active{
		opacity: 0;
	}

	.pagina-enter-active, .pagina-leave-active{
		transition: opacity .4s;
	}
</style>
