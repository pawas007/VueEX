import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

new Vue({
    router,
    bootstrap,
    store,
    BootstrapVue,
    IconsPlugin,
    render: h => h(App)
}).$mount('#app')
