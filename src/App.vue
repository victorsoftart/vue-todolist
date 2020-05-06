<template>
  <div>
    isloading: {{loading}}
    <div v-show="loading">loading...</div>
    <CreateTodo v-bind:alltodos="todos" />
    <todo-list></todo-list>
    <!-- <CreateTodo v-on:add-todo="addTodo" /> -->
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo.vue";

export default {
  name: "app",
  components: {
    TodoList,
    CreateTodo
  },
  data() {
    return {
      
    };
  },
  mounted(){
    console.log('component mounted>>>')
    this.getTodos();
  },
  methods:{
    getTodos() {
      this.$store.dispatch('getTodos');
    },
  },
  computed: {
    todos() {
      return this.$store.getters.todos
    },
    loading() {
      console.log("computed loading>>>", this.$store.getters.loading)
      return this.$store.getters.loading
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
