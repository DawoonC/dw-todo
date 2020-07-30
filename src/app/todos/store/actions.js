import types from './mutation-types';


export default {
  async putToDoList({ commit }, todoList) {
    commit(types.SET_TODO_LIST, { key: todoList.id, val: todoList });
    return todoList;
  },

  async removeToDoList({ commit }, id) {
    commit(types.REMOVE_TODO_LIST, id);
  },

  async putMultipleToDoLists({ commit }, todoLists) {
    commit(types.SET_MULTIPLE_TODO_LISTS, todoLists);
    return todoLists;
  },

  async putToDo({ commit }, todo) {
    commit(types.SET_TODO, { key: todo.id, val: todo });
    return todo;
  },

  async removeToDo({ commit }, id) {
    commit(types.REMOVE_TODO, id);
  },

  async putMultipleToDos({ commit }, todos) {
    commit(types.SET_MULTIPLE_TODOS, todos);
    return todos;
  },
};
