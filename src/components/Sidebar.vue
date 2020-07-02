<template>
  <Sider>
    <Menu
      style="text-align: left;"
      className="h-menu-white"
      :datas="mainMenuList"
      :option="options"
      @select="onSelect"
    />
  </Sider>
</template>

<script>
import { MAIN_MENU_ID_LIST } from '@/config';
import { mapGetters } from 'vuex';

export default {
  name: 'sidebar',

  data() {
    return {
      options: {
        keyName: 'id',
      },
    };
  },

  computed: {
    ...mapGetters('todos', [
      'todoLists',
    ]),

    mainMenuList() {
      return this.$utils.filter(
        this.$utils.map(
          MAIN_MENU_ID_LIST,
          (id) => this.todoLists[id],
        ),
        (item) => !this.$utils.isNil(item),
      );
    },
  },

  methods: {
    onSelect(menu) {
      this.$router.push({
        name: 'to-do-list',
        params: { id: menu.id },
      });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
