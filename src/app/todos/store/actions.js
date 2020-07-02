import { db } from '@/plugins/db';
import types from './mutation-types';


export default {
  async putToDoList({ commit }, todoList) {
    commit(types.SET_TODO_LIST, { key: todoList.id, val: todoList });
    return todoList;
  },

  async removeToDoList({ commit }, id) {
    commit(types.REMOVE_TODO_LIST, id);
  },

  async putToDo({ commit }, todo) {
    commit(types.SET_TODO, { key: todo.id, val: todo });
    await db.todos.put(todo, todo.id);
    return todo;
  },

  async removeToDo({ commit }, id) {
    await db.todos.delete(id);
    commit(types.REMOVE_TODO, id);
  },

  async setMultipleToDoLists({ commit }, todoLists) {
    commit(types.SET_MULTIPLE_TODO_LISTS, todoLists);
  },

  async setMultipleToDos({ commit }, todos) {
    commit(types.SET_MULTIPLE_TODOS, todos);
  },
};
