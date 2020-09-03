import Vue from 'vue'
import Vuex from 'vuex'
import presentation from './module/presentation';
import stepper from './module/stepper';
Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    presentation,
    stepper
  },
  state:{

  },
  getters:{

  },
  mutations:{

  },
  actions:{
    
  }

})
