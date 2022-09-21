import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const Vue = createApp(App);

//importando e registrando globalmente diretivas customizadas
import texto from './directives/texto.js';
import posicao from './directives/posicao.js';
import informacao from './directives/informacao.js';

Vue.directive('texto',texto );
Vue.directive('posicao',posicao );
Vue.directive('informacao',informacao );

Vue.mount('#app');