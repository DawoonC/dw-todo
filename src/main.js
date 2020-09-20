import Vue from 'vue';
import Storage from 'vue-ls';
import 'materialize-css';

import './assets/styles/main.scss';

import utils from './plugins/utils';
import App from './App.vue';
import router from './router';
import store from './store';

import 'material-design-icons';

Vue.config.productionTip = false;

Vue.use(utils);
Vue.use(Storage, {
  namespace: 'dwtodo__',
  storage: 'local',
  name: 'ls',
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
