import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')
const Vue = createApp(App);

//importando e registrando globalmente diretivas customizadas
import texto from './directives/texto';
import posicao from './directives/posicao';
import informacao from './directives/informacao';

Vue.directive('texto',texto );
Vue.directive('posicao',posicao );
Vue.directive('informacao',informacao );

Vue.mount('#app');