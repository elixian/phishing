import Vue from 'vue'
import Vuex from 'vuex'
import presentation from './module/presentation';
import stepper from './module/stepper';
import game from './module/game.js';

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    game,
    presentation,
    stepper,
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
