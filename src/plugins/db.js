import Dexie from 'dexie';

import { set } from './utils';


const db = new Dexie('dw-todo');

const todoIndices = [
  '&id',
  'created_at',
];
const todoListIndices = [
  '&id',
  'created_at',
];

db.version(1).stores({
  todos: todoIndices.join(','),
  todoLists: todoListIndices.join(','),
});

export { db };

export default {
  install(Vue) {
    set(Vue, 'prototype.$db', db);
  },
};
