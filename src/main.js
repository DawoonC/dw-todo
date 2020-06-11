import Vue from 'vue';
import Antd from 'ant-design-vue';

import utils from './plugins/utils';
import DB from './plugins/db';
import App from './App.vue';
import router from './router';
import store from './store';

import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false;

Vue.use(utils);
Vue.use(DB);
Vue.use(Antd);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
