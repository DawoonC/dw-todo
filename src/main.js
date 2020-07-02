import Vue from 'vue';
import HeyUI from 'heyui';

import './assets/styles/main.scss';

import utils from './plugins/utils';
import DB from './plugins/db';
import App from './App.vue';
import router from './router';
import store from './store';

import 'heyui/themes/index.less';

Vue.config.productionTip = false;

Vue.use(utils);
Vue.use(DB);
Vue.use(HeyUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
