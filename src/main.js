import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import Lightbox from 'vue-easy-lightbox'
Vue.config.productionTip = false

new Vue({
    router,
    bootstrap,
    store,
    Lightbox,
    BootstrapVue,
    IconsPlugin,
    render: h => h(App)
}).$mount('#app')
