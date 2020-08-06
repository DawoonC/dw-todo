<template>
  <div class="todo">
    <div class="todo-add">
      <i
        class="h-icon-plus gray2-color text-hover"
        @click="add"
      />
    </div>

    <div class="todo-title">
      <input
        type="text"
        v-model="title"
        placeholder="What needs to be done?"
        @keyup.enter="add"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-to-do',

  data() {
    return {
      title: '',
    };
  },

  methods: {
    add() {
      this.$emit('add', this.title);
      this.title = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.todo {
  width: 100%;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  padding: 12px 24px 12px 60px;

  .todo-add {
    width: 22px;
    position: absolute;
    left: 24px;
    top: 12px;
    font-size: 22px;
  }

  .todo-title {
    width: 100;

    input {
      width: 100%;
      font-size: 24px;
      border: none;

      &::placeholder {
        color: #d3d3d3 !important;
      }
    }
  }
}
</style>
