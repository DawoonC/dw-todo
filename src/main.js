import Vue from 'vue';
import HeyUI from 'heyui';
import Storage from 'vue-ls';

import './assets/styles/main.scss';

import utils from './plugins/utils';
import App from './App.vue';
import router from './router';
import store from './store';

import 'material-design-icons';
import 'heyui/themes/index.less';

Vue.config.productionTip = false;

Vue.use(utils);
Vue.use(HeyUI);
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
