import types from './mutation-types';


export default {
  async putToDoList({ commit }, todoList) {
    commit(types.SET_TODO_LIST, { key: todoList.id, val: todoList });
    return todoList;
  },

  async putToDo({ commit }, todo) {
    commit(types.SET_TODO, { key: todo.id, val: todo });
    return todo;
  },
};
