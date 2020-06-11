import Vue from 'vue';
import types from './mutation-types';

export default {
  [types.SET_TODO_LIST](state, { key, val }) {
    Vue.set(state.todoLists, key, val);
  },

  [types.SET_TODO](state, { key, val }) {
    Vue.set(state.todos, key, val);
  },
};
