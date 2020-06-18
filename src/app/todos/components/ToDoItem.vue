<template>
  <div class="todo-item">
    <div class="todo-item-check">
      <i
        class="h-icon-complete gray2-color text-hover"
        :class="{ 'todo-item-is-done': todo.is_done }"
        @click="onCheckClick"
      />
    </div>

    <div class="todo-item-title">
      <input
        type="text"
        :class="{ 'todo-item-is-done': todo.is_done }"
        :value="todo.title"
        @input="onTitleChange"
      />
    </div>

    <div class="todo-item-remove">
      <i
        class="h-icon-trash gray2-color text-hover"
        @click="$emit('remove', todo.id)"
      />
    </div>
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
        updated_at: new Date(),
      };

      this.$emit('change', changed);
    },

    onCheckClick() {
      const changed = {
        ...this.todo,
        is_done: !this.todo.is_done,
        updated_at: new Date(),
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
  border-radius: 4px;
  position: relative;
  padding: 12px 60px;

  .todo-item-check, .todo-item-remove {
    width: 22px;
    position: absolute;
  }

  .todo-item-check {
    left: 24px;
    top: 12px;
    font-size: 22px;

    .todo-item-is-done {
      color: #45b984 !important;

      &:active {
        color: #30815c !important;
      }
    }
  }

  .todo-item-remove {
    right: 12px;
    top: 14px;
    font-size: 18px;

    .text-hover {
      &:hover {
        color: #E53935 !important;
      }

      &:active {
        color: #B71C1C !important;
      }
    }
  }

  .todo-item-title {
    width: 100;

    input {
      width: 100%;
      font-size: 24px;
      border: none;

      &.todo-item-is-done {
        text-decoration: line-through;
        color: #d3d3d3;
      }
    }
  }
}
</style>
