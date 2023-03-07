import Vue from 'vue'
import App from './App.vue'
import './assets/styles/index.css';
import routes from './router';

// Import thư viện Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'tw-elements';
import * as te from 'tw-elements';


import VueTailwindElements from 'vue-tailwind-elements';
Vue.use(VueTailwindElements);
library.add(fab, fas, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({mode: 'history', routes});
Vue.use(te);
import Vuex from 'vuex'
import stores from './store/store';
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: { stores },
});
window.axios = require('axios');
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
 
//   components: { App },
//   template: '<App/>'
// })

// Vue.config.productionTip = false
  
import Vuelidate from 'vuelidate'
router.beforeEach((to, from, next) => {
  console.log(stores)
  const isAuthenticated = stores.state.auth.isAuthenticated
  
  // next-line: check if route ("to" object) needs authenticated
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else if (isAuthenticated) {
    switch (to.name) {
      case 'login' :
        next({ path: '/' });
        break;
      case 'home':
        next({ path: '/' });
        break;
      default:
        next();
        break;
    }
  } else next();

})
window.axios.defaults.headers['Authorization'] = `Bearer ${stores.state.auth.token}` 

Vue.use(Vuelidate)
new Vue({
  render: h => h(App),
  router,
  store: store,
}).$mount('#app')
