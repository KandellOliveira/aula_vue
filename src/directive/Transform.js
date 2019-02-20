import Vue from 'vue';

Vue.directive('meu-transform', {
    
    bind(el, binding, vnode){
        //el referencia ao elemento do DOM
        
        let current = 0;

        el.addEventListener('dblclick', function(){

            let incremento = binding.value || 90;
            let efeito
            if(!binding.arg || binding.arg == 'rotate'){

                if(binding.modifiers.reverse){
                    current-=incremento;
                }else{
                    current+=incremento;
                }
                efeito = el.style.transform = `rotate(${current}deg)`;
            }else if(binding.arg == 'scale'){
                efeito = `scale(${incremento})`
            }

            el.style.transform = efeito;

            if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
        });

    }

});