

<template>
	<div>
		<h1 class="centralizado">{{ titulo }}</h1>
		<input type="seach" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do titulo ">
		
		<ul class="lista-fotos">
			<li class="lista-fotos-item" v-for="foto of fotosComFiltro">
				<meu-painel :titulo="foto.titulo">
					<imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
					<meu-botao tipo="button" 
					rotulo="REMOVER" 
					@botaoAtivado="remove($event, foto)"
					:confirmacao="false"
					estilo="perigo"
					/>
				</meu-painel> 
			</li>
		</ul>
	</div>

</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

	components: {
		'meu-painel' : Painel,
		'imagem-responsiva' : ImagemResponsiva,
		'meu-botao' : Botao
	},
	data(){

		 return{
		 	titulo: 'Aula Minha',
		 	fotos: [],
		 	filtro: ''
		 	
		 }
	},

	computed: {

		fotosComFiltro(){
			if(this.filtro){

				let exp = new RegExp(this.filtro.trim(), 'i');
				return this.fotos.filter(foto => exp.test(foto.titulo));
				
			}else{
				return this.fotos;
			}
		}
	},

	methods: {

		remove($event, foto){
			alert($event)
			alert('Remover a foto'+ foto.titulo);	
			
		}
	},

	created(){
		this.$http.get('http://localhost:3000/v1/fotos')
		.then(res => res.json())
		.then(fotos => this.fotos = fotos, err => console.log(err));
	}	
  
}
</script>

<style>

	.centralizado{
		text-align: center;
	}

	.lista-fotos{
		list-style: none;
	}

	.lista-fotos .lista-fotos-item{
		display: inline-block;
	}

	

	.filtro{
		display: block;
		width: 100%;
	}

</style>
