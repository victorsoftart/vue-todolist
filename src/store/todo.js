export const todoStore = {
  state: {
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
        let todos =  [
          {
          title: "Todo A1",
          project: "Project A1",
          done: false
          },
          {
          title: "Todo B1",
          project: "Project B1",
          done: true
          },
          {
          title: "Todo C1",
          project: "Project C1",
          done: false
          },
          {
          title: "Todo D1",
          project: "Project D1",
          done: false
          }
        ]
        state.todos =  todos
    },
    ADD_TODO(state, todo){
        state.todos.push(todo)
    },
    DELETE_TODO(state, todo){
        var todos = state.todos
        todos.splice(todos.indexOf(todo), 1)
    },
    COMPLETE_TODO(state, todo){
        todo.done = !todo.done
    }
  },
  actions: {
    getTodos({commit}) {
      commit('GET_TODOS')
    },
    addTodo({commit}, todo){
      commit('ADD_TODO', todo)
    },
    deleteTodo({commit}, todo){
      commit('DELETE_TODO', todo)
    },
    completeTodo({commit}, todo){
      commit('COMPLETE_TODO', todo)
    },

  },
  getters: {
    todos: state => state.todos,
  }

}