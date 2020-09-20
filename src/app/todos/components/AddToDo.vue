<template>
  <div class="todo">
    <button
      class="btn-floating btn-medium btn-flat todo-add waves-effect"
      @click="add"
    >
      <i class="material-icons small grey-text text-lighten-2">
        add
      </i>
    </button>

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
    position: absolute;
    left: 12px;
    top: 14px;

    &:hover, &:focus {
      background-color: transparent;
    }

    i {
      font-size: 2.7rem;
    }
  }

  .todo-title {
    width: 100;

    input {
      width: 100%;
      font-size: 24px;
      border: none;
      margin: 0;

      &:focus {
        border-bottom: none;
        box-shadow: none;
      }

      &::placeholder {
        color: #e0e0e0 !important;
      }
    }
  }
}
</style>
