<template>
  <Layout class="todo-list-layout">
    <HHeader>
      <div class="todo-list-header">
        <h1>ToDo List</h1>

        <button class="h-btn more-btn">
          <i class="material-icons">more_horiz</i>
        </button>
      </div>
    </HHeader>

    <Content>
      <div class="todo-list">
        <SlickList v-model="todoList" :distance="10">
          <SlickItem
            v-for="(todo, index) in todoList"
            :index="index"
            :key="todo.id"
            :disabled="sortDisabled"
            class="todo-list-item-container"
          >
            <ToDoItem
              :todo="todo"
              @change="onChange"
              @remove="onRemove"
            />
          </SlickItem>
        </SlickList>
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
import { mapGetters, mapActions } from 'vuex';
import { SlickList, SlickItem } from 'vue-slicksort';
import { v4 as uuidv4 } from 'uuid';

import ToDoItem from '../components/ToDoItem.vue';
import AddToDo from '../components/AddToDo.vue';

export default {
  name: 'to-do-list',

  components: {
    SlickList,
    SlickItem,
    ToDoItem,
    AddToDo,
  },

  computed: {
    ...mapGetters('todos', [
      'todos',
    ]),

    todoList: {
      get() {
        const list = this.$utils.orderBy(this.todos, 'priority', 'asc');

        switch (this.$route.params.id) {
          case 'active':
            return this.$utils.filter(list, (item) => !item.isDone);
          case 'done':
            return this.$utils.filter(list, 'isDone');
          case 'all':
            return list;
          default:
            return this.$utils.filter(list, (item) => (
              item.listId === this.$route.params.id
            ));
        }
      },

      set(newList) {
        const list = this.$utils.map(newList, (item, i) => ({
          ...item,
          priority: i,
        }));

        this.putMultipleToDos(this.$utils.keyBy(list, 'id'));
      },
    },

    listId() {
      switch (this.$route.params.id) {
        case 'active':
        case 'done':
        case 'all':
          return null;
        default:
          return this.$route.params.id;
      }
    },

    sortDisabled() {
      switch (this.$route.params.id) {
        case 'done':
          return true;
        default:
          return false;
      }
    },
  },

  methods: {
    ...mapActions('todos', [
      'putMultipleToDos',
      'removeToDo',
      'putToDo',
    ]),

    onAddToDo(title) {
      const todo = {
        id: uuidv4(),
        isDone: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        priority: this.todoList.length + 1,
        listId: this.listId,
        title,
      };

      this.putToDo(todo);
    },

    onChange(todo) {
      this.putToDo(todo);
    },

    onRemove(id) {
      this.removeToDo(id);
    },
  },

  mounted() {
    this.putMultipleToDos(this.$ls.get('todos', {}));

    setInterval(() => (
      this.$ls.set('todos', this.todos)
    ), 10000);
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
  position: relative;

  .more-btn {
    position: absolute;
    top: 10px;
    right: 10px;

    i {
      font-size: 20px;
    }
  }
}

.todo-list {
  overflow-y: scroll;
  height: calc(100vh - 64px - 104px);
  padding: 24px;
}

.todo-list-item-container {
  padding-top: 1px;
  padding-bottom: 1px;
}

.todo-list-footer {
  padding: 24px;
}
</style>
