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
// import { mapGetters } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

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

  computed: {
    // ...mapGetters('todos', [
    //   'todos',
    // ]),

    todoList() {
      return this.$utils.orderBy(this.todos, 'created_at', 'asc');
    },

    toDoListByPriority() {
      return this.$utils.orderBy(this.todos, 'priority', 'asc');
    },
  },

  methods: {
    onAddToDo(title) {
      const todo = {
        id: uuidv4(),
        is_done: false,
        created_at: new Date(),
        updated_at: new Date(),
        title,
      };

      this.todos = {
        ...this.todos,
        [todo.id]: todo,
      };
    },

    onChange(todo) {
      this.todos = {
        ...this.todos,
        [todo.id]: todo,
      };
    },

    onRemove(id) {
      this.todos = this.$utils.omit(this.todos, id);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-list-layout {
  height: 100vh;
}

.todo-list-header {
  height: 64px;
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
