import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const Vue = createApp(App);

Vue.directive('texto', {
    created(el, binding) { //chamado antes que os atributos do elemento ou ouvintes de event(event listeners) sejam aplicados
        console.log(binding.value)
        let textoOriginal = el.innerText;
        let tamanhoTextoOriginal = textoOriginal.length;
        let textoAjustado = '';
        let totalCaracteres = 25;

        // el.style.color= binding.value ?? 'red';
        /*  if(binding.value) el.style.color= binding.value;
          el.style.fontSize='150%';
  
          if(tamanhoTextoOriginal > totalCaracteres){
              //vamos truncar o texto em 22 caracteres e adicionar '...'
              textoAjustado = textoOriginal.substring(0,22)+'...';
          }else{
              //vamos manter o texto originalo
              textoAjustado = textoOriginal;
          }
  
          el.innerText = textoAjustado;*/
        // console.log('texto original', textoOriginal);
        // console.log('A Diretiva foi aplicada com sucesso');

        if (binding.value?.cor) el.style.color = binding.value.cor;
        if (binding.value?.tamanhoFonte) el.style.fontSize = binding.value.tamanhoFonte;
        if (binding.value?.totalCaracteres) totalCaracteres = binding.value.totalCaracteres;

        if (tamanhoTextoOriginal > totalCaracteres) {
            //vamos truncar o texto em 22 caracteres e adicionar '...'
            textoAjustado = textoOriginal.substring(0, (totalCaracteres - 3)) + '...';
        } else {
            //vamos manter o texto originalo
            textoAjustado = textoOriginal;
        }
        el.innerText = textoAjustado;


    }
})

Vue.mount('#app');
