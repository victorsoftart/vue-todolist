import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import VueAxios from "vue-axios";

import { todoStore } from './todo'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

Vue.axios.defaults.baseURL = "http://192.168.0.42:3000/";

export default new Vuex.Store({
    modules: {
      todoModule: todoStore
    }
})