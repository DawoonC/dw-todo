import Vue from 'vue';
import Vuex from 'vuex';
import appModules from '../app/store';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: appModules,
});
