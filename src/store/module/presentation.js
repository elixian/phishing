import { TimelineLite } from "gsap";

const state = ()=>({
    overlay:{
        currentOverlay:null,
        infoTooltip: null,
        isOverlay : false,
      }
})

const getters = {
    overlay: state =>{
        return state.overlay.isOverlay;
      }
}
const mutations = {
    TOGGLE_OVERLAY(state){
        state.overlay.isOverlay = !state.overlay.isOverlay;
     },
     SET_OVERLAY(state,overlay){
       state.overlay.currentOverlay = overlay.overlay;
       state.overlay.infoTooltip = overlay.tooltipInfo;
     }
}

const actions = {
    showOverlay({commit,state},payload){
        commit('TOGGLE_OVERLAY');
        commit('SET_OVERLAY',payload);
        const timeline = new TimelineLite();
        timeline
          .to(event.target.nextSibling, 0.5, { opacity: 1, display: "block" })
          .to(".spot", 0.8, { visibility: "hidden", opacity:0 }, "-= 0.5")
          .to(state.overlay.currentOverlay, 0.5, { opacity: 1, display: "block" }, "-= .3");
      },
      hideOverlay({commit,state}){
        
        if(getters.overlay){
          commit('TOGGLE_OVERLAY');
          const timeline = new TimelineLite();
          timeline
            .to(state.overlay.infoTooltip, 0.5, { opacity: 0, display: "none" })
            .to(".spot", 0.5, { visibility: "visible",opacity:1  },"-=0.5")
            .to(state.overlay.currentOverlay, 0.5, { opacity: 0, display: "none" },"-=0.5");
        }
        
      }
}




export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }