import Vue from 'vue'
import Vuex from 'vuex'
import { TimelineLite } from "gsap";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPhishing: false,
    overlay:{
      currentOverlay:null,
      infoTooltip: null,
      isOverlay : false,
    },
    
    currentPhishing: 1
  },
  getters:{
    overlay: state =>{
      return state.overlay.isOverlay;
    }
  },
  mutations: {
    TOGGLE_OVERLAY(state){
       state.overlay.isOverlay = !state.overlay.isOverlay;
    },
    SET_OVERLAY(state,overlay){
      state.overlay.currentOverlay = overlay.overlay;
      state.overlay.infoTooltip = overlay.tooltipInfo;
    }

  },
  actions: {

    showOverlay({commit,state},payload){
      commit('TOGGLE_OVERLAY');
      commit('SET_OVERLAY',payload);
      const timeline = new TimelineLite();
      timeline
        .to(event.target.nextSibling, 0.5, { opacity: 1, display: "block" })
        .to(".spot", 0.8, { visibility: "hidden", opacity:0 }, "-= 0.5")
        .to(state.overlay.currentOverlay, 0.5, { opacity: 1, display: "block" }, "-= .3");
    },
    hideOverlay({state,getters,commit}){
      if(getters.overlay){
        commit('TOGGLE_OVERLAY');
        const timeline = new TimelineLite();
        timeline
          .to(state.overlay.infoTooltip, 0.5, { opacity: 0, display: "none" })
          .to(".spot", 0.5, { visibility: "visible",opacity:1  },"-=0.5")
          .to(state.overlay.currentOverlay, 0.5, { opacity: 0, display: "none" },"-=0.5");
      }
      
    }

  },
  modules: {
  }
})
