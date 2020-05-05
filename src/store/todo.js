import Vue from 'vue'
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios)

export const todoStore = {
  state: {
    loading: true,
    todos: [
      {
        title: "Todo A",
        project: "Project A",
        done: false
      },
      {
        title: "Todo B",
        project: "Project B",
        done: true
      },
      {
        title: "Todo C",
        project: "Project C",
        done: false
      },
      {
        title: "Todo D",
        project: "Project D",
        done: false
      }
    ],
  },
  mutations: {
    GET_TODOS(state){
      console.log('GET_TODOS>>>')
      state.loading = true
      Vue.axios.get('todos').then(result => {
        console.log(result)
        state.loading = false
        let res = result.data
        if(res.success == true)
          state.todos =  res.data
      }).catch(error => {
        throw new Error(`API Response ${error}`);
      });
    },
    ADD_TODO(state, todo){
      state.todos.push(todo)
    },
    UPDATE_TODO(state, todo){
      console.log(state.todos)
      console.log(todo)
    },
    DELETE_TODO(state, todo){
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo){
      console.log('COMPLETE_TODO>>>', todo)
      todo.done = !todo.done
    }
  },
  actions: {
    getTodos({commit}) {
      commit('GET_TODOS')
    },
    addTodo({commit}, todo){console.log(todo)
      this.state.loading = true
      Vue.axios.post('todos/add', todo).then(result => {
        console.log(result)
        this.state.loading = false
        let res = result.data
        if(res.success == true)
          commit('ADD_TODO', res.data)
      }).catch(error => {
        throw new Error(`API Response ${error}`);
      });
    },
    updateTodo({commit}, todo){
      console.log(todo)
      const updated_todo = {
        id: todo._id,
        title: todo.title,
        project: todo.project,
        done: todo.done
      }
      console.log(updated_todo)
      this.state.loading = true
      Vue.axios.post('todos/update', updated_todo).then(result => {
        console.log(result)
        this.state.loading = false
        let res = result.data
        if(res.success == true)
          commit('UPDATE_TODO', todo)
      }).catch(error => {
        throw new Error(`API Response ${error}`);
      });
    },
    deleteTodo({commit}, todo){
      this.state.loading = true
      Vue.axios.delete('todos/delete/'+todo._id).then(result => {
        console.log(result)
        this.state.loading = false
        let res = result.data
        if(res.success == true)
          commit('DELETE_TODO', todo)
      }).catch(error => {
        throw new Error(`API Response ${error}`);
      });
    },
    completeTodo({commit}, todo){
      this.state.loading = true
      Vue.axios.put('todos/complete/'+todo._id,'', {headers: {}}).then(result => {
        console.log(result)
        this.state.loading = false
        let res = result.data
        if(res.success == true)
          commit('COMPLETE_TODO', todo)
      }).catch(error => {
        throw new Error(`API Response ${error}`);
      });
    },

  },
  getters: {
    todos: state => state.todos,
    loading: state => {console.log('getters loading');return state.loading},
  }

}