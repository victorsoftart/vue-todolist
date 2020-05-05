<template>
  <div>
    <TodoItem
      v-for="(todo,index) in todos" 
      v-bind:todo="todo" 
      v-bind:key="index"
    />
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    }
  }
};
</script>


