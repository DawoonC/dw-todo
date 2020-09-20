<template>
  <div class="todo-item">
    <button
      class="btn-floating btn-medium btn-flat todo-item-check"
      @click="onCheckClick"
    >
      <i
        class="material-icons grey-text text-lighten-2 waves-effect waves-light"
        :class="{ 'todo-item-is-done': todo.isDone }"
      >
        check_circle_outline
      </i>
    </button>

    <div class="todo-item-title">
      <input
        type="text"
        :class="{ 'todo-item-is-done': todo.isDone }"
        :value="todo.title"
        @input="onTitleChange"
      />
    </div>

    <button
      class="btn-floating btn-medium btn-flat todo-item-remove"
      @click="$emit('remove', todo.id)"
    >
      <i class="material-icons grey-text text-lighten-2 waves-effect waves-light">
        delete
      </i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'to-do-item',

  props: {
    todo: {
      type: Object,
    },
  },

  methods: {
    onTitleChange(event) {
      const changed = {
        ...this.todo,
        title: event.target.value,
        updatedAt: new Date(),
      };

      this.$emit('change', changed);
    },

    onCheckClick() {
      const changed = {
        ...this.todo,
        isDone: !this.todo.isDone,
        updatedAt: new Date(),
      };

      this.$emit('change', changed);
    },
  },
};
</script>

<style lang="scss" scoped>
.todo-item {
  width: 100%;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
  padding: 12px 60px;

  .todo-item-check, .todo-item-remove {
    top: 14px;
    position: absolute;

    &:hover, &:focus {
      background-color: transparent;
    }

    i {
      font-size: 2.7rem;
    }
  }

  .todo-item-check {
    left: 12px;

    .todo-item-is-done {
      color: #66bb6a !important;

      &:active {
        color: #388e3c !important;
      }
    }
  }

  .todo-item-remove {
    right: 12px;

    i {
      &:hover {
        color: #ef5350 !important;
      }

      &:active {
        color: #d32f2f !important;
      }
    }
  }

  .todo-item-title {
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

      &.todo-item-is-done {
        text-decoration: line-through;
        color: #d3d3d3;
      }
    }
  }
}
</style>
