import Vue from 'vue';
import { omit } from '@/plugins/utils';
import types from './mutation-types';

export default {
  [types.SET_TODO_LIST](state, { key, val }) {
    Vue.set(state.todoLists, key, val);
  },

  [types.REMOVE_TODO_LIST](state, key) {
    Vue.set(state, 'todoLists', omit(state.todoLists, key));
  },

  [types.SET_MULTIPLE_TODO_LISTS](state, todoLists) {
    Vue.set(state, 'todoLists', { ...state.todoLists, ...todoLists });
  },
};
