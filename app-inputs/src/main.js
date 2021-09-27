import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './styles.css'


Vue.component('Banderin',() => import(/* webpackPrefetch: true */ '@/components/Banderin.vue'));
Vue.component('ContenedorBienvenida',() => import(/* webpackPrefetch: true */ '@/components/ContenedorBienvenida.vue'));
Vue.component('ContenedorTemas',() => import(/* webpackPrefetch: true */ '@/components/ContenidoTemas.vue'));
Vue.component('Navegacion',() => import(/* webpackPrefetch: true */ '@/components/Navegacion.vue'));
Vue.component('Audios', () => import(/* webpackPrefetch: true */ '@/components/Audios.vue'));
Vue.component('Inputs', () => import(/* webpackPrefetch: true */ '@/components/Inputs.vue'));
Vue.component('ActividadInputs', () => import(/* webpackPrefetch: true */ '@/components/ActividadInputs.vue'));

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
