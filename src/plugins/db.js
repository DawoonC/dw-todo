import Dexie from 'dexie';

import { set } from './utils';


const db = new Dexie('dw-todo');

const todoIndices = [
  '&id',
];
const todoListIndices = [
  '&id',
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
