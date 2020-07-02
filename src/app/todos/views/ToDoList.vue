<template>
  <Layout class="todo-list-layout">
    <HHeader>
      <div class="todo-list-header">
        <h1>ToDo List</h1>
      </div>
    </HHeader>

    <Content>
      <div class="todo-list">
        <Row :space-y="2">
          <Cell width="24" v-for="todo in todoList" :key="todo.id">
            <ToDoItem
              :todo="todo"
              @change="onChange"
              @remove="onRemove"
            />
          </Cell>
        </Row>
      </div>
    </Content>

    <HFooter>
      <div class="todo-list-footer">
        <AddToDo @add="onAddToDo"/>
      </div>
    </HFooter>
  </Layout>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

import ToDos from '@/api/local/ToDos';

import ToDoItem from '../components/ToDoItem.vue';
import AddToDo from '../components/AddToDo.vue';

export default {
  name: 'to-do-list',

  components: {
    ToDoItem,
    AddToDo,
  },

  data() {
    return {
      todos: {},
    };
  },

  watch: {
    $route() {
      this.handleRouteChange(this.$route.params.id);
    },
  },

  computed: {
    todoList() {
      const todoList = this.$utils.orderBy(this.todos, 'created_at', 'asc');

      switch (this.$route.params.id) {
        case 'active':
          return this.$utils.filter(todoList, (item) => !item.is_done);
        case 'done':
          return this.$utils.filter(todoList, 'is_done');
        default:
          return todoList;
      }
    },

    toDoListByPriority() {
      return this.$utils.orderBy(this.todos, 'priority', 'asc');
    },
  },

  methods: {
    async handleRouteChange(listId) {
      const todos = await this.fetchToDos(listId);

      this.todos = this.$utils.keyBy(todos, 'id');
    },

    fetchToDos(listId) {
      switch (listId) {
        case 'all':
          return ToDos.fetchAll();
        case 'active':
          return ToDos.fetchActive();
        case 'done':
          return ToDos.fetchDone();
        default:
          return Promise.resolve([]);
      }
    },

    putToDo(todo) {
      this.todos = {
        ...this.todos,
        [todo.id]: todo,
      };
      ToDos.put(todo);
    },

    onAddToDo(title) {
      const todo = {
        id: uuidv4(),
        is_done: false,
        created_at: new Date(),
        updated_at: new Date(),
        title,
      };

      this.putToDo(todo);
    },

    onChange(todo) {
      this.putToDo(todo);
    },

    onRemove(id) {
      this.todos = this.$utils.omit(this.todos, id);
      ToDos.remove(id);
    },
  },

  mounted() {
    this.handleRouteChange(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
.todo-list-layout {
  height: 100vh;
}

.todo-list-header {
  height: 64px;
  padding-left: 24px;
}

.todo-list {
  overflow-y: scroll;
  height: calc(100vh - 64px - 104px);
  padding: 24px;
}

.todo-list-footer {
  padding: 24px;
}
</style>
