import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

import { todoStore } from './todo'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

export default new Vuex.Store({
    modules: {
      todoModule: todoStore
    }
})