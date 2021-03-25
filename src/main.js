import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import {BootstrapVue} from 'bootstrap-vue'
import Lightbox from 'vue-easy-lightbox'
Vue.config.productionTip = false

Vue.use(BootstrapVue)


import Notifications from 'vue-notification'

Vue.use( Notifications)


new Vue({
    router,
    bootstrap,
    store,
    Lightbox,
    
       render: h => h(App) 
}).$mount('#app')
