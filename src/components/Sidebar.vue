<template>
  <ul id="sidebar" class="sidenav sidenav-fixed">
    <li class="logo">
      <h3 class="center-align">DW TODO</h3>
    </li>

    <li
      class="bold"
      v-for="item in defaultMenuList"
      :key="item.id"
      :class="{ active: $route.params.id === item.id }"
    >
      <router-link :to="{ name: 'to-do-list', params: { id: item.id } }">
        {{ item.title }}
      </router-link>
    </li>

    <li class="divider"/>

    <li
      class="bold"
      v-for="item in customMenuList"
      :key="item.id"
    >
      <router-link :to="{ name: 'to-do-list', params: { id: item.id } }">
        {{ item.title }}
      </router-link>
    </li>

    <li class="new-list">
      <input
        type="text"
        placeholder="+ New List"
        v-model="newListTitle"
        :maxlength="newListTitleMaxLength"
        :minlength="newListTitleMinLength"
        @keyup.enter="addNewList(newListTitle)"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import M from 'materialize-css';

export default {
  name: 'sidebar',

  data() {
    return {
      options: {
        keyName: 'id',
      },
      newListTitle: '',
      newListTitleMinLength: 2,
      newListTitleMaxLength: 20,
    };
  },

  computed: {
    ...mapGetters('todos', [
      'todoLists',
    ]),

    defaultMenuList() {
      return this.$utils.filter(this.todoLists, 'isDefault');
    },

    customMenuList() {
      return this.$utils.filter(this.todoLists, (item) => (!item.isDefault));
    },
  },

  methods: {
    ...mapActions('todos', [
      'putMultipleToDoLists',
      'putToDoList',
    ]),

    addNewList(newListTitle) {
      if (newListTitle.length < this.newListTitleMinLength) {
        return;
      }

      const newList = {
        id: uuidv4(),
        title: this.$utils.toTitleCase(newListTitle),
        bgColor: '#FFAB91',
        icon: 'h-icon-menu',
        isDefault: false,
      };

      this.putToDoList(newList);
      this.newListTitle = '';
    },
  },

  mounted() {
    M.AutoInit();
    this.putMultipleToDoLists(this.$ls.get('todoLists', {}));

    setInterval(() => (
      this.$ls.set('todoLists', this.todoLists)
    ), 10000);
  },
};
</script>

<style lang="scss" scoped>
.logo {
  padding-top: 31px;
  padding-bottom: 31px;
  border-bottom: 1px solid rgba(0,0,0,0.14);
  font-size: 1.4rem;

  h3 {
    margin: 0;
  }
}

.new-list {
  padding: 8px 32px;

  input {
    &:focus {
      border-bottom: 1px solid #43a047 !important;
      box-shadow: 0 1px 0 0 #43a047 !important;
    }
  }
}
</style>
