import { db } from '@/plugins/db';


export default {
  put(todo) {
    return db.todos.put(todo, todo.id);
  },

  remove(id) {
    return db.todos.delete(id);
  },

  fetchOrdered(orderBy = 'created_at') {
    return db.todos.orderBy(orderBy);
  },

  fetchAll(orderBy) {
    return this.fetchOrdered(orderBy).toArray();
  },

  fetchActive(orderBy) {
    return this.fetchOrdered(orderBy)
      .filter((item) => !item.is_done)
      .toArray();
  },

  fetchDone(orderBy) {
    return this.fetchOrdered(orderBy)
      .filter((item) => item.is_done)
      .toArray();
  },
};
