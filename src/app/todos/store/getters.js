import { keyBy } from '@/plugins/utils';

export default {
  todoLists(state) {
    return state.todoLists;
  },

  todoListsById(state) {
    return keyBy(state.todoLists, 'id');
  },

  todos(state) {
    return state.todos;
  },
};
