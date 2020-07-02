import ToDoList from '../views/ToDoList.vue';

const routes = [
  {
    path: '/todos/:id',
    name: 'to-do-list',
    component: ToDoList,
    meta: {
      pageTitle: 'ToDo list',
    },
  },
];

export default routes;
