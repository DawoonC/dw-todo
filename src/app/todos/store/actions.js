import types from './mutation-types';


export default {
  async putToDoList({ commit }, todoList) {
    commit(types.SET_TODO_LIST, { key: todoList.id, val: todoList });
    return todoList;
  },

  async removeToDoList({ commit }, id) {
    commit(types.REMOVE_TODO_LIST, id);
  },
};
