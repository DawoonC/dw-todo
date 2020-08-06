<template>
  <Sider class="sidebar">
    <div class="sidebar-menu">
      <Menu
        style="text-align: left;"
        className="h-menu-white"
        ref="menu"
        :datas="defaultMenuList"
        :option="options"
        @select="onSelect"
      />

      <hr>

      <Menu
        style="text-align: left;"
        className="h-menu-white"
        ref="menu"
        :datas="customMenuList"
        :option="options"
        @select="onSelect"
      />

      <div class="add-new-list">
        <input
          type="text"
          placeholder="+ New List"
          v-model="newListTitle"
          :maxlength="newListTitleMaxLength"
          :minlength="newListTitleMinLength"
          @keyup.enter="addNewList(newListTitle)"
        />
      </div>
    </div>
  </Sider>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { v4 as uuidv4 } from 'uuid';

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

    onSelect(menu) {
      this.$router.push({
        name: 'to-do-list',
        params: { id: menu.id },
      });
    },

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
    this.putMultipleToDoLists(this.$ls.get('todoLists', {}));

    if (this.$route.params.id) {
      this.$refs.menu.select(this.$route.params.id);
    }

    setInterval(() => (
      this.$ls.set('todoLists', this.todoLists)
    ), 10000);
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  box-shadow: 0 0 4px 0 rgba(0,0,0,0.14),
    0 0 2px -2px rgba(0,0,0,0.12),
    0 0 10px 0 rgba(0,0,0,0.2);
}

.sidebar-menu {
  height: 100vh;
}

.add-new-list {
  padding: 7px 26px;

  input {
    width: 100%;
    font-size: 14px;
    border: none !important;
    box-shadow: none !important;

    &::placeholder {
      font-weight: 500;
    }
  }
}
</style>
